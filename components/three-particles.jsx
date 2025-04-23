"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeParticles() {
  const containerRef = useRef(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const scrollY = useRef(0)
  const animationRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesCount = window.innerWidth < 768 ? 1500 : 3000
    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)
    const sizes = new Float32Array(particlesCount)
    const initialPositions = new Float32Array(particlesCount * 3) // Store initial positions

    const colorOptions = [
      new THREE.Color(0x60a5fa), // blue-400
      new THREE.Color(0x2563eb), // blue-600
      new THREE.Color(0xc084fc), // purple-400
      new THREE.Color(0x9333ea), // purple-600
    ]

    for (let i = 0; i < particlesCount; i++) {
      // Position
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Store initial positions
      initialPositions[i * 3] = x
      initialPositions[i * 3 + 1] = y
      initialPositions[i * 3 + 2] = z

      // Color
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      // Size
      sizes[i] = Math.random() * 0.2 + 0.05
    }

    // Create geometry
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("initialPosition", new THREE.BufferAttribute(initialPositions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))

    // Create shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mousePosition: { value: new THREE.Vector2(0, 0) },
        scrollY: { value: 0 },
        mouseActive: { value: 0.0 }, // Track if mouse is active
      },
      vertexShader: `
        attribute vec3 color;
        attribute float size;
        attribute vec3 initialPosition;
        varying vec3 vColor;
        uniform float time;
        uniform vec2 mousePosition;
        uniform float scrollY;
        uniform float mouseActive;
        
        void main() {
          vColor = color;
          
          // Basic position - start from initial position
          vec3 pos = initialPosition;
          
          // Add subtle wave motion
          float waveX = sin(pos.y * 0.5 + time * 0.2) * 0.1;
          float waveY = cos(pos.x * 0.5 + time * 0.3) * 0.1;
          pos.x += waveX;
          pos.y += waveY;
          
          // Mouse influence - stronger effect
          float distX = mousePosition.x - pos.x;
          float distY = mousePosition.y - pos.y;
          float mouseDistance = sqrt(distX * distX + distY * distY);
          
          // Stronger mouse influence with smoother falloff
          float mouseInfluence = smoothstep(2.0, 0.0, mouseDistance) * mouseActive;
          
          // Create a ripple effect around mouse
          float ripple = sin(mouseDistance * 5.0 - time * 2.0) * 0.03;
          
          // Apply mouse influence - particles move toward mouse position
          vec3 mouseEffect = vec3(0.0);
          if (mouseDistance < 2.0) {
            // Direction toward mouse
            vec3 mouseDir = normalize(vec3(distX, distY, 0.0));
            
            // Particles closer to mouse move more
            float strength = (1.0 - mouseDistance / 2.0) * 0.3;
            
            // Combine direct pull and ripple effect
            mouseEffect = mouseDir * strength * mouseInfluence + vec3(0.0, 0.0, ripple);
          }
          
          // Apply mouse effect
          pos += mouseEffect;
          
          // Scroll effect - particles move up slightly as user scrolls
          pos.y -= scrollY * 0.001;
          
          // Project to screen
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // Size attenuation with mouse proximity effect
          float sizeBoost = 1.0 + mouseInfluence * 0.5; // Particles get bigger near mouse
          gl_PointSize = size * sizeBoost * (300.0 / -mvPosition.z);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          // Create a circular point
          float r = distance(gl_PointCoord, vec2(0.5, 0.5));
          if (r > 0.5) discard;
          
          // Soft glow effect
          float strength = 1.0 - (r / 0.5);
          strength = pow(strength, 2.0);
          
          gl_FragColor = vec4(vColor, strength);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    // Create points
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Mouse move handler with proper coordinate conversion
    const handleMouseMove = (event) => {
      // Get normalized device coordinates (-1 to +1) for mouse
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1

      // Convert to world coordinates
      const vector = new THREE.Vector3(x, y, 0.5)
      vector.unproject(camera)
      const dir = vector.sub(camera.position).normalize()
      const distance = -camera.position.z / dir.z
      const pos = camera.position.clone().add(dir.multiplyScalar(distance))

      mousePosition.current = { x: pos.x, y: pos.y }

      // Set mouse as active
      material.uniforms.mouseActive.value = 1.0

      // Reset mouse active state after some inactivity
      clearTimeout(window.mouseTimeout)
      window.mouseTimeout = setTimeout(() => {
        material.uniforms.mouseActive.value = 0.0
      }, 2000)
    }

    // Initial mouse position in the center
    const centerX = (window.innerWidth / 2 / window.innerWidth) * 2 - 1
    const centerY = -(window.innerHeight / 2 / window.innerHeight) * 2 + 1
    const vector = new THREE.Vector3(centerX, centerY, 0.5)
    vector.unproject(camera)
    const dir = vector.sub(camera.position).normalize()
    const distance = -camera.position.z / dir.z
    const pos = camera.position.clone().add(dir.multiplyScalar(distance))
    mousePosition.current = { x: pos.x, y: pos.y }

    // Scroll handler
    const handleScroll = () => {
      scrollY.current = window.scrollY
    }

    // Window resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    // Animation loop
    const animate = () => {
      material.uniforms.time.value += 0.01
      material.uniforms.mousePosition.value = new THREE.Vector2(mousePosition.current.x, mousePosition.current.y)
      material.uniforms.scrollY.value = scrollY.current

      // Rotate particles slightly for more dynamic effect
      particles.rotation.y += 0.001
      particles.rotation.x += 0.0005

      renderer.render(scene, camera)
      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    // Touch support for mobile
    window.addEventListener("touchmove", (event) => {
      if (event.touches.length > 0) {
        handleMouseMove({
          clientX: event.touches[0].clientX,
          clientY: event.touches[0].clientY,
        })
      }
    })

    // Cleanup
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }

      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("touchmove", handleMouseMove)

      clearTimeout(window.mouseTimeout)
      cancelAnimationFrame(animationRef.current)

      geometry.dispose()
      material.dispose()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden" />
}

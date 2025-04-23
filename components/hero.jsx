import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import ThreeParticles from "./three-particles"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/crypto-network-glow.png"
          alt="Blockchain Network Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Three.js Particles Effect */}
      <ThreeParticles />

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="flex justify-center mb-8">
          <div className="logo-container relative">
            <h1
              className="company-name text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider font-sans uppercase"
              style={{ fontFamily: "var(--font-space-grotesk), monospace" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
                Liquidated
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">Labs</span>
              </span>
            </h1>
            <div className="logo-glow absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-400/30 rounded-full -z-10"></div>
          </div>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Securing the Future of Blockchain
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
          Smart contract audits, DeFi security, and Web3 infrastructure for blockchain projects, startups, and
          enterprises.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:opacity-90 transition-all transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            href="#services"
            className="px-8 py-3 bg-transparent border border-gray-700 rounded-full text-white font-medium hover:border-blue-500 transition-all"
          >
            Our Services
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link href="#about" className="text-gray-400 hover:text-white">
          <ChevronDown size={32} />
        </Link>
      </div>
    </section>
  )
}

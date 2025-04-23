import Image from "next/image"
import { Shield, Globe, Lock, Rocket } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/glowing-blockchain-network.png"
                alt="Blockchain Visualization"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-6 -left-6 h-32 w-32 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
          </div>

          <div className="md:w-1/2">
            <div className="inline-block px-4 py-1 bg-blue-900/30 rounded-full text-blue-400 font-medium mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Blockchain Security Experts</h2>
            <p className="text-gray-300 mb-6 text-lg">
              LiquidatedLabs is a blockchain-focused development and consulting firm specializing in smart contract
              audits, decentralized finance (DeFi) security, and Web3 infrastructure.
            </p>
            <p className="text-gray-300 mb-8 text-lg">
              We provide services to blockchain projects, startups, and enterprises to ensure security, efficiency, and
              scalability in the decentralized ecosystem.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <Shield size={20} />
                </div>
                <span className="text-gray-300">Experienced Team</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <Globe size={20} />
                </div>
                <span className="text-gray-300">Industry Recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <Lock size={20} />
                </div>
                <span className="text-gray-300">Transparent Process</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <Rocket size={20} />
                </div>
                <span className="text-gray-300">Cutting-Edge Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

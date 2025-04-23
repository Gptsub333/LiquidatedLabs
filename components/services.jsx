import Link from "next/link"
import { ChevronDown, Shield, FileText, Code, AlertTriangle, Database, GitBranch } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-purple-900/30 rounded-full text-purple-400 font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Blockchain Security</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We offer end-to-end security and development services designed to protect and optimize your blockchain
            projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-600 transition-all group">
            <div className="h-14 w-14 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Smart Contract Audits</h3>
            <p className="text-gray-400 mb-6">
              Comprehensive security reviews of smart contracts to identify vulnerabilities in DeFi protocols, NFTs,
              DAOs, and other blockchain applications.
            </p>
            <Link href="#contact" className="text-blue-400 flex items-center gap-2 group-hover:text-blue-300">
              Learn more <ChevronDown className="transform rotate-270" size={16} />
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-600 transition-all group">
            <div className="h-14 w-14 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <AlertTriangle size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">DeFi Security & Penetration Testing</h3>
            <p className="text-gray-400 mb-6">
              Stress-testing DeFi protocols for economic exploits and attack vectors, including simulation of flash loan
              attacks, governance exploits, and liquidity manipulations.
            </p>
            <Link href="#contact" className="text-blue-400 flex items-center gap-2 group-hover:text-blue-300">
              Learn more <ChevronDown className="transform rotate-270" size={16} />
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-600 transition-all group">
            <div className="h-14 w-14 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Code size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Blockchain Development & Consulting</h3>
            <p className="text-gray-400 mb-6">
              Custom smart contract development (Solidity, Rust, Vyper) and assistance in tokenomics design, governance
              models, and protocol architecture.
            </p>
            <Link href="#contact" className="text-blue-400 flex items-center gap-2 group-hover:text-blue-300">
              Learn more <ChevronDown className="transform rotate-270" size={16} />
            </Link>
          </div>

          {/* Service 4 */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-600 transition-all group">
            <div className="h-14 w-14 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <FileText size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Incident Response & Post-Hack Analysis</h3>
            <p className="text-gray-400 mb-6">
              Forensic analysis of exploited contracts to identify root causes, with recovery strategies and security
              upgrades post-exploit.
            </p>
            <Link href="#contact" className="text-blue-400 flex items-center gap-2 group-hover:text-blue-300">
              Learn more <ChevronDown className="transform rotate-270" size={16} />
            </Link>
          </div>

          {/* Service 5 */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-600 transition-all group">
            <div className="h-14 w-14 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Database size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Web3 & Infrastructure Solutions</h3>
            <p className="text-gray-400 mb-6">
              Node infrastructure setup (Ethereum, Polygon, Solana, etc.) and cross-chain interoperability solutions for
              your blockchain projects.
            </p>
            <Link href="#contact" className="text-blue-400 flex items-center gap-2 group-hover:text-blue-300">
              Learn more <ChevronDown className="transform rotate-270" size={16} />
            </Link>
          </div>

          {/* Service 6 */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-600 transition-all group">
            <div className="h-14 w-14 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <GitBranch size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Gas Optimization & Protocol Efficiency</h3>
            <p className="text-gray-400 mb-6">
              Improving smart contract efficiency to reduce gas costs and enhance protocol performance for better user
              experience and lower operational costs.
            </p>
            <Link href="#contact" className="text-blue-400 flex items-center gap-2 group-hover:text-blue-300">
              Learn more <ChevronDown className="transform rotate-270" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-900/30 rounded-full text-blue-400 font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted by Leading Projects</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Hear from the blockchain projects we've helped secure and optimize in the competitive DeFi and NFT
            landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl relative">
            <div className="absolute -top-4 -left-4 h-20 w-20 bg-blue-600 rounded-full opacity-10 blur-xl"></div>
            <div className="mb-6">
              <div className="flex gap-1 text-yellow-500 mb-4">{"★".repeat(5)}</div>
              <p className="text-gray-300 italic">
                "LiquidatedLabs identified critical vulnerabilities in our DeFi protocol that could have led to millions
                in losses. Their thorough audit and clear recommendations were invaluable."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <Image src="/crypto-leader.png" alt="Client" width={48} height={48} className="object-cover" />
              </div>
              <div>
                <h4 className="font-medium">Alex Thompson</h4>
                <p className="text-sm text-gray-400">CTO, DeFiProtocol</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl relative">
            <div className="absolute -top-4 -right-4 h-20 w-20 bg-purple-600 rounded-full opacity-10 blur-xl"></div>
            <div className="mb-6">
              <div className="flex gap-1 text-yellow-500 mb-4">{"★".repeat(5)}</div>
              <p className="text-gray-300 italic">
                "After experiencing a hack, LiquidatedLabs provided exceptional incident response. They identified the
                exploit, helped recover funds, and implemented robust security measures."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <Image src="/confident-tech-leader.png" alt="Client" width={48} height={48} className="object-cover" />
              </div>
              <div>
                <h4 className="font-medium">Sarah Chen</h4>
                <p className="text-sm text-gray-400">Founder, NFTMarketplace</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl relative">
            <div className="absolute -bottom-4 -right-4 h-20 w-20 bg-blue-600 rounded-full opacity-10 blur-xl"></div>
            <div className="mb-6">
              <div className="flex gap-1 text-yellow-500 mb-4">{"★".repeat(5)}</div>
              <p className="text-gray-300 italic">
                "The team at LiquidatedLabs helped us design and implement a secure cross-chain bridge solution. Their
                expertise in Web3 infrastructure is unmatched in the industry."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <Image src="/blockchain-developer-headshot.png" alt="Client" width={48} height={48} className="object-cover" />
              </div>
              <div>
                <h4 className="font-medium">Michael Rodriguez</h4>
                <p className="text-sm text-gray-400">CEO, BridgeProtocol</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

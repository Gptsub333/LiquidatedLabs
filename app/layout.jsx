import "./globals.css"
import Script from "next/script"
import { Space_Grotesk } from "next/font/google"

// Define the font with fallbacks
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

export const metadata = {
  title: "LiquidatedLabs - Blockchain Security Experts",
  description:
    "Smart contract audits, DeFi security, and Web3 infrastructure for blockchain projects, startups, and enterprises.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="beforeInteractive" />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}

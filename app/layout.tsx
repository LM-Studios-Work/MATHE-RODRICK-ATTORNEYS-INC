import type { Metadata } from "next"
import { Geist, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mathe Rodrick Attorneys Inc | Customised Legal Services",
  description:
    "Mathe Rodrick Attorneys Inc delivers customised legal services driven by pure respect for human dignity and centred around ethical legal practices.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${geist.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

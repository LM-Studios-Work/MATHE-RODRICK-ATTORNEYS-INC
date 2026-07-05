import type { Metadata } from "next"
import { Montserrat, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mathe Rodrick Attorneys Inc | Johannesburg Law Firm & Legal Counsel in Gauteng",
  description:
    "Based in Johannesburg, Mathe Rodrick Attorneys Inc provides customised legal services across Gauteng. We offer ethical, dignified representation in civil litigation, commercial law, family law, and more.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${montserrat.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

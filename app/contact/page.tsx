import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactSection } from "@/components/contact-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Mathe Rodrick Attorneys Inc",
  description: "Get in touch with Mathe Rodrick Attorneys Inc. Schedule a consultation or reach out to our team in Johannesburg.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

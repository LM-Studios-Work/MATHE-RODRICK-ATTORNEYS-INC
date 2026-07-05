import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TeamSection } from "@/components/team-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team | Mathe Rodrick Attorneys Inc",
  description: "Meet the experienced legal team at Mathe Rodrick Attorneys Inc, dedicated to principled counsel and ethical legal practices.",
}

export default function OurTeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <TeamSection />
      </main>
      <SiteFooter />
    </div>
  )
}

import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight, Scale, Shield, Briefcase } from "lucide-react"
import { OtherServices } from "@/components/other-services"

export const metadata: Metadata = {
  title: "Property Law & Eviction Attorneys Johannesburg | Mathe Rodrick Inc",
  description:
    "Comprehensive property law representation across Johannesburg and Gauteng. We resolve eviction disputes, lease conflicts, and real estate transactions with strategic legal counsel.",
}

const keyFocusAreas = [
  {
    title: "Evictions & Rental Disputes",
    description: "Lawful eviction applications under the PIE Act, commercial lease cancellations, and recovery of rental arrears in Magistrate and High Courts."
  },
  {
    title: "Contractual Property Transactions",
    description: "Drafting, reviewing, and structuring residential and commercial property agreements of sale, lease deeds, and property development compliance."
  },
  {
    title: "Sectional Title & Scheme Disputes",
    description: "Resolving conflicts involving bodies corporate, homeowners' associations, management rules, and levy collection proceedings."
  },
  {
    title: "Boundary & Servitude Claims",
    description: "Strategic legal representation for property line encroachments, easement disagreements, and municipal land use rights across Gauteng."
  }
]

const ourApproach = [
  {
    icon: Shield,
    title: "Asset Protection",
    description: "We treat every property transaction and dispute with meticulous care, recognizing that real estate often represents your most substantial financial asset and investment."
  },
  {
    icon: Scale,
    title: "Balanced Dispute Resolution",
    description: "Whether navigating an eviction or a sectional title dispute, we prioritize efficient out-of-court solutions while remaining fully prepared for decisive courtroom advocacy."
  },
  {
    icon: Briefcase,
    title: "Commercial & Residential Insight",
    description: "Our legal strategy is customized to the specific realities of Gauteng's dynamic property market, ensuring full statutory compliance and cost-effective outcomes."
  }
]

export default function PropertyLawPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative flex min-h-[500px] md:min-h-[540px] items-center border-b border-foreground overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/Property%20law%20hero.jpeg')" }}
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 grid w-full gap-12 px-5 py-24 lg:grid-cols-12 md:px-8 md:py-32">
            <div className="lg:col-span-4">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Practice Area
              </p>
              <h1 className="text-4xl font-normal uppercase leading-tight tracking-normal text-foreground md:text-5xl lg:text-6xl">
                Property Law
              </h1>
            </div>
            <div className="flex items-end lg:col-span-8">
              <p className="border-l border-foreground/20 pl-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                Comprehensive legal counsel for residential and commercial property transactions, lease structuring, sectional title disputes, and lawful evictions across Johannesburg and Gauteng.
              </p>
            </div>
          </div>
        </section>

        {/* About This Practice Area */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-12 px-5 py-20 lg:grid-cols-12 md:px-8 md:py-28">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Context</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                About This Practice Area
              </h2>
            </div>
            <div className="space-y-6 text-base font-normal leading-relaxed text-muted-foreground lg:col-span-8 md:text-lg">
              <p>
                Property law in South Africa is a multifaceted legal domain that governs the rights, interests, and obligations associated with immovable property. Whether involving residential estates, commercial developments, sectional title schemes, or agricultural land, real estate transactions and disputes require meticulous adherence to statutory frameworks such as the Prevention of Illegal Eviction from and Unlawful Occupation of Land Act (PIE), the Sectional Titles Act, and the Alienation of Land Act.
              </p>
              <p>
                At Mathe Rodrick Attorneys Inc in Johannesburg, we recognise that property represents one of the most substantial financial investments for individuals, businesses, and investors across Gauteng. Unresolved lease conflicts, boundary encroachments, or unlawful occupation can severely disrupt commercial operations and personal livelihoods, demanding decisive, well-structured legal intervention.
              </p>
              <p>
                Our legal team provides strategic counsel across the full spectrum of real estate matters. From drafting and negotiating watertight commercial and residential leases to handling lawful eviction applications in the Magistrate Courts and High Courts, we protect your property rights with efficiency, precision, and a steadfast respect for human dignity.
              </p>
            </div>
          </div>
        </section>

        {/* Key Areas of Focus */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-12 px-5 py-20 lg:grid-cols-12 md:px-8 md:py-28">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Expertise</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                Matters We Handle
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-0 border border-foreground sm:grid-cols-2">
                {keyFocusAreas.map((area, index) => {
                  const isLastItem = index === keyFocusAreas.length - 1
                  const isInLastDesktopRow = index >= keyFocusAreas.length - (keyFocusAreas.length % 2 === 0 ? 2 : 1)
                  const isLeftColumn = index % 2 === 0

                  return (
                    <div 
                      key={index} 
                      className={[
                        "flex flex-col justify-center p-8 transition-colors duration-200 hover:bg-white/[0.04]",
                        !isLastItem ? "border-b border-foreground" : "",
                        isInLastDesktopRow ? "sm:border-b-0" : "",
                        isLeftColumn ? "sm:border-r sm:border-r-foreground" : "",
                      ].filter(Boolean).join(" ")}
                    >
                      <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
                        {area.title}
                      </h3>
                      <p className="mt-4 text-sm font-normal leading-relaxed text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-12 px-5 py-20 lg:grid-cols-12 md:px-8 md:py-28">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Philosophy</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                How We Approach Property Law
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-12 sm:grid-cols-3">
                {ourApproach.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="mb-6 flex items-center">
                      <item.icon className="h-7 w-7 text-foreground" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm font-normal leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-foreground">
          <div className="flex w-full flex-col items-start gap-8 px-5 py-20 lg:flex-row lg:items-center lg:justify-between md:px-8 md:py-28">
            <div className="max-w-2xl flex-1 min-w-0">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Consultation</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                Ready to resolve your property matter?
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-foreground px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-background transition-all hover:bg-foreground/80 whitespace-nowrap shrink-0"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 shrink-0" aria-hidden="true" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>

        <OtherServices currentServiceSlug="property-law" />

      </main>
      <SiteFooter />
    </div>
  )
}



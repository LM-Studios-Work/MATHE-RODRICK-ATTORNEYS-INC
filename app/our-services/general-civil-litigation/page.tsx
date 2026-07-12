import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight, Scale, Shield, Briefcase } from "lucide-react"
import { OtherServices } from "@/components/other-services"

export const metadata: Metadata = {
  title: "General Civil Litigation | Mathe Rodrick Attorneys Inc",
  description:
    "General civil litigation representation across Johannesburg and Gauteng. We resolve disputes in Magistrate Courts and High Courts with strategic legal counsel.",
}

const keyFocusAreas = [
  {
    title: "Contractual Disputes",
    description: "Enforcement of agreements, breach of contract claims, and commercial disputes between entities."
  },
  {
    title: "Delictual Claims",
    description: "Claims for damages arising from wrongful acts, negligence, and personal injury."
  },
  {
    title: "Property & Evictions",
    description: "Resolving property-related conflicts, commercial evictions, and boundary disputes."
  },
  {
    title: "Debt Recovery",
    description: "Strategic debt collection and recovery for businesses and individuals, including liquidations."
  }
]

const ourApproach = [
  {
    icon: Shield,
    title: "Strategic Representation",
    description: "We do not adopt a one-size-fits-all approach. We analyze the merits, risks, and costs before any proceedings are initiated to ensure the best possible outcome."
  },
  {
    icon: Scale,
    title: "Courtroom Excellence",
    description: "Our attorneys are highly experienced across all forums, from the Magistrate Courts through to the High Courts and Supreme Court of Appeal."
  },
  {
    icon: Briefcase,
    title: "Commercial Reality",
    description: "We tailor our litigation strategy to align with your objectives and the commercial realities of your situation, always seeking cost-effective resolutions."
  }
]

export default function GeneralCivilLitigationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative border-b border-foreground overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/Litigation%20hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 grid w-full gap-12 px-5 py-24 md:grid-cols-12 md:px-8 md:py-32">
            <div className="md:col-span-4">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Legal Service
              </p>
              <h1 className="text-4xl font-normal uppercase leading-tight tracking-normal text-foreground md:text-5xl lg:text-6xl">
                General Civil Litigation
              </h1>
            </div>
            <div className="flex items-end md:col-span-8">
              <p className="border-l border-foreground/20 pl-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                Civil litigation as it pertains to individuals, corporations, and government entities across the South African court system, from Magistrate Courts to the High Courts.
              </p>
            </div>
          </div>
        </section>

        {/* About This Service */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
            <div className="md:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Context</p>
              <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                About This Service
              </h2>
            </div>
            <div className="space-y-6 text-base font-normal leading-relaxed text-muted-foreground md:col-span-8 md:text-lg">
              <p>
                General civil litigation encompasses a wide array of legal disputes between individuals, corporations, or government entities. In South Africa, these matters are adjudicated across various forums, from the local Magistrate Courts to the High Courts.
              </p>
              <p>
                We understand that finding yourself in a civil dispute can be incredibly stressful and highly disruptive to your personal life or business operations. From our offices in Johannesburg, we provide strategic legal counsel to clients across Gauteng to navigate these complexities.
              </p>
              <p>
                We approach every single case with a steadfast commitment to resolving conflicts efficiently, protecting your legal rights, and preserving your dignity throughout the entire legal process.
              </p>
            </div>
          </div>
        </section>

        {/* Key Areas of Focus */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
            <div className="md:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Expertise</p>
              <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                Matters We Handle
              </h2>
            </div>
            <div className="md:col-span-8">
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
          <div className="grid w-full gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
            <div className="md:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Philosophy</p>
              <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                How We Approach Litigation
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid gap-12 sm:grid-cols-3">
                {ourApproach.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center border border-foreground/30">
                      <item.icon className="h-5 w-5 text-foreground/70" strokeWidth={1.5} />
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
          <div className="flex w-full flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8 md:py-28">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Consultation</p>
              <h2 className="mt-4 text-3xl font-normal uppercase leading-tight tracking-normal md:text-4xl">
                Ready to resolve your dispute?
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-background transition-all hover:bg-foreground/80"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>

        <OtherServices currentServiceSlug="general-civil-litigation" />

      </main>
      <SiteFooter />
    </div>
  )
}

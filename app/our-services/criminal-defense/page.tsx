import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight, Scale, Shield, Briefcase } from "lucide-react"
import { OtherServices } from "@/components/other-services"

export const metadata: Metadata = {
  title: "Criminal Defense Attorneys Johannesburg | Bail & Trial | Mathe Rodrick Inc",
  description:
    "Experienced criminal defense representation across Johannesburg and Gauteng. We provide urgent bail assistance, NPA representations, and courtroom defense in Magistrate and High Courts.",
}

const keyFocusAreas = [
  {
    title: "Urgent Bail Applications",
    description: "Immediate 24-hour legal intervention for after-hours police station bail, prosecutor bail, and formal court bail hearings across Gauteng."
  },
  {
    title: "Commercial & Financial Crimes",
    description: "Strategic defense against allegations of fraud, statutory non-compliance, embezzlement, corruption, and white-collar regulatory inquiries."
  },
  {
    title: "General Criminal Litigation",
    description: "Formidable courtroom representation across Magistrate Courts and High Courts for offenses ranging from assault and theft to driving violations."
  },
  {
    title: "NPA Representations",
    description: "Drafting comprehensive written submissions to the National Prosecuting Authority to seek charge withdrawals or alternative dispute resolutions."
  }
]

const ourApproach = [
  {
    icon: Shield,
    title: "Immediate Constitutional Protection",
    description: "From the moment of arrest or questioning, we intervene swiftly to shield your constitutional rights, prevent unlawful detention, and protect your dignity."
  },
  {
    icon: Scale,
    title: "Rigorous Evidential Scrutiny",
    description: "We scrutinize every aspect of the State's evidence, challenging procedural irregularities and witness testimony across Magistrate and High Court forums."
  },
  {
    icon: Briefcase,
    title: "Strategic Mitigation & Advocacy",
    description: "We pursue early resolutions through formal representations to prosecutors, seeking charge dismissals or favorable outcomes before trial proceedings escalate."
  }
]

export default function CriminalDefensePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative flex min-h-[500px] md:min-h-[540px] items-center border-b border-foreground overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/Criminal%20Defence%20Hero.webp')" }}
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 grid w-full gap-12 px-5 py-24 lg:grid-cols-12 md:px-8 md:py-32">
            <div className="lg:col-span-4">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Practice Area
              </p>
              <h1 className="text-4xl font-normal uppercase leading-tight tracking-normal text-foreground md:text-5xl lg:text-6xl">
                Criminal Defense
              </h1>
            </div>
            <div className="flex items-end lg:col-span-8">
              <p className="border-l border-foreground/20 pl-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                Resilient criminal defense representation across Johannesburg and Gauteng, providing urgent 24-hour bail intervention and formidable courtroom advocacy in Magistrate and High Courts.
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
                Criminal defense in South Africa demands an intricate understanding of constitutional rights, statutory offenses, and procedural rules under the Criminal Procedure Act. When an individual or corporation is targeted by a police investigation, facing imminent arrest, or formal criminal prosecution, the legal stakes are paramount, directly threatening personal liberty, professional standing, and financial security.
              </p>
              <p>
                Operating from our Johannesburg offices, Mathe Rodrick Attorneys Inc provides resilient, strategic legal representation to clients across Gauteng and beyond. We understand that navigating the criminal justice system can be profoundly intimidating and traumatic, which is why we stand between our clients and the coercive power of the State from the earliest moment of questioning through to final judicial resolution.
              </p>
              <p>
                Our approach to criminal advocacy is rooted in constitutional principles and rigorous evidential scrutiny. Whether securing urgent bail at police stations and courts, defending against complex financial or commercial crime allegations, or conducting formidable courtroom litigation in the Magistrate Courts and High Courts, we ensure that your rights are fiercely protected at every procedural stage.
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
                How We Approach Criminal Defense
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
                Need immediate legal defense?
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

        <OtherServices currentServiceSlug="criminal-defense" />

      </main>
      <SiteFooter />
    </div>
  )
}



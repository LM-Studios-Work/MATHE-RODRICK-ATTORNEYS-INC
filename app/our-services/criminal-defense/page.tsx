import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight, Scale, Shield, Briefcase } from "lucide-react"
import { OtherServices } from "@/components/other-services"
import { ServiceImagePlaceholder } from "@/components/service-image-placeholder"

export const metadata: Metadata = {
  title: "Criminal Defense Attorneys Johannesburg | Bail & Trial | Mathe Rodrick Inc",
  description:
    "Criminal defense attorneys in Johannesburg and Gauteng. Urgent bail applications, NPA representations, and strong courtroom defense in Magistrate and High Courts.",
}

const keyFocusAreas = [
  {
    title: "Urgent Bail Applications",
    description: "If you or someone you know has been arrested, we can step in immediately. We handle bail at police stations, through prosecutors, and in formal court hearings across Gauteng, any time of day."
  },
  {
    title: "Commercial & Financial Crimes",
    description: "We defend clients facing charges of fraud, theft, corruption, embezzlement, and other financial crimes with a careful, detail-driven approach."
  },
  {
    title: "General Criminal Litigation",
    description: "Strong courtroom representation in Magistrate Courts and High Courts for charges ranging from assault and theft to driving offences."
  },
  {
    title: "NPA Representations",
    description: "We prepare detailed written submissions to the National Prosecuting Authority (NPA), making the case for charges to be withdrawn or resolved without going to trial."
  }
]

const ourApproach = [
  {
    icon: Shield,
    title: "Protecting Your Rights from Day One",
    description: "From the moment you are arrested or called in for questioning, we step in to protect your rights, prevent unlawful detention, and make sure you are treated fairly."
  },
  {
    icon: Scale,
    title: "Thorough Evidence Review",
    description: "We go through every piece of the State's evidence with a fine-tooth comb, looking for weaknesses, procedural errors, and inconsistencies in witness testimony."
  },
  {
    icon: Briefcase,
    title: "Early Resolution & Advocacy",
    description: "Where possible, we work to resolve matters before trial by engaging directly with prosecutors to seek charge withdrawals or more favourable outcomes."
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
                Criminal defense across Johannesburg and Gauteng. We are available around the clock for urgent bail applications and provide strong representation in Magistrate and High Courts.
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
                Being investigated, arrested, or charged with a crime is one of the most stressful experiences a person can face. Your freedom, your reputation, and your livelihood are all on the line. The South African criminal justice system is complex, and the consequences of not having proper legal support can be severe.
              </p>
              <p>
                At Mathe Rodrick Attorneys Inc in Johannesburg, we represent clients across Gauteng and beyond. We know how overwhelming the criminal process can be, and that is exactly why we get involved early. From the first moment of police questioning right through to the final outcome, we are there to protect you.
              </p>
              <p>
                Whether we are getting you out on bail, defending you against fraud or commercial crime allegations, or representing you at trial, our focus stays the same: protect your rights at every stage. We prepare thoroughly, challenge the State's case where it is weak, and fight for the best possible outcome.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-page image band */}
        <section className="border-b border-foreground">
          <img
            src="/service%20page%20placeholders/criminal%20law%20placeholder.webp"
            alt="Criminal defense representation"
            className="aspect-square w-full object-cover brightness-95 md:object-top md:aspect-auto md:h-[500px]"
          />
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



import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight, Scale, Shield, Briefcase } from "lucide-react"
import { OtherServices } from "@/components/other-services"
import { ServiceImagePlaceholder } from "@/components/service-image-placeholder"

export const metadata: Metadata = {
  title: "General Civil Litigation | Mathe Rodrick Attorneys Inc",
  description:
    "Civil litigation attorneys in Johannesburg and Gauteng. We resolve disputes in Magistrate Courts and High Courts with practical, results-driven legal counsel.",
}

const keyFocusAreas = [
  {
    title: "Contractual Disputes",
    description: "When someone breaks the terms of a contract or agreement, we take action to enforce it or recover what you are owed."
  },
  {
    title: "Damage Claims",
    description: "If you have suffered harm or financial loss because of someone else's negligence or wrongful actions, we help you claim the compensation you deserve."
  },
  {
    title: "Property & Evictions",
    description: "We handle disputes over property ownership, commercial evictions, and disagreements about boundaries and land use."
  },
  {
    title: "Debt Recovery",
    description: "We help businesses and individuals recover money that is owed to them, including through formal liquidation proceedings when necessary."
  }
]

const ourApproach = [
  {
    icon: Shield,
    title: "Strategic Representation",
    description: "Every case is different. Before we take any legal action, we sit down with you to assess the strengths of your case, the risks involved, and what it will cost, so there are no surprises."
  },
  {
    icon: Scale,
    title: "Courtroom Excellence",
    description: "Our attorneys have deep experience in the Magistrate Courts, the High Courts, and the Supreme Court of Appeal. When a case goes to court, we are well prepared."
  },
  {
    icon: Briefcase,
    title: "Commercial Reality",
    description: "We shape our approach around your goals and the practical realities of your situation, always looking for the most cost-effective path to resolution."
  }
]

export default function GeneralCivilLitigationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative flex min-h-[500px] md:min-h-[540px] items-center border-b border-foreground overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/Litigation%20hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 grid w-full gap-12 px-5 py-24 lg:grid-cols-12 md:px-8 md:py-32">
            <div className="lg:col-span-4">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Practice Area
              </p>
              <h1 className="text-4xl font-normal uppercase leading-tight tracking-normal text-foreground md:text-5xl lg:text-6xl">
                General Civil Litigation
              </h1>
            </div>
            <div className="flex items-end lg:col-span-8">
              <p className="border-l border-foreground/20 pl-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                When you have a legal dispute that needs to be resolved through the courts, we represent individuals, businesses, and organisations across Magistrate Courts and High Courts in South Africa.
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
                Civil litigation is a broad term for legal disputes that end up in court. This could be anything from a broken contract to a claim for damages, and these cases are heard in the Magistrate Courts and High Courts across South Africa.
              </p>
              <p>
                We understand that being involved in a legal dispute is stressful and disruptive, whether it is personal or business-related. From our offices in Johannesburg, we advise and represent clients across Gauteng to help you get through it as efficiently as possible.
              </p>
              <p>
                We approach every case with a genuine commitment to resolving the dispute efficiently, protecting your rights, and keeping your dignity intact throughout the process.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-page image band */}
        <section className="border-b border-foreground">
          <img
            src="/service%20page%20placeholders/case%20file%20desk%20general%20civil%20litigation.webp"
            alt="General civil litigation case files"
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
                How We Approach Litigation
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
                Ready to resolve your dispute?
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

        <OtherServices currentServiceSlug="general-civil-litigation" />

      </main>
      <SiteFooter />
    </div>
  )
}

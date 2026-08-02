import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { OtherServices } from "@/components/other-services"

export const metadata: Metadata = {
  title: "Family Law & Deceased Estates | Mathe Rodrick Attorneys Inc",
  description: "Mathe Rodrick Attorneys Inc provides expert legal services in Family Law and Deceased Estates Administration in Johannesburg and Gauteng.",
}

const familyLawAreas = [
  "Divorce & Separation",
  "Child & Spousal Support",
  "Property Division",
  "Parenting Plans",
  "Domestic Contracts"
]

const estateServices = [
  "Drafting Wills",
  "Reporting to the Master",
  "Executorship",
  "Liquidation & Distribution",
  "Property Transfers",
  "Resolving Disputes"
]

export default function FamilyLawPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative flex min-h-[500px] md:min-h-[540px] items-center border-b border-foreground overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/Family%20law%20hero.webp')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 grid w-full gap-12 px-5 py-24 lg:grid-cols-12 md:px-8 md:py-32">
            <div className="lg:col-span-5">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground text-white/70">
                Practice Area
              </p>
              <h1 className="text-4xl font-normal uppercase leading-tight tracking-normal text-white md:text-5xl lg:text-6xl">
                Family Law & Deceased Estates
              </h1>
            </div>
            <div className="flex items-end lg:col-span-7">
              <p className="border-l border-white/20 pl-6 text-base font-normal leading-relaxed text-white/80 md:text-lg">
                We help clients through the difficulty of family law matters and the emotional weight of administering a loved one's estate, with personal attention and efficient legal service.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-12 px-5 py-20 lg:grid-cols-12 md:px-8 md:py-28">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Approach</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                What We Do
              </h2>
            </div>
            <div className="space-y-6 text-base font-normal leading-relaxed text-muted-foreground lg:col-span-8 md:text-lg">
              <p>
                Mathe Rodrick Attorneys Inc is an established law firm in Johannesburg with deep experience in family law and estate matters. We understand that family disputes and the loss of a loved one are among life&apos;s most difficult experiences.
              </p>
              <p>
                Our team provides personalised legal support to clients across Gauteng. We have the experience to guide you through these situations with care, sensitivity, and the efficiency that your circumstances demand.
              </p>
            </div>
          </div>
        </section>

        {/* Full Service Family Law (Split Layout) */}
        <section className="border-b border-foreground bg-foreground/[0.02]">
          <div className="grid w-full gap-0 lg:grid-cols-2">
            <div className="border-b border-foreground p-5 py-20 lg:border-b-0 lg:border-r md:p-12 lg:p-20">
               <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Family Law</p>
               <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                 Full Service Counsel
               </h2>
               <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                 Family law matters often involve difficult questions about children, finances, and the future. We shape our approach around your specific needs, both legal and personal.
               </p>
            </div>
            <div className="p-5 py-20 md:p-12 lg:p-20 flex flex-col justify-center">
               <p className="mb-8 text-base font-normal leading-relaxed text-muted-foreground">
                  We provide experienced legal support across a range of family law matters, including:
               </p>
               <div className="flex flex-wrap gap-3">
                 {familyLawAreas.map((area, i) => (
                   <span key={i} className="border border-foreground/30 px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background cursor-default">
                     {area}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* Resolving Family Disputes (Card Layout) */}
        <section className="border-b border-foreground">
          <div className="w-full px-5 py-20 md:px-8 md:py-28">
            <div className="mb-16 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Dispute Resolution</p>
              <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                Resolving Family Disputes
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                We choose the approach that best fits your situation, taking into account how urgent the matter is and how much conflict is involved.
              </p>
            </div>
            
            <div className="grid w-full gap-8 md:grid-cols-2">
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  01
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Out of Court Options</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                   We always try to settle things through negotiation, mediation, or collaborative law first. These methods give you more privacy, more flexibility, and far less emotional strain than a courtroom battle.
                </p>
              </div>
              
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  02
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Litigation</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                   When a settlement outside of court is not possible, we provide strong courtroom representation to protect your interests and your dignity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deceased Estates Administration (Centered Emphasis) */}
        <section className="border-b border-foreground bg-foreground/[0.02]">
          <div className="flex flex-col items-center text-center px-5 py-20 md:px-8 md:py-32">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Estates</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl lg:text-6xl">
              Deceased Estates Administration
            </h2>
            <div className="mt-8 max-w-2xl space-y-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Losing a family member is painful enough without having to navigate legal processes on top of it. We handle the administration of deceased estates with compassion and efficiency, so you can focus on your family.
              </p>
              <p>
                We take care of all the requirements with the Master of the High Court, making sure the estate is finalised properly, transparently, and without unnecessary delays.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Estate Services */}
        <section className="border-b border-foreground">
          <div className="w-full px-5 py-20 md:px-8 md:py-28">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Practice Areas</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                Comprehensive Estate Practice Areas
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                We handle the legal and financial details so that your family can focus on healing.
              </p>
            </div>

            <ul className="mt-12 md:mt-16 space-y-2 max-w-3xl mx-auto">
              {estateServices.map((service, index) => (
                <li 
                  key={index}
                  className="group flex items-center gap-4 border-b border-foreground/15 py-4 md:py-5 last:border-b-0 transition-colors duration-200 hover:border-foreground/40"
                >
                  <span className="flex h-2 w-2 shrink-0 bg-foreground transition-transform duration-200 group-hover:scale-125" />
                  <span className="text-lg md:text-xl font-normal uppercase tracking-wide text-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-foreground">
          <div className="flex w-full flex-col items-start gap-8 px-5 py-20 lg:flex-row lg:items-center lg:justify-between md:px-8 md:py-28">
            <div className="max-w-2xl flex-1 min-w-0">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Principled Counsel</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                Principled Counsel For Your Family
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                Whether you are going through a divorce, putting a co-parenting agreement in place, or dealing with the estate of a loved one who has passed, we are here to help with clear, compassionate, and effective legal support.
              </p>
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

        <OtherServices currentServiceSlug="family-and-estate-administration" />

      </main>
      <SiteFooter />
    </div>
  )
}

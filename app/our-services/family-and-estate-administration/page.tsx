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
  {
    num: "01",
    title: "Drafting Wills",
    description: "Drafting and updating wills to ensure your final wishes are clearly articulated."
  },
  {
    num: "02",
    title: "Reporting to the Master",
    description: "Reporting the deceased estate to the Master of the High Court in accordance with legal requirements."
  },
  {
    num: "03",
    title: "Executorship",
    description: "Acting as the appointed executor or assisting nominated executors with their duties."
  },
  {
    num: "04",
    title: "Liquidation & Distribution",
    description: "Managing the liquidation and distribution of estate assets fairly and transparently."
  },
  {
    num: "05",
    title: "Property Transfers",
    description: "Managing property transfers to heirs smoothly and efficiently."
  },
  {
    num: "06",
    title: "Resolving Disputes",
    description: "Resolving contested wills and family disputes regarding inheritances."
  }
]

export default function FamilyLawPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative border-b border-foreground overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/Family%20law%20hero.webp')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 grid w-full gap-12 px-5 py-24 md:grid-cols-12 md:px-8 md:py-32">
            <div className="md:col-span-5">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground text-white/70">
                Legal Service
              </p>
              <h1 className="text-4xl font-normal uppercase leading-tight tracking-normal text-white md:text-5xl lg:text-6xl">
                Family Law & Deceased Estates
              </h1>
            </div>
            <div className="flex items-end md:col-span-7">
              <p className="border-l border-white/20 pl-6 text-base font-normal leading-relaxed text-white/80 md:text-lg">
                Respectfully guiding clients through the trauma of family law matters and the emotional weight of estate administration with personalised and efficient legal service.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
            <div className="md:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Approach</p>
              <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                What We Do
              </h2>
            </div>
            <div className="space-y-6 text-base font-normal leading-relaxed text-muted-foreground md:col-span-8 md:text-lg">
              <p>
                Mathe Rodrick Attorneys Inc is an established and experienced law firm in Johannesburg, deeply committed to ethical legal practices. We understand that family disputes and the loss of a loved one are among life&apos;s most challenging events.
              </p>
              <p>
                Our dedicated team of lawyers provides a personalised and efficient legal service to clients across Gauteng. We have the necessary experience to respectfully guide our clients through the trauma of family law matters and the emotional weight of estate administration.
              </p>
              <div className="mt-8 border-l-2 border-foreground pl-6 py-2">
                <p className="text-xl font-normal italic text-foreground md:text-2xl">
                  After in depth consultations, our experienced attorneys steer our clients to the best possible solutions, always acting with pure respect for human dignity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Service Family Law (Split Layout) */}
        <section className="border-b border-foreground bg-foreground/[0.02]">
          <div className="grid w-full gap-0 md:grid-cols-2">
            <div className="border-b border-foreground p-5 py-20 md:border-b-0 md:border-r md:p-12 lg:p-20">
               <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Family Law</p>
               <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                 Full Service Counsel
               </h2>
               <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                 Family law matters typically involve complex parenting and financial disputes. We tailor our approach to your specific legal and emotional needs.
               </p>
            </div>
            <div className="p-5 py-20 md:p-12 lg:p-20 flex flex-col justify-center">
               <p className="mb-8 text-base font-normal leading-relaxed text-muted-foreground">
                 Our legal experts provide highly capable counsel for a range of matters, including:
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
                We use the legal methods most appropriate for your circumstances, paying particular attention to the level of conflict and urgency.
              </p>
            </div>
            
            <div className="grid w-full gap-8 md:grid-cols-2">
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  01
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Out of Court Options</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                  We prioritise amicable resolutions through Negotiation, Mediation, and Collaborative Law. These methods offer privacy, flexibility, and reduced emotional strain.
                </p>
              </div>
              
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  02
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Litigation</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                  When an out of court settlement is not possible, we provide formidable formal court representation to protect your interests and your dignity.
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
                The loss of a family member is profoundly difficult. Navigating the legalities of their estate should not add to your burden. Our firm provides compassionate and highly efficient assistance with the administration of deceased estates.
              </p>
              <p>
                We handle all procedural requirements with the Master of the High Court, ensuring the estate is wound up lawfully, transparently, and without unnecessary delays.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Estate Services (Structured Grid) */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-0 md:grid-cols-12">
            <div className="border-b border-foreground p-5 py-20 md:col-span-4 md:border-b-0 md:border-r md:p-8 lg:p-12 xl:p-16">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Services</p>
              <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                Comprehensive Estate Services
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                We manage the legal and financial complexities so your family can focus on healing.
              </p>
            </div>
            
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                {estateServices.map((service, index) => {
                  const isLastItem = index === estateServices.length - 1
                  const isInLastDesktopRow = index >= estateServices.length - (estateServices.length % 2 === 0 ? 2 : 1)
                  const isLeftColumn = index % 2 === 0

                  return (
                    <div 
                      key={index} 
                      className={[
                        "group relative flex flex-col justify-center p-8 transition-colors duration-300 hover:bg-foreground/[0.03]",
                        !isLastItem ? "border-b border-foreground" : "",
                        isInLastDesktopRow ? "sm:border-b-0" : "",
                        isLeftColumn ? "sm:border-r sm:border-r-foreground" : "",
                      ].filter(Boolean).join(" ")}
                    >
                      <span className="absolute right-8 top-8 text-2xl font-light text-foreground/20 transition-colors group-hover:text-foreground/40">
                        {service.num}
                      </span>
                      <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm font-normal leading-relaxed text-muted-foreground pr-8">
                        {service.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-foreground">
          <div className="flex w-full flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8 md:py-28">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Principled Counsel</p>
              <h2 className="mt-4 text-3xl font-normal uppercase leading-tight tracking-normal md:text-4xl">
                When It Matters Most
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                Whether you are navigating a complex family separation or require careful guidance through the administration of a loved one&apos;s estate, we are here to provide clear, honest, and effective legal support.
              </p>
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

        <OtherServices currentServiceSlug="family-and-estate-administration" />

      </main>
      <SiteFooter />
    </div>
  )
}

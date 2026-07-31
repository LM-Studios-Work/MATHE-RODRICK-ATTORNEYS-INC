import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { OtherServices } from "@/components/other-services"

export const metadata: Metadata = {
  title: "Corporate & Insolvency Law | Mathe Rodrick Attorneys Inc",
  description: "Mathe Rodrick Attorneys Inc provides expert legal services in Corporate & Insolvency Law in Johannesburg and Gauteng.",
}

const commercialLawAreas = [
  "Breach of Contract Disputes",
  "Shareholder Disagreements",
  "Corporate Governance",
  "Commercial Agreements",
  "General Commercial Litigation"
]

const insolvencyServices = [
  {
    num: "01",
    title: "Voluntary Liquidations",
    description: "Managing the voluntary winding up of corporate entities with clear legal guidance and statutory compliance."
  },
  {
    num: "02",
    title: "Compulsory Liquidations",
    description: "Representing creditors or defending debtors in formal compulsory liquidation applications before the courts."
  },
  {
    num: "03",
    title: "Personal Sequestrations",
    description: "Assisting individuals facing severe financial distress with personal sequestration and estate protection."
  },
  {
    num: "04",
    title: "Business Rescue Proceedings",
    description: "Guiding financially distressed companies through statutory business rescue to restructure and restore solvency."
  },
  {
    num: "05",
    title: "Commercial Debt Restructuring",
    description: "Negotiating formal debt restructuring and compromise agreements to safeguard vital business operations."
  },
  {
    num: "06",
    title: "Creditor Debt Recovery",
    description: "Protecting creditors seeking to recover outstanding debts and enforcing legal rights in insolvent estates."
  }
]

export default function CorporateInsolvencyLawPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative flex min-h-[500px] md:min-h-[540px] items-center border-b border-foreground overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/corporate%20law%20hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 grid w-full gap-12 px-5 py-24 lg:grid-cols-12 md:px-8 md:py-32">
            <div className="lg:col-span-5">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground text-white/70">
                Practice Area
              </p>
              <h1 className="text-4xl font-normal uppercase leading-tight tracking-normal text-white md:text-5xl lg:text-6xl">
                Corporate & Insolvency Law
              </h1>
            </div>
            <div className="flex items-end lg:col-span-7">
              <p className="border-l border-white/20 pl-6 text-base font-normal leading-relaxed text-white/80 md:text-lg">
                Respectfully guiding clients through challenging commercial litigation, overwhelming contracts, and the heavy burden of insolvency with personalised and efficient legal service.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-12 px-5 py-20 lg:grid-cols-12 md:px-8 md:py-28">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Approach</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                What We Do
              </h2>
            </div>
            <div className="space-y-6 text-base font-normal leading-relaxed text-muted-foreground lg:col-span-8 md:text-lg">
              <p>
                Mathe Rodrick Attorneys Inc is an established and experienced law firm in Johannesburg, deeply committed to ethical legal practices. We understand that business disputes and financial distress can threaten your livelihood and peace of mind.
              </p>
              <p>
                Our dedicated team of lawyers provides a personalised and efficient legal service to corporate entities and individuals across Gauteng. We have the necessary experience to respectfully guide our clients through challenging commercial litigation, overwhelming contracts, and the heavy burden of insolvency.
              </p>
              <div className="mt-8 border-l-2 border-foreground pl-6 py-2">
                <p className="text-xl font-normal italic text-foreground md:text-2xl">
                  After in depth consultations, our experienced attorneys steer our clients to the best possible solutions, always acting with pure respect for human dignity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate and Commercial Law (Split Layout) */}
        <section className="border-b border-foreground bg-foreground/[0.02]">
          <div className="grid w-full gap-0 lg:grid-cols-2">
            <div className="border-b border-foreground p-5 py-20 lg:border-b-0 lg:border-r md:p-12 lg:p-20">
               <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Corporate Law</p>
               <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                 Corporate and Commercial Law
               </h2>
               <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                 Navigating the corporate landscape requires strategic foresight and meticulous attention to detail. We tailor our legal approach to protect your commercial interests while maintaining the integrity of your business operations.
               </p>
            </div>
            <div className="p-5 py-20 md:p-12 lg:p-20 flex flex-col justify-center">
               <p className="mb-8 text-base font-normal leading-relaxed text-muted-foreground">
                 Our legal experts provide highly capable counsel for a range of matters, including:
               </p>
               <div className="flex flex-wrap gap-3">
                 {commercialLawAreas.map((area, i) => (
                   <span key={i} className="border border-foreground/30 px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background cursor-default">
                     {area}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* Resolving Commercial Disputes (Card Layout) */}
        <section className="border-b border-foreground">
          <div className="w-full px-5 py-20 md:px-8 md:py-28">
            <div className="mb-16 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Dispute Resolution</p>
              <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                Resolving Commercial Disputes
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                We use the legal methods most appropriate for your specific commercial circumstances, paying particular attention to the level of conflict, complexity, and urgency involved.
              </p>
            </div>
            
            <div className="grid w-full gap-8 md:grid-cols-2">
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  01
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Out of Court Options</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                  We prioritise efficient resolutions through formal negotiation and mediation. These methods protect your vital business relationships, save time, and significantly reduce overall legal costs.
                </p>
              </div>
              
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  02
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Litigation</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                  When an out of court settlement is not viable, we provide formidable representation in the High Court and specialised commercial courts to protect your financial interests and your corporate reputation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Insolvency and Restructuring (Centered Emphasis) */}
        <section className="border-b border-foreground bg-foreground/[0.02]">
          <div className="flex flex-col items-center text-center px-5 py-20 md:px-8 md:py-32">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Insolvency</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl lg:text-6xl">
              Insolvency and Restructuring
            </h2>
            <div className="mt-8 max-w-2xl space-y-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Facing financial insolvency is incredibly daunting for both businesses and individuals. Our firm provides compassionate and highly efficient legal assistance during these critical times.
              </p>
              <p>
                Whether you are a creditor seeking to recover debts or a debtor needing immediate legal protection, we manage the legal complexities so you can find a clear path forward.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Insolvency Services (Structured Grid) */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-0 lg:grid-cols-12">
            <div className="border-b border-foreground p-5 py-20 lg:col-span-4 lg:border-b-0 lg:border-r md:p-8 lg:p-12 xl:p-16">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Practice Areas</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                Comprehensive Insolvency Practice Areas
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                We manage the legal and financial complexities so you can find a clear path forward with confidence and statutory protection.
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                {insolvencyServices.map((service, index) => {
                  const isLastItem = index === insolvencyServices.length - 1
                  const isInLastDesktopRow = index >= insolvencyServices.length - (insolvencyServices.length % 2 === 0 ? 2 : 1)
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
          <div className="flex w-full flex-col items-start gap-8 px-5 py-20 lg:flex-row lg:items-center lg:justify-between md:px-8 md:py-28">
            <div className="max-w-2xl flex-1 min-w-0">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Principled Counsel</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                Principled Counsel For Your Business
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                Whether you are structuring a new commercial venture, resolving a complex contract dispute, or navigating the realities of insolvency, we are here to provide clear, honest, and effective legal support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-foreground px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-background transition-all hover:bg-foreground/80 whitespace-nowrap shrink-0"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 shrink-0" aria-hidden="true" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>

        <OtherServices currentServiceSlug="corporate-and-insolvency-law" />

      </main>
      <SiteFooter />
    </div>
  )
}

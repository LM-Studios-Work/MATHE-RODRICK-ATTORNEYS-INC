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
  "Voluntary Liquidations",
  "Compulsory Liquidations",
  "Personal Sequestrations",
  "Business Rescue Proceedings",
  "Commercial Debt Restructuring",
  "Creditor Debt Recovery"
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
                We help businesses and individuals navigate contract disputes, commercial litigation, and the difficult realities of insolvency with personalised, efficient legal support.
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
                Mathe Rodrick Attorneys Inc is an established law firm in Johannesburg with deep experience in corporate and insolvency matters. We understand that business disputes and financial pressure can feel overwhelming, and that inaction only makes things worse.
              </p>
              <p>
                Our team provides personalised legal support to companies and individuals across Gauteng. Whether you are dealing with a contract dispute, a partnership that has gone wrong, or mounting debts, we have the experience to help you find a way through.
              </p>
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
                 Running a business comes with legal risk at every turn. We help you manage that risk by protecting your commercial interests while keeping your operations on solid ground.
               </p>
            </div>
            <div className="p-5 py-20 md:p-12 lg:p-20 flex flex-col justify-center">
               <p className="mb-8 text-base font-normal leading-relaxed text-muted-foreground">
                  We provide experienced legal support across a range of commercial matters, including:
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
                We choose the approach that best fits your commercial situation, taking into account the urgency, the complexity, and the relationships at stake.
              </p>
            </div>
            
            <div className="grid w-full gap-8 md:grid-cols-2">
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  01
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Out of Court Options</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                   We look for efficient solutions through negotiation and mediation first. These methods protect your business relationships, save time, and keep legal costs down.
                </p>
              </div>
              
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  02
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Litigation</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                   When a settlement is not possible, we provide strong representation in the High Court and commercial courts to protect your financial position and your reputation.
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
                When debts become unmanageable, the legal process can feel just as overwhelming as the financial pressure itself. We help both businesses and individuals navigate insolvency with clarity and efficiency.
              </p>
              <p>
                Whether you are owed money and need to recover it, or you are in financial distress and need legal protection, we manage the process so you can see a clear way forward.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Insolvency Services */}
        <section className="border-b border-foreground">
          <div className="w-full px-5 py-20 md:px-8 md:py-28">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Practice Areas</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                Comprehensive Insolvency Practice Areas
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                We handle the legal and financial complexities so you can move forward with confidence and proper legal protection.
              </p>
            </div>

            <ul className="mt-12 md:mt-16 space-y-2 max-w-3xl mx-auto">
              {insolvencyServices.map((service, index) => (
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
                Principled Counsel For Your Business
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                Whether you are starting a new business venture, resolving a contract dispute, or dealing with the realities of insolvency, we are here to provide clear, honest, and effective legal support.
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

        <OtherServices currentServiceSlug="corporate-and-insolvency-law" />

      </main>
      <SiteFooter />
    </div>
  )
}

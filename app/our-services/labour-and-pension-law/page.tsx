import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { OtherServices } from "@/components/other-services"

export const metadata: Metadata = {
  title: "Labour & Pension Law | Mathe Rodrick Attorneys Inc",
  description: "Mathe Rodrick Attorneys Inc provides expert legal services in Labour & Pension Law in Johannesburg and Gauteng.",
}

const employmentLawAreas = [
  "Unfair Dismissals",
  "Retrenchments",
  "Workplace Disciplinary Hearings",
  "Employment Contracts",
  "Discrimination Claims",
  "Strike Management"
]

const pensionServices = [
  {
    num: "01",
    title: "Unpaid Pension Contributions",
    description: "Representing employees and fund members in recovering unpaid or under-declared employer pension fund contributions."
  },
  {
    num: "02",
    title: "Withdrawal Disputes",
    description: "Resolving contested pension and provident fund withdrawal benefit calculations and payout delays."
  },
  {
    num: "03",
    title: "Delayed Death Benefits",
    description: "Navigating Section 37C of the Pension Funds Act to ensure fair and timely distribution of deceased member death benefits."
  },
  {
    num: "04",
    title: "Fund Compliance Issues",
    description: "Advising trustees, employers, and fund members on statutory compliance with pension fund rules and regulations."
  },
  {
    num: "05",
    title: "Pension Funds Adjudicator",
    description: "Drafting formal complaints and representing claimants before the Office of the Pension Funds Adjudicator."
  },
  {
    num: "06",
    title: "Surplus Apportionment",
    description: "Assisting members and beneficiaries with rights and claims regarding pension fund surplus schemes and distributions."
  }
]

export default function LabourPensionLawPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative flex min-h-[500px] md:min-h-[540px] items-center border-b border-foreground overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/Labour%20Law%20Hero.png')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 grid w-full gap-12 px-5 py-24 lg:grid-cols-12 md:px-8 md:py-32">
            <div className="lg:col-span-5">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground text-white/70">
                Practice Area
              </p>
              <h1 className="text-4xl font-normal uppercase leading-tight tracking-normal text-white md:text-5xl lg:text-6xl">
                Labour & Pension Law
              </h1>
            </div>
            <div className="flex items-end lg:col-span-7">
              <p className="border-l border-white/20 pl-6 text-base font-normal leading-relaxed text-white/80 md:text-lg">
                Respectfully guiding clients through challenging labour litigation, complex workplace disputes, and intricate pension fund regulations with personalised and efficient legal service.
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
                Mathe Rodrick Attorneys Inc is an established and experienced law firm in Johannesburg, deeply committed to ethical legal practices. We understand that workplace disputes and pension fund challenges deeply affect your livelihood, your dignity, and your future financial security.
              </p>
              <p>
                Our dedicated team of lawyers provides a personalised and efficient legal service to employers, employees, and fund members across Gauteng. We have the necessary experience to respectfully guide our clients through challenging labour litigation, complex workplace disputes, and intricate pension fund regulations.
              </p>
              <div className="mt-8 border-l-2 border-foreground pl-6 py-2">
                <p className="text-xl font-normal italic text-foreground md:text-2xl">
                  After in depth consultations, our experienced attorneys steer our clients to the best possible solutions, always acting with pure respect for human dignity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Labour and Employment Law (Split Layout) */}
        <section className="border-b border-foreground bg-foreground/[0.02]">
          <div className="grid w-full gap-0 lg:grid-cols-2">
            <div className="border-b border-foreground p-5 py-20 lg:border-b-0 lg:border-r md:p-12 lg:p-20">
               <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Employment Law</p>
               <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                 Labour and Employment Law
               </h2>
               <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                 The employment relationship is a fundamental pillar of personal stability and business success. We tailor our legal approach to protect your workplace rights and ensure fair labour practices are maintained at all times.
               </p>
            </div>
            <div className="p-5 py-20 md:p-12 lg:p-20 flex flex-col justify-center">
               <p className="mb-8 text-base font-normal leading-relaxed text-muted-foreground">
                 Our legal experts provide highly capable counsel for a range of workplace matters, including:
               </p>
               <div className="flex flex-wrap gap-3">
                 {employmentLawAreas.map((area, i) => (
                   <span key={i} className="border border-foreground/30 px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background cursor-default">
                     {area}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* Resolving Workplace and Pension Disputes (Card Layout) */}
        <section className="border-b border-foreground">
          <div className="w-full px-5 py-20 md:px-8 md:py-28">
            <div className="mb-16 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Dispute Resolution</p>
              <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                Resolving Workplace and Pension Disputes
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                We use the legal methods most appropriate for your specific circumstances, paying particular attention to the level of conflict, complexity, and urgency involved in your matter.
              </p>
            </div>
            
            <div className="grid w-full gap-8 md:grid-cols-2">
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  01
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Out of Court Options</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                  We prioritise efficient resolutions through formal negotiation, mediation, and internal workplace grievance procedures. These methods aim to restore professional harmony and resolve benefit disputes quickly, saving you time and unnecessary emotional strain.
                </p>
              </div>
              
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  02
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Statutory Dispute Resolution and Litigation</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                  When an amicable settlement is not viable, we provide formidable formal representation. We proudly advocate for our clients at the Commission for Conciliation, Mediation and Arbitration, the relevant Bargaining Councils, the Labour Court, and the office of the Pension Funds Adjudicator to decisively protect your rights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pension Fund Law (Centered Emphasis) */}
        <section className="border-b border-foreground bg-foreground/[0.02]">
          <div className="flex flex-col items-center text-center px-5 py-20 md:px-8 md:py-32">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Pension Fund Law</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl lg:text-6xl">
              Pension Fund Law
            </h2>
            <div className="mt-8 max-w-2xl space-y-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Protecting your retirement savings is critical. Navigating the strict regulatory framework of South African pension and provident funds requires highly specialised legal knowledge.
              </p>
              <p>
                Our firm provides compassionate and highly efficient legal assistance for all pension related disputes, managing the regulatory complexities to protect your financial future.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Pension Services (Structured Grid) */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-0 lg:grid-cols-12">
            <div className="border-b border-foreground p-5 py-20 lg:col-span-4 lg:border-b-0 lg:border-r md:p-8 lg:p-12 xl:p-16">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Practice Areas</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                Comprehensive Pension Practice Areas
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                We manage the legal and regulatory complexities so you can achieve resolution and protect your retirement benefits.
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                {pensionServices.map((service, index) => {
                  const isLastItem = index === pensionServices.length - 1
                  const isInLastDesktopRow = index >= pensionServices.length - (pensionServices.length % 2 === 0 ? 2 : 1)
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
                Principled Counsel For Your Livelihood
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                Whether you are navigating an unfair labour practice, structuring executive employment agreements, or contesting an unfair pension benefit decision, we are here to provide clear, honest, and effective legal support.
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

        <OtherServices currentServiceSlug="labour-and-pension-law" />

      </main>
      <SiteFooter />
    </div>
  )
}

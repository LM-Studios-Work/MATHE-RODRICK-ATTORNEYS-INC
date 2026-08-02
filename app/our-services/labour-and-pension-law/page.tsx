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
  "Unpaid Pension Contributions",
  "Withdrawal Disputes",
  "Delayed Death Benefits",
  "Fund Compliance Issues",
  "Pension Funds Adjudicator",
  "Surplus Apportionment"
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
                We help employees, employers, and fund members navigate workplace disputes, unfair dismissals, and pension fund issues with personalised, efficient legal support.
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
                Mathe Rodrick Attorneys Inc is an established law firm in Johannesburg with extensive experience in labour and pension matters. We understand that problems at work or with your pension fund do not just create legal issues. They affect your income, your sense of dignity, and your financial future.
              </p>
              <p>
                Our team provides personalised legal support to employers, employees, and pension fund members across Gauteng. Whether you are dealing with a dismissal, a disciplinary hearing, or a dispute with your retirement fund, we have the experience to help you through it.
              </p>
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
                 Your job is central to your life and your stability. We tailor our approach to protect your workplace rights and make sure that fair labour practices are upheld.
               </p>
            </div>
            <div className="p-5 py-20 md:p-12 lg:p-20 flex flex-col justify-center">
               <p className="mb-8 text-base font-normal leading-relaxed text-muted-foreground">
                  We provide experienced legal support for a range of workplace matters, including:
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
                We choose the approach that best fits your situation, taking into account how urgent the matter is, how complex it is, and how much conflict is involved.
              </p>
            </div>
            
            <div className="grid w-full gap-8 md:grid-cols-2">
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  01
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Out of Court Options</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                   We always look for efficient solutions first through negotiation, mediation, and internal grievance processes. The goal is to resolve the issue quickly, saving you time and unnecessary stress.
                </p>
              </div>
              
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  02
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Formal Proceedings and Litigation</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                   When a settlement is not possible, we represent you formally. This includes proceedings at the CCMA, Bargaining Councils, the Labour Court, and the Pension Funds Adjudicator. We are experienced in all of these forums and will fight to protect your rights.
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
                Your retirement savings represent years of work. When disputes arise with your pension or provident fund, you need legal support from a team that understands how these funds operate and how to hold them accountable.
              </p>
              <p>
                We provide focused, efficient legal help for all pension-related disputes, handling the regulatory side so you can focus on getting the outcome you are entitled to.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Pension Services */}
        <section className="border-b border-foreground">
          <div className="w-full px-5 py-20 md:px-8 md:py-28">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Practice Areas</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                Comprehensive Pension Practice Areas
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                We handle the legal and regulatory details so you can achieve a resolution and protect the retirement benefits you have worked for.
              </p>
            </div>

            <ul className="mt-12 md:mt-16 space-y-2 max-w-3xl mx-auto">
              {pensionServices.map((service, index) => (
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
                Principled Counsel For Your Livelihood
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                Whether you are dealing with an unfair dismissal, putting employment contracts in place, or challenging a pension fund decision that does not add up, we are here to provide clear, honest, and effective legal support.
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

        <OtherServices currentServiceSlug="labour-and-pension-law" />

      </main>
      <SiteFooter />
    </div>
  )
}

import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { OtherServices } from "@/components/other-services"

export const metadata: Metadata = {
  title: "Criminal Defense | Mathe Rodrick Attorneys Inc",
  description: "Mathe Rodrick Attorneys Inc provides expert legal services in Criminal Defense, bail applications, police investigations, and courtroom representation in Johannesburg and Gauteng.",
}

const criminalLawAreas = [
  "General Criminal Offenses",
  "Corporate & Commercial Crimes",
  "Fraud & Financial Crimes",
  "Assault & Violent Crimes",
  "Driving Offenses",
  "Statutory Violations"
]

const bailAndUrgentServices = [
  {
    num: "01",
    title: "Police Station Bail",
    description: "Securing urgent bail applications directly at police stations immediately following an arrest to ensure your prompt release."
  },
  {
    num: "02",
    title: "Court Bail Applications",
    description: "Representing clients in formal bail applications before Magistrate Courts and High Courts, including opposed bail hearings."
  },
  {
    num: "03",
    title: "Rights During Questioning",
    description: "Protecting your constitutional rights during police questioning, searches, and investigative interviews to safeguard against self-incrimination."
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
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 grid w-full gap-12 px-5 py-24 lg:grid-cols-12 md:px-8 md:py-32">
            <div className="lg:col-span-5">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground text-white/70">
                Practice Area
              </p>
              <h1 className="text-4xl font-normal uppercase leading-tight tracking-normal text-white md:text-5xl lg:text-6xl">
                Criminal Defense
              </h1>
            </div>
            <div className="flex items-end lg:col-span-7">
              <p className="border-l border-white/20 pl-6 text-base font-normal leading-relaxed text-white/80 md:text-lg">
                Respectfully guiding clients through the trauma of police investigations, difficult bail applications, and complex criminal cases with personalised and efficient legal service.
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
                Mathe Rodrick Attorneys Inc is an established and experienced law firm in Johannesburg, deeply committed to ethical legal practices. We understand that facing criminal charges is a profoundly distressing experience that can threaten your liberty, your reputation, and your livelihood.
              </p>
              <p>
                Our dedicated team of lawyers provides a personalised and efficient legal service to individuals and businesses across Gauteng. We have the necessary experience to respectfully guide our clients through the trauma of police investigations, difficult bail applications, and complex criminal cases.
              </p>
              <div className="mt-8 border-l-2 border-foreground pl-6 py-2">
                <p className="text-xl font-normal italic text-foreground md:text-2xl">
                  After in depth consultations, our experienced attorneys steer our clients to the best possible solutions, always acting with pure respect for human dignity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Criminal Representation (Split Layout) */}
        <section className="border-b border-foreground bg-foreground/[0.02]">
          <div className="grid w-full gap-0 lg:grid-cols-2">
            <div className="border-b border-foreground p-5 py-20 lg:border-b-0 lg:border-r md:p-12 lg:p-20">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Criminal Law</p>
              <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                Expert Criminal Representation
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                The South African criminal justice system is intimidating, and navigating it requires a resilient and meticulous legal team. We tailor our approach to aggressively protect your constitutional rights while ensuring you receive a fair trial.
              </p>
            </div>
            <div className="p-5 py-20 md:p-12 lg:p-20 flex flex-col justify-center">
              <p className="mb-8 text-base font-normal leading-relaxed text-muted-foreground">
                Our legal experts provide highly capable counsel for a range of matters, including:
              </p>
              <div className="flex flex-wrap gap-3">
                {criminalLawAreas.map((area, i) => (
                  <span key={i} className="border border-foreground/30 px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background cursor-default">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bail Applications and Urgent Assistance (Centered Emphasis) */}
        <section className="border-b border-foreground">
          <div className="flex flex-col items-center text-center px-5 py-20 md:px-8 md:py-32">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Urgent Defense</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl lg:text-6xl">
              Bail Applications and Urgent Assistance
            </h2>
            <div className="mt-8 max-w-2xl space-y-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Being arrested is a critical and highly urgent situation. Our firm provides compassionate and highly efficient legal assistance from the very moment of arrest.
              </p>
              <p>
                We manage the immediate legal complexities so you can secure your release as quickly as possible while protecting your constitutional rights.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Bail & Urgent Services (Structured Grid) */}
        <section className="border-b border-foreground bg-foreground/[0.02]">
          <div className="grid w-full gap-0 lg:grid-cols-12">
            <div className="border-b border-foreground p-5 py-20 lg:col-span-4 lg:border-b-0 lg:border-r md:p-8 lg:p-12 xl:p-16">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Comprehensive Counsel</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
                Bail & Urgent Practice Areas
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                When liberty is at stake, time is critical. We provide immediate, strategic intervention at police stations and courts across Gauteng.
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
                {bailAndUrgentServices.map((service, index) => {
                  const isLastItem = index === bailAndUrgentServices.length - 1

                  return (
                    <div 
                      key={index} 
                      className={[
                        "group relative flex flex-col justify-center p-8 transition-colors duration-300 hover:bg-foreground/[0.03]",
                        !isLastItem ? "border-b border-foreground sm:border-b-0 sm:border-r sm:border-r-foreground" : "",
                      ].filter(Boolean).join(" ")}
                    >
                      <span className="absolute right-8 top-8 text-2xl font-light text-foreground/20 transition-colors group-hover:text-foreground/40">
                        {service.num}
                      </span>
                      <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm font-normal leading-relaxed text-muted-foreground pr-4">
                        {service.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Defending Your Rights (Card Layout) */}
        <section className="border-b border-foreground">
          <div className="w-full px-5 py-20 md:px-8 md:py-28">
            <div className="mb-16 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Defense Strategy</p>
              <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                Defending Your Rights
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                We use the legal strategies most appropriate for your specific circumstances, paying particular attention to the complexity and severity of the charges against you.
              </p>
            </div>
            
            <div className="grid w-full gap-8 md:grid-cols-2">
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  01
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Early Resolutions</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                  We prioritise resolving matters before a lengthy trial begins. This includes drafting formal written representations to the National Prosecuting Authority to have charges withdrawn or negotiating favourable agreements to reduce your legal exposure.
                </p>
              </div>
              
              <div className="flex flex-col border border-foreground p-8 lg:p-12 bg-background transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                  02
                </div>
                <h3 className="text-2xl font-normal uppercase tracking-wide">Courtroom Litigation</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                  When a trial is inevitable, we provide formidable formal representation in the Magistrate Courts and High Courts. We rigorously test the evidence presented by the State, challenge witness testimony, and vigorously advocate for your acquittal to ensure your freedom and dignity are fully protected.
                </p>
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
                Principled Counsel For Your Freedom
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                Whether you require urgent assistance with a bail application, are facing a minor regulatory offense, or need defense against a complex commercial crime charge, we are here to provide clear, honest, and effective legal support.
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

        <OtherServices currentServiceSlug="criminal-defense" />

      </main>
      <SiteFooter />
    </div>
  )
}


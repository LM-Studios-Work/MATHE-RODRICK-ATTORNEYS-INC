import Link from "next/link"
import { Handshake, Briefcase, Gavel, Users, HardHat, Home, PiggyBank, TrendingDown, ScrollText } from "lucide-react"

const services = [
  { title: "General Civil Litigation", slug: "general-civil-litigation", icon: Handshake },
  { title: "Commercial Litigation", slug: "commercial-litigation", icon: Briefcase },
  { title: "Criminal Law Litigation", slug: "criminal-law-litigation", icon: Gavel },
  { title: "Family Law", slug: "family-law", icon: Users },
  { title: "Labour & Employment Law", slug: "labour-and-employment-law", icon: HardHat },
  { title: "Property Law", slug: "property-law", icon: Home },
  { title: "Pension Fund Law", slug: "pension-fund-law", icon: PiggyBank },
  { title: "Insolvency Law", slug: "insolvency-law", icon: TrendingDown },
  { title: "Deceased Estates Administration", slug: "deceased-estates-administration", icon: ScrollText },
]

export function ServicesSection() {
  return (
    <section className="border-b-2 border-border-subtle">
      <div className="w-full px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Our Expertise</p>
          <h2 className="mt-5 text-4xl font-medium uppercase leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Explore Our Expertise
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-pretty text-[0.8125rem] font-light leading-relaxed text-muted-foreground md:text-sm">
            With years of experience and a proven track record within the South African courts, we are committed to
            providing exceptional legal solutions to individuals and businesses across Gauteng. These principles shape
            every solution we provide, ensuring you receive the highest level of legal support grounded in integrity,
            results, and passion.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 border-t border-border-subtle sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon
            const isLast = index === services.length - 1
            const isSecondLastOnOddList = index === services.length - 2 && services.length % 2 !== 0

            return (
              <Link
                key={service.slug}
                href={`/our-services/${service.slug}`}
                className={`group relative flex items-center justify-between gap-6 border-b border-border-subtle px-2 py-7 transition-colors duration-300 hover:bg-foreground/[0.02] sm:px-6 sm:py-8 sm:odd:border-r ${
                  isLast ? "border-b-0" : ""
                } ${isSecondLastOnOddList ? "sm:border-b-0" : ""}`}
              >
                <div className="flex flex-col">
                  <span className="text-3xl font-light leading-none tracking-tight text-foreground/90 md:text-[2.75rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground md:text-sm">
                    {service.title}
                  </h3>
                </div>
                <Icon
                  className="h-7 w-7 shrink-0 text-foreground/40 transition-colors duration-300 group-hover:text-foreground/90 md:h-8 md:w-8"
                  strokeWidth={1}
                  aria-hidden="true"
                />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Handshake, Briefcase, Gavel, Users, HardHat, Home, PiggyBank, TrendingDown, ScrollText, ArrowUpRight } from "lucide-react"

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
    <section className="border-b border-foreground/20">
      {/* Header */}
      <div className="w-full px-6 pb-14 pt-20 text-center md:px-12 md:pb-16 md:pt-28">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-foreground/50">Our Expertise</p>
        <h2 className="mt-4 font-sans text-4xl font-medium uppercase leading-[1.05] tracking-tight text-foreground md:text-6xl">
          Explore Our Expertise
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-pretty text-[0.8125rem] font-light leading-relaxed text-foreground/50 md:text-sm">
          With years of experience and a proven track record within the South African courts, we are committed to
          providing exceptional legal solutions to individuals and businesses across Gauteng. These principles shape
          every solution we provide, ensuring you receive the highest level of legal support grounded in integrity,
          results, and passion.
        </p>
      </div>

      {/* Full-width grid */}
      <div className="grid w-full grid-cols-1 border-t border-white/50 sm:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon
          const isLast = index === services.length - 1
          const isLoneStragglerOnDesktop = services.length % 2 !== 0 && index === services.length - 1
          const isPairedWithLoner = services.length % 2 !== 0 && index === services.length - 2

          return (
            <Link
              key={service.slug}
              href={`/our-services/${service.slug}`}
              aria-label={`Learn more about ${service.title}`}
              className={[
                "group relative flex cursor-pointer items-center justify-between gap-4 px-6 py-8 transition-colors duration-200 hover:bg-white/[0.04] md:px-12 md:py-9",
                // Horizontal dividers — full white/50
                isLast ? "border-b-0" : "border-b border-white/50",
                // Vertical divider between columns
                "sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-r-white/50",
                // Remove bottom border on desktop when no row partner below
                isPairedWithLoner ? "sm:border-b-0" : "",
                isLoneStragglerOnDesktop ? "sm:border-b-0" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Left: number + title */}
              <div className="flex min-w-0 flex-col">
                <span className="font-sans text-[2rem] font-extralight leading-none tracking-tight text-white/75 md:text-[2.5rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/45 transition-colors duration-200 group-hover:text-white md:text-[0.75rem]">
                  {service.title}
                </h3>
              </div>

              {/* Right: practice-area icon + arrow signifier */}
              <div className="flex shrink-0 items-center gap-3">
                <Icon
                  className="h-6 w-6 text-white/25 transition-colors duration-200 group-hover:text-white/70 md:h-7 md:w-7"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                {/* Arrow circle — the clickable signifier */}
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-white/35 transition-all duration-200 group-hover:border-white group-hover:bg-white group-hover:text-black md:h-8 md:w-8">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-4 md:w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

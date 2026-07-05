import Link from "next/link"
import { Handshake, Briefcase, Gavel, Users, HardHat, Home, PiggyBank, TrendingDown, ScrollText, ArrowRight } from "lucide-react"

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
  const total = services.length

  return (
    <section className="border-b-2 border-border-subtle">
      {/* Header — matches About / Callback sections exactly */}
      <div className="grid w-full gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-4">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Expertise</p>
          <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
            Explore Our Expertise
          </h2>
        </div>
        <div className="flex items-center md:col-span-8">
          <p className="text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
            With years of experience and a proven track record within the South African courts, we are committed to
            providing exceptional legal solutions to individuals and businesses across Gauteng. These principles shape
            every solution we provide, ensuring you receive the highest level of legal support grounded in integrity,
            results, and passion.
          </p>
        </div>
      </div>

      {/* Full-width grid — 1 col mobile, 2 col desktop */}
      <div className="grid w-full grid-cols-1 border-t border-foreground sm:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon
          const isLastItem = index === total - 1
          // On desktop (2-col), the last two items form the final row — no bottom border needed
          const isInLastDesktopRow = index >= total - (total % 2 === 0 ? 2 : 1)
          // Left-column items (even index) get a right border to form the vertical divider
          const isLeftColumn = index % 2 === 0

          return (
            <Link
              key={service.slug}
              href={`/our-services/${service.slug}`}
              aria-label={`Learn more about ${service.title}`}
              className={[
                "group flex cursor-pointer items-center justify-between gap-6 px-5 py-8 transition-colors duration-200 hover:bg-white/[0.04] md:px-8 md:py-10",
                // Mobile: every item except the last gets a bottom border
                !isLastItem ? "border-b border-foreground" : "",
                // Desktop: suppress bottom border on the last row of cards
                isInLastDesktopRow ? "sm:border-b-0" : "",
                // Desktop: right border on all left-column cells to form the vertical divider
                isLeftColumn ? "sm:border-r sm:border-r-foreground" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Left: number + title */}
              <div className="flex min-w-0 flex-col">
                <span className="font-sans text-[2.25rem] font-thin leading-none tracking-tight text-foreground md:text-[3rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors duration-200 group-hover:text-foreground md:text-sm">
                  {service.title}
                </h3>
              </div>

              {/* Right: practice-area icon + arrow button */}
              <div className="flex shrink-0 items-center gap-4">
                <Icon
                  className="h-7 w-7 text-foreground/30 transition-colors duration-200 group-hover:text-foreground/70 md:h-8 md:w-8"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                {/* Arrow — unmistakable clickable signifier matching site button style */}
                <span
                  aria-hidden="true"
                  className="flex items-center gap-2 border border-foreground/40 px-3 py-2 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-foreground/50 transition-all duration-200 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
                >
                  <ArrowRight className="h-3 w-3" strokeWidth={2} />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

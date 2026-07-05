import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  { title: "General Civil Litigation", slug: "general-civil-litigation" },
  { title: "Commercial Litigation", slug: "commercial-litigation" },
  { title: "Criminal Law Litigation", slug: "criminal-law-litigation" },
  { title: "Family Law", slug: "family-law" },
  { title: "Labour & Employment Law", slug: "labour-and-employment-law" },
  { title: "Property Law", slug: "property-law" },
  { title: "Pension Fund Law", slug: "pension-fund-law" },
  { title: "Insolvency Law", slug: "insolvency-law" },
  { title: "Deceased Estates Administration", slug: "deceased-estates-administration" },
]

export function ServicesSection() {
  return (
    <section className="border-b border-border-subtle">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Our Expertise</p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight md:text-5xl">
            Explore our areas of practice
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Comprehensive legal representation across a broad spectrum of disciplines, each handled with
            precision and care.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/our-services/${service.slug}`}
              className="group relative flex min-h-44 flex-col justify-between bg-background p-8 transition-colors hover:bg-foreground"
            >
              <span className="font-serif text-sm text-muted-foreground transition-colors group-hover:text-background/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex items-end justify-between gap-4">
                <h3 className="text-balance text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-background">
                  {service.title}
                </h3>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-background"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

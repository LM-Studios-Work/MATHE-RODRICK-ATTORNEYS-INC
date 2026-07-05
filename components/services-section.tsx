import Link from "next/link"
import { Handshake, BriefcaseBusiness, Landmark, Users, Scale, Key, Coins, FileX, FileSignature } from "lucide-react"

const services = [
  { title: "General Civil Litigation", slug: "general-civil-litigation", icon: Handshake },
  { title: "Commercial Litigation", slug: "commercial-litigation", icon: BriefcaseBusiness },
  { title: "Criminal Law Litigation", slug: "criminal-law-litigation", icon: Landmark },
  { title: "Family Law", slug: "family-law", icon: Users },
  { title: "Labour & Employment Law", slug: "labour-and-employment-law", icon: Scale },
  { title: "Property Law", slug: "property-law", icon: Key },
  { title: "Pension Fund Law", slug: "pension-fund-law", icon: Coins },
  { title: "Insolvency Law", slug: "insolvency-law", icon: FileX },
  { title: "Deceased Estates Administration", slug: "deceased-estates-administration", icon: FileSignature },
]

export function ServicesSection() {
  return (
    <section className="border-b-2 border-border-subtle">
      <div className="w-full px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Expertise</p>
          <h2 className="mt-6 font-serif text-5xl font-normal leading-tight md:text-7xl uppercase tracking-normal">
            Explore Our Expertise
          </h2>
          <p className="mt-8 mx-auto max-w-3xl text-sm md:text-base font-normal leading-relaxed text-muted-foreground">
            With years of experience and a proven track record within the South African courts, we are committed to providing exceptional legal solutions to individuals and businesses across Gauteng. These principles shape every solution we provide, ensuring you receive the highest level of legal support grounded in integrity, results, and passion.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                href={`/our-services/${service.slug}`}
                className={`group relative flex min-h-[14rem] md:min-h-[18rem] flex-col justify-between border-b border-border-subtle p-8 transition-all hover:bg-foreground/[0.03] sm:p-12 sm:odd:border-r ${
                  index === services.length - 1 ? "border-b-0" : ""
                } ${
                  index === services.length - 2 && services.length % 2 !== 0 ? "sm:border-b-0" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-6xl md:text-7xl font-light text-foreground/80 transition-colors group-hover:text-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-foreground/60 transition-colors group-hover:text-foreground" strokeWidth={1} />
                </div>
                <div className="mt-auto pt-8">
                  <h3 className="text-balance text-sm font-normal tracking-[0.1em] uppercase text-foreground/80 transition-colors group-hover:text-foreground md:text-base">
                    {service.title}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

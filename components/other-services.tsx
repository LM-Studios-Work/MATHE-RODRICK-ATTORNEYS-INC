"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export const ALL_SERVICES = [
  {
    title: "Corporate & Insolvency Law",
    slug: "corporate-and-insolvency-law",
    description: "Strategic representation in commercial disputes, business relationships, and insolvency matters.",
    image: "/images/corporate%20law%20hero.jpg"
  },
  {
    title: "Criminal Defense",
    slug: "criminal-defense",
    description: "Expert criminal defense protecting your rights and ensuring a fair trial.",
    image: "/images/Criminal%20Defence%20Hero.webp"
  },
  {
    title: "Family & Estate Administration",
    slug: "family-and-estate-administration",
    description: "Sensitive counsel in divorce, maintenance, and the administration of deceased estates.",
    image: "/images/Family%20law%20hero.webp"
  },
  {
    title: "General Civil Litigation",
    slug: "general-civil-litigation",
    description: "General civil litigation representation across Johannesburg and Gauteng.",
    image: "/images/Litigation%20hero.jpg"
  },
  {
    title: "Labour & Pension Law",
    slug: "labour-and-pension-law",
    description: "Expert guidance on employment disputes, workplace regulations, and pension fund matters.",
    image: "/images/Labour%20Law%20Hero.png"
  },
  {
    title: "Property Law",
    slug: "property-law",
    description: "Resolving property-related conflicts, commercial evictions, and boundary disputes.",
    image: "/images/Property%20law%20hero.jpeg"
  }
]

export function OtherServices({ currentServiceSlug }: { currentServiceSlug: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isInteracted, setIsInteracted] = useState(false)

  // Filter out the current service and take 3
  const otherServices = ALL_SERVICES.filter((s) => s.slug !== currentServiceSlug).slice(0, 3)

  useEffect(() => {
    // Only auto-scroll on mobile devices
    if (typeof window !== "undefined" && window.innerWidth >= 768) return;

    const scrollContainer = scrollRef.current
    if (!scrollContainer || isInteracted) return

    const intervalId = setInterval(() => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          // scroll right by 1 element width approx
          scrollContainer.scrollBy({ left: window.innerWidth * 0.85, behavior: 'smooth' })
        }
      }
    }, 3500)

    return () => clearInterval(intervalId)
  }, [isInteracted])

  return (
    <section className="border-b border-foreground">
      <div className="px-5 py-20 md:px-8 md:py-28">
        <div className="mb-8 md:mb-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Explore</p>
            <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
              Other Services
            </h2>
          </div>
        </div>
        
        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div 
          ref={scrollRef}
          onTouchStart={() => setIsInteracted(true)}
          onMouseEnter={() => setIsInteracted(true)}
          className="flex w-full gap-5 overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:snap-none no-scrollbar"
        >
          {otherServices.map((service, index) => (
            <Link
              key={service.slug}
              href={`/our-services/${service.slug}`}
              aria-label={`Learn more about ${service.title}`}
              className="group relative flex flex-col justify-end w-[85vw] flex-none shrink-0 snap-center overflow-hidden border border-foreground/20 aspect-square md:w-auto md:aspect-[4/3] bg-background"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end p-6 md:p-8 h-full">
                <div>
                  <span className="font-sans text-xl font-thin leading-none tracking-tight text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold uppercase tracking-widest text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-white/80 line-clamp-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:underline underline-offset-4">
                    Learn More
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black"
                  >
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

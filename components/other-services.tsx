"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef, useState, MouseEvent } from "react"

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
  // Filter out the current service to show all other practice areas
  const otherServices = ALL_SERVICES.filter((s) => s.slug !== currentServiceSlug)

  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [hasDragged, setHasDragged] = useState(false)

  const onMouseDown = (e: MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setHasDragged(false)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const onMouseLeave = () => {
    setIsDragging(false)
  }

  const onMouseUp = () => {
    setIsDragging(false)
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    setHasDragged(true)
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section className="border-b border-foreground bg-background">
      <div className="py-20 md:py-28">
        <div className="px-5 md:px-8 mb-8 md:mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Explore</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-normal uppercase leading-tight tracking-normal break-words">
            Other Practice Areas
          </h2>
        </div>
        
        {/* Horizontal scrollable container for all devices */}
        <div 
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className={`flex w-full gap-5 overflow-x-auto px-5 md:px-8 pb-8 no-scrollbar select-none ${
            isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'
          }`}
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {otherServices.map((service, index) => (
            <Link
              key={service.slug}
              href={`/our-services/${service.slug}`}
              aria-label={`Learn more about ${service.title}`}
              onClick={(e) => {
                if (hasDragged) {
                  e.preventDefault()
                }
              }}
              draggable={false}
              className="group relative flex flex-col justify-end w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] flex-none shrink-0 snap-center overflow-hidden border border-foreground/20 aspect-square bg-background rounded-sm"
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
                  <h3 className="mt-3 text-lg font-bold uppercase tracking-widest text-white leading-snug">
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
                    className="inline-flex items-center text-white transition-all duration-300 group-hover:translate-x-1"
                  >
                    <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
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

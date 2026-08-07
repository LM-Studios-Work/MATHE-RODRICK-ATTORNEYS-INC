import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden border-b border-foreground">
      {/* Background Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/rm%20hero.webp')" }}
      />
      {/* Dark overlay for contrast and legibility */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative w-full px-5 py-12 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Headline */}
          <h1 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal uppercase leading-snug sm:leading-tight tracking-wider text-foreground drop-shadow-sm">
            WELCOME TO MATHE RODRICK ATTORNEYS INC
          </h1>

          {/* Contextualised Introductory Sentence */}
          <p className="mt-6 mx-auto max-w-xl text-balance text-sm sm:text-base font-normal leading-relaxed text-muted-foreground">
            Ethical and competent legal services.
          </p>

          {/* Square CTA Button */}
          <div className="mt-10 sm:mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-4 border border-foreground px-8 sm:px-10 py-4 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:shadow-lg whitespace-nowrap shrink-0"
            >
              <span>Contact us</span>
              <span className="inline-flex items-center transition-transform duration-300 group-hover:translate-x-1.5">
                <span className="h-px w-6 bg-current inline-block" />
                <ArrowRight className="-ml-1 h-4 w-4 shrink-0" strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

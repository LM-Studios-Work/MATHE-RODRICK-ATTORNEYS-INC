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
          {/* Center Wordmark Emblem */}
          <div className="mb-8 flex flex-col items-center justify-center text-center">
            <span className="font-serif text-5xl sm:text-6xl font-light tracking-[0.25em] text-foreground select-none">
              RM
            </span>
            <span className="mt-2 text-xs sm:text-sm font-normal uppercase tracking-[0.35em] text-foreground">
              MATHE RODRICK
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal uppercase leading-snug sm:leading-tight tracking-wider text-foreground drop-shadow-sm">
            PRINCIPLED COUNSEL. ROOTED IN DIGNITY.
          </h1>

          {/* Contextualised Introductory Sentence */}
          <p className="mt-6 mx-auto max-w-xl text-balance text-sm sm:text-base font-normal leading-relaxed text-muted-foreground">
            Specialist litigation and corporate law across Gauteng, with expertise in:
          </p>

          {/* Bulleted List of Expertise */}
          <div className="mt-6 flex justify-center">
            <ul className="inline-block text-left space-y-2 text-sm sm:text-base font-normal text-foreground">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground shrink-0" aria-hidden="true" />
                <span>Civil Litigation &amp; Corporate Law</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground shrink-0" aria-hidden="true" />
                <span>Family Law &amp; Criminal Defense</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground shrink-0" aria-hidden="true" />
                <span>Labour Law &amp; Property Law</span>
              </li>
            </ul>
          </div>

          {/* Square CTA Button */}
          <div className="mt-12 sm:mt-16 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-4 border border-foreground px-8 sm:px-10 py-4 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:shadow-lg whitespace-nowrap shrink-0"
            >
              <span>Contact us</span>
              <span className="inline-flex items-center transition-transform duration-300 group-hover:translate-x-1.5">
                <span className="h-px w-6 bg-current inline-block" />
                <ArrowRight className="-ml-1 h-3.5 w-3.5 shrink-0" strokeWidth={2} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

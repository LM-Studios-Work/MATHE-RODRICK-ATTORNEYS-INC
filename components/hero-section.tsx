import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border-subtle">
      {/* Architectural grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Emblem */}
          <div className="mb-10 flex justify-center">
            <span className="flex h-24 w-24 items-center justify-center border border-border font-serif text-4xl font-semibold tracking-widest">
              RM
            </span>
          </div>

          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-muted-foreground">
            Mathe Rodrick Attorneys Inc
          </p>

          <h1 className="text-balance font-serif text-3xl font-medium leading-tight md:text-5xl lg:text-6xl">
            Customised legal services driven by pure respect for human dignity and centred around ethical
            legal practices.
          </h1>

          <div className="mx-auto mt-10 h-px w-24 bg-border" />

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-border bg-transparent px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Consult With Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/our-services"
              className="inline-flex items-center gap-3 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

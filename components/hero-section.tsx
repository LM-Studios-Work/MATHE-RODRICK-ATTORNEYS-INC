import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden border-b-2 border-border-subtle">
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

      <div className="relative w-full px-5 py-12 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Emblem */}
          <div className="mb-10 flex justify-center">
            <span className="flex h-24 w-24 items-center justify-center border border-border/50 text-4xl font-normal tracking-widest shadow-lg">
              RM
            </span>
          </div>

          <p className="mb-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Mathe Rodrick Attorneys Inc
          </p>

          <h1 className="text-balance text-3xl font-normal leading-tight drop-shadow-sm md:text-4xl lg:text-5xl">
            Customised legal services in Johannesburg and the wider Gauteng region, driven by pure respect for human dignity and centred around ethical legal practices.
          </h1>

          <div className="mx-auto mt-10 h-px w-24 bg-border/40" />

          <div className="mt-10 flex justify-center">
            <Link
              href="#expertise"
              className="group inline-flex items-center gap-3 border border-border/50 px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:shadow-lg hover:shadow-white/5"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

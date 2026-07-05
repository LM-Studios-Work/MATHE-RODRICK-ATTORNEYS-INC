import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="border-b-2 border-border-subtle">
      <div className="grid w-full gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-4">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Firm</p>
          <h2 className="mt-4 text-4xl font-normal leading-tight md:text-5xl uppercase tracking-normal">
            Principled counsel in the heart of Johannesburg, rooted in dignity.
          </h2>
        </div>

        <div className="md:col-span-8">
          <div className="space-y-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Principled counsel in the heart of Johannesburg, rooted in dignity. Mathe Rodrick Attorneys Inc is a full service law firm serving clients throughout Gauteng. We are built on a simple conviction: every client deserves representation that honours their humanity.
            </p>
            <p>
              From complex litigation to sensitive personal matters, our attorneys tailor their approach to the
              people we serve. We listen carefully, advise honestly, and pursue outcomes that protect both your
              interests and your dignity.
            </p>
          </div>

          <Link
            href="/our-firm"
            className="group mt-10 inline-flex items-center gap-3 border border-border/50 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background hover:shadow-md"
          >
            Meet Our Firm
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}

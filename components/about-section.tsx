import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="border-b border-border-subtle">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Our Firm</p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight md:text-4xl">
            Principled counsel, rooted in dignity.
          </h2>
        </div>

        <div className="md:col-span-8">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Mathe Rodrick Attorneys Inc is a full service firm built on a simple conviction: every client
              deserves representation that honours their humanity. We approach each matter with diligence,
              integrity, and an unwavering commitment to ethical practice.
            </p>
            <p>
              From complex litigation to sensitive personal matters, our attorneys tailor their approach to the
              people we serve. We listen carefully, advise honestly, and pursue outcomes that protect both your
              interests and your dignity.
            </p>
          </div>

          <Link
            href="/our-firm"
            className="group mt-10 inline-flex items-center gap-3 border border-border px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Meet Our Firm
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { OtherServices } from "@/components/other-services"

export interface ServiceChapter {
  /** Anchor id used by the index links, e.g. "corporate-law" */
  id: string
  /** Two digit index, e.g. "01" */
  index: string
  /** Short kicker shown above the title, e.g. "Corporate Law" */
  label: string
  /** Chapter heading */
  title: string
  /** One or more intro paragraphs */
  intro: string[]
  /** Heading for the matters grid, e.g. "Matters We Handle" */
  mattersHeading: string
  /** Flat list of practice areas rendered in a uniform grid */
  matters: string[]
}

export interface DisputeCard {
  number: string
  title: string
  description: string
}

export interface CombinedServicePageProps {
  heroImage: string
  eyebrow: string
  title: string
  heroBlurb: string
  overviewHeading: string
  overview: string[]
  chapters: ServiceChapter[]
  disputeResolution: {
    eyebrow: string
    title: string
    intro: string
    cards: DisputeCard[]
  }
  cta: {
    eyebrow: string
    title: string
    blurb: string
  }
  currentServiceSlug: string
}

export function CombinedServicePage({
  heroImage,
  eyebrow,
  title,
  heroBlurb,
  overviewHeading,
  overview,
  chapters,
  disputeResolution,
  cta,
  currentServiceSlug,
}: CombinedServicePageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[500px] items-center overflow-hidden border-b border-foreground md:min-h-[540px]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 grid w-full gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-white/70">{eyebrow}</p>
              <h1 className="text-4xl font-normal uppercase leading-tight tracking-normal text-white md:text-5xl lg:text-6xl">
                {title}
              </h1>
            </div>
            <div className="flex items-end lg:col-span-7">
              <p className="border-l border-white/20 pl-6 text-base font-normal leading-relaxed text-white/80 md:text-lg">
                {heroBlurb}
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Approach</p>
              <h2 className="mt-4 break-words text-3xl font-normal uppercase leading-tight tracking-normal sm:text-4xl lg:text-4xl xl:text-5xl">
                {overviewHeading}
              </h2>
            </div>
            <div className="space-y-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg lg:col-span-8">
              {overview.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* What this page covers — the signpost */}
        <section className="border-b border-foreground bg-foreground/[0.02]">
          <div className="w-full px-5 py-16 md:px-8 md:py-20">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              What This Page Covers
            </p>
            <p className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
              This practice area brings together two related fields of law. Jump to the section you need.
            </p>
            <div className="mt-8 grid gap-0 border border-foreground md:grid-cols-2">
              {chapters.map((chapter, i) => (
                <a
                  key={chapter.id}
                  href={`#${chapter.id}`}
                  className={[
                    "group flex items-center gap-6 p-8 transition-colors duration-200 hover:bg-foreground hover:text-background",
                    i === 0 ? "border-b border-foreground md:border-b-0 md:border-r" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span className="text-4xl font-normal leading-none text-muted-foreground/50 transition-colors group-hover:text-background md:text-5xl">
                    {chapter.index}
                  </span>
                  <span className="flex-1">
                    <span className="block text-lg font-normal uppercase tracking-wide md:text-xl">
                      {chapter.title}
                    </span>
                    <span className="mt-1 block text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-background/70">
                      {chapter.label}
                    </span>
                  </span>
                  <ArrowRight
                    className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                    strokeWidth={2}
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Chapters — identical anatomy for each service */}
        {chapters.map((chapter) => (
          <section key={chapter.id} id={chapter.id} className="scroll-mt-24 border-b border-foreground">
            <div className="grid w-full gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-normal leading-none text-muted-foreground/40 md:text-6xl">
                    {chapter.index}
                  </span>
                  <span className="h-px flex-1 bg-foreground/20" />
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {chapter.label}
                </p>
                <h2 className="mt-4 break-words text-3xl font-normal uppercase leading-tight tracking-normal sm:text-4xl lg:text-4xl xl:text-5xl">
                  {chapter.title}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                  {chapter.intro.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <p className="mt-12 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {chapter.mattersHeading}
                </p>
                <div className="mt-6 grid grid-cols-1 gap-0 border border-foreground sm:grid-cols-2">
                  {chapter.matters.map((area, index) => {
                    const isLeftColumn = index % 2 === 0
                    const rowCount = Math.ceil(chapter.matters.length / 2)
                    const currentRow = Math.floor(index / 2)
                    const isInLastRow = currentRow === rowCount - 1
                    const isLastItem = index === chapter.matters.length - 1

                    return (
                      <div
                        key={index}
                        className={[
                          "flex items-center gap-4 p-6 transition-colors duration-200 hover:bg-foreground/[0.04]",
                          !isLastItem ? "border-b border-foreground" : "",
                          isInLastRow ? "sm:border-b-0" : "",
                          isLeftColumn ? "sm:border-r sm:border-r-foreground" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        <span className="h-2 w-2 shrink-0 bg-foreground" />
                        <span className="text-sm font-bold uppercase tracking-widest text-foreground">
                          {area}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* How We Resolve Disputes — shared approach block */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {disputeResolution.eyebrow}
              </p>
              <h2 className="mt-4 break-words text-3xl font-normal uppercase leading-tight tracking-normal sm:text-4xl lg:text-4xl xl:text-5xl">
                {disputeResolution.title}
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
                {disputeResolution.intro}
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-8 md:grid-cols-2">
                {disputeResolution.cards.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col border border-foreground bg-background p-8 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:p-10 dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
                  >
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 text-sm font-bold">
                      {card.number}
                    </div>
                    <h3 className="text-2xl font-normal uppercase tracking-wide">{card.title}</h3>
                    <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-foreground">
          <div className="flex w-full flex-col items-start gap-8 px-5 py-20 md:px-8 md:py-28 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0 max-w-2xl flex-1">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{cta.eyebrow}</p>
              <h2 className="mt-4 break-words text-3xl font-normal uppercase leading-tight tracking-normal sm:text-4xl lg:text-4xl xl:text-5xl">
                {cta.title}
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">{cta.blurb}</p>
            </div>
            <div className="flex w-full shrink-0 flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 whitespace-nowrap bg-foreground px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-background transition-all hover:bg-foreground/80"
              >
                Book a Consultation
                <ArrowRight
                  className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                  strokeWidth={2.5}
                />
              </Link>
            </div>
          </div>
        </section>

        <OtherServices currentServiceSlug={currentServiceSlug} />
      </main>
      <SiteFooter />
    </div>
  )
}

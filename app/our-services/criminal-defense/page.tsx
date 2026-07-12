import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Criminal Defense | Mathe Rodrick Attorneys Inc",
  description: "Mathe Rodrick Attorneys Inc provides expert legal services in Criminal Defense.",
}

export default function ServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative border-b border-foreground overflow-hidden">
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 grid w-full gap-12 px-5 py-24 md:grid-cols-12 md:px-8 md:py-32">
            <div className="md:col-span-4">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Legal Service
              </p>
              <h1 className="text-4xl font-normal uppercase leading-tight tracking-normal text-foreground md:text-5xl lg:text-6xl">
                Criminal Defense
              </h1>
            </div>
            <div className="flex items-end md:col-span-8">
              <p className="border-l border-foreground/20 pl-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                Expert representation and counsel tailored to your specific needs in Criminal Defense.
              </p>
            </div>
          </div>
        </section>
        
        <section className="border-b border-foreground">
          <div className="flex w-full flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8 md:py-28">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Consultation</p>
              <h2 className="mt-4 text-3xl font-normal uppercase leading-tight tracking-normal md:text-4xl">
                Need to discuss your legal matters?
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-background transition-all hover:bg-foreground/80"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

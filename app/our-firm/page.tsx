import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight, Scale, Shield, Target, Layers, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Firm | Mathe Rodrick Attorneys Inc",
  description:
    "Learn about Mathe Rodrick Attorneys Inc. A full-service law firm in Johannesburg, Gauteng, built on dignity, integrity, and a passion for results.",
}


const pillars = [
  {
    icon: Scale,
    title: "Integrity",
    description:
      "We hold ourselves to the highest ethical standards in every matter we handle. Honest advice, even when it is difficult, is the cornerstone of everything we do.",
  },
  {
    icon: Shield,
    title: "Dignity",
    description:
      "Every client deserves representation that honours their humanity. We approach each case with empathy and respect, regardless of complexity or circumstance.",
  },
  {
    icon: Target,
    title: "Results",
    description:
      "We pursue outcomes that genuinely protect our clients' interests. Our track record across the South African courts reflects our commitment to excellence.",
  },
  {
    icon: Layers,
    title: "Depth",
    description:
      "We limit the number of matters we accept to ensure the quality of our legal work is not affected by volume. This approach provides the time and space required for careful planning and effective implementation.",
  },
]

const reviews = [
  {
    name: "Thabo M.",
    title: "Excellent Practical Advice",
    content:
      "Highly recommend Mathe Rodrick Attorneys Inc. They took the time to listen and gave me excellent, practical advice. Everything was explained clearly and I always understood my options. It is so refreshing to work with attorneys who genuinely care about their clients.",
  },
  {
    name: "Naledi D.",
    title: "Exceeded Expectations",
    content:
      "The team made a very stressful process feel manageable and always had my best interests at heart. Everyone I dealt with was professional, efficient, and a pleasure to work with. Mathe Rodrick exceeded my expectations at every step.",
  },
  {
    name: "Sipho K.",
    title: "Always Professional",
    content:
      "The firm handled my matter with professionalism and competence throughout. Their attorneys were strategic and supportive from start to finish. I would not hesitate to recommend them to anyone in need of capable and trustworthy legal counsel.",
  },
  {
    name: "Zanele V.",
    title: "Highly Recommend",
    content:
      "I could not have been more pleased with the outcome. The team handled every detail with a high level of care and expertise. Their diligence and attention to the specifics of my matter ensured a fair result that genuinely protected my interests.",
  },
]

export default function OurFirmPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative border-b border-foreground overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/About%20page%20hero.webp')" }}
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 grid w-full gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
            <div className="md:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Firm</p>
              <h1 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                Principled Counsel. Rooted in Dignity.
              </h1>
            </div>
            <div className="flex items-center md:col-span-8">
              <p className="text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                Mathe Rodrick Attorneys Inc is a full-service law firm serving clients throughout Gauteng.
                We are built on a simple conviction: every client deserves representation that honours their humanity.
                From complex litigation to sensitive personal matters, our attorneys tailor their approach to the people we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Our Leader */}
        <section id="our-leader" className="border-b border-foreground">
          <div className="grid w-full gap-8 px-5 py-10 md:grid-cols-12 md:px-8 md:py-14">
            <div className="md:col-span-4">
              <div 
                className="w-full aspect-square border border-foreground/30 bg-muted/10 flex items-center justify-center text-xs uppercase tracking-widest text-muted-foreground/60"
                aria-label="Rodrick Mathe portrait placeholder"
              >
                [Portrait Placeholder]
              </div>
            </div>
            <div className="md:col-span-8 flex flex-col gap-6 justify-center">
              <div>
                <h2 className="text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl flex flex-wrap items-baseline gap-x-4">
                  <span>Rodrick Mathe</span>
                  <span className="text-sm font-light tracking-wider text-muted-foreground/80 md:text-lg">
                    LLB
                  </span>
                </h2>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-foreground">
                  Founder & Managing Director
                </p>
                <p className="mt-4 text-xs font-normal tracking-[0.15em] text-muted-foreground/80">
                  r.mathe@matherodrick.co.za / 073 908 3025
                </p>
              </div>
              <div className="space-y-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Rodrick Mathe is the founder and managing director of the firm. Driven by pure respect for human dignity and centred around ethical legal practices, he has established Mathe Rodrick Attorneys Inc as a distinguished firm in Johannesburg.
                </p>
                <p>
                  With extensive experience as a litigator, Rodrick has built a formidable practice that is highly respected in the legal community. He has represented numerous clients across a wide range of legal circumstances, approaching each matter with a unique perspective and deep insight.
                </p>
                <p>
                  He believes that every client is entitled to robust representation and thrives on advocating for those he represents in all courts of law. Rodrick's track record speaks for itself. He is known as an attorney who will not rest until his client's mandate has been carried out and the best possible result achieved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About the firm */}
        <section className="relative border-b border-foreground overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat opacity-25 bg-[position:75%_35%] md:bg-[position:center_35%]"
            style={{ 
              backgroundImage: "url('/images/our%20experience.webp')"
            }}
          />
          <div className="absolute inset-0 bg-black/15" />
          <div className="relative z-10 grid w-full gap-8 px-5 py-10 md:grid-cols-12 md:px-8 md:py-14">
            <div className="md:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Who We Are</p>
              <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                Our Experience
              </h2>
            </div>
            <div className="space-y-6 text-base font-normal leading-relaxed text-muted-foreground md:col-span-8 md:text-lg">
              <p>
                Based in the heart of Johannesburg at Klamson Towers, Mathe Rodrick Attorneys Inc has built a reputation as a firm that listens carefully, advises honestly, and pursues outcomes that protect both your interests and your dignity. Having represented numerous clients across a wide range of legal circumstances, we approach each matter with a unique perspective and deep insight.
              </p>
              <p>
                Our attorneys bring robust expertise to the table across general civil and commercial litigation, family law, labour matters, and deceased estate administration. We serve individuals, families, and businesses throughout Gauteng with the same unwavering dedication and substantial collective experience.
              </p>
              <p>
                We believe that quality legal representation should not be a privilege. Whether you are navigating a personal challenge or managing complex business disputes, our team is committed to delivering counsel that is clear, strategic, and grounded in principle.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-foreground">
          <div className="px-5 py-20 md:px-8 md:py-28">
            <div className="mb-12 md:mb-16">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Values</p>
              <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                Principles That Guide Us
              </h2>
            </div>

            {/* Desktop: 4 separate bordered squares side by side */}
            <div className="hidden md:flex md:flex-row md:gap-6">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex flex-1 flex-col gap-6 border border-foreground p-8">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-foreground/30">
                    <Icon className="h-4 w-4 text-foreground/60" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">{title}</h3>
                    <p className="mt-3 text-sm font-normal leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: plain list with bold dividers */}
            <div className="md:hidden">
              {pillars.map(({ icon: Icon, title, description }, i) => (
                <div key={title} className={`py-6 ${i !== 0 ? "border-t-2 border-foreground" : ""}`}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">{title}</h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
            <div className="md:col-span-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">What Clients Are Saying</p>
              <h2 className="mt-4 text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl">
                5-Star Reviews
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid gap-8 sm:grid-cols-2">
                {reviews.map((review, i) => (
                  <div key={i} className="flex flex-col border border-foreground/20 p-8">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">{review.title}</h3>
                    <p className="mt-4 mb-8 text-sm font-normal leading-relaxed text-muted-foreground flex-1">
                      "{review.content}"
                    </p>
                    <div className="mt-auto pt-6 border-t border-foreground/10">
                      <p className="text-xs font-bold uppercase tracking-widest text-foreground">{review.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">Google Reviews</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-foreground">
          <div className="flex w-full flex-col items-center text-center gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:text-left md:px-8 md:py-28">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Work With Us</p>
              <h2 className="mt-4 text-3xl font-normal uppercase leading-tight tracking-normal md:text-4xl">
                Ready to Discuss Your Legal Matter?
              </h2>
            </div>
            <div className="flex flex-col gap-4 w-full sm:flex-row md:w-auto md:justify-end">
              <Link
                href="#our-leader"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-foreground/40 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Meet Our Leader
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" strokeWidth={1.5} />
              </Link>
              <Link
                href="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-foreground px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-background transition-all hover:bg-foreground/80"
              >
                Contact Us
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

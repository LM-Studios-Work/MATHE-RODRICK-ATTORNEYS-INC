import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cookie Policy | Mathe Rodrick Attorneys Inc",
  description:
    "Understand how Mathe Rodrick Attorneys Inc uses cookies and similar technologies on our website, what data they collect, and how to manage your preferences.",
}

const cookieTypes = [
  {
    name: "Strictly Necessary Cookies",
    description:
      "These cookies are essential for the basic functionality of the website. They enable core features such as page navigation and access to secure areas of the site. The website cannot function properly without these cookies, and they cannot be disabled.",
    examples: [
      "Session management cookies that maintain your browsing session",
      "Security cookies that protect against cross-site request forgery",
    ],
    canDisable: false,
  },
  {
    name: "Analytics Cookies",
    description:
      "These cookies allow us to understand how visitors interact with our website by collecting information about the pages visited, time spent on the site, and any error messages encountered. All data collected by these cookies is aggregated and anonymised.",
    examples: [
      "Google Analytics or similar tools that track page views and visitor behaviour",
      "Performance monitoring cookies that help us identify technical issues",
    ],
    canDisable: true,
  },
  {
    name: "Functional Cookies",
    description:
      "These cookies enable enhanced functionality and personalisation, such as remembering your preferences or display settings. If you do not allow these cookies, some features of the website may not function optimally.",
    examples: [
      "Cookies that remember your preferred language or region",
      "Cookies that remember whether you have previously visited the site",
    ],
    canDisable: true,
  },
]

const sections = [
  {
    id: "what-are-cookies",
    number: "01",
    title: "What Are Cookies",
    content: [
      "Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently, to provide a better browsing experience, and to give website operators useful information about how their site is being used.",
      "Cookies may be set by the website you are visiting (\"first-party cookies\") or by third parties whose content or services appear on the page (\"third-party cookies\"). Some cookies are deleted when you close your browser (\"session cookies\"), while others remain on your device until they expire or are manually deleted (\"persistent cookies\").",
    ],
  },
  {
    id: "how-we-use-cookies",
    number: "02",
    title: "How We Use Cookies",
    content: [
      "The Mathe Rodrick Attorneys Inc website uses cookies for the following purposes:",
    ],
    list: [
      "To ensure the website functions correctly and securely",
      "To understand how visitors navigate and interact with our website",
      "To improve the performance and usability of our website",
      "To remember your preferences and settings during and between visits",
    ],
    additionalContent: [
      "We do not use cookies for targeted advertising or to build marketing profiles. Our use of cookies is limited to improving the functionality and performance of this website.",
    ],
  },
  {
    id: "types-of-cookies",
    number: "03",
    title: "Types of Cookies We Use",
    content: [
      "The following categories of cookies may be used on our website:",
    ],
    cookieTable: true,
  },
  {
    id: "third-party-cookies",
    number: "04",
    title: "Third-Party Cookies",
    content: [
      "Certain pages on our website may contain content or functionality provided by third parties, such as embedded maps or analytics services. These third parties may set their own cookies when you interact with their content.",
      "We do not control the cookies set by third parties and recommend that you review the privacy and cookie policies of any third-party services you interact with. Third-party services that may set cookies on our website include:",
    ],
    list: [
      "Google Analytics: for website traffic analysis and performance monitoring",
      "Google Maps: if embedded on our contact page for directions to our office",
      "Facebook: if social media sharing or page widgets are present on the site",
    ],
    additionalContent: [
      "Each of these third parties has its own privacy and cookie policy, which governs the data they collect.",
    ],
  },
  {
    id: "managing-cookies",
    number: "05",
    title: "Managing Your Cookie Preferences",
    content: [
      "You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences in the following ways:",
    ],
    subSections: [
      {
        title: "Browser Settings",
        content:
          "Most web browsers allow you to control cookies through their settings. You can usually set your browser to block all cookies, accept all cookies, or notify you when a cookie is being set. The method for managing cookies varies by browser. Please consult your browser's help section for instructions.",
      },
      {
        title: "Deleting Existing Cookies",
        content:
          "You can delete cookies that have already been stored on your device through your browser settings. This will remove all cookies from all websites you have visited, unless you selectively remove them.",
      },
      {
        title: "Impact of Disabling Cookies",
        content:
          "If you choose to block or delete cookies, some features of our website may not function as intended. Strictly necessary cookies cannot be disabled, as they are required for the basic operation of the site.",
      },
    ],
  },
  {
    id: "do-not-track",
    number: "06",
    title: "Do Not Track Signals",
    content: [
      "Some web browsers transmit \"Do Not Track\" (DNT) signals to websites. As there is no universally accepted standard for how websites should respond to DNT signals, our website does not currently respond to DNT signals. We will review this position as standards develop.",
    ],
  },
  {
    id: "popia-compliance",
    number: "07",
    title: "Compliance with South African Law",
    content: [
      "Our use of cookies complies with the Protection of Personal Information Act 4 of 2013 (POPIA) and the Electronic Communications and Transactions Act 25 of 2002 (ECTA). Where cookies collect personal information, that information is processed in accordance with our Privacy Policy.",
    ],
    linkTo: { label: "Read our Privacy Policy", href: "/privacy-policy" },
  },
  {
    id: "changes",
    number: "08",
    title: "Changes to This Policy",
    content: [
      "We may update this Cookie Policy from time to time to reflect changes in our use of cookies, in technology, or in applicable legislation. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
    ],
  },
  {
    id: "contact",
    number: "09",
    title: "Contact Us",
    content: [
      "If you have any questions about our use of cookies or this Cookie Policy, please contact us:",
    ],
    contactBlock: true,
  },
]

export default function CookiePolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="border-b border-foreground">
          <div className="grid w-full gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Legal
              </p>
              <h1 className="text-4xl font-normal uppercase leading-tight tracking-normal md:text-5xl lg:text-6xl">
                Cookie Policy
              </h1>
            </div>
            <div className="flex items-end lg:col-span-7">
              <p className="border-l border-foreground/20 pl-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                This policy explains how Mathe Rodrick Attorneys Inc uses cookies and similar technologies when you visit our website, what information they collect, and how you can manage your preferences.
              </p>
            </div>
          </div>
        </section>

        {/* Effective date */}
        <section className="border-b border-foreground bg-foreground/[0.02]">
          <div className="w-full px-5 py-8 md:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Effective Date: 1 August 2026
            </p>
          </div>
        </section>

        {/* Sections */}
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 border-b border-foreground"
          >
            <div className="grid w-full gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-normal leading-none text-muted-foreground/40 md:text-5xl">
                    {section.number}
                  </span>
                  <span className="h-px flex-1 bg-foreground/20" />
                </div>
                <h2 className="mt-6 break-words text-2xl font-normal uppercase leading-tight tracking-normal sm:text-3xl">
                  {section.title}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                  {section.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {section.list && (
                  <ul className="mt-8 space-y-0 border border-foreground">
                    {section.list.map((item, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-4 p-5 text-sm font-normal leading-relaxed text-muted-foreground ${
                          index < section.list!.length - 1 ? "border-b border-foreground" : ""
                        }`}
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 bg-foreground" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Cookie types table */}
                {section.cookieTable && (
                  <div className="mt-8 space-y-6">
                    {cookieTypes.map((cookie, index) => (
                      <div key={index} className="border border-foreground">
                        <div className="flex items-center justify-between border-b border-foreground p-6">
                          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
                            {cookie.name}
                          </h3>
                          <span
                            className={`text-xs font-bold uppercase tracking-widest ${
                              cookie.canDisable ? "text-muted-foreground" : "text-foreground"
                            }`}
                          >
                            {cookie.canDisable ? "Optional" : "Required"}
                          </span>
                        </div>
                        <div className="p-6">
                          <p className="text-sm font-normal leading-relaxed text-muted-foreground">
                            {cookie.description}
                          </p>
                          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            Examples
                          </p>
                          <ul className="mt-3 space-y-2">
                            {cookie.examples.map((example, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm font-normal leading-relaxed text-muted-foreground">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-foreground/50" />
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Sub-sections for managing cookies */}
                {section.subSections && (
                  <div className="mt-8 space-y-8">
                    {section.subSections.map((sub, index) => (
                      <div key={index}>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
                          {sub.title}
                        </h3>
                        <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                          {sub.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.additionalContent && (
                  <div className="mt-8 space-y-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                    {section.additionalContent.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {section.contactBlock && (
                  <div className="mt-8 border border-foreground p-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Information Officer
                    </p>
                    <div className="mt-6 space-y-3 text-sm font-normal leading-relaxed text-muted-foreground">
                      <p className="text-foreground">Mathe Rodrick Attorneys Inc</p>
                      <p>Suite 701, 7th Floor, 151 Commissioner Street, Klamson Towers, Johannesburg, 2001</p>
                      <p>
                        Email:{" "}
                        <a
                          href="mailto:info@rmatheattorneys.co.za"
                          className="text-foreground transition-colors hover:text-foreground/80"
                        >
                          info@rmatheattorneys.co.za
                        </a>
                      </p>
                      <p>
                        Telephone:{" "}
                        <a
                          href="tel:+27739083025"
                          className="text-foreground transition-colors hover:text-foreground/80"
                        >
                          073 908 3025
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {section.linkTo && (
                  <div className="mt-8">
                    <Link
                      href={section.linkTo.href}
                      className="group inline-flex items-center gap-3 border border-foreground px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background"
                    >
                      {section.linkTo.label}
                      <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

      </main>
      <SiteFooter />
    </div>
  )
}

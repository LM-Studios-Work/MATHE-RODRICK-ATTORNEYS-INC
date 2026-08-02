import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Mathe Rodrick Attorneys Inc",
  description:
    "Learn how Mathe Rodrick Attorneys Inc collects, uses, and protects your personal information in accordance with the Protection of Personal Information Act (POPIA).",
}

const sections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    content: [
      "Mathe Rodrick Attorneys Inc (\"we\", \"our\", or \"the Firm\") is committed to protecting your personal information in accordance with the Protection of Personal Information Act 4 of 2013 (\"POPIA\") and all applicable South African data protection legislation.",
      "This Privacy Policy explains what personal information we collect, how we use it, who we may share it with, and how we protect it. It applies to all personal information processed by the Firm, whether collected through this website, by email, by telephone, via WhatsApp, or during in-person consultations at our offices.",
      "By engaging with our services or using this website, you acknowledge that you have read and understood this Privacy Policy.",
    ],
  },
  {
    id: "information-officer",
    number: "02",
    title: "Information Officer",
    content: [
      "In terms of POPIA, the Firm has designated an Information Officer who is responsible for ensuring compliance with the conditions of lawful processing of personal information.",
      "You may direct any queries, requests, or complaints regarding the processing of your personal information to:",
    ],
    contactBlock: true,
  },
  {
    id: "information-we-collect",
    number: "03",
    title: "Personal Information We Collect",
    content: [
      "The types of personal information we collect depend on the nature of your engagement with the Firm. This may include:",
    ],
    list: [
      "Full name, surname, and title",
      "Identity number or passport number",
      "Physical and postal address",
      "Email address and telephone number(s)",
      "Employment details, where relevant to your legal matter",
      "Financial information, including banking details for trust account transactions",
      "Marital status and details of dependants, particularly in family law and estate administration matters",
      "Company registration details, directorships, and shareholding information for corporate and insolvency matters",
      "Criminal records or case numbers, where relevant to criminal defence matters",
      "Property descriptions, title deed information, and lease agreements for property law matters",
      "Medical records, where relevant to labour disputes or personal injury claims",
      "Any other information you voluntarily provide or that is necessary for us to provide legal services",
    ],
  },
  {
    id: "how-we-collect",
    number: "04",
    title: "How We Collect Your Information",
    content: [
      "We collect personal information directly from you when you:",
    ],
    list: [
      "Complete the contact form on this website",
      "Send us an email or WhatsApp message",
      "Call our offices",
      "Attend a consultation at our Johannesburg office",
      "Instruct us to act on your behalf in any legal matter",
      "Provide documents or information in the course of our legal representation",
    ],
    additionalContent: [
      "In certain circumstances, we may also collect personal information from third parties, including opposing parties, courts, government departments, the Companies and Intellectual Property Commission (CIPC), the Deeds Office, medical practitioners, or other legal professionals involved in your matter.",
    ],
  },
  {
    id: "purpose-of-processing",
    number: "05",
    title: "Purpose of Processing",
    content: [
      "We process your personal information for the following purposes:",
    ],
    list: [
      "To provide legal advice and representation across our practice areas, including general civil litigation, corporate and insolvency law, family and estate administration, labour and pension law, property law, and criminal defence",
      "To communicate with you about your legal matter",
      "To comply with our obligations under the Legal Practice Act and the rules of the relevant courts",
      "To manage trust account transactions and comply with the Financial Intelligence Centre Act (FICA)",
      "To issue invoices and manage fee arrangements",
      "To respond to enquiries submitted through our website or other channels",
      "To comply with any applicable legal or regulatory obligation",
      "To establish, exercise, or defend legal claims on your behalf",
    ],
  },
  {
    id: "lawful-basis",
    number: "06",
    title: "Lawful Basis for Processing",
    content: [
      "We process your personal information on one or more of the following lawful grounds under POPIA:",
    ],
    list: [
      "Your consent, where expressly given",
      "The processing is necessary for the performance of a contract to which you are a party (i.e., our mandate or letter of engagement)",
      "The processing is necessary for compliance with a legal obligation to which the Firm is subject",
      "The processing is necessary for pursuing the legitimate interests of the Firm or a third party, provided this does not prejudice your rights",
      "The processing is necessary to protect your legitimate interests or those of another person",
    ],
  },
  {
    id: "sharing",
    number: "07",
    title: "Sharing of Personal Information",
    content: [
      "We do not sell, trade, or rent your personal information. We may share your personal information with the following categories of recipients, only to the extent necessary:",
    ],
    list: [
      "Courts, tribunals, and other judicial bodies (e.g., the CCMA, Rental Housing Tribunal)",
      "Opposing legal representatives and parties to your matter",
      "Government departments and regulatory bodies, including the Master of the High Court, the Deeds Office, and the Department of Home Affairs",
      "Accounting professionals, auditors, or financial institutions, as required for trust account management or FICA compliance",
      "Instructed counsel or correspondent attorneys",
      "Service providers who assist with IT, document management, or website hosting, subject to appropriate confidentiality agreements",
    ],
    additionalContent: [
      "All third parties who receive your personal information are required to treat it with the same level of confidentiality and security as the Firm.",
    ],
  },
  {
    id: "retention",
    number: "08",
    title: "Retention of Personal Information",
    content: [
      "We retain your personal information only for as long as is necessary to fulfil the purposes for which it was collected, or as required by law. Specific retention periods include:",
    ],
    list: [
      "Client files: retained for a minimum of five (5) years after the conclusion of the matter, in accordance with the rules of the Legal Practice Council",
      "Financial records and trust account documentation: retained for a minimum of five (5) years in compliance with tax and accounting legislation",
      "Website enquiry data: retained for a maximum of twelve (12) months after the enquiry has been addressed",
    ],
    additionalContent: [
      "Once the applicable retention period has expired, your personal information will be securely destroyed or de-identified.",
    ],
  },
  {
    id: "security",
    number: "09",
    title: "Security Measures",
    content: [
      "The Firm takes reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, destruction, or damage. These measures include:",
    ],
    list: [
      "Secure storage of physical files at our Johannesburg office",
      "Password-protected electronic systems and devices",
      "Limited access to personal information on a need-to-know basis",
      "Confidentiality obligations on all staff members",
      "Secure communication channels for sensitive correspondence",
    ],
    additionalContent: [
      "While we take all reasonable steps to protect your personal information, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security.",
    ],
  },
  {
    id: "your-rights",
    number: "10",
    title: "Your Rights Under POPIA",
    content: [
      "As a data subject, you have the following rights in respect of your personal information:",
    ],
    list: [
      "The right to be informed that your personal information is being collected, and the purpose for which it is being collected",
      "The right to request access to your personal information held by the Firm",
      "The right to request correction or deletion of your personal information",
      "The right to object to the processing of your personal information on reasonable grounds",
      "The right to withdraw your consent to processing, where consent was the basis for processing",
      "The right to lodge a complaint with the Information Regulator if you believe your rights have been infringed",
    ],
    additionalContent: [
      "To exercise any of these rights, please contact our Information Officer using the details provided in Section 02 above. We will respond to your request within a reasonable time and in accordance with POPIA.",
    ],
  },
  {
    id: "cookies",
    number: "11",
    title: "Cookies and Website Analytics",
    content: [
      "Our website uses cookies and similar technologies to improve your browsing experience. For full details on the types of cookies we use, how they work, and how to manage your preferences, please refer to our Cookie Policy.",
    ],
    linkTo: { label: "Read our Cookie Policy", href: "/cookie-policy" },
  },
  {
    id: "children",
    number: "12",
    title: "Children's Information",
    content: [
      "We do not knowingly collect personal information from children under the age of 18 without the consent of a parent or legal guardian. Where we process personal information of minors in the course of family law matters, we do so with the consent and instruction of the parent or guardian who has mandated the Firm.",
    ],
  },
  {
    id: "changes",
    number: "13",
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the services we offer. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
    ],
  },
  {
    id: "contact",
    number: "14",
    title: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:",
    ],
    contactBlock: true,
  },
]

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
            </div>
            <div className="flex items-end lg:col-span-7">
              <p className="border-l border-foreground/20 pl-6 text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
                This policy sets out how Mathe Rodrick Attorneys Inc collects, uses, stores, and protects your personal information in accordance with the Protection of Personal Information Act (POPIA) and applicable South African law.
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

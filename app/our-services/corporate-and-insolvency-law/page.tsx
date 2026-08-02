import { Metadata } from "next"
import { CombinedServicePage } from "@/components/combined-service-page"

export const metadata: Metadata = {
  title: "Corporate & Insolvency Law | Mathe Rodrick Attorneys Inc",
  description:
    "Mathe Rodrick Attorneys Inc provides expert legal services in Corporate & Insolvency Law in Johannesburg and Gauteng.",
}

export default function CorporateInsolvencyLawPage() {
  return (
    <CombinedServicePage
      currentServiceSlug="corporate-and-insolvency-law"
      heroImage="/images/corporate%20law%20hero.jpg"
      eyebrow="Practice Area"
      title="Corporate & Insolvency Law"
      heroBlurb="We help businesses and individuals navigate contract disputes, commercial litigation, and the difficult realities of insolvency with personalised, efficient legal support."
      overviewHeading="What We Do"
      overview={[
        "Mathe Rodrick Attorneys Inc is an established law firm in Johannesburg with deep experience in corporate and insolvency matters. We understand that business disputes and financial pressure can feel overwhelming, and that inaction only makes things worse.",
        "Our team provides personalised legal support to companies and individuals across Gauteng. Whether you are dealing with a contract dispute, a partnership that has gone wrong, or mounting debts, we have the experience to help you find a way through.",
      ]}
      chapters={[
        {
          id: "corporate-and-commercial-law",
          index: "01",
          label: "Corporate Law",
          title: "Corporate & Commercial Law",
          intro: [
            "Running a business comes with legal risk at every turn. We help you manage that risk by protecting your commercial interests while keeping your operations on solid ground.",
          ],
          mattersHeading: "Matters We Handle",
          matters: [
            "Breach of Contract Disputes",
            "Shareholder Disagreements",
            "Corporate Governance",
            "Commercial Agreements",
            "General Commercial Litigation",
          ],
        },
        {
          id: "insolvency-and-restructuring",
          index: "02",
          label: "Insolvency",
          title: "Insolvency & Restructuring",
          intro: [
            "When debts become unmanageable, the legal process can feel just as overwhelming as the financial pressure itself. We help both businesses and individuals navigate insolvency with clarity and efficiency.",
            "Whether you are owed money and need to recover it, or you are in financial distress and need legal protection, we manage the process so you can see a clear way forward.",
          ],
          mattersHeading: "Matters We Handle",
          matters: [
            "Voluntary Liquidations",
            "Compulsory Liquidations",
            "Personal Sequestrations",
            "Business Rescue Proceedings",
            "Commercial Debt Restructuring",
            "Creditor Debt Recovery",
          ],
        },
      ]}
      disputeResolution={{
        eyebrow: "Dispute Resolution",
        title: "Resolving Commercial Disputes",
        intro:
          "We choose the approach that best fits your commercial situation, taking into account the urgency, the complexity, and the relationships at stake.",
        cards: [
          {
            number: "01",
            title: "Out of Court Options",
            description:
              "We look for efficient solutions through negotiation and mediation first. These methods protect your business relationships, save time, and keep legal costs down.",
          },
          {
            number: "02",
            title: "Litigation",
            description:
              "When a settlement is not possible, we provide strong representation in the High Court and commercial courts to protect your financial position and your reputation.",
          },
        ],
      }}
      cta={{
        eyebrow: "Principled Counsel",
        title: "Principled Counsel For Your Business",
        blurb:
          "Whether you are starting a new business venture, resolving a contract dispute, or dealing with the realities of insolvency, we are here to provide clear, honest, and effective legal support.",
      }}
      imagePlaceholder={{
        suggestion:
          "A wide landscape photo that signals corporate credibility works best here — for example a boardroom meeting, the team reviewing contracts, or a modern Johannesburg office exterior.",
        suggestedPath: "/images/corporate-law-band.jpg",
      }}
    />
  )
}

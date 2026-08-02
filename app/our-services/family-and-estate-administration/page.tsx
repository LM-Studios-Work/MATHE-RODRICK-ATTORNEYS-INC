import { Metadata } from "next"
import { CombinedServicePage } from "@/components/combined-service-page"

export const metadata: Metadata = {
  title: "Family Law & Deceased Estates | Mathe Rodrick Attorneys Inc",
  description:
    "Mathe Rodrick Attorneys Inc provides expert legal services in Family Law and Deceased Estates Administration in Johannesburg and Gauteng.",
}

export default function FamilyLawPage() {
  return (
    <CombinedServicePage
      currentServiceSlug="family-and-estate-administration"
      heroImage="/images/Family%20law%20hero.webp"
      eyebrow="Practice Area"
      title="Family Law & Deceased Estates"
      heroBlurb="We help clients through the difficulty of family law matters and the emotional weight of administering a loved one's estate, with personal attention and efficient legal service."
      overviewHeading="What We Do"
      overview={[
        "Mathe Rodrick Attorneys Inc is an established law firm in Johannesburg with deep experience in family law and estate matters. We understand that family disputes and the loss of a loved one are among life's most difficult experiences.",
        "Our team provides personalised legal support to clients across Gauteng. We have the experience to guide you through these situations with care, sensitivity, and the efficiency that your circumstances demand.",
      ]}
      chapters={[
        {
          id: "family-law",
          index: "01",
          label: "Family Law",
          title: "Full Service Family Law",
          intro: [
            "Family law matters often involve difficult questions about children, finances, and the future. We shape our approach around your specific needs, both legal and personal.",
          ],
          mattersHeading: "Matters We Handle",
          matters: [
            "Divorce & Separation",
            "Child & Spousal Support",
            "Property Division",
            "Parenting Plans",
            "Domestic Contracts",
          ],
        },
        {
          id: "deceased-estates",
          index: "02",
          label: "Estates",
          title: "Deceased Estates Administration",
          intro: [
            "Losing a family member is painful enough without having to navigate legal processes on top of it. We handle the administration of deceased estates with compassion and efficiency, so you can focus on your family.",
            "We take care of all the requirements with the Master of the High Court, making sure the estate is finalised properly, transparently, and without unnecessary delays.",
          ],
          mattersHeading: "Matters We Handle",
          matters: [
            "Drafting Wills",
            "Reporting to the Master",
            "Executorship",
            "Liquidation & Distribution",
            "Property Transfers",
            "Resolving Disputes",
          ],
        },
      ]}
      disputeResolution={{
        eyebrow: "Dispute Resolution",
        title: "Resolving Family Disputes",
        intro:
          "We choose the approach that best fits your situation, taking into account how urgent the matter is and how much conflict is involved.",
        cards: [
          {
            number: "01",
            title: "Out of Court Options",
            description:
              "We always try to settle things through negotiation, mediation, or collaborative law first. These methods give you more privacy, more flexibility, and far less emotional strain than a courtroom battle.",
          },
          {
            number: "02",
            title: "Litigation",
            description:
              "When a settlement outside of court is not possible, we provide strong courtroom representation to protect your interests and your dignity.",
          },
        ],
      }}
      cta={{
        eyebrow: "Principled Counsel",
        title: "Principled Counsel For Your Family",
        blurb:
          "Whether you are going through a divorce, putting a co-parenting agreement in place, or dealing with the estate of a loved one who has passed, we are here to help with clear, compassionate, and effective legal support.",
      }}
      image={{
        src: "/service%20page%20placeholders/family%20law%20first%20placeholder.webp",
        alt: "Family law consultation",
      }}
      secondaryImage={{
        src: "/service%20page%20placeholders/estate%20law%20second%20placeholder.webp",
        alt: "Estate law documentation",
      }}
    />
  )
}

import { Metadata } from "next"
import { CombinedServicePage } from "@/components/combined-service-page"

export const metadata: Metadata = {
  title: "Labour & Pension Law | Mathe Rodrick Attorneys Inc",
  description:
    "Mathe Rodrick Attorneys Inc provides expert legal services in Labour & Pension Law in Johannesburg and Gauteng.",
}

export default function LabourPensionLawPage() {
  return (
    <CombinedServicePage
      currentServiceSlug="labour-and-pension-law"
      heroImage="/images/Labour%20Law%20Hero.png"
      eyebrow="Practice Area"
      title="Labour & Pension Law"
      heroBlurb="We help employees, employers, and fund members navigate workplace disputes, unfair dismissals, and pension fund issues with personalised, efficient legal support."
      overviewHeading="What We Do"
      overview={[
        "Mathe Rodrick Attorneys Inc is an established law firm in Johannesburg with extensive experience in labour and pension matters. We understand that problems at work or with your pension fund do not just create legal issues. They affect your income, your sense of dignity, and your financial future.",
        "Our team provides personalised legal support to employers, employees, and pension fund members across Gauteng. Whether you are dealing with a dismissal, a disciplinary hearing, or a dispute with your retirement fund, we have the experience to help you through it.",
      ]}
      chapters={[
        {
          id: "labour-and-employment-law",
          index: "01",
          label: "Employment Law",
          title: "Labour & Employment Law",
          intro: [
            "Your job is central to your life and your stability. We tailor our approach to protect your workplace rights and make sure that fair labour practices are upheld.",
          ],
          mattersHeading: "Matters We Handle",
          matters: [
            "Unfair Dismissals",
            "Retrenchments",
            "Workplace Disciplinary Hearings",
            "Employment Contracts",
            "Discrimination Claims",
            "Strike Management",
          ],
        },
        {
          id: "pension-fund-law",
          index: "02",
          label: "Pension Fund Law",
          title: "Pension Fund Law",
          intro: [
            "Your retirement savings represent years of work. When disputes arise with your pension or provident fund, you need legal support from a team that understands how these funds operate and how to hold them accountable.",
            "We provide focused, efficient legal help for all pension-related disputes, handling the regulatory side so you can focus on getting the outcome you are entitled to.",
          ],
          mattersHeading: "Matters We Handle",
          matters: [
            "Unpaid Pension Contributions",
            "Withdrawal Disputes",
            "Delayed Death Benefits",
            "Fund Compliance Issues",
            "Pension Funds Adjudicator",
            "Surplus Apportionment",
          ],
        },
      ]}
      disputeResolution={{
        eyebrow: "Dispute Resolution",
        title: "Resolving Workplace & Pension Disputes",
        intro:
          "We choose the approach that best fits your situation, taking into account how urgent the matter is, how complex it is, and how much conflict is involved.",
        cards: [
          {
            number: "01",
            title: "Out of Court Options",
            description:
              "We always look for efficient solutions first through negotiation, mediation, and internal grievance processes. The goal is to resolve the issue quickly, saving you time and unnecessary stress.",
          },
          {
            number: "02",
            title: "Formal Proceedings & Litigation",
            description:
              "When a settlement is not possible, we represent you formally. This includes proceedings at the CCMA, Bargaining Councils, the Labour Court, and the Pension Funds Adjudicator. We are experienced in all of these forums and will fight to protect your rights.",
          },
        ],
      }}
      cta={{
        eyebrow: "Principled Counsel",
        title: "Principled Counsel For Your Livelihood",
        blurb:
          "Whether you are dealing with an unfair dismissal, putting employment contracts in place, or challenging a pension fund decision that does not add up, we are here to provide clear, honest, and effective legal support.",
      }}
    />
  )
}

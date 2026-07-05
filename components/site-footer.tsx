import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Firm", href: "/our-firm" },
  { label: "Our Team", href: "/our-team" },
  { label: "Our Services", href: "/our-services" },
  { label: "Contact", href: "/contact" },
]

const serviceLinks = [
  { label: "General Civil Litigation", href: "/our-services/general-civil-litigation" },
  { label: "Commercial Litigation", href: "/our-services/commercial-litigation" },
  { label: "Criminal Law Litigation", href: "/our-services/criminal-law-litigation" },
  { label: "Family Law", href: "/our-services/family-law" },
  { label: "Labour & Employment Law", href: "/our-services/labour-and-employment-law" },
  { label: "Property Law", href: "/our-services/property-law" },
  { label: "Pension Fund Law", href: "/our-services/pension-fund-law" },
  { label: "Insolvency Law", href: "/our-services/insolvency-law" },
  { label: "Deceased Estates Administration", href: "/our-services/deceased-estates-administration" },
]

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-border">
      <div className="w-full px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">

          {/* Brand */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center border border-border/50 text-lg font-thin tracking-widest shadow-sm">
                RM
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-[0.18em]">MATHE RODRICK</span>
                <span className="text-[0.6rem] font-bold tracking-[0.4em] text-muted-foreground">ATTORNEYS INC</span>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              Customised legal services driven by pure respect for human dignity and centred around ethical
              legal practices.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Quick Links</p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Our Services</p>
            <ul className="mt-6 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
            <ul className="mt-6 space-y-4 text-sm font-light text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  Suite 701, 7th Floor
                  <br />
                  151 Commissioner Street
                  <br />
                  Klamson Towers
                  <br />
                  Johannesburg, 2001
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href="tel:+27739083025" className="transition-colors hover:text-foreground">
                  073 9083025
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href="mailto:info@rmatheattorneys.co.za" className="transition-colors hover:text-foreground">
                  info@rmatheattorneys.co.za
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 text-xs font-bold text-muted-foreground/60 sm:flex-row">
          <p>Copyright 2026 Mathe Rodrick Attorneys Inc. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Justice with dignity</p>
        </div>
      </div>
    </footer>
  )
}

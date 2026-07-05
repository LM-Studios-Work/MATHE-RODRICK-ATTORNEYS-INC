import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Firm", href: "/our-firm" },
  { label: "Our Team", href: "/our-team" },
  { label: "Our Services", href: "/our-services" },
  { label: "Contact", href: "/contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-border">
      <div className="w-full px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
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
          <div className="md:col-span-3">
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
                  Johannesburg, Gauteng, 2001
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

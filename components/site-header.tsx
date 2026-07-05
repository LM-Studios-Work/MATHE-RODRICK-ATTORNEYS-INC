"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Firm", href: "/our-firm" },
  { label: "Our Team", href: "/our-team" },
  { label: "Our Services", href: "/our-services" },
  { label: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3" aria-label="Mathe Rodrick Attorneys Inc home">
          <span className="flex h-11 w-11 items-center justify-center border border-border font-serif text-lg font-semibold tracking-widest">
            RM
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-sm font-semibold tracking-[0.18em]">MATHE RODRICK</span>
            <span className="text-[0.6rem] tracking-[0.4em] text-muted-foreground">ATTORNEYS INC</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+27739083025"
            className="hidden items-center gap-2 border border-border px-4 py-2.5 text-xs font-medium tracking-[0.15em] transition-colors hover:bg-foreground hover:text-background md:flex"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            073 9083025
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          className="border-t border-border-subtle bg-background lg:hidden"
          aria-label="Mobile primary"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border-subtle py-4 text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+27739083025"
              className="flex items-center gap-2 py-4 text-sm tracking-[0.15em]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              073 9083025
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

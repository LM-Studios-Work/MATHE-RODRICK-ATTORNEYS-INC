"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ChevronDown } from "lucide-react"

const services = [
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

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const servicesRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setDesktopServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  // Hide on scroll down, show on scroll up (throttled via rAF)
  useEffect(() => {
    let ticking = false

    function handleScroll() {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY
        if (currentY < 10) {
          setVisible(true)
        } else if (currentY > lastScrollY.current + 5) {
          // Scrolling down — hide
          setVisible(false)
          setDesktopServicesOpen(false)
        } else if (currentY < lastScrollY.current - 5) {
          // Scrolling up — show
          setVisible(true)
        }
        lastScrollY.current = currentY
        ticking = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* spacer */}
      <div className="h-[66px]" aria-hidden="true" />
      <header className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Subtle white gradient line at the top for pop */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="flex h-[66px] w-full items-center justify-between px-5 md:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3" aria-label="Mathe Rodrick Attorneys Inc home">
            <span className="flex h-11 w-11 items-center justify-center border border-border/50 bg-background/50 text-lg font-normal tracking-widest text-foreground shadow-sm transition-all group-hover:border-foreground/40 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              RM
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-sm font-normal tracking-widest text-foreground">MATHE RODRICK</span>
              <span className="text-[0.6rem] font-normal tracking-widest text-muted-foreground">ATTORNEYS INC</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-16 lg:flex" aria-label="Primary">
            <Link
              href="/"
              className={`relative text-[12px] font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:text-foreground/80 ${
                pathname === '/' ? 'after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-foreground' : ''
              }`}
            >
              Home
            </Link>

            {/* Desktop Services Dropdown (hover) */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <Link
                href="/our-services"
                className={`flex items-center text-[12px] font-medium uppercase tracking-[0.2em] transition-all hover:text-foreground/80 ${
                  desktopServicesOpen ? 'text-foreground/80' : 'text-foreground'
                } ${
                  pathname.startsWith('/our-services') ? 'after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-foreground' : ''
                } relative`}
              >
                Our Services
              </Link>

              {/* Dropdown panel */}
              <div
                className={`absolute left-1/2 top-[calc(100%+1.25rem)] z-50 w-80 -translate-x-1/2 border border-border/40 bg-background/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
                  desktopServicesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-4 opacity-0"
                }`}
              >
                {/* Invisible bridge to keep hover active between the link and the dropdown */}
                <div className="absolute -top-5 h-5 w-full bg-transparent" />
                
                <div className="flex flex-col py-3">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={`group flex items-center px-6 py-4 text-[12px] font-medium uppercase tracking-[0.15em] transition-all hover:bg-foreground/5 hover:text-foreground/80 ${
                        pathname === s.href ? 'text-foreground' : 'text-foreground'
                      }`}
                    >
                      <span className="h-[1px] w-0 bg-foreground opacity-0 transition-all duration-300 group-hover:mr-3 group-hover:w-4 group-hover:opacity-100" />
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/our-firm"
              className={`relative text-[12px] font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:text-foreground/80 ${
                pathname === '/our-firm' ? 'after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-foreground' : ''
              }`}
            >
              Our Firm
            </Link>

            <Link
              href="/our-team"
              className={`relative text-[12px] font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:text-foreground/80 ${
                pathname === '/our-team' ? 'after:absolute after:-bottom-1 after:h-px after:left-0 after:w-full after:bg-foreground' : ''
              }`}
            >
              Our Team
            </Link>

            <Link
              href="/contact"
              className={`relative text-[12px] font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:text-foreground/80 ${
                pathname === '/contact' ? 'after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-foreground' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Phone + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+27739083025"
              className="hidden items-center gap-2 border border-border/50 bg-foreground/5 px-4 py-2.5 text-[11px] font-medium tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background hover:shadow-lg md:flex"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              073 9083025
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="relative flex h-10 w-10 items-center justify-center border border-border/50 text-foreground/80 transition-colors hover:border-foreground/80 hover:text-foreground lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {/* Animated burger/close */}
              <span
                className={`absolute transition-all duration-300 ${mobileOpen ? "rotate-90 scale-100 opacity-100" : "scale-75 rotate-0 opacity-0"}`}
              >
                <X className="h-5 w-5 font-normal" strokeWidth={1} />
              </span>
              <span
                className={`absolute transition-all duration-300 ${mobileOpen ? "scale-75 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
              >
                <Menu className="h-5 w-5 font-normal" strokeWidth={1} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-md transition-opacity duration-500 lg:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile slide-in panel (right to left) */}
      <nav
        className={`fixed right-0 top-0 z-50 flex h-full w-[85vw] max-w-sm flex-col border-l border-border/30 bg-background shadow-[-20px_0_40px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile primary"
        aria-hidden={!mobileOpen}
      >
        {/* Panel header */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border/30 px-6">
          <span className="text-[10px] font-normal uppercase tracking-widest text-muted-foreground">Menu</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center border border-transparent text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 font-normal" strokeWidth={1} />
          </button>
        </div>

        {/* Scrollable links */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col py-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="group flex items-center border-b border-border/20 px-6 py-5 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <span className="h-[1px] w-0 bg-foreground opacity-0 transition-all duration-300 group-hover:mr-4 group-hover:w-6 group-hover:opacity-100" />
              Home
            </Link>

            {/* Mobile Services accordion */}
            <div className="border-b border-border/20">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={`group flex w-full items-center justify-between px-6 py-5 text-sm font-medium uppercase tracking-widest transition-colors hover:bg-foreground/5 ${mobileServicesOpen ? 'text-foreground' : 'text-foreground/90 hover:text-foreground'}`}
              >
                <div className="flex items-center">
                  <span className={`h-[1px] bg-foreground transition-all duration-300 ${mobileServicesOpen ? 'mr-4 w-6 opacity-100' : 'w-0 opacity-0 group-hover:mr-4 group-hover:w-6 group-hover:opacity-100'}`} />
                  Our Services
                </div>
                <ChevronDown className={`h-4 w-4 text-foreground/60 transition-transform duration-300 ease-out ${mobileServicesOpen ? 'rotate-180 text-foreground' : 'rotate-0'}`} />
              </button>

              {/* Accordion content */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden bg-foreground/[0.02]">
                  <div className="flex flex-col py-2">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center px-10 py-4 text-xs font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-foreground"
                      >
                        <span className="h-[1px] w-0 bg-foreground/50 opacity-0 transition-all duration-300 group-hover:mr-3 group-hover:w-3 group-hover:opacity-100" />
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/our-firm"
              onClick={() => setMobileOpen(false)}
              className="group flex items-center border-b border-border/20 px-6 py-5 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <span className="h-[1px] w-0 bg-foreground opacity-0 transition-all duration-300 group-hover:mr-4 group-hover:w-6 group-hover:opacity-100" />
              Our Firm
            </Link>

            <Link
              href="/our-team"
              onClick={() => setMobileOpen(false)}
              className="group flex items-center border-b border-border/20 px-6 py-5 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <span className="h-[1px] w-0 bg-foreground opacity-0 transition-all duration-300 group-hover:mr-4 group-hover:w-6 group-hover:opacity-100" />
              Our Team
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="group flex items-center border-b border-border/20 px-6 py-5 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <span className="h-[1px] w-0 bg-foreground opacity-0 transition-all duration-300 group-hover:mr-4 group-hover:w-6 group-hover:opacity-100" />
              Contact
            </Link>
          </div>
        </div>

        {/* Panel footer - phone */}
        <div className="shrink-0 border-t border-border/30 bg-background p-6">
          <a
            href="tel:+27739083025"
            className="group flex items-center justify-center gap-3 border border-border/50 bg-foreground/5 py-4 text-xs font-normal tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background hover:shadow-lg"
          >
            <Phone className="h-4 w-4" strokeWidth={1} />
            073 9083025
          </a>
        </div>
      </nav>
    </>
  )
}

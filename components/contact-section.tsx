"use client"

import { useState } from "react"
import { ArrowRight, Check, MapPin, Phone, Mail } from "lucide-react"

const services = [
  "General Civil Litigation",
  "Commercial Litigation",
  "Criminal Law Litigation",
  "Family Law",
  "Labour & Employment Law",
  "Property Law",
  "Pension Fund Law",
  "Insolvency Law",
  "Deceased Estates Administration"
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="border-b-2 border-border-subtle">
      <div className="grid w-full gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">

        {/* Contact Form Side — FIRST */}
        <div className="md:col-span-7">
          {submitted ? (
            <div className="flex h-full min-h-[500px] flex-col items-center justify-center border border-border/50 p-10 text-center">
              <span className="mb-5 flex h-14 w-14 items-center justify-center border border-border/50">
                <Check className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-2xl font-normal uppercase tracking-normal">Thank you</h3>
              <p className="mt-3 max-w-sm font-normal text-muted-foreground">
                Your inquiry has been received. Our team will review your message and reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6 h-full p-8 sm:p-12 border border-border/50 bg-foreground/[0.02]">
              <div className="mb-4">
                <h3 className="text-2xl font-normal uppercase tracking-normal">Send a message</h3>
                <p className="mt-2 text-sm text-muted-foreground font-light">Fill out the form below and we will get back to you.</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="border border-border-subtle bg-background px-4 py-3.5 text-foreground font-normal outline-none transition-all placeholder:text-muted-foreground/40 focus:border-foreground/60"
                    placeholder="Your first name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="border border-border-subtle bg-background px-4 py-3.5 text-foreground font-normal outline-none transition-all placeholder:text-muted-foreground/40 focus:border-foreground/60"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="border border-border-subtle bg-background px-4 py-3.5 text-foreground font-normal outline-none transition-all placeholder:text-muted-foreground/40 focus:border-foreground/60"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="border border-border-subtle bg-background px-4 py-3.5 text-foreground font-normal outline-none transition-all placeholder:text-muted-foreground/40 focus:border-foreground/60"
                    placeholder="073 000 0000"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Service Required
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full border border-border-subtle bg-background px-4 py-3.5 pr-10 text-foreground font-normal outline-none transition-all focus:border-foreground/60 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((service, i) => (
                      <option key={i} value={service} className="bg-background text-foreground py-2">
                        {service}
                      </option>
                    ))}
                    <option value="Other" className="bg-background text-foreground py-2">Other</option>
                  </select>
                  {/* Custom chevron */}
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="resize-none border border-border-subtle bg-background px-4 py-3.5 text-foreground font-normal outline-none transition-all placeholder:text-muted-foreground/40 focus:border-foreground/60"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 inline-flex items-center justify-center gap-3 border border-border/50 bg-foreground px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-background transition-all hover:bg-background hover:text-foreground hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] sm:w-fit"
              >
                Send Message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" strokeWidth={1.5} />
              </button>
            </form>
          )}
        </div>

        {/* Contact Information & Map Side — SECOND */}
        <div className="md:col-span-5 flex flex-col gap-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Get In Touch</p>
            <h2 className="mt-4 text-4xl font-normal leading-tight md:text-5xl uppercase tracking-normal">
              Contact Us
            </h2>
            <p className="mt-5 max-w-md text-base font-normal leading-relaxed text-muted-foreground">
              Reach out to us to schedule a consultation or learn more about how our tailored legal services can assist you.
            </p>
          </div>

          <ul className="space-y-6 text-sm font-light text-foreground">
            <li className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border/50 bg-background">
                <MapPin className="h-4 w-4 text-foreground" aria-hidden="true" />
              </span>
              <span className="mt-1 leading-relaxed text-muted-foreground">
                Suite 701, 7th Floor
                <br />
                151 Commissioner Street
                <br />
                Klamson Towers
                <br />
                Johannesburg, 2001
              </span>
            </li>
            <li className="flex gap-4 items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border/50 bg-background">
                <Phone className="h-4 w-4 text-foreground" aria-hidden="true" />
              </span>
              <a href="tel:+27739083025" className="text-muted-foreground transition-colors hover:text-foreground">
                073 9083025
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border/50 bg-background">
                <Mail className="h-4 w-4 text-foreground" aria-hidden="true" />
              </span>
              <a href="mailto:info@rmatheattorneys.co.za" className="text-muted-foreground transition-colors hover:text-foreground">
                info@rmatheattorneys.co.za
              </a>
            </li>
          </ul>

          <div className="h-64 w-full md:h-80 border border-border/50 overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Klamson+Towers,+151+Commissioner+Street,+Marshalltown,+Johannesburg,+2001,+South+Africa&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location of Mathe Rodrick Attorneys Inc"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

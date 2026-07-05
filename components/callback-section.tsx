"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function CallbackSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="border-b border-border-subtle">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Get In Touch</p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight md:text-4xl">
            Request a callback
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Share your details and a brief note about your matter. One of our attorneys will contact you to
            discuss how we can assist, with the discretion your situation deserves.
          </p>
        </div>

        <div className="md:col-span-7">
          {submitted ? (
            <div className="flex min-h-64 flex-col items-center justify-center border border-border p-10 text-center">
              <span className="mb-5 flex h-14 w-14 items-center justify-center border border-border">
                <Check className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-2xl">Thank you</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">
                Your request has been received. We will be in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="border border-border bg-background px-4 py-3.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground focus:ring-1 focus:ring-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="border border-border bg-background px-4 py-3.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground focus:ring-1 focus:ring-foreground"
                    placeholder="073 000 0000"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Brief Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="resize-none border border-border bg-background px-4 py-3.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground focus:ring-1 focus:ring-foreground"
                  placeholder="Tell us briefly about your matter"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 border border-border bg-transparent px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background sm:w-fit"
              >
                Request Callback
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

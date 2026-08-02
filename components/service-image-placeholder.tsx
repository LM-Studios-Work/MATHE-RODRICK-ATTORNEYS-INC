import { ImageIcon } from "lucide-react"

export interface ServiceImagePlaceholderProps {
  /** Short kicker shown above the box, e.g. "Gallery" */
  eyebrow?: string
  /** Plain-language description of the photo that should go here */
  suggestion: string
  /** The exact file path where the final image should be saved, e.g. "/images/property-law-office.jpg" */
  suggestedPath: string
}

/**
 * A visible, intentional placeholder for a future photo.
 *
 * This renders a raw full-width image band (NOT a background with text on top),
 * which is the easiest kind of image to drop in later: you just replace this
 * whole component with a single <img> / next Image pointing at `suggestedPath`.
 *
 * To swap in a real image later, replace the usage with, for example:
 *
 *   <section className="border-b border-foreground">
 *     <img
 *       src="/images/property-law-office.jpg"
 *       alt="Describe the photo for screen readers"
 *       className="h-[320px] w-full object-cover md:h-[420px]"
 *     />
 *   </section>
 */
export function ServiceImagePlaceholder({
  eyebrow = "Image Placeholder",
  suggestion,
  suggestedPath,
}: ServiceImagePlaceholderProps) {
  return (
    <section className="border-b border-foreground">
      <div className="w-full px-5 py-16 md:px-8 md:py-20">
        <div className="flex min-h-[280px] flex-col items-center justify-center gap-6 border-2 border-dashed border-foreground/40 bg-foreground/[0.02] p-10 text-center md:min-h-[360px]">
          <ImageIcon className="h-10 w-10 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{eyebrow}</p>
          <p className="max-w-xl text-pretty text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
            {suggestion}
          </p>
          <p className="mt-2 max-w-xl text-xs font-normal leading-relaxed text-muted-foreground/70">
            {"Save the final photo in the /public/images folder and it will appear here. Suggested file: "}
            <span className="font-mono font-bold text-foreground">{suggestedPath}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

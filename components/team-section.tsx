const teamMembers = [
  {
    name: "JOHN DOE",
    title: "SENIOR PARTNER & DIRECTOR",
    contact: "j.doe@matherodrick.co.za / 011 555 0100",
    bio: [
      "John is a senior partner and director of the firm. He obtained his legal degrees from a prestigious university and has been practicing law for over two decades.",
      "With extensive experience as a litigator, John started his career focusing on commercial and corporate law. He has represented numerous high-profile clients in complex matters across the country. Over the years, John has expanded his expertise, building up a formidable practice that is highly respected in the legal community.",
      "He has gained a wealth of experience whilst working on intricate legal challenges, often partnering with top-tier counsel. John's track record speaks for itself. He is known as an attorney who will not rest until his client's mandate has been carried out and the best possible result achieved. He prides himself on providing sound advice and ensuring his clients are always in a strong position."
    ]
  },
  {
    name: "JANE SMITH",
    title: "PARTNER",
    contact: "j.smith@matherodrick.co.za / 011 555 0101",
    bio: [
      "Jane is an experienced litigator and a vital part of our leadership team. Her key areas of practice include civil, labour, and contractual litigation. Jane's style of practice is characterised by a strategic, result-oriented legal approach.",
      "She obtained her legal qualifications with distinction and has vast experience dealing with multifaceted disputes. Jane believes that every client is entitled to robust representation and thrives on advocating for those she represents in all courts of law.",
      "Regardless of the complexity of a matter, Jane defends her clients' interests with skill and dedication. She is committed to giving her clients the best opportunity for success in every case she handles."
    ]
  },
  {
    name: "ALEX JOHNSON",
    title: "HEAD OF LITIGATION",
    contact: "a.johnson@matherodrick.co.za / 011 555 0102",
    bio: [
      "Alex manages our core litigation team. As an admitted attorney with extensive court experience, Alex brings a practical and aggressive approach to dispute resolution.",
      "Alex is a skilled legal strategist who feels most at home when fighting for clients in open court. With a particular passion for corporate litigation and family law, Alex is dedicated to finding specialist solutions appropriate to the unique circumstances of each client.",
      "With an excellent reputation and a proven track record, Alex treats every client with the individual attention they deserve. The unwavering dedication to achieving success and relentless persistence allows Alex to overcome the most difficult legal challenges."
    ]
  }
]

export function TeamSection() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero Section for Team Page */}
      <section className="relative flex h-[35vh] min-h-[300px] items-center justify-center overflow-hidden border-b border-white bg-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative z-10 mx-auto px-5 text-center md:px-8">
          <h1 className="text-3xl font-normal uppercase tracking-widest text-foreground drop-shadow-sm md:text-5xl lg:text-6xl">
            Meet Our Team
          </h1>
        </div>
      </section>

      {/* Team Members List */}
      <div className="flex flex-col">
        {teamMembers.map((member) => (
          <section
            key={member.name}
            className="grid grid-cols-1 gap-12 border-b border-white bg-background px-5 py-16 md:grid-cols-12 md:px-8 md:py-24"
          >
            {/* Title / Contact Side */}
            <div className="md:col-span-4 lg:col-span-4">
              <h2 className="text-2xl font-normal leading-tight md:text-3xl">
                <span className="uppercase tracking-widest text-foreground">{member.name}</span>
              </h2>
              
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {member.title}
              </p>
              
              <p className="mt-4 text-[11px] font-normal tracking-[0.1em] text-muted-foreground/70">
                {member.contact}
              </p>
            </div>

            {/* Bio Content Side */}
            <div className="md:col-span-8 lg:col-span-8">
              <div className="space-y-6 text-sm font-normal leading-relaxed text-muted-foreground md:text-base">
                {member.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

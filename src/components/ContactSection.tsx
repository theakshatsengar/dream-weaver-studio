import { ExternalLink } from "lucide-react";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/megha-ambasana-a281a1201/", icon: "in" },
  { label: "Twitter", href: "https://x.com/meghaambasana", icon: "𝕏" },
  { label: "Mail", href: "mailto:ambasanamegha@gmail.com", icon: "✉" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Text + Socials */}
          <div className="order-2 md:order-1">
            <div className="mb-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
                Let’s Collaborate
              </h2>
            </div>
            <p className="text-muted-foreground text-sm md:text-base mb-8 leading-relaxed">
              Let’s create content that aligns with your brand vision and drives meaningful results.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="mailto:ambasanamegha@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-base hover:opacity-90 transition-opacity"
              >
                CONTACT ME
              </a>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-0 w-10 h-10 rounded-full border border-border bg-background text-foreground hover:border-primary/40 hover:bg-primary/5 hover:w-auto hover:px-4 transition-all duration-300 overflow-hidden justify-center"
                >
                  <span className="text-base shrink-0">{s.icon}</span>
                  <span className="max-w-0 overflow-hidden group-hover:max-w-[80px] group-hover:ml-1.5 transition-all duration-300 text-xs font-medium whitespace-nowrap">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex flex-col items-center md:items-end order-1 md:order-2 w-full md:w-auto">
            <div className="w-full aspect-square max-w-xs md:w-80 md:h-80 rounded-2xl border border-border overflow-hidden">
              <img src="/image.png" alt="Megha Ambasana" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

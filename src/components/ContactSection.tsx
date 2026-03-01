import { ExternalLink } from "lucide-react";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
  { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
  { label: "Mail", href: "mailto:meghaambasana@gmail.com", icon: "✉" },
];

const headingTags = [
  { label: "Copy", color: "bg-tag-yellow text-black", rotate: "-4deg", delay: "0s" },
  { label: "Ads", color: "bg-tag-pink text-black", rotate: "3deg", delay: "0.5s" },
  { label: "SEO", color: "bg-tag-blue text-black", rotate: "-2deg", delay: "1s" },
  { label: "Reels", color: "bg-tag-green text-black", rotate: "4deg", delay: "0.3s" },
  { label: "Scripts", color: "bg-tag-orange text-black", rotate: "-3deg", delay: "0.8s" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Text + Socials */}
          <div className="order-2 md:order-1">
            <div className="relative inline-block mb-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
                LET'S WORK TOGETHER ✨
              </h2>
              {headingTags.map((tag, i) => (
                <span
                  key={tag.label}
                  className={`absolute inline-block px-1.5 py-0.5 rounded-full text-[8px] font-medium ${tag.color} animate-float pointer-events-none select-none ${
                    i === 0 ? "-top-3 -left-2" :
                    i === 1 ? "-top-2 right-0" :
                    i === 2 ? "top-1/2 -right-10" :
                    i === 3 ? "-bottom-3 left-8" :
                    "-bottom-2 right-12"
                  }`}
                  style={{ animationDelay: tag.delay, "--rotate": tag.rotate } as React.CSSProperties}
                >
                  {tag.label}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-sm md:text-base mb-8 leading-relaxed">
              If my work made you pause for a second and think, "Hmm, बुरा तो नहीं है," then we're already halfway there.
              I'm looking to bring my chaos and creativity to a team that wants to grow, experiment, and actually get noticed.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="mailto:meghaambasana@gmail.com"
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
            <div className="w-full aspect-square max-w-sm md:w-80 md:h-80 rounded-2xl border border-border overflow-hidden">
              <img src="/image.png" alt="Megha Ambasana" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

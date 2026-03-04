const reasons = [
  {
    emoji: "🔍",
    title: "Professional Observer",
    desc: "I’ll stalk, I mean research, your target audience until I understand how they think, what they respond to, and why they engage.",
    tags: [
      { label: "Deep Dive", color: "bg-tag-pink text-black", rotate: "3deg", delay: "0s" },
    ],
    extraTags: [
      { label: "Analysis", color: "bg-tag-yellow text-black", rotate: "-3deg", delay: "0.3s" },
      { label: "Audience", color: "bg-tag-orange text-black", rotate: "2deg", delay: "0.7s" },
    ],
  },
  {
    emoji: "🧠",
    title: "Strategic Overthinker",
    desc: "I love connecting the dots, turning social media trends into brand-relevant ideas without diluting the brand voice.",
    tags: [
      { label: "Strategy", color: "bg-tag-yellow text-black", rotate: "-2deg", delay: "1.2s" },
    ],
    extraTags: [
      { label: "Planning", color: "bg-tag-pink text-black", rotate: "3deg", delay: "0.4s" },
      { label: "Connect", color: "bg-tag-blue text-black", rotate: "-4deg", delay: "0.9s" },
    ],
  },
  {
    emoji: "📱",
    title: "Chronically Online",
    desc: "Internet culture, meme timing, and platform behavior come naturally to me. I understand what works, when it works, and why it works.",
    tags: [
      { label: "Viral", color: "bg-tag-blue text-black", rotate: "3deg", delay: "0.6s" },
    ],
    extraTags: [
      { label: "Reels", color: "bg-tag-green text-black", rotate: "-2deg", delay: "0.1s" },
      { label: "Trending", color: "bg-tag-orange text-black", rotate: "4deg", delay: "1.1s" },
    ],
  },
  {
    emoji: "⚡",
    title: "Curious by Default",
    desc: "I’m constantly asking, “Why is this working?” and “Why is this failing?” and naturally analyzing patterns behind content performance.",
    tags: [
      { label: "Creative", color: "bg-tag-orange text-black", rotate: "-3deg", delay: "0.1s" },
    ],
    extraTags: [
      { label: "Results", color: "bg-tag-blue text-black", rotate: "3deg", delay: "0.5s" },
      { label: "Growth", color: "bg-tag-yellow text-black", rotate: "-4deg", delay: "0.8s" },
    ],
  },
];

const WhyMeSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          Why hire me? 🤔
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative aspect-square p-4 rounded-xl border border-border bg-background hover:border-primary/40 hover:bg-primary/5 transition-all flex flex-col justify-end overflow-hidden"
            >
              {r.tags.map((tag, i) => (
                <span
                  key={tag.label}
                  className={`absolute inline-block px-2 py-0.5 rounded-full text-[9px] font-medium ${tag.color} animate-float ${
                    i === 0 ? "top-2 right-2 md:top-[10%] md:right-[15%]" :
                    i === 1 ? "top-3 right-[40%] md:top-[30%] md:left-[10%]" :
                    "top-8 right-2 md:top-[50%] md:right-[10%]"
                  }`}
                  style={{ animationDelay: tag.delay, "--rotate": tag.rotate } as React.CSSProperties}
                >
                  {tag.label}
                </span>
              ))}
              {r.extraTags.map((tag, i) => (
                <span
                  key={tag.label}
                  className={`absolute hidden md:inline-block px-2 py-0.5 rounded-full text-[9px] font-medium ${tag.color} animate-float ${
                    i === 0 ? "top-[20%] right-[45%]" :
                    "top-[45%] right-[8%]"
                  }`}
                  style={{ animationDelay: tag.delay, "--rotate": tag.rotate } as React.CSSProperties}
                >
                  {tag.label}
                </span>
              ))}

              <div>
                <span className="text-2xl mb-2 block">{r.emoji}</span>
                <h3 className="font-heading text-sm font-semibold mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-[11px] leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;

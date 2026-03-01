const reasons = [
  {
    emoji: "🔍",
    title: "Research Obsessed",
    desc: "I'll stalk— I mean research your target audience until I know them better than they know themselves.",
    tags: [
      { label: "Deep Dive", color: "bg-tag-pink text-black", rotate: "3deg", delay: "0s" },
      { label: "Insights", color: "bg-tag-blue text-black", rotate: "-2deg", delay: "1s" },
      { label: "Data", color: "bg-tag-green text-black", rotate: "4deg", delay: "0.5s" },
    ],
    extraTags: [
      { label: "Analysis", color: "bg-tag-yellow text-black", rotate: "-3deg", delay: "0.3s" },
      { label: "Audience", color: "bg-tag-orange text-black", rotate: "2deg", delay: "0.7s" },
    ],
  },
  {
    emoji: "🧠",
    title: "Overthinks (Strategically)",
    desc: "Love connecting the dots — social media trends ko brand ke sath connect kar lungi, without diluting brand voice.",
    tags: [
      { label: "Trends", color: "bg-tag-green text-black", rotate: "-3deg", delay: "0.2s" },
      { label: "Brand Voice", color: "bg-tag-orange text-black", rotate: "4deg", delay: "0.8s" },
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
    desc: "Internet culture, meme timing, and platform behavior — I get it quickly.",
    tags: [
      { label: "Memes", color: "bg-tag-yellow text-black", rotate: "2deg", delay: "0.3s" },
      { label: "Culture", color: "bg-tag-pink text-black", rotate: "-4deg", delay: "0.9s" },
      { label: "Viral", color: "bg-tag-blue text-black", rotate: "3deg", delay: "0.6s" },
    ],
    extraTags: [
      { label: "Reels", color: "bg-tag-green text-black", rotate: "-2deg", delay: "0.1s" },
      { label: "Trending", color: "bg-tag-orange text-black", rotate: "4deg", delay: "1.1s" },
    ],
  },
  {
    emoji: "⚡",
    title: "Creativity + Logic",
    desc: "Concept cool bhi hoga and brand ke business goal ko serve bhi karega.",
    tags: [
      { label: "Creative", color: "bg-tag-orange text-black", rotate: "-3deg", delay: "0.1s" },
      { label: "Goals", color: "bg-tag-green text-black", rotate: "4deg", delay: "0.7s" },
      { label: "Impact", color: "bg-tag-pink text-black", rotate: "-2deg", delay: "1.1s" },
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
                    i === 0 ? "top-3 right-3" :
                    i === 1 ? "top-[35%] left-3" :
                    "top-[20%] right-[25%]"
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
                    i === 0 ? "top-[50%] right-4" :
                    "top-[15%] left-[30%]"
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

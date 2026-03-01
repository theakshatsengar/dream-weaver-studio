const reasons = [
  {
    emoji: "🔍",
    title: "Research Obsessed",
    desc: "I'll stalk— I mean research your target audience until I know them better than they know themselves.",
    tags: [
      { label: "Deep Dive", color: "bg-tag-pink/15 text-tag-pink", rotate: "3deg", delay: "0s", position: "top-3 right-3" },
      { label: "Insights", color: "bg-tag-blue/15 text-tag-blue", rotate: "-2deg", delay: "1s", position: "top-10 left-3" },
      { label: "Data", color: "bg-tag-green/15 text-tag-green", rotate: "4deg", delay: "0.5s", position: "bottom-20 right-4" },
    ],
  },
  {
    emoji: "🧠",
    title: "Overthinks (Strategically)",
    desc: "Love connecting the dots — social media trends ko brand ke sath connect kar lungi, without diluting brand voice.",
    tags: [
      { label: "Trends", color: "bg-tag-green/15 text-tag-green", rotate: "-3deg", delay: "0.2s", position: "top-3 right-3" },
      { label: "Brand Voice", color: "bg-tag-orange/15 text-tag-orange", rotate: "4deg", delay: "0.8s", position: "top-10 left-3" },
      { label: "Strategy", color: "bg-tag-yellow/15 text-tag-yellow", rotate: "-2deg", delay: "1.2s", position: "bottom-20 right-4" },
    ],
  },
  {
    emoji: "📱",
    title: "Chronically Online",
    desc: "Internet culture, meme timing, and platform behavior — I get it quickly.",
    tags: [
      { label: "Memes", color: "bg-tag-yellow/15 text-tag-yellow", rotate: "2deg", delay: "0.3s", position: "top-3 right-3" },
      { label: "Culture", color: "bg-tag-pink/15 text-tag-pink", rotate: "-4deg", delay: "0.9s", position: "top-10 left-3" },
      { label: "Viral", color: "bg-tag-blue/15 text-tag-blue", rotate: "3deg", delay: "0.6s", position: "bottom-20 right-4" },
    ],
  },
  {
    emoji: "⚡",
    title: "Creativity + Logic",
    desc: "Concept cool bhi hoga and brand ke business goal ko serve bhi karega.",
    tags: [
      { label: "Creative", color: "bg-tag-orange/15 text-tag-orange", rotate: "-3deg", delay: "0.1s", position: "top-3 right-3" },
      { label: "Goals", color: "bg-tag-green/15 text-tag-green", rotate: "4deg", delay: "0.7s", position: "top-10 left-3" },
      { label: "Impact", color: "bg-tag-pink/15 text-tag-pink", rotate: "-2deg", delay: "1.1s", position: "bottom-20 right-4" },
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
              {r.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`absolute ${tag.position} inline-block px-2 py-0.5 rounded-full text-[9px] font-medium ${tag.color} animate-float`}
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

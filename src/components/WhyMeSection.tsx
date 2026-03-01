const reasons = [
  {
    emoji: "🔍",
    title: "Research Obsessed",
    desc: "I'll stalk— I mean research your target audience until I know them better than they know themselves.",
    tags: ["Audience Analysis", "Deep Dive"],
  },
  {
    emoji: "🧠",
    title: "Overthinks (Strategically)",
    desc: "Love connecting the dots — social media trends ko brand ke sath connect kar lungi, without diluting brand voice.",
    tags: ["Brand Strategy", "Trend Sync"],
  },
  {
    emoji: "📱",
    title: "Chronically Online",
    desc: "Internet culture, meme timing, and platform behavior — I get it quickly.",
    tags: ["Meme Culture", "Platform Native"],
  },
  {
    emoji: "⚡",
    title: "Creativity + Logic",
    desc: "Concept cool bhi hoga and brand ke business goal ko serve bhi karega.",
    tags: ["Creative Thinking", "Goal Driven"],
  },
];

const WhyMeSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          Why hire me? 🤔
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="aspect-square p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl mb-3 block">{r.emoji}</span>
                <h3 className="font-heading text-lg font-semibold mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
                {r.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 rounded-full text-[11px] font-medium bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;

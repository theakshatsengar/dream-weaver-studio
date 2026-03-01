const reasons = [
  {
    emoji: "🔍",
    title: "Research Obsessed",
    desc: "I'll stalk— I mean research your target audience until I know them better than they know themselves.",
    badge: { label: "Deep Diver", color: "bg-tag-blue text-black" },
    accent: "border-tag-blue/40",
  },
  {
    emoji: "🧠",
    title: "Overthinks (Strategically)",
    desc: "Love connecting the dots — social media trends ko brand ke sath connect kar lungi, without diluting brand voice.",
    badge: { label: "Big Brain", color: "bg-tag-pink text-black" },
    accent: "border-tag-pink/40",
  },
  {
    emoji: "📱",
    title: "Chronically Online",
    desc: "Internet culture, meme timing, and platform behavior — I get it quickly.",
    badge: { label: "Always On", color: "bg-tag-green text-black" },
    accent: "border-tag-green/40",
  },
  {
    emoji: "⚡",
    title: "Creativity + Logic",
    desc: "Concept cool bhi hoga and brand ke business goal ko serve bhi karega.",
    badge: { label: "Best of Both", color: "bg-tag-orange text-black" },
    accent: "border-tag-orange/40",
  },
];

const WhyMeSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          Why hire me? 🤔
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className={`relative aspect-square p-5 rounded-2xl bg-background border-2 ${r.accent} hover:scale-[1.03] transition-transform flex flex-col justify-between overflow-hidden group`}
            >
              <div>
                <span className="text-3xl md:text-4xl block mb-3">{r.emoji}</span>
                <h3 className="font-heading text-sm md:text-base font-semibold leading-snug">{r.title}</h3>
              </div>
              <p className="text-muted-foreground text-[0.7rem] md:text-xs leading-relaxed">{r.desc}</p>
              <span
                className={`absolute -top-1 -right-1 ${r.badge.color} text-[0.55rem] md:text-[0.65rem] font-semibold px-2 py-0.5 rounded-full rotate-12 group-hover:rotate-0 transition-transform`}
              >
                {r.badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;

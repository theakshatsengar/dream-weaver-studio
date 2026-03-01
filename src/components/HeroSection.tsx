const tags = [
  { label: "Social Media Copy", color: "bg-tag-yellow/20 text-tag-yellow", rotate: "-6deg", position: "left-[5%] top-[15%] md:left-[8%] md:top-[20%]" },
  { label: "Ad Copies", color: "bg-tag-pink/20 text-tag-pink", rotate: "4deg", position: "left-[25%] top-[55%] md:left-[30%] md:top-[50%]" },
  { label: "Scripts", color: "bg-tag-green/20 text-tag-green", rotate: "-3deg", position: "right-[30%] top-[10%] md:right-[35%] md:top-[15%]" },
  { label: "SEO Writing", color: "bg-tag-blue/20 text-tag-blue", rotate: "5deg", position: "right-[5%] top-[45%] md:right-[10%] md:top-[40%]" },
  { label: "Content Strategy", color: "bg-tag-orange/20 text-tag-orange", rotate: "-4deg", position: "right-[15%] top-[75%] md:right-[20%] md:top-[70%]" },
  { label: "Copywriting", color: "bg-tag-yellow/20 text-tag-yellow", rotate: "3deg", position: "left-[15%] top-[80%] md:left-[18%] md:top-[75%]" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center overflow-hidden">
      <div className="container py-16 md:py-24">
        <p className="max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed mb-12 md:mb-16">
          Just a not-so-normal girl in her 20s who accidentally fell in love with words. 
          Creating content since 17, professionally writing for 2+ years across 20+ categories.
        </p>

        <div className="relative">
          <h1 className="text-hero text-[clamp(5rem,20vw,16rem)] text-foreground select-none">
            COPY
            <br className="md:hidden" />
            WRITER
          </h1>

          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`tag-highlight absolute ${tag.color} ${tag.position} animate-float hidden sm:inline-block`}
              style={{ "--rotate": tag.rotate } as React.CSSProperties}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Mobile tags */}
        <div className="flex flex-wrap gap-2 mt-8 sm:hidden">
          {tags.map((tag) => (
            <span key={tag.label} className={`tag-highlight ${tag.color}`}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

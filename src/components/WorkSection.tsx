import { ExternalLink } from "lucide-react";

const brands = [
  { name: "Mahalaxmi Masala", url: "https://www.instagram.com/mahalaxmi_spices", category: "FMCG", tags: ["Social Media", "Ad Copy"] },
  { name: "G6 Superhomes", url: "https://www.instagram.com/g6_superhomes", category: "Real Estate", tags: ["Content Strategy", "Scripts"] },
  { name: "G-malkin", url: "https://www.instagram.com/gmalkin_chakki_fresh_atta", category: "FMCG", tags: ["Social Media", "SEO"] },
  { name: "Jbees", url: "https://www.instagram.com/jbees_rajkot", category: "Food", tags: ["Ad Copy", "Scripts"] },
  { name: "Venture Solar", url: "https://www.instagram.com/_venture_solar_solution_", category: "Energy", tags: ["Content Strategy", "SEO"] },
  { name: "The Max Momentum", url: "https://www.instagram.com/themaxmomentum", category: "Fitness", tags: ["Social Media", "Scripts"] },
  { name: "Kesar Dhani Resort", url: "https://www.instagram.com/kesardhaniresort", category: "Hospitality", tags: ["Ad Copy", "Content Strategy"] },
  { name: "DRS Financial", url: "https://www.instagram.com/drs_financialservices", category: "Finance", tags: ["SEO", "Social Media"] },
  { name: "Bonton Holidays", url: "https://www.instagram.com/bonton_holidays", category: "Travel", tags: ["Scripts", "Ad Copy"] },
  { name: "ISK Auto Industries", url: "https://www.instagram.com/isk_auto_industries", category: "Auto", tags: ["Content Strategy", "Social Media"] },
];

const tagColors: Record<string, string> = {
  "Social Media": "bg-tag-yellow/15 text-tag-yellow",
  "Ad Copy": "bg-tag-pink/15 text-tag-pink",
  "Content Strategy": "bg-tag-orange/15 text-tag-orange",
  "Scripts": "bg-tag-green/15 text-tag-green",
  "SEO": "bg-tag-blue/15 text-tag-blue",
};

const WorkSection = () => {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Brands I've worked with
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          End-to-end concept development and content creation across different categories — from brief to final creatives.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {brand.category}
                </span>
                <h3 className="font-heading text-sm font-semibold mt-1 group-hover:text-primary transition-colors flex items-center gap-1.5">
                  {brand.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {brand.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-medium ${tagColors[tag] || "bg-muted text-muted-foreground"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://docs.google.com/document/d/17q8CHS_5maLmoAZ5GfoNZhb1HrQvBuvZSn_RCQkq9So/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View Mock Case Study <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default WorkSection;

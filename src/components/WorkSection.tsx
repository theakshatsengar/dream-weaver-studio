import { ExternalLink } from "lucide-react";

const brands = [
  { name: "Mahalaxmi Masala", url: "https://www.instagram.com/mahalaxmi_spices", category: "FMCG", icon: "🌶️" },
  { name: "G6 Superhomes", url: "https://www.instagram.com/g6_superhomes", category: "Real Estate", icon: "🏠" },
  { name: "G-malkin", url: "https://www.instagram.com/gmalkin_chakki_fresh_atta", category: "FMCG", icon: "🌾" },
  { name: "Jbees", url: "https://www.instagram.com/jbees_rajkot", category: "Food", icon: "🍔" },
  { name: "Venture Solar", url: "https://www.instagram.com/_venture_solar_solution_", category: "Energy", icon: "☀️" },
  { name: "The Max Momentum", url: "https://www.instagram.com/themaxmomentum", category: "Fitness", icon: "💪" },
  { name: "Kesar Dhani Resort", url: "https://www.instagram.com/kesardhaniresort", category: "Hospitality", icon: "🏨" },
  { name: "DRS Financial", url: "https://www.instagram.com/drs_financialservices", category: "Finance", icon: "💰" },
  { name: "Bonton Holidays", url: "https://www.instagram.com/bonton_holidays", category: "Travel", icon: "✈️" },
  { name: "ISK Auto Industries", url: "https://www.instagram.com/isk_auto_industries", category: "Auto", icon: "🚗" },
];

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
              className="group relative aspect-square p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all flex flex-col justify-end overflow-hidden"
            >
              {/* Floating bubble tags */}
              <span
                className="absolute top-3 right-3 inline-block px-2 py-0.5 rounded-full text-[9px] font-medium bg-tag-pink/15 text-tag-pink animate-float"
                style={{ animationDelay: "0s", "--rotate": "3deg" } as React.CSSProperties}
              >
                {brand.category}
              </span>
              <span
                className="absolute top-10 left-3 inline-block px-2 py-0.5 rounded-full text-[9px] font-medium bg-tag-blue/15 text-tag-blue animate-float"
                style={{ animationDelay: "1s", "--rotate": "-2deg" } as React.CSSProperties}
              >
                Content
              </span>
              <span
                className="absolute bottom-14 right-4 inline-block px-2 py-0.5 rounded-full text-[9px] font-medium bg-tag-green/15 text-tag-green animate-float"
                style={{ animationDelay: "0.5s", "--rotate": "4deg" } as React.CSSProperties}
              >
                Strategy
              </span>

              {/* Center icon */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl opacity-20 group-hover:opacity-40 transition-opacity select-none pointer-events-none">
                {brand.icon}
              </span>

              <div>
                <h3 className="font-heading text-sm font-semibold group-hover:text-primary transition-colors flex items-center gap-1.5">
                  {brand.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
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

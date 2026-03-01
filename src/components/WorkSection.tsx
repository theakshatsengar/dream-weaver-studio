import { ExternalLink } from "lucide-react";

const brands = [
  { name: "Mahalaxmi Masala", url: "https://www.instagram.com/mahalaxmi_spices", category: "FMCG" },
  { name: "G6 Superhomes", url: "https://www.instagram.com/g6_superhomes", category: "Real Estate" },
  { name: "G-malkin", url: "https://www.instagram.com/gmalkin_chakki_fresh_atta", category: "FMCG" },
  { name: "Jbees", url: "https://www.instagram.com/jbees_rajkot", category: "Food" },
  { name: "Venture Solar", url: "https://www.instagram.com/_venture_solar_solution_", category: "Energy" },
  { name: "The Max Momentum", url: "https://www.instagram.com/themaxmomentum", category: "Fitness" },
  { name: "Kesar Dhani Resort", url: "https://www.instagram.com/kesardhaniresort", category: "Hospitality" },
  { name: "DRS Financial", url: "https://www.instagram.com/drs_financialservices", category: "Finance" },
  { name: "Bonton Holidays", url: "https://www.instagram.com/bonton_holidays", category: "Travel" },
  { name: "ISK Auto Industries", url: "https://www.instagram.com/isk_auto_industries", category: "Auto" },
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
              className="group p-4 rounded-lg border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {brand.category}
              </span>
              <h3 className="font-heading text-sm font-semibold mt-1 group-hover:text-primary transition-colors flex items-center gap-1.5">
                {brand.name}
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
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

import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "So What If I'm Lost?",
    date: "October 2025",
    excerpt: "in school. in college. among relatives. among friends.",
    href: "/blog/so-what-if-im-lost",
  },
  // Add more blog posts here as they are published
];

const RecentBlogsSection = () => {
  return (
    <section id="blog" className="py-20 md:py-28 bg-card">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Recent Blogs
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Occasional long-form thoughts, reflections, and essays.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.slice(0, 3).map((post) => (
            <a
              key={post.href}
              href={post.href}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-medium bg-tag-pink/15 text-tag-pink mb-4">
                  Blog
                </span>
                <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <p className="text-xs text-muted-foreground mt-4">{post.date}</p>
            </a>
          ))}
        </div>

        <a
          href="/blog"
          className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          See all posts <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default RecentBlogsSection;

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">
          Blog
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Occasional long-form thoughts and essays.
        </p>
      </header>

      <section className="space-y-6">
        <article>
          <a
            href="/blog/so-what-if-im-lost"
            className="block rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-colors p-6"
          >
            <h2 className="font-heading text-xl md:text-2xl font-semibold mb-1">
              So What If I’m Lost?
            </h2>
            <p className="text-xs text-muted-foreground mb-3">
              March 2026
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              in school. in college. among relatives. among friends.
            </p>
          </a>
        </article>
      </section>
    </main>
  );
}


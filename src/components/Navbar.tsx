const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="font-heading text-lg font-bold tracking-tight">
          ✍️ Copywriter
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="md:hidden text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

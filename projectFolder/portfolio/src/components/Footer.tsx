import { Mail, Phone, MessageCircle, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const footerLinks = {
    Services: [
      { name: "Revenue Websites", href: "/services" },
      { name: "Product Interfaces", href: "/services" },
      { name: "Backend Integrations", href: "/services" },
      { name: "Workflow Optimization", href: "/services" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
    ],
    Support: [
      { name: "Documentation", href: "/documentation" },
      { name: "Support", href: "/support" },
      { name: "FAQ", href: "/faq" },
      { name: "Privacy", href: "/privacy-policy" },
      { name: "Terms", href: "/terms-of-service" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/BlissMahlathi", label: "GitHub" },
    {
      icon: MessageCircle,
      href: "https://facebook.com/HlulaniBlissMahlathi",
      label: "Facebook",
    },
    { icon: Mail, href: "mailto:blissmahlathi37@gmail.com", label: "Email" },
  ];

  const handleCta = () => {
    if (window.location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", "/#contact");
      return;
    }

    navigate("/#contact");
  };

  return (
    <footer className="relative border-t border-border/70 bg-background/70">
      <div className="pointer-events-none absolute inset-0 mesh-background opacity-35" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary/90 to-accent text-sm font-black text-primary-foreground shadow-glow">
                  IT
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Inhim Trading
                  </p>
                  <p className="text-base font-bold text-foreground">Digital Systems Studio</p>
                </div>
              </div>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Premium engineering partner for ambitious businesses building
                websites, platforms, and digital operations that scale.
              </p>

              <div className="mt-5 space-y-2 text-sm">
                <a
                  href="mailto:blissmahlathi37@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  blissmahlathi37@gmail.com
                </a>
                <a
                  href="tel:0715231720"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  071 523 1720
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                  {title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="section-ring rounded-3xl border border-border/70 bg-card/45 p-7 text-center">
          <h3 className="text-3xl font-bold text-foreground">Bring your next platform to life</h3>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We blend strategy, UX, and engineering to ship high-performing
            digital systems tailored to your business model.
          </p>
          <div className="mt-6">
            <Button variant="hero" size="lg" onClick={handleCta} className="group">
              Book a Discovery Session
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-border/70 py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {currentYear} INHIM Trading (Pty) Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-background/40 text-muted-foreground transition-all hover:border-primary/45 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
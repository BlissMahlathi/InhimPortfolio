import { Code2, Mail, Phone, MessageCircle, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "Web Development", href: "/services" },
      { name: "Mobile Apps", href: "/services" },
      { name: "Backend & APIs", href: "/services" },
      { name: "UI/UX Design", href: "/services" },
      { name: "Digital Organization", href: "/services" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Process", href: "/#process" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
    ],
    Resources: [
      { name: "Documentation", href: "/documentation" },
      { name: "Support", href: "/support" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "FAQ", href: "/faq" },
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

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-card-foreground">
                  Hlulani<span className="text-primary">Tech</span>
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Transforming South African businesses through innovative web
                solutions, custom software development, and strategic digital
                transformation.
              </p>

              {/* Quick Contact */}
              <div className="space-y-3">
                <a
                  href="mailto:blissmahlathi37@gmail.com"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  blissmahlathi37@gmail.com
                </a>
                <a
                  href="tel:0715231720"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  071 523 1720
                </a>
                <a
                  href="https://wa.me/27715231720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-card-foreground mb-4">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith("/#") ? (
                        <button
                          onClick={() => {
                            if (link.href === "/#process") {
                              document
                                .getElementById("about")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          className="text-muted-foreground hover:text-primary transition-colors text-left"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors block"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12 border-t border-border">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your digital presence and
              drive your business forward.
            </p>
            <Button
              variant="cta"
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Get Free Consultation
              <MessageCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} INHIM Trading (Pty) Ltd. All rights reserved.
              Built with ❤️ using React & TypeScript.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

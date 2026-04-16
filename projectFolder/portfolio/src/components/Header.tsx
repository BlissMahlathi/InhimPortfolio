import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomeRoute = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    const id = location.hash.replace("#", "");
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 60);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const navigation = [
    { name: "Services", sectionId: "services", route: "/services" },
    { name: "Process", sectionId: "process", route: "/" },
    { name: "Projects", sectionId: "projects", route: "/case-studies" },
    { name: "About", route: "/about" },
    { name: "Blog", route: "/blog" },
    { name: "Contact", sectionId: "contact", route: "/contact" },
  ];

  const navigateToItem = (item: (typeof navigation)[number]) => {
    if (item.sectionId && isHomeRoute) {
      document.getElementById(item.sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
      window.history.replaceState(null, "", `/#${item.sectionId}`);
      return;
    }

    if (item.sectionId) {
      navigate(`/#${item.sectionId}`);
      return;
    }

    navigate(item.route);
  };

  const handlePrimaryCta = () => {
    navigateToItem({ name: "Contact", sectionId: "contact", route: "/contact" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/70 bg-background/85 shadow-card backdrop-blur-xl"
          : "bg-background/35 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary/90 to-accent text-sm font-black text-primary-foreground shadow-glow">
              IT
            </div>
            <div className="leading-none">
              <p className="text-[10px] uppercase tracking-[0.32em] text-foreground/50">
                Inhim Trading
              </p>
              <p className="mt-1 text-sm font-bold text-foreground sm:text-base">
                Digital Systems Studio
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-background/45 px-2 py-2 lg:flex">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateToItem(item)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                  ${
                    location.pathname === item.route
                      ? "bg-secondary/80 text-foreground"
                      : "text-foreground/72 hover:bg-secondary/65 hover:text-foreground"
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button variant="hero" size="sm" onClick={handlePrimaryCta}>
              Book Discovery
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            className="rounded-lg border border-border/60 bg-background/50 p-2 text-foreground lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mb-4 rounded-2xl border border-border/70 bg-background/95 p-4 shadow-card backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigateToItem(item)}
                  className={`rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                    ${
                      location.pathname === item.route
                        ? "bg-secondary/70 text-foreground"
                        : "text-foreground/80 hover:bg-secondary/60 hover:text-foreground"
                    }
                  `}
                >
                  {item.name}
                </button>
              ))}

              <Button className="mt-3 w-full" variant="hero" onClick={handlePrimaryCta}>
                Start Your Project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

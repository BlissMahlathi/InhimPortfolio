import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Main navigation links for all pages
  const navigation = [
    { name: "Services", to: "/services" },
    { name: "Projects", to: "/" },
    { name: "About", to: "/about" },
    { name: "Blog", to: "/blog" },
    { name: "Careers", to: "/careers" },
    { name: "Contact", to: "/contact" },
  ];

  const location = useLocation();

  // Close mobile menu on navigation
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-background/95 backdrop-blur-md shadow-card border-b border-border/50"
          : "bg-white/70 dark:bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Company Name */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-tr from-primary-glow via-primary to-secondary shadow-glow rounded-lg flex items-center justify-center">
              <img src="favicon.ico" alt="logo" />
            </div>
            <span className="text-xl font-extrabold text-primary-foreground group-hover:text-primary-glow transition-colors drop-shadow-glow">
              INHIM <span className="text-primary">Trading</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={handleNavClick}
                className={`transition-colors font-medium px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                  ${
                    location.pathname === item.to
                      ? "text-primary bg-primary/10 font-semibold underline underline-offset-8"
                      : "text-foreground hover:bg-primary/5 hover:text-primary"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button
                variant="premium"
                size="sm"
                className="bg-gradient-to-r from-primary-glow via-primary to-secondary text-primary-foreground shadow-glow"
              >
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-white/95 dark:bg-background/95 backdrop-blur-md rounded-b-lg shadow-card">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={handleNavClick}
                  className={`transition-colors font-medium text-left px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                    ${
                      location.pathname === item.to
                        ? "text-primary bg-primary/10 font-semibold underline underline-offset-8"
                        : "text-foreground hover:bg-primary/5 hover:text-primary"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" className="self-start mt-4">
                <Button
                  variant="premium"
                  size="sm"
                  className="bg-gradient-to-r from-primary-glow via-primary to-secondary text-primary-foreground shadow-glow"
                >
                  Get a Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-primary"
              data-testid="logo-button"
            >
              Adepoju.
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground"
                data-testid="nav-services"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground"
                data-testid="nav-work"
              >
                WORK
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground"
                data-testid="nav-about"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground"
                data-testid="nav-process"
              >
                PROCESS
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
              data-testid="theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              data-testid="nav-contact-cta"
            >
              LET'S TALK
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border" data-testid="mobile-menu">
          <div className="px-6 pt-4 pb-6 space-y-4">
            <button
              onClick={() => scrollToSection("services")}
              className="block text-muted-foreground hover:text-foreground"
              data-testid="mobile-nav-services"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="block text-muted-foreground hover:text-foreground"
              data-testid="mobile-nav-work"
            >
              WORK
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block text-muted-foreground hover:text-foreground"
              data-testid="mobile-nav-about"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block text-muted-foreground hover:text-foreground"
              data-testid="mobile-nav-process"
            >
              PROCESS
            </button>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
                data-testid="mobile-theme-toggle"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium"
                data-testid="mobile-nav-contact-cta"
              >
                LET'S TALK
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import barticaLogo from "figma:asset/0c4c68ec5082efc5c59da26f2738460120efff61.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-primary/20 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={barticaLogo} 
              alt="Bartica - Gateway to the Interior" 
              className="w-14 h-14 object-contain"
            />
            <div>
              <h1 className="text-2xl text-primary">Bartica</h1>
              <p className="text-xs text-muted-foreground">Gateway to the Interior</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("attractions")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Attractions
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("visit")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Visit
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("attractions")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Attractions
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("visit")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Visit
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

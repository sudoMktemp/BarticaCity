import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import barticaLogo from "figma:asset/0c4c68ec5082efc5c59da26f2738460120efff61.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={barticaLogo} 
                alt="Bartica Logo" 
                className="w-12 h-12 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h3 className="text-white">Bartica</h3>
                <p className="text-xs text-white/80">Gateway to the Interior</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Where three rivers meet, culture thrives, and adventure awaits in the heart of Guyana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Bartica
                </a>
              </li>
              <li>
                <a href="#attractions" className="text-white/80 hover:text-white transition-colors">
                  Attractions
                </a>
              </li>
              <li>
                <a href="#events" className="text-white/80 hover:text-white transition-colors">
                  Events & Festivals
                </a>
              </li>
              <li>
                <a href="#visit" className="text-white/80 hover:text-white transition-colors">
                  Plan Your Visit
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white/80 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  Bartica, Cuyuni-Mazaruni<br />Guyana, South America
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/80 flex-shrink-0" />
                <span className="text-white/80">+592-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/80 flex-shrink-0" />
                <span className="text-white/80">info@bartica.gov.gy</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 text-white">Connect With Us</h4>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Follow us on social media for the latest updates, events, and beautiful photos of Bartica.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© {currentYear} Bartica, Guyana. All rights reserved.</p>
            <p className="text-center">
              Celebrating diversity, culture, and the spirit of our community 🇬🇾
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

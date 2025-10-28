import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroImage}
          alt="Bartica, Guyana - Gateway to the Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 lg:px-8 flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Welcome to Bartica
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Gateway to the Interior
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Where three rivers meet, culture thrives, and adventure awaits in the heart of Guyana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("attractions")}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6"
            >
              Explore Attractions
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("events")}
              className="bg-white/10 border-white text-white hover:bg-white/20 backdrop-blur-sm px-8 py-6"
            >
              Discover Events
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#fdfcfa"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

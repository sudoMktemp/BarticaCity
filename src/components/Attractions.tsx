import { Compass, Mountain, ShoppingBag, Sailboat, Bird, MapPinned } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AttractionsProps {
  waterfallImage: string;
  marketImage: string;
  parrotImage: string;
  craftImage: string;
  adventureImage: string;
  boatImage: string;
  onNavigate: (page: string) => void;
}

export function Attractions({
  waterfallImage,
  marketImage,
  parrotImage,
  craftImage,
  adventureImage,
  boatImage,
  onNavigate,
}: AttractionsProps) {
  const attractions = [
    {
      id: "marshall-falls",
      title: "Marshall Falls & Natural Wonders",
      description:
        "Experience the breathtaking beauty of Marshall Falls and explore the pristine rainforests through guided tours. Immerse yourself in nature's splendor.",
      image: waterfallImage,
      icon: Mountain,
      color: "secondary",
      badges: ["Nature", "Hiking", "Photography"],
    },
    {
      id: "river-tours",
      title: "River Tours & Exploration",
      description:
        "Take spectacular boat tours through the Essequibo, Mazaruni, and Cuyuni rivers. Discover lush rainforests and diverse wildlife along the waterways.",
      image: boatImage,
      icon: Sailboat,
      color: "primary",
      badges: ["Adventure", "Wildlife", "Guided Tours"],
    },
    {
      id: "parrot-island",
      title: "Parrot Island at Sunset",
      description:
        "Witness thousands of parrots roosting at sunset on Parrot Island. This natural spectacle is one of Bartica's most magical experiences.",
      image: parrotImage,
      icon: Bird,
      color: "accent",
      badges: ["Wildlife", "Sunset", "Photography"],
    },
    {
      id: "local-markets",
      title: "Local Markets & Cuisine",
      description:
        "Experience indigenous and Creole cultures through vibrant local markets. Discover handcrafted goods, fresh produce, and authentic Guyanese cuisine.",
      image: marketImage,
      icon: ShoppingBag,
      color: "primary",
      badges: ["Culture", "Food", "Shopping"],
    },
    {
      id: "indigenous-heritage",
      title: "Indigenous Cultural Heritage",
      description:
        "Visit nearby riverine communities for an authentic indigenous lifestyle immersion. Learn traditional crafts and customs from local artisans.",
      image: craftImage,
      icon: MapPinned,
      color: "secondary",
      badges: ["Culture", "Heritage", "Education"],
    },
    {
      id: "gold-mining",
      title: "Adventure & Gold Mining",
      description:
        "For the adventurous, experience gold mining expeditions or hiking through the surrounding hills. Bartica is your gateway to interior exploration.",
      image: adventureImage,
      icon: Compass,
      color: "accent",
      badges: ["Adventure", "Hiking", "History"],
    },
  ];

  return (
    <section id="attractions" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-primary">
            Attractions & Things to Do
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From natural wonders to cultural experiences, Bartica offers unforgettable adventures 
            for every visitor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => {
            const Icon = attraction.icon;
            return (
              <Card
                key={index}
                onClick={() => onNavigate(attraction.id)}
                className="group overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 group-hover:text-primary transition-colors">{attraction.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {attraction.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {attraction.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        variant="secondary"
                        className="bg-muted hover:bg-primary/10"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-primary text-sm group-hover:underline">Learn more →</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Historic Sites */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border-2 border-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl mb-4">Historic Kyk-Over-Al Fort</h3>
            <p className="text-muted-foreground leading-relaxed">
              Visit the ruins of the Dutch fort Kyk-Over-Al, located north of Bartica. This historic 
              site offers a glimpse into the colonial past and provides stunning views of the 
              surrounding rivers and landscape. The fort stands as a testament to the region's 
              strategic importance throughout history.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

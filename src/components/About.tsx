import { MapPin, Users, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutProps {
  riverImage: string;
  onNavigate: (page: string) => void;
}

export function About({ riverImage, onNavigate }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-primary">Discover Bartica</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A vibrant town where rivers converge and cultures unite
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl mb-6 text-foreground">
              The Heart of Guyana's Interior
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Bartica is a small yet vibrant town located in north-central Guyana at the confluence 
              of three majestic rivers: the Essequibo, Mazaruni, and Cuyuni. This unique geographical 
              position has earned it the title <span className="text-primary">"Gateway to the Interior"</span> 
              and makes it a vital launching point for adventurers and miners heading into the bush.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The name "Bartica" comes from an indigenous word meaning <span className="text-primary">"red earth"</span>, 
              describing the rich, abundant soil that characterizes this region. This red earth has nurtured 
              the town and its people for generations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Serving as the regional capital of Cuyuni-Mazaruni, Bartica has grown from its origins 
              as an Anglican missionary settlement in the 1800s into a thriving community of 8,000 to 
              15,000 people who represent the beautiful diversity of Guyana's cultural heritage.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={riverImage}
                alt="Rivers of Bartica"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card
            className="p-8 bg-white border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl cursor-pointer group"
            onClick={() => onNavigate('strategic-location')}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h4 className="mb-3 group-hover:text-primary transition-colors">Strategic Location</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Situated at the meeting point of three rivers, accessible by land, air, and river transport 
              from Georgetown and beyond.
            </p>
            <p className="text-primary text-sm group-hover:underline">Learn more →</p>
          </Card>

          <Card
            className="p-8 bg-white border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl cursor-pointer group"
            onClick={() => onNavigate('diverse-community')}
          >
            <div className="w-14 h-14 rounded-full bg-secondary/10 group-hover:bg-secondary/20 flex items-center justify-center mb-4 transition-colors">
              <Users className="w-7 h-7 text-secondary" />
            </div>
            <h4 className="mb-3 group-hover:text-secondary transition-colors">Diverse Community</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A melting pot of indigenous, Creole, Indian, and other cultures, creating a rich tapestry 
              of traditions and heritage.
            </p>
            <p className="text-secondary text-sm group-hover:underline">Learn more →</p>
          </Card>

          <Card
            className="p-8 bg-white border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl cursor-pointer group"
            onClick={() => onNavigate('rich-history')}
          >
            <div className="w-14 h-14 rounded-full bg-accent/20 group-hover:bg-accent/30 flex items-center justify-center mb-4 transition-colors">
              <Calendar className="w-7 h-7 text-accent-foreground" />
            </div>
            <h4 className="mb-3 group-hover:text-accent-foreground transition-colors">Rich History</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              From Anglican missionary settlement in the 1800s to modern regional capital, Bartica's 
              story spans centuries.
            </p>
            <p className="text-accent-foreground text-sm group-hover:underline">Learn more →</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

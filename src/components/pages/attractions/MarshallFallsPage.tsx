import { ArrowLeft, Mountain, Camera, Footprints, Droplet } from "lucide-react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Badge } from "../../ui/badge";

interface MarshallFallsPageProps {
  onBack: () => void;
}

export function MarshallFallsPage({ onBack }: MarshallFallsPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Header */}
      <div className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1522645951282-750282e3b142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjB0cm9waWNhbCUyMGx1c2h8ZW58MXx8fHwxNzYxNjI5MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Marshall Falls"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 lg:px-8 pb-12">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-white hover:bg-white/20 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Attractions
            </Button>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                  <Mountain className="w-7 h-7 text-white" />
                </div>
                <Badge className="bg-accent text-accent-foreground">Natural Wonder</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl text-white mb-4">Marshall Falls & Natural Wonders</h1>
              <p className="text-xl text-white/90">
                Experience the breathtaking power and pristine beauty of one of Guyana's most spectacular waterfalls
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Marshall Falls is a hidden gem nestled in the lush rainforest near Bartica, where crystal-clear 
            waters cascade down moss-covered rocks into pristine pools below. This natural wonder embodies 
            the untouched beauty of Guyana's interior, offering visitors an unforgettable experience of 
            tropical paradise.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The journey to Marshall Falls is an adventure in itself, taking you through dense rainforest 
            teeming with exotic birds, colorful butterflies, and the symphony of nature's sounds. The reward 
            at the end is a spectacular waterfall where you can swim in cool, refreshing pools surrounded by 
            the untamed beauty of the rainforest.
          </p>
        </div>

        {/* What to Experience */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-primary">What Awaits You</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Droplet className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-3">Natural Swimming Pools</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cool, crystal-clear pools perfect for swimming and refreshing yourself after the hike. 
                The water is pure and invigorating, fed directly from the falls.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-secondary/5 border-2 border-secondary/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Footprints className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="mb-3">Jungle Hiking Trails</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trek through pristine rainforest on well-maintained trails. Your experienced guide will 
                point out medicinal plants, exotic wildlife, and share indigenous knowledge.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-accent/5 border-2 border-accent/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="mb-3">Photography Paradise</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Capture stunning shots of cascading water, lush vegetation, and unique wildlife. The 
                interplay of light through the forest canopy creates magical moments.
              </p>
            </Card>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-primary">Natural Beauty Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730234949742-6e6b31350d28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5nbGUlMjByYWluZm9yZXN0JTIwYWVyaWFsfGVufDF8fHx8MTc2MTYyOTM0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rainforest Canopy"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605409026057-9fe43757f6ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHN1bnNldCUyMHJpdmVyfGVufDF8fHx8MTc2MTYyOTM0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tropical Landscape"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Practical Information */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-2 border-primary/20">
            <h2 className="text-3xl mb-6 text-primary">Plan Your Visit</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="mb-3 text-secondary">What to Bring</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Swimming attire and towel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Comfortable hiking shoes with good grip</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Insect repellent and sunscreen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Waterproof camera or phone case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Water and snacks for the hike</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-secondary">Good to Know</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Guided tours available from Bartica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Moderate fitness level required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Best visited during dry season</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Allow 4-6 hours for full experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Local guides enhance the experience</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white/50 rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                "Marshall Falls offers more than just a beautiful waterfall—it's a journey into the 
                heart of Guyana's pristine rainforest, where you'll connect with nature in its purest form."
              </p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button
            onClick={onBack}
            size="lg"
            className="bg-primary hover:bg-primary/90 px-12"
          >
            Explore More Attractions
          </Button>
        </div>
      </div>
    </div>
  );
}

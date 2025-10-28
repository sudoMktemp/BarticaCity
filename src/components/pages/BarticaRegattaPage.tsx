import { ArrowLeft, Trophy, Music, Users, Calendar, Heart, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";

interface BarticaRegattaPageProps {
  onBack: () => void;
}

export function BarticaRegattaPage({ onBack }: BarticaRegattaPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Header */}
      <div className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1737137234223-3e9f5824ef63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwcmFjZSUyMHNwZWVkYm9hdHxlbnwxfHx8fDE3NjE2MzAzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Bartica Regatta"
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
              Back to Events
            </Button>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <Badge className="bg-accent text-accent-foreground">Annual Festival</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl text-white mb-4">Bartica Regatta</h1>
              <p className="text-xl text-white/90">
                Easter Weekend's ultimate celebration of speed, music, and Caribbean culture
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Every Easter weekend, Bartica transforms into the epicenter of Caribbean celebration as thousands 
            descend upon the town for the legendary Bartica Regatta. What began as a simple boat race has evolved 
            into Guyana's premier festival—a spectacular four-day extravaganza of high-speed boat racing, 
            non-stop parties, live music, and pure, unfiltered Caribbean joy.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The Regatta is more than an event—it's a cultural phenomenon. Families plan their year around it. 
            Guyanese from around the world return home for it. And first-time visitors leave understanding why 
            this small town's Easter celebration has become legendary throughout the Caribbean and beyond.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-primary">Experience the Regatta</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Watch these popular videos to see why the Bartica Regatta is called the greatest party in Guyana!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* YouTube Video 1 - Powerboat to dirt track racing */}
            <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/uX8-WNU0gys"
                  title="Powerboat to dirt track racing - Bartica the home of the regatta"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  <h4 className="text-sm">Powerboat to Dirt Track Racing</h4>
                </div>
                <p className="text-xs text-muted-foreground">
                  Bartica the home of the regatta - experience the thrill of high-speed powerboat and dirt track racing action
                </p>
              </div>
            </Card>

            {/* YouTube Video 2 - Power Boat Racing Golden Beach */}
            <Card className="overflow-hidden border-2 border-secondary/20 hover:border-secondary/40 transition-all">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/8qKGHSDqZC8"
                  title="BARTICA REGATTA- POWER BOAT RACING-GOLDEN BEACH- ESSEQUIBO-GUYANA"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-gradient-to-br from-secondary/5 to-primary/5">
                <div className="flex items-center gap-2 mb-2">
                  <Music className="w-4 h-4 text-secondary" />
                  <h4 className="text-sm">Power Boat Racing - Golden Beach</h4>
                </div>
                <p className="text-xs text-muted-foreground">
                  Watch the intense powerboat racing action at Golden Beach on the Essequibo River
                </p>
              </div>
            </Card>
          </div>

          {/* Additional Videos */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
            <Card className="overflow-hidden border-2 border-accent/20 hover:border-accent/40 transition-all">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Y_37MqG4LUE"
                  title="EASTER WEEKEND REGATTA IN BARTICA REGION 7 GUYANA"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-gradient-to-br from-accent/5 to-primary/5">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-accent-foreground" />
                  <h4 className="text-sm">Easter Weekend Regatta in Bartica</h4>
                </div>
                <p className="text-xs text-muted-foreground">
                  The full Easter weekend experience in Bartica Region 7 - parties, racing, and celebration
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/IEHX7buNg_U"
                  title="Bartica Regatta 2024 Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  <h4 className="text-sm">Bartica Regatta 2024 Highlights</h4>
                </div>
                <p className="text-xs text-muted-foreground">
                  The best moments from Bartica Regatta 2024 - see why this is Guyana's biggest celebration
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-primary">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-3">Thrilling Boat Races</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Powerful speedboats tear across the Essequibo River at breathtaking speeds. Drivers compete for 
                prize money, bragging rights, and the coveted Regatta championship title. The roar of engines 
                and spray of water creates an electrifying atmosphere.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-secondary/5 border-2 border-secondary/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Music className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="mb-3">Non-Stop Music</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Multiple sound systems compete to see who plays the loudest and best soca, reggae, and dancehall. 
                Live performances by Guyana's top artists and Caribbean stars. Dance from sunrise to sunrise—the 
                party literally never stops.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-accent/5 border-2 border-accent/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="mb-3">Massive Crowds</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bartica's population swells from thousands to tens of thousands as visitors flood in. The riverfront 
                becomes one huge party venue. Meet people from everywhere, make instant friends, and experience 
                Caribbean hospitality at its warmest.
              </p>
            </Card>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-primary">Regatta Memories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760858476222-5db718e05275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwcmFjaW5nJTIwY29tcGV0aXRpb258ZW58MXx8fHwxNzYxNjI5MzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Boat Racing"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761066489313-84775dfbda91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMGNyb3dkJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYxNTIxNDI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Festival Crowds"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl md:col-span-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556231636-6ffc1fea77bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXN0ZXIlMjBjZWxlYnJhdGlvbiUyMGJlYWNofGVufDF8fHx8MTc2MTYzMDMzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Easter Celebration"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Festival Schedule */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl mb-6 text-primary">Four Days of Celebration</h2>
            <div className="space-y-4">
              <Card className="p-5 bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h4 className="text-primary">Good Friday</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  The warm-up begins! Boats arrive, sound systems are tested, and early parties kick off. 
                  The riverfront starts buzzing with anticipation.
                </p>
              </Card>

              <Card className="p-5 bg-gradient-to-r from-secondary/5 to-primary/5 border-l-4 border-secondary">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <h4 className="text-secondary">Easter Saturday</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  The main event! Major boat races throughout the day draw huge crowds. Night brings the 
                  biggest parties with live performances by top Caribbean artists.
                </p>
              </Card>

              <Card className="p-5 bg-gradient-to-r from-accent/5 to-secondary/5 border-l-4 border-accent">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-accent-foreground" />
                  <h4 style={{color: "var(--accent-foreground)"}}>Easter Sunday</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  More racing action and continued celebrations. Families enjoy the festivities, and the party 
                  atmosphere remains at peak energy.
                </p>
              </Card>

              <Card className="p-5 bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h4 className="text-primary">Easter Monday</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  The grand finale with championship races and closing ceremonies. People slowly begin their 
                  journeys home, already planning for next year!
                </p>
              </Card>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-7 h-7 text-primary" />
                  <h3 className="text-2xl">Why People Love the Regatta</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-sm leading-relaxed">
                    <strong className="text-foreground">"Pure vibes!"</strong> The Regatta embodies Caribbean 
                    culture at its most authentic and joyful. No pretense, no VIP sections dividing people—just 
                    pure, democratic celebration where everyone parties together.
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong className="text-foreground">"Unforgettable memories:"</strong> People talk about 
                    their Regatta experiences for years. The combination of excitement, music, and warm Guyanese 
                    hospitality creates moments that last a lifetime.
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong className="text-foreground">"Family reunion:"</strong> For many Guyanese living 
                    abroad, Regatta is when they return home, reconnect with family, and remember their roots. 
                    It's a homecoming as much as a festival.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Practical Information */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-2 border-primary/20">
            <h2 className="text-3xl mb-6 text-primary">Planning Your Regatta Visit</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="mb-3 text-secondary">Essential Tips</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Book accommodation months in advance—everywhere sells out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Bring cash—ATMs run out quickly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Stay hydrated and pace yourself</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Waterproof your phone and valuables</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-secondary">What to Bring</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Light, comfortable clothes for hot weather</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sunscreen and sunglasses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Comfortable shoes for standing/dancing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Energy for four days of non-stop fun!</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white/50 rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                "If you want to truly understand Guyanese culture and Caribbean spirit, come to the Bartica Regatta. 
                You'll leave with a hundred new friends and memories that last forever." — Long-time Regatta Attendee
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
            Explore More Events
          </Button>
        </div>
      </div>
    </div>
  );
}

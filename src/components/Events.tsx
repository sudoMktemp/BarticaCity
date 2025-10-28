import { Calendar, Music, Sparkles, Trophy } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

interface EventsProps {
  regattaImage: string;
  diwaliImage: string;
  carnivalImage: string;
  festivalImage: string;
  onNavigate: (page: string) => void;
}

export function Events({ regattaImage, diwaliImage, carnivalImage, festivalImage, onNavigate }: EventsProps) {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-primary">
            Festivals & Events
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the vibrant celebrations that bring our diverse community together throughout the year
          </p>
        </div>

        {/* Featured Event - Bartica Regatta */}
        <div className="mb-16">
          <Card 
            onClick={() => onNavigate('bartica-regatta')}
            className="overflow-hidden border-4 border-primary/20 shadow-2xl cursor-pointer group hover:shadow-3xl transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-auto overflow-hidden">
                <ImageWithFallback
                  src={regattaImage}
                  alt="Bartica Regatta"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">Featured Event</Badge>
                </div>
              </div>
              <div className="p-8 md:p-12 bg-gradient-to-br from-white to-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="border-primary text-primary">
                    Easter Weekend
                  </Badge>
                </div>
                <h3 className="text-3xl md:text-4xl mb-4">Bartica Regatta</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The crown jewel of Bartica's annual calendar! Experience the thrill of exciting boat 
                  races on the Essequibo River, featuring the prestigious Miss Regatta beauty pageant, 
                  live music from top bands, delicious food from local vendors, and vibrant celebrations 
                  that draw crowds from across Guyana and beyond.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Sparkles className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="mb-1">Thrilling Activities</h4>
                      <p className="text-sm text-muted-foreground">
                        Boat races, cricket, boxing, soccer, street jams, and gospel concerts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Music className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="mb-1">Entertainment</h4>
                      <p className="text-sm text-muted-foreground">
                        Live music bands, cultural performances, and the famous Miss Regatta pageant
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-primary text-sm mt-4 group-hover:underline">Learn more about the Regatta →</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Events */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card 
            onClick={() => onNavigate('diwali')}
            className="overflow-hidden border-2 hover:border-accent/40 transition-all duration-300 hover:shadow-xl cursor-pointer group"
          >
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src={diwaliImage}
                alt="Diwali Festival of Lights"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-accent text-accent-foreground mb-2">
                  October/November
                </Badge>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="group-hover:text-accent-foreground transition-colors">Diwali - Festival of Lights</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Celebrate the beautiful Festival of Lights reflecting Guyana's rich Indian heritage. 
                Experience the magical display of lights, traditional music, delicious cuisine, and 
                the warmth of community celebrations that illuminate Bartica.
              </p>
              <p className="text-accent-foreground text-sm group-hover:underline">Discover Diwali →</p>
            </div>
          </Card>

          <Card 
            onClick={() => onNavigate('carnival')}
            className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl cursor-pointer group"
          >
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src={carnivalImage}
                alt="Guyana Carnival"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-primary text-white mb-2">Annual</Badge>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Music className="w-5 h-5 text-primary" />
                </div>
                <h3 className="group-hover:text-primary transition-colors">Guyana Carnival</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Join the explosion of color, music, and dance during Guyana Carnival! Bartica comes 
                alive with colorful street parades, elaborate costumes, soca music, and non-stop 
                celebrations showcasing the town's vibrant cultural diversity.
              </p>
              <p className="text-primary text-sm group-hover:underline">Experience Carnival →</p>
            </div>
          </Card>
        </div>

        {/* Community Events Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 md:p-12 bg-white rounded-2xl border-2 border-secondary/20 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl mb-4">Year-Round Celebrations</h3>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Beyond our major festivals, Bartica hosts numerous sports events, cultural celebrations, 
              and community gatherings throughout the year. From cricket matches to gospel concerts, 
              there's always something happening in our vibrant town that brings people from all 
              walks of life together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

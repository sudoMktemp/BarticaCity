import { ArrowLeft, Music, Palette, Heart, Users, Camera, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";

interface CarnivalPageProps {
  onBack: () => void;
}

export function CarnivalPage({ onBack }: CarnivalPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Header */}
      <div className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1654868135927-a981ec866b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJuaXZhbCUyMHBhcmFkZSUyMGRhbmNpbmd8ZW58MXx8fHwxNzYxNjMwMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Guyana Carnival"
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
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary backdrop-blur-sm flex items-center justify-center">
                  <Music className="w-7 h-7 text-white" />
                </div>
                <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-none">Caribbean Celebration</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl text-white mb-4">Guyana Carnival</h1>
              <p className="text-xl text-white/90">
                Experience the explosion of color, music, and Caribbean joy that is Guyana's Mashramani and Carnival season
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            When Carnival season arrives in Guyana, Bartica explodes with color, music, and pure Caribbean energy. 
            Known locally as "Mash" (short for Mashramani, meaning "celebration after hard work"), Guyana's carnival 
            combines the best of Caribbean carnival culture with uniquely Guyanese flavor. It's a time when the 
            streets become stages, costumes transform ordinary people into spectacular works of art, and the entire 
            town dances as one.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Unlike Rio's Carnival or Trinidad's massive celebrations, Bartica's carnival maintains an intimate, 
            community-focused feel where everyone—from children to elders—participates. The celebration runs 
            around Republic Day (February 23rd) and features costume bands, calypso competitions, street parades, 
            and non-stop soca music that makes it impossible not to move your feet.
          </p>
        </div>

        {/* What Makes It Special */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-primary">The Carnival Experience</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-3">Spectacular Costumes</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Costume bands spend months creating elaborate outfits with feathers, sequins, and brilliant colors. 
                From traditional mas to modern fantasy designs, the costumes are wearable art that celebrates 
                creativity and Caribbean flair.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-secondary/5 border-2 border-secondary/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Music className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="mb-3">Soca & Calypso Music</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The infectious rhythms of soca and calypso dominate the soundscape. Live performances by top 
                Caribbean artists, DJ competitions, and amateur performers create a 24/7 musical experience that 
                energizes the entire celebration.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-accent/5 border-2 border-accent/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="mb-3">Street Parades</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Costume bands "jump up" through town streets in massive parades. Thousands of revelers dance behind 
                music trucks, the air electric with energy. It's participation, not performance—everyone joins in!
              </p>
            </Card>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-primary">Colors of Carnival</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639002549231-a895a33c4888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNhcm5pdmFsJTIwZmVhdGhlcnN8ZW58MXx8fHwxNzYxNjMwMzMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Carnival Costumes"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1703883272279-b981ec866b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJuaXZhbCUyMGNvc3R1bWVzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYxNjI5MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Festival Dancers"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl md:col-span-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1654868135927-a981ec866b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJuaXZhbCUyMHBhcmFkZSUyMGRhbmNpbmd8ZW58MXx8fHwxNzYxNjMwMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Carnival Parade"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Carnival Activities */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl mb-6 text-secondary">Carnival Events & Activities</h2>
            <div className="space-y-4">
              <Card className="p-5 bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary">
                <h4 className="mb-2 text-primary">Calypso Monarch Competition</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Calypsonians compete with witty, socially conscious songs that comment on current events. 
                  It's entertainment with substance—humor, politics, and social commentary delivered through 
                  infectious rhythms.
                </p>
              </Card>

              <Card className="p-5 bg-gradient-to-r from-secondary/5 to-primary/5 border-l-4 border-secondary">
                <h4 className="mb-2 text-secondary">Costume Band Competitions</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bands compete for prizes based on costume design, presentation, and overall impact. Judges 
                  evaluate creativity, execution, and how well bands maintain energy throughout the parade route.
                </p>
              </Card>

              <Card className="p-5 bg-gradient-to-r from-accent/5 to-secondary/5 border-l-4 border-accent">
                <h4 className="mb-2" style={{color: "var(--accent-foreground)"}}>Children's Carnival</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Kids get their own parade with age-appropriate costumes and celebrations. It's adorable, 
                  energetic, and ensures carnival culture passes to the next generation.
                </p>
              </Card>

              <Card className="p-5 bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary">
                <h4 className="mb-2 text-primary">J'ouvert Morning</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The unofficial start of carnival—revelers cover themselves in paint, mud, or powder and hit 
                  the streets at dawn. It's messy, liberating, and represents carnival's roots in freedom and 
                  rebellion.
                </p>
              </Card>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-7 h-7 text-primary" />
                  <h3 className="text-2xl">The Spirit of Carnival</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-sm leading-relaxed">
                    Carnival is more than a party—it's a statement of cultural identity, joy, and freedom. For 
                    descendants of enslaved Africans and indentured servants, carnival represents triumph over 
                    oppression, the ability to express oneself freely, and celebration of life despite hardship.
                  </p>
                  <p className="text-sm leading-relaxed">
                    In Bartica, carnival maintains its grassroots authenticity. It's not commercialized or 
                    sanitized for tourists. This is real Caribbean culture—raw, energetic, sometimes chaotic, 
                    always joyful, and deeply meaningful to participants.
                  </p>
                  <p className="text-sm leading-relaxed">
                    The phrase often heard during carnival says it all: <strong>"Play mas!"</strong> It means 
                    to let go, be free, celebrate life, and join the collective expression of joy that defines 
                    Caribbean culture.
                  </p>
                </div>
              </Card>

              <Card className="mt-6 p-6 bg-gradient-to-br from-secondary/5 to-accent/5 border-2 border-secondary/10">
                <h4 className="mb-3 text-secondary">Join a Costume Band!</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Visitors can purchase costumes and join bands! Contact bands in advance (some sell out), get 
                  fitted for your costume, and show up ready to "jump up" in the parade.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  It's the best way to experience carnival—not as spectator but as participant, dancing through 
                  streets surrounded by thousands of celebrating people.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Practical Information */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-2 border-primary/20">
            <h2 className="text-3xl mb-6 text-primary">Experience Carnival in Bartica</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="mb-3 text-secondary">What to Bring</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Comfortable shoes for dancing all day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Light, breathable clothing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sunscreen and lots of water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Waterproof bag for phone/valuables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Energy and enthusiasm!</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-secondary">Important Tips</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Book accommodation months in advance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Respect performers and their costumes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Stay with your group in crowds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Drink responsibly and stay hydrated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Let loose and enjoy the experience!</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white/50 rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                "I came to Bartica for carnival not knowing what to expect. By the end, covered in paint and 
                exhausted from dancing, I understood why people say carnival isn't something you watch—it's 
                something you live." — Carnival First-Timer
              </p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button
            onClick={onBack}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-12 border-none"
          >
            Explore More Events
          </Button>
        </div>
      </div>
    </div>
  );
}

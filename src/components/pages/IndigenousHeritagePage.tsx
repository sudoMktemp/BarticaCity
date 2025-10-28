import { ArrowLeft, MapPinned, Heart, Users, Palette, BookOpen, Leaf } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";

interface IndigenousHeritagePageProps {
  onBack: () => void;
}

export function IndigenousHeritagePage({ onBack }: IndigenousHeritagePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Header */}
      <div className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1628940671199-3cae5ead7824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwdmlsbGFnZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjE2MjkzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Indigenous Community"
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
                <div className="w-14 h-14 rounded-full bg-secondary/90 backdrop-blur-sm flex items-center justify-center">
                  <MapPinned className="w-7 h-7 text-white" />
                </div>
                <Badge className="bg-accent text-accent-foreground">Cultural Heritage</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl text-white mb-4">Indigenous Cultural Heritage</h1>
              <p className="text-xl text-white/90">
                Connect with the original stewards of this land and experience living traditions that have endured for millennia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Long before Bartica became a town, long before missionaries arrived or gold seekers ventured into the 
            interior, this land was home to indigenous peoples who lived in harmony with the rivers and rainforests. 
            The Arawak, Carib, and Warrau peoples developed sophisticated cultures, deep ecological knowledge, and 
            rich spiritual traditions that continue to this day.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Visiting indigenous communities near Bartica offers a profound opportunity to step away from modern 
            life and connect with ancient wisdom. These aren't museum displays or historical reenactments—these 
            are living communities where traditions are practiced daily, where elders pass knowledge to young 
            people, and where visitors are welcomed with genuine warmth to share in their way of life.
          </p>
        </div>

        {/* What to Experience */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-secondary">Cultural Experiences</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-white to-secondary/5 border-2 border-secondary/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="mb-3">Traditional Crafts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Learn the ancient art of basket weaving using natural fibers, watch craftspeople create pottery 
                with traditional techniques, and try your hand at making cassava bread the way it's been done 
                for centuries.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-3">Plant Medicine</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Discover the rainforest pharmacy as indigenous guides share knowledge of medicinal plants. Learn 
                which leaves heal wounds, which barks reduce fever, and how this wisdom has been preserved through 
                generations.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-accent/5 border-2 border-accent/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="mb-3">Oral Traditions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Gather around evening fires to hear stories passed down through countless generations—tales of 
                creation, legends of the rivers, and wisdom stories that teach lessons about life and nature.
              </p>
            </Card>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-secondary">Living Heritage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759738094065-c40129ba62ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwY3JhZnRzJTIwd2VhdmluZ3xlbnwxfHx8fDE3NjE2MzAzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Traditional Crafts"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1708434866032-90aedbeddabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwYXJ0JTIwcGF0dGVybnN8ZW58MXx8fHwxNzYxNjMwMzI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Indigenous Art"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl md:col-span-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760637625870-ec403c6a1506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlnZW5vdXMlMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjE2MzAzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Traditional Ceremony"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Community Visits */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl mb-6 text-secondary">Authentic Community Visits</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Indigenous communities near Bartica welcome respectful visitors who genuinely want to learn and 
              connect. These visits are arranged through community leaders and experienced guides who ensure 
              cultural protocols are followed and that tourism benefits the communities directly.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-1">Meet the Elders</h4>
                  <p className="text-sm text-muted-foreground">
                    Spend time with community elders who share their life experiences, traditional knowledge, 
                    and perspectives on maintaining indigenous identity in the modern world.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-1">Share Meals</h4>
                  <p className="text-sm text-muted-foreground">
                    Experience authentic indigenous cuisine prepared using traditional methods—cassava bread, 
                    pepperpot, fresh river fish, and dishes made with foraged rainforest ingredients.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPinned className="w-5 h-5 text-accent-foreground mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-1">River Navigation</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn traditional river navigation techniques that have allowed indigenous peoples to travel 
                    these waterways for thousands of years, reading currents and natural signs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1543125274-c53157f43fbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwdmlsbGFnZSUyMGFtYXpvbnxlbnwxfHx8fDE3NjE2MzAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Indigenous Village"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Cultural Respect */}
        <div className="mb-16">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/20">
            <h2 className="text-3xl mb-6 text-secondary text-center">Respectful Cultural Exchange</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Visiting indigenous communities is a privilege that comes with responsibilities. These experiences 
                are meaningful only when approached with respect, humility, and genuine interest in learning.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-3 text-primary">Please Do:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Ask permission before taking photographs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Listen more than you speak</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Support local artisans by purchasing crafts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Follow your guide's instructions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-secondary">Please Don't:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✗</span>
                      <span>Touch sacred objects without permission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✗</span>
                      <span>Treat the visit as a spectacle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✗</span>
                      <span>Bring alcohol or inappropriate items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✗</span>
                      <span>Rush through the experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Practical Information */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-2 border-primary/20">
            <h2 className="text-3xl mb-6 text-primary">Plan Your Cultural Visit</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="mb-3 text-secondary">What to Bring</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Modest, respectful clothing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Insect repellent and sun protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cash for purchasing crafts directly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Open mind and respectful attitude</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-secondary">Good to Know</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Must be arranged through approved guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Usually full-day or overnight experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Some communities offer homestay options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tourism fees directly support communities</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white/50 rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                "When you visit our community, you become part of our extended family. We share with you not 
                just our crafts and foods, but our stories, our laughter, and our way of seeing the world." 
                — Community Elder
              </p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button
            onClick={onBack}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 px-12"
          >
            Explore More of Bartica
          </Button>
        </div>
      </div>
    </div>
  );
}

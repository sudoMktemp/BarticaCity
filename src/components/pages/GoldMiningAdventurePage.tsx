import { ArrowLeft, Compass, Gem, Mountain, Map, Backpack, AlertCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";

interface GoldMiningAdventurePageProps {
  onBack: () => void;
}

export function GoldMiningAdventurePage({ onBack }: GoldMiningAdventurePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Header */}
      <div className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1647485938389-91df46750f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbWluaW5nJTIwb3BlcmF0aW9ufGVufDF8fHx8MTc2MTU5NTczNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Gold Mining Adventure"
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
                  <Compass className="w-7 h-7 text-white" />
                </div>
                <Badge className="bg-accent text-accent-foreground">Ultimate Adventure</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl text-white mb-4">Adventure & Gold Mining</h1>
              <p className="text-xl text-white/90">
                Follow in the footsteps of prospectors and experience the thrill of the interior
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            For over a century, Bartica has been the gateway for adventurers seeking their fortune in Guyana's 
            gold-rich interior. This heritage continues today, but with a modern twist—visitors can now experience 
            the excitement of gold mining and interior exploration without the hardships faced by early prospectors. 
            It's adventure tourism at its most authentic and thrilling.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            From gold panning experiences to multi-day expeditions into remote mining areas, from jungle trekking 
            to rappelling down waterfalls, Bartica offers adventure experiences that few places on Earth can match. 
            These aren't sanitized theme park attractions—this is real wilderness, real mining heritage, and real adventure.
          </p>
        </div>

        {/* Adventure Options */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-primary">Choose Your Adventure</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Gem className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-3">Gold Panning Experience</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Learn the traditional art of gold panning in actual gold-bearing streams. Expert miners teach you 
                techniques passed down through generations—and you keep any gold you find!
              </p>
              <p className="text-xs text-primary">Half-day experience • Beginner friendly</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-secondary/5 border-2 border-secondary/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Mountain className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="mb-3">Jungle Trekking</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Multi-day expeditions through pristine rainforest to remote waterfalls and mining camps. Sleep in 
                hammocks under the canopy, learn survival skills, and experience true wilderness.
              </p>
              <p className="text-xs text-secondary">2-5 days • Good fitness required</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-accent/5 border-2 border-accent/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Map className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="mb-3">Mining Camp Visits</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Visit active gold mining operations and see modern mining techniques. Meet miners, understand the 
                process from claim to gold bars, and experience life in remote camps.
              </p>
              <p className="text-xs" style={{color: "var(--accent-foreground)"}}>Full day • Educational focus</p>
            </Card>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-primary">Adventure Awaits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1662346912502-a1c03c705d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcGFubmluZyUyMG1pbmluZ3xlbnwxfHx8fDE3NjE2MzAzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gold Panning"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1654846663402-f1e986e239a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBhZHZlbnR1cmUlMjBqdW5nbGV8ZW58MXx8fHwxNzYxNjMwMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jungle Trek"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl md:col-span-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1620466459351-ddaaea83a653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBrYXlha2luZyUyMHJpdmVyfGVufDF8fHx8MTc2MTYzMDMyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="River Adventure"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Gold Rush Heritage */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1647485938389-91df46750f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbWluaW5nJTIwb3BlcmF0aW9ufGVufDF8fHx8MTc2MTU5NTczNnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern Mining"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl mb-6 text-primary">The Gold Rush Legacy</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Gold transformed Bartica from a quiet mission settlement into a bustling frontier town in the late 1800s. 
              Prospectors from around the world flooded through, seeking fortune in the interior. Today, gold mining 
              remains vital to the region, but modern operations blend technology with traditional knowledge.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Gem className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-1">Rich Deposits</h4>
                  <p className="text-sm text-muted-foreground">
                    The Mazaruni and Cuyuni river systems contain significant gold deposits that continue to 
                    be mined using both traditional and modern methods.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Backpack className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-1">Sustainable Practices</h4>
                  <p className="text-sm text-muted-foreground">
                    Modern mining in the region increasingly focuses on environmental responsibility and 
                    sustainable practices that protect the rainforest ecosystem.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Map className="w-5 h-5 text-accent-foreground mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-1">Gateway Function</h4>
                  <p className="text-sm text-muted-foreground">
                    Bartica remains the essential supply hub for mining operations, where miners stock up on 
                    provisions before heading into the bush and return to sell their gold.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety & Preparation */}
        <div className="mb-16">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 border-2 border-accent/20">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-7 h-7 text-accent-foreground" />
              <h2 className="text-3xl text-accent-foreground">Safety First: Important Information</h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                While these adventures are thrilling, they take you into genuine wilderness. Safety is paramount, 
                and certain precautions are essential for an enjoyable experience.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-3 text-primary">Essential Requirements</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Must use licensed, experienced guides</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Good physical fitness for multi-day treks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Up-to-date vaccinations (Yellow Fever, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Adequate travel insurance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-secondary">What to Expect</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Basic accommodations in remote areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>No cell phone coverage in the interior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Challenging weather and terrain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Incredible, unforgettable experiences!</span>
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
            <h2 className="text-3xl mb-6 text-primary">Plan Your Adventure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="mb-3 text-secondary">Essential Gear</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sturdy hiking boots (broken in)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Quick-dry clothing and rain gear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Heavy-duty insect repellent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Headlamp with extra batteries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>First aid supplies and medications</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-secondary">Booking & Timing</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Book through certified tour operators in Bartica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Best season: September to March (drier)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Multi-day trips require advance booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Private and group options available</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white/50 rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                "There's nothing quite like the rush of finding your first fleck of gold in a pan, or standing on 
                a hilltop deep in the interior knowing you're miles from civilization. This is real adventure." 
                — Adventure Guide, 15 years experience
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
            Explore More Adventures
          </Button>
        </div>
      </div>
    </div>
  );
}

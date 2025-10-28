import { ArrowLeft, TrendingUp, Droplets, Gem, Zap, Building2, Users2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";

interface EconomicGrowthPageProps {
  onBack: () => void;
}

export function EconomicGrowthPage({ onBack }: EconomicGrowthPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Header */}
      <div className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758799011492-f05fc280d415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwbGF0Zm9ybSUyMG9mZnNob3JlfGVufDF8fHx8MTc2MTYyOTM0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Economic Development"
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
              Back to Home
            </Button>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <Badge className="bg-accent text-accent-foreground">Economic Development</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl text-white mb-4">
                Bartica's Bright Future
              </h1>
              <p className="text-xl text-white/90">
                From mining town to modern hub: Discover how Bartica stands at the forefront of Guyana's exciting transformation
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl mb-6 text-primary">A Town at the Crossroads of Progress</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Bartica's story is one of remarkable transformation. What began as a humble Anglican missionary settlement 
            in the 1800s evolved into a bustling gold rush frontier town, and now stands poised to become a modern 
            economic powerhouse. The town's strategic location—where three mighty rivers meet—has always been its 
            greatest asset, and today that advantage is more relevant than ever.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            As Guyana experiences unprecedented economic growth driven by major oil discoveries and expanding industries, 
            Bartica finds itself perfectly positioned to benefit. The "Gateway to the Interior" is transforming into 
            a gateway to prosperity, where traditional industries meet modern innovation, and where community heritage 
            blends with forward-thinking development.
          </p>
        </div>

        {/* New Industries */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-primary">Driving Growth: New & Growing Industries</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Droplets className="w-7 h-7 text-primary" />
              </div>
              <h3 className="mb-3 text-center">Offshore Oil Boom</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Guyana's massive offshore oil discoveries have transformed the nation's economy. While the oil 
                platforms are offshore, Bartica serves as a crucial supply and service hub for the interior 
                logistics that support this industry.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Supply chain logistics hub</p>
                <p>• Accommodation for workers</p>
                <p>• Transportation coordination center</p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-secondary/5 border-2 border-secondary/20 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
                <Gem className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="mb-3 text-center">Modern Gold Mining</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Gold mining remains vital to Bartica's economy, but it's evolved dramatically. Modern, environmentally-conscious 
                operations replace old methods, bringing sustainable prosperity while respecting the environment.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Sustainable mining practices</p>
                <p>• Advanced technology adoption</p>
                <p>• Export processing facilities</p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-accent/5 border-2 border-accent/20 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <Users2 className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="mb-3 text-center">Eco-Tourism Growth</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                As travelers seek authentic, sustainable experiences, Bartica's eco-tourism sector flourishes. 
                Pristine rainforests, unique wildlife, and indigenous culture attract visitors from around the world.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Eco-lodges and resorts</p>
                <p>• Guided wilderness tours</p>
                <p>• Cultural immersion experiences</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Infrastructure Development */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl mb-6 text-secondary">Infrastructure for Tomorrow</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Recognizing Bartica's strategic importance, significant investments are flowing into infrastructure 
                development. New roads, improved port facilities, upgraded power systems, and modern telecommunications 
                are transforming the town's capacity to support economic growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">Energy & Power</h4>
                    <p className="text-sm text-muted-foreground">
                      Renewable energy projects and grid improvements ensure reliable power for growing industries
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">Modern Facilities</h4>
                    <p className="text-sm text-muted-foreground">
                      New commercial spaces, warehousing, and business centers attract investors and entrepreneurs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-accent-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">Transportation Networks</h4>
                    <p className="text-sm text-muted-foreground">
                      Enhanced river ports, improved roads, and better air connections facilitate commerce and travel
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759912497669-f2b90b1d3fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXZlbG9wbWVudCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjE2MjkzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Development"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Strategic Position */}
        <div className="mb-16">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20">
            <h2 className="text-3xl mb-6 text-center">Bartica's Strategic Advantage</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="mb-3 text-primary">Geographic Excellence</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  The confluence of three major rivers creates natural transportation corridors to vast interior 
                  regions rich in resources. This positioning makes Bartica an inevitable hub for any interior 
                  development.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Access to mineral-rich regions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Natural river highway system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Proximity to Georgetown (capital)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-secondary">Human Capital</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Bartica's diverse, skilled population brings together indigenous knowledge, mining expertise, 
                  entrepreneurial spirit, and multicultural perspectives—a unique combination that drives innovation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Experienced workforce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Cultural diversity as strength</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Community-focused development</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Vision for the Future */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl mb-6 text-center text-primary">A Vision of Sustainable Prosperity</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bartica's future is being written today, and it's a story of balance—between economic growth and 
              environmental preservation, between modern development and cultural heritage, between progress and 
              sustainability. The town envisions becoming a model for how resource-rich regions can develop responsibly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Key to this vision is maintaining what makes Bartica special: its warm community spirit, its cultural 
              diversity, its connection to nature, and its role as the authentic gateway to Guyana's magnificent interior. 
              Economic development isn't just about buildings and industries—it's about creating opportunities for all 
              Barticans, from every walk of life, to thrive.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As oil revenues flow into Guyana's economy, as mining modernizes, as tourism grows, and as infrastructure 
              improves, Bartica stands ready not just to benefit from these changes, but to shape them. The next chapter 
              in this town's remarkable history is just beginning, and it promises to be the most exciting yet—a chapter 
              where Bartica's past as a gateway town evolves into a future as a thriving, sustainable, modern hub that 
              remains true to its roots.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 border-2 border-primary/10 shadow-lg">
          <h3 className="text-2xl md:text-3xl mb-4">Be Part of Bartica's Future</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Whether you're an investor, entrepreneur, tourist, or someone looking for new opportunities, 
            Bartica welcomes you to be part of this exciting transformation. The gateway is open—come discover 
            what awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onBack}
              size="lg"
              className="bg-primary hover:bg-primary/90 px-8"
            >
              Explore Bartica
            </Button>
            <Button
              onClick={() => document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8"
            >
              Plan Your Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

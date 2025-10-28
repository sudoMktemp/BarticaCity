import { ArrowLeft, MapPin, Navigation, Anchor, Plane } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface StrategicLocationPageProps {
  onBack: () => void;
}

export function StrategicLocationPage({ onBack }: StrategicLocationPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <div className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl text-white">Strategic Location</h1>
              <p className="text-white/90 text-lg">Gateway to Guyana's Interior</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1645641278368-1c2d3dd01488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMGNvbmZsdWVuY2UlMjBhZXJpYWx8ZW58MXx8fHwxNzYxNjI4MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="River Confluence"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl mb-4 text-primary">The Confluence of Three Rivers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bartica occupies one of the most strategically significant locations in Guyana. 
                The town sits at the remarkable confluence of three major rivers: the mighty Essequibo, 
                the Mazaruni, and the Cuyuni. This unique geographical position has shaped Bartica's 
                destiny as a crucial hub for transportation, commerce, and exploration.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Essequibo River, the largest river in Guyana and one of the major rivers of 
                South America, provides a natural highway connecting the interior to the coast. 
                The Mazaruni and Cuyuni rivers extend deep into the mineral-rich hinterlands, making 
                Bartica the perfect launching point for mining expeditions and interior exploration.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This strategic position earned Bartica its well-deserved title as the 
                <span className="text-primary"> "Gateway to the Interior"</span>. For centuries, 
                anyone venturing into Guyana's vast interior regions has passed through Bartica, 
                making it a vital link between coastal Georgetown and the resource-rich bush.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608724590235-f91a3dbafffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHRvd24lMjBhZXJpYWx8ZW58MXx8fHwxNzYxNjI4MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bartica Town Aerial View"
                className="w-full h-[350px] object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl mb-4">Transportation Hub</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bartica's location has made it a multimodal transportation hub, accessible by land, 
                air, and water. This connectivity is essential for the town's role as a regional 
                capital and service center for the interior.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                River transport remains the traditional and most scenic way to reach Bartica. Regular 
                boat services connect the town to Georgetown and numerous riverine communities. The 
                journey along the Essequibo offers breathtaking views of pristine rainforest, wildlife, 
                and traditional settlements that have changed little over the centuries.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759744883546-e912e77675f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMHRyYW5zcG9ydGF0aW9uJTIwYm9hdHxlbnwxfHx8fDE3NjE2MjgxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="River Transportation"
                className="w-full h-[350px] object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl mb-4">Economic Importance</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As the regional capital of Cuyuni-Mazaruni, Bartica serves as an administrative, 
                commercial, and service center for a vast area. The town is the primary supply point 
                for gold and diamond miners working in the interior, with shops, equipment suppliers, 
                and trading posts catering to this industry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond mining, Bartica's location makes it ideal for eco-tourism development. The 
                town provides access to some of Guyana's most pristine rainforests, waterfalls, and 
                wildlife viewing areas. Tour operators use Bartica as a base for expeditions into 
                the interior, offering visitors authentic wilderness experiences.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664566606471-c18c78b48d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBnb2xkJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MTYyODE3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mining Industry"
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 bg-white border-2 border-primary/10 sticky top-24">
              <h3 className="mb-6">Connectivity</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Anchor className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="mb-2">River Transport</h4>
                    <p className="text-sm text-muted-foreground">
                      Regular boat services to Georgetown and interior communities along all three rivers
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2">Road Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Land routes connecting to coastal Georgetown and other major towns
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Plane className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="mb-2">Air Services</h4>
                    <p className="text-sm text-muted-foreground">
                      Charter flights available for quick access from Georgetown and beyond
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
              <h4 className="mb-3">Did You Know?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The three rivers that meet at Bartica drain an area of over 80,000 square kilometers, 
                making this confluence one of the most significant river junctions in South America.
              </p>
            </Card>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1716848812059-ddf9e72c33e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGFpcmNyYWZ0JTIwbGFuZGluZ3xlbnwxfHx8fDE3NjE2MjgxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Air Transport"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-12 border-2 border-primary/10 shadow-lg">
          <h3 className="text-2xl md:text-3xl mb-4">Visit the Gateway</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Experience Bartica's strategic location firsthand. Whether you arrive by river, road, 
            or air, you'll understand why this town has been the gateway to adventure for generations.
          </p>
          <Button
            onClick={onBack}
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            Explore More of Bartica
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Plane, Ship, Car, Hotel, Info, Mail, MapIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";

interface VisitProps {
  communityImage: string;
}

export function Visit({ communityImage }: VisitProps) {
  const [activeTab, setActiveTab] = useState("air");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! This is a demo form.");
  };

  return (
    <section id="visit" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-primary">Plan Your Visit</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know to make your journey to Bartica unforgettable
          </p>
        </div>

        {/* Getting Here - With Tabs */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl mb-8 text-center text-primary">Getting to Bartica</h3>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8 bg-muted/50 p-2">
              <TabsTrigger 
                value="air" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Plane className="w-4 h-4" />
                By Air
              </TabsTrigger>
              <TabsTrigger 
                value="river"
                className="flex items-center gap-2 data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                <Ship className="w-4 h-4" />
                By River
              </TabsTrigger>
              <TabsTrigger 
                value="land"
                className="flex items-center gap-2 data-[state=active]:bg-accent data-[state=active]:text-white"
              >
                <Car className="w-4 h-4" />
                By Land
              </TabsTrigger>
            </TabsList>

            <TabsContent value="air" className="mt-0">
              <Card className="border-2 border-primary/20 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 bg-gradient-to-br from-primary/5 to-background">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Plane className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-2xl mb-4 text-primary">Flying to Bartica</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The quickest way to reach Bartica is by air. Small aircraft provide regular charter 
                      services from Georgetown's Ogle Airport, offering breathtaking aerial views of Guyana's 
                      vast rainforest and river systems.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h5 className="mb-2 text-secondary">Flight Details</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Duration: 20-30 minutes from Georgetown</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Multiple daily departures available</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Private charters and scheduled flights</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Spectacular views of rivers and rainforest</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-accent-foreground">Pro Tip:</strong> Book window seats 
                          for the best views of the three rivers confluence!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-full min-h-[400px]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1639369497886-b7756567a02c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFwbGFuZSUyMHdhdGVyJTIwbGFuZGluZ3xlbnwxfHx8fDE3NjE2MzAzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Seaplane on water"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="river" className="mt-0">
              <Card className="border-2 border-secondary/20 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="order-2 md:order-1 h-full min-h-[400px]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1688880733698-47eb42a96f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMGZlcnJ5JTIwYm9hdHxlbnwxfHx8fDE3NjE2MjkzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="River ferry"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2 p-8 bg-gradient-to-br from-secondary/5 to-background">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                      <Ship className="w-8 h-8 text-secondary" />
                    </div>
                    <h4 className="text-2xl mb-4 text-secondary">Traditional River Journey</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Experience Guyana the traditional way! River travel offers an immersive journey along 
                      the mighty Essequibo, with opportunities to see wildlife, visit riverside communities, 
                      and truly connect with the landscape.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h5 className="mb-2 text-primary">River Travel Details</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-secondary mt-1">•</span>
                            <span>Duration: 3-4 hours from Parika (Georgetown area)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-secondary mt-1">•</span>
                            <span>Regular speedboat services available</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-secondary mt-1">•</span>
                            <span>Most scenic and authentic travel experience</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-secondary mt-1">•</span>
                            <span>Life jackets and safety equipment provided</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-accent-foreground">Local Insight:</strong> Early morning 
                          departures offer cooler temperatures and better wildlife spotting!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="land" className="mt-0">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 bg-gradient-to-br from-accent/5 to-background">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                      <Car className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h4 className="text-2xl mb-4" style={{color: "var(--accent-foreground)"}}>Overland Adventure</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The land route to Bartica combines road travel with a river crossing, offering diverse 
                      views of Guyana's landscape from coastal areas through agricultural regions to the 
                      rainforest edge.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h5 className="mb-2 text-secondary">Road Travel Details</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                            <span>Road to Parika, then river crossing to Bartica</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                            <span>Total journey: 4-5 hours from Georgetown</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                            <span>Minibus services and private vehicles available</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                            <span>See diverse landscapes and local communities</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-primary">Travel Tip:</strong> Arrange transportation 
                          in advance for a smoother journey, especially during rainy season!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-full min-h-[400px]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1615257872214-97ff9d2f9da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0JTIwcm9hZCUyMHRyb3BpY2FsfGVufDF8fHx8MTc2MTYyOTM0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Tropical road"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Simple Map Representation */}
          <div className="mt-8">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <MapIcon className="w-6 h-6 text-primary" />
                <h4 className="text-xl">Location Overview</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl mb-2 text-primary">📍</div>
                  <p className="text-sm mb-1"><strong>From Georgetown</strong></p>
                  <p className="text-xs text-muted-foreground">Capital city - 65km west</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg border-2 border-primary">
                  <div className="text-3xl mb-2">🏛️</div>
                  <p className="text-sm mb-1"><strong>BARTICA</strong></p>
                  <p className="text-xs text-muted-foreground">Three Rivers Gateway</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-3xl mb-2 text-secondary">🌊</div>
                  <p className="text-sm mb-1"><strong>Three Rivers</strong></p>
                  <p className="text-xs text-muted-foreground">Essequibo, Mazaruni, Cuyuni</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Accommodation & Contact */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Hotel className="w-8 h-8 text-primary" />
                <h3 className="text-2xl">Where to Stay</h3>
              </div>
              <Card className="p-6 bg-gradient-to-br from-muted/30 to-background border-2 border-primary/10">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Bartica offers a variety of accommodation options to suit every traveler:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Eco-Tourism Resorts:</strong> Experience 
                      sustainable luxury with access to pristine nature
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Guesthouses:</strong> Comfortable, locally-run 
                      accommodations with authentic hospitality
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Riverine Lodges:</strong> Immersive stays 
                      in indigenous communities for cultural experiences
                    </span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-primary/10">
              <ImageWithFallback
                src={communityImage}
                alt="Bartica Community"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-primary" />
              <h3 className="text-2xl">Get in Touch</h3>
            </div>
            <Card className="p-6 md:p-8 border-2 border-primary/10">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Have questions about visiting Bartica? We'd love to hear from you! Fill out the 
                form below and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-input-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-input-background"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your travel plans or ask any questions..."
                    rows={5}
                    required
                    className="bg-input-background resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="mt-6 p-6 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg border-2 border-secondary/20">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Visitor Information</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Best time to visit: Year-round tropical climate. Plan around the Easter Regatta 
                    for the ultimate Bartica experience! Dry season (September-March) ideal for outdoor activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

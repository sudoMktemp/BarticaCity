import { ArrowLeft, Calendar, Landmark, BookOpen, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface RichHistoryPageProps {
  onBack: () => void;
}

export function RichHistoryPage({ onBack }: RichHistoryPageProps) {
  const timeline = [
    {
      period: "Pre-1800s",
      title: "Indigenous Heritage",
      description: "Long before European contact, indigenous peoples including the Arawak, Carib, and Warrau lived along the rivers, establishing settlements and trading networks. The name 'Bartica' itself comes from an indigenous word meaning 'red earth.'",
      icon: "🏞️",
    },
    {
      period: "Early 1800s",
      title: "Anglican Missionary Settlement",
      description: "British Anglican missionaries established a settlement in Bartica, bringing Christianity and education to the region. This marked the beginning of Bartica's transformation into a formal town.",
      icon: "⛪",
    },
    {
      period: "Mid-1800s",
      title: "Dutch Colonial Influence",
      description: "The Dutch built Fort Kyk-Over-Al north of Bartica, establishing strategic control over the river confluence. The fort's ruins still stand today as a testament to this colonial period.",
      icon: "🏰",
    },
    {
      period: "Late 1800s - Early 1900s",
      title: "Gold Rush Era",
      description: "The discovery of gold and diamonds in the interior transformed Bartica into a bustling frontier town. Prospectors from around the world passed through, establishing Bartica as the Gateway to the Interior.",
      icon: "⛏️",
    },
    {
      period: "20th Century",
      title: "Growth and Development",
      description: "Bartica grew as an administrative center, becoming the regional capital of Cuyuni-Mazaruni. Infrastructure improvements connected the town to Georgetown and other regions.",
      icon: "🏛️",
    },
    {
      period: "21st Century",
      title: "Modern Bartica",
      description: "Today, Bartica balances its historical roots with modern development, maintaining its role as gateway to the interior while embracing eco-tourism and sustainable growth.",
      icon: "🌟",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-accent text-white py-8">
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
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl text-white">Rich History</h1>
              <p className="text-white/90 text-lg">Centuries of Heritage & Transformation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1680886020644-54ff03e6c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJpdGFnZSUyMGhpc3RvcmljJTIwdG93bnxlbnwxfHx8fDE3NjE2MjgxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Historic Heritage"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">
            A Journey Through Time
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Bartica's history is a rich tapestry woven from indigenous heritage, colonial influence, 
            missionary dedication, and the adventurous spirit of gold seekers. From its earliest 
            days as an indigenous settlement to its current role as a vibrant regional capital, 
            Bartica has been shaped by the currents of history as surely as by the three rivers 
            that flow through it.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The town's story is one of transformation, resilience, and cultural fusion—a testament 
            to the enduring spirit of the people who have called this place home throughout the centuries.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl mb-12 text-center flex items-center justify-center gap-3">
            <Clock className="w-8 h-8 text-primary" />
            Historical Timeline
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 border-l-4 border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                      <h3>{item.title}</h3>
                      <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full w-fit">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Historic Sites */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Historic Landmarks</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="rounded-xl overflow-hidden shadow-xl mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1701773067697-73a8d4ace822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNvbG9uaWFsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYxNjI4MTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Historic Colonial Architecture"
                  className="w-full h-80 object-cover"
                />
              </div>
              <Card className="p-6 bg-white border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <Landmark className="w-6 h-6 text-primary" />
                  <h3>Fort Kyk-Over-Al</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The ruins of the Dutch fort Kyk-Over-Al (meaning "See-Over-All") stand north of 
                  Bartica as a powerful reminder of the colonial era. Built by the Dutch to control 
                  the strategic river confluence, the fort offered commanding views of all three rivers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, the fort ruins are a popular tourist attraction, offering visitors a glimpse 
                  into Bartica's colonial past and stunning panoramic views of the surrounding landscape. 
                  The site serves as an important historical monument and a connection to the region's 
                  Dutch heritage.
                </p>
              </Card>
            </div>

            <div>
              <div className="rounded-xl overflow-hidden shadow-xl mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1544456808-7530b2d112df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbmlhbCUyMGNodXJjaCUyMGhpc3RvcmljfGVufDF8fHx8MTc2MTYyODE3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Historic Church"
                  className="w-full h-80 object-cover"
                />
              </div>
              <Card className="p-6 bg-white border-2 border-secondary/10">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-secondary" />
                  <h3>Anglican Missionary Legacy</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Anglican missionaries who arrived in the early 1800s established more than 
                  just a religious presence—they founded schools, medical facilities, and community 
                  institutions that shaped Bartica's development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Historic church buildings and missionary structures still stand in Bartica, serving 
                  as architectural links to this foundational period. These sites represent the 
                  beginning of Bartica's transformation from a river confluence into an organized 
                  settlement and eventually a thriving town.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* The Red Earth Section */}
        <div className="mb-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border-2 border-primary/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-6 text-center">The Meaning of "Red Earth"</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The name "Bartica" derives from an indigenous word meaning "red earth," a reference 
                  to the distinctive reddish soil that characterizes this region. This rich, mineral-laden 
                  earth has been both a blessing and a defining feature of the area for millennia.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For indigenous peoples, this red earth was sacred, providing fertile ground for 
                  cultivation and containing medicinal clays used in traditional healing practices. 
                  The soil's color comes from high iron oxide content, the same minerals that would 
                  later draw gold miners to the region.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, the red earth of Bartica continues to nourish the community, both literally 
                  through agriculture and symbolically as a reminder of the town's deep roots in this land.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1639448158266-80694db01f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdXlhbmElMjBHZW9yZ2V0b3duJTIwY2l0eXxlbnwxfHx8fDE3NjE2MjgxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Guyana Landscape"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mining Heritage */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1664566606471-c18c78b48d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBnb2xkJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MTYyODE3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mining Heritage"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
          <Card className="p-8 bg-white border-2 border-accent/20 flex flex-col justify-center">
            <h3 className="text-2xl mb-6">The Gold Rush Legacy</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The late 19th and early 20th centuries brought dramatic change to Bartica with the 
              discovery of gold and diamonds in the interior. Overnight, the quiet settlement became 
              a bustling frontier town, the last outpost of civilization before the wild interior.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Prospectors, merchants, adventurers, and fortune-seekers from around the world flooded 
              through Bartica, establishing it firmly as the "Gateway to the Interior." The town 
              became a supply center, a place to rest and resupply before heading into the bush, 
              and a market for the gold and diamonds brought back from the claims.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This mining heritage continues to shape Bartica's economy and identity. Modern miners 
              still pass through town, and mining remains an important industry, though now balanced 
              with eco-tourism and sustainable development.
            </p>
          </Card>
        </div>

        {/* Living History */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Living History</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-2 hover:shadow-xl transition-all duration-300">
              <h4 className="mb-3">Oral Traditions</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Elders in Bartica's indigenous and Creole communities preserve centuries-old stories, 
                legends, and historical accounts passed down through generations, keeping the town's 
                oral history alive.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:shadow-xl transition-all duration-300">
              <h4 className="mb-3">Architectural Heritage</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Historic buildings from the colonial and gold rush eras still stand in Bartica, their 
                architecture telling stories of different periods and influences that shaped the town.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:shadow-xl transition-all duration-300">
              <h4 className="mb-3">Cultural Continuity</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Traditional practices, from indigenous river navigation techniques to Creole culinary 
                traditions, continue to be practiced, connecting modern Bartica to its historical roots.
              </p>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-12 border-2 border-primary/10 shadow-lg">
          <h3 className="text-2xl md:text-3xl mb-4">Walk Through History</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Visit Bartica and walk the same paths traveled by indigenous peoples, missionaries, 
            colonists, and gold seekers. Experience a town where history isn't just preserved—it's 
            lived every day.
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

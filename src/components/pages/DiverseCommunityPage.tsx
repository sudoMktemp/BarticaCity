import { ArrowLeft, Users, Heart, Globe, Handshake } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";

interface DiverseCommunityPageProps {
  onBack: () => void;
}

export function DiverseCommunityPage({ onBack }: DiverseCommunityPageProps) {
  const culturalGroups = [
    {
      name: "Indigenous Peoples",
      description: "The original inhabitants of the region, including Arawak, Carib, and Warrau peoples, who maintain their traditional customs and deep connection to the land.",
      traditions: ["Traditional Crafts", "River Navigation", "Herbal Medicine", "Storytelling"],
      color: "primary",
    },
    {
      name: "Creole Community",
      description: "Descendants of African heritage who have contributed significantly to Bartica's cultural landscape, music, and cuisine.",
      traditions: ["Music & Dance", "Culinary Arts", "Folklore", "Community Celebrations"],
      color: "secondary",
    },
    {
      name: "Indo-Guyanese",
      description: "Community members of Indian descent who brought rich traditions, festivals like Diwali, and vibrant cultural practices to Bartica.",
      traditions: ["Diwali Celebrations", "Traditional Cuisine", "Religious Festivals", "Arts & Crafts"],
      color: "accent",
    },
    {
      name: "Mixed Heritage",
      description: "Many Barticans proudly represent multiple cultural backgrounds, creating a unique blend of traditions and perspectives.",
      traditions: ["Fusion Cuisine", "Multicultural Events", "Shared Celebrations", "Community Unity"],
      color: "primary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <div className="bg-secondary text-white py-8">
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
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl text-white">Diverse Community</h1>
              <p className="text-white/90 text-lg">A Beautiful Tapestry of Cultures</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758272133542-b3107b947fc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29tbXVuaXR5JTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYxNTc0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Diverse Community"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-secondary">
            Unity in Diversity
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Bartica is home to a vibrant population of 8,000 to 15,000 people who represent 
            the beautiful diversity of Guyana itself. This small town is a microcosm of the 
            nation's rich cultural heritage, where indigenous peoples, African descendants, 
            Indo-Guyanese, and people of mixed heritage live, work, and celebrate together.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            What makes Bartica truly special is not just the presence of different cultures, 
            but the way these communities have woven together to create a unique social fabric. 
            Here, cultural diversity is celebrated daily through shared markets, festivals, 
            friendships, and a collective pride in calling Bartica home.
          </p>
        </div>

        {/* Cultural Groups */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Our Cultural Tapestry</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {culturalGroups.map((group, index) => (
              <Card key={index} className="p-6 border-2 hover:shadow-xl transition-all duration-300">
                <h3 className="mb-4">{group.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {group.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm mb-3">Cultural Contributions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.traditions.map((tradition, tIndex) => (
                      <Badge
                        key={tIndex}
                        variant="secondary"
                        className="bg-muted"
                      >
                        {tradition}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1664295581055-f0209d9f7f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwcGVvcGxlJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjE2MjgxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Indigenous Culture"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761057292517-74dfb48ede46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJpYmJlYW4lMjBjb21tdW5pdHklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjE2MjgxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community Celebration"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761057292491-74eae3d187fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMENhcmliYmVhbiUyMGZhbWlseXxlbnwxfHx8fDE3NjE2MjgxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community Gathering"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Community Values */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center">What Unites Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-2 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="mb-3">Mutual Respect</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                In Bartica, different cultures coexist with deep respect for each other's 
                traditions, beliefs, and ways of life. This mutual understanding creates 
                a harmonious community.
              </p>
            </Card>

            <Card className="p-8 text-center border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-3">Shared Celebrations</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From Diwali to the Regatta, from Christmas to Carnival, Barticans celebrate 
                each other's festivals, creating a calendar full of joy and cultural exchange.
              </p>
            </Card>

            <Card className="p-8 text-center border-2 hover:border-accent/40 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="mb-3">Community Spirit</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether facing challenges or celebrating successes, Barticans stand together. 
                The community's strength lies in its unity across all walks of life.
              </p>
            </Card>
          </div>
        </div>

        {/* Daily Life Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl mb-6">People from All Walks of Life</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Miners and Prospectors:</strong> Gold and 
                  diamond miners who venture into the interior, bringing economic vitality to the region.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Merchants and Traders:</strong> Shop owners, 
                  market vendors, and business people who keep the local economy thriving.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">River People:</strong> Boat operators, 
                  fishermen, and those who make their living from the three rivers.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Artisans and Craftspeople:</strong> Makers 
                  of traditional crafts, from indigenous basketwork to contemporary art.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Farmers and Agriculturalists:</strong> Those 
                  who cultivate the red earth and provide fresh produce to the community.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Educators and Professionals:</strong> Teachers, 
                  healthcare workers, and civil servants who build the community's future.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Tourism Workers:</strong> Guides, hospitality 
                  staff, and those who share Bartica's beauty with visitors.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-secondary/5 to-primary/5 border-2 border-secondary/10">
              <h3 className="mb-4">The Market - Where Cultures Meet</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Bartica's local markets are the heart of cultural exchange. Here, you'll find 
                indigenous crafts alongside Indo-Guyanese spices, Creole delicacies next to 
                fresh river fish, and conversations flowing in multiple languages and dialects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The market is more than a place of commerce—it's where friendships are forged, 
                recipes are shared, and the true spirit of Bartica's diversity comes alive daily.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/5 to-secondary/5 border-2 border-accent/20">
              <h3 className="mb-4">A Model of Harmony</h3>
              <p className="text-muted-foreground leading-relaxed">
                In a world often divided, Bartica stands as a testament to what's possible when 
                different cultures choose unity over division. The town's diversity isn't just 
                tolerated—it's celebrated, cherished, and seen as the community's greatest strength.
              </p>
            </Card>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1663312210776-8ab35d4cd3dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJpYmJlYW4lMjBtYXJrZXQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjE2MjczNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Local Market"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-12 border-2 border-secondary/10 shadow-lg">
          <h3 className="text-2xl md:text-3xl mb-4">Experience Our Community</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Visit Bartica and experience firsthand how different cultures can create something 
            beautiful together. Meet our people, share our celebrations, and discover why diversity 
            is our greatest treasure.
          </p>
          <Button
            onClick={onBack}
            size="lg"
            className="bg-secondary hover:bg-secondary/90"
          >
            Explore More of Bartica
          </Button>
        </div>
      </div>
    </div>
  );
}

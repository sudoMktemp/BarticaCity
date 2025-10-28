import { ArrowLeft, Sparkles, Flame, Heart, Users, Gift, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";

interface DiwaliPageProps {
  onBack: () => void;
}

export function DiwaliPage({ onBack }: DiwaliPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Header */}
      <div className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1636132664098-423d80b80f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXdhbGklMjBsaWdodHMlMjBuaWdodHxlbnwxfHx8fDE3NjE2MzAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Diwali Celebrations"
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
                <div className="w-14 h-14 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <Badge className="bg-accent text-accent-foreground">Festival of Lights</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl text-white mb-4">Diwali - Festival of Lights</h1>
              <p className="text-xl text-white/90">
                Celebrate the triumph of light over darkness with Bartica's vibrant Indo-Guyanese community
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            As evening falls during Diwali, Bartica transforms into a constellation of lights. Thousands of 
            small clay lamps called diyas flicker outside homes, creating rivers of warm golden light that wind 
            through neighborhoods. The air fills with the aroma of traditional Indian sweets, the sound of prayers 
            and laughter, and a sense of joy that transcends cultural boundaries.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Diwali in Bartica is a beautiful example of how Guyana's diversity creates shared celebration. While 
            rooted in Hindu tradition brought by Indo-Guyanese ancestors, Diwali has become a festival that the 
            entire community embraces. Neighbors of all backgrounds participate in the lighting of lamps, share 
            in traditional foods, and join the celebrations that mark this Festival of Lights.
          </p>
        </div>

        {/* Meaning and Traditions */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center" style={{color: "var(--accent-foreground)"}}>The Festival's Meaning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-white to-accent/5 border-2 border-accent/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="mb-3">Light Over Darkness</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Diwali celebrates the victory of light over darkness, knowledge over ignorance, and good over 
                evil. The countless diyas symbolize the inner light that protects us from spiritual darkness.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-3">Family Unity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Families gather to perform prayers (puja), share traditional sweets, and light lamps together. 
                It's a time for strengthening family bonds and expressing gratitude for blessings received.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-white to-secondary/5 border-2 border-secondary/20 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="mb-3">Prosperity & New Beginnings</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Diwali marks a new beginning. Homes are cleaned and decorated, new clothes are worn, and prayers 
                are offered to Lakshmi, goddess of wealth and prosperity, for blessings in the coming year.
              </p>
            </Card>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center" style={{color: "var(--accent-foreground)"}}>Diwali in Bartica</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666638787374-19795b11e87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXdhbGklMjBsYW1wcyUyMGRlY29yYXRpb25zfGVufDF8fHx8MTc2MTYzMDMzMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Diwali Lamps"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666638787411-c5c8ef25d229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXdhbGklMjBjZWxlYnJhdGlvbiUyMGxpZ2h0c3xlbnwxfHx8fDE3NjE1NDA3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Diwali Celebrations"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl md:col-span-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1636132664098-423d80b80f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXdhbGklMjBsaWdodHMlMjBuaWdodHxlbnwxfHx8fDE3NjE2MzAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Festival of Lights"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* How Diwali is Celebrated */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl mb-6" style={{color: "var(--accent-foreground)"}}>Diwali Traditions in Bartica</h2>
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-primary">The Lighting Ceremony</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As darkness falls, families light hundreds of diyas—small clay oil lamps—placing them along 
                  pathways, windowsills, and rooftops. Some create elaborate designs with the lamps, spelling out 
                  words or creating patterns. The cumulative effect is magical, with entire neighborhoods glowing 
                  in warm lamplight.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-secondary">Traditional Foods</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Homes overflow with traditional Indian sweets (mithai) including gulab jamun, jalebi, barfi, 
                  and ladoos. Savory snacks like samosas and pakoras are prepared. Families share these delicacies 
                  with neighbors, regardless of background, spreading sweetness throughout the community.
                </p>
              </div>

              <div>
                <h4 className="mb-2" style={{color: "var(--accent-foreground)"}}>Lakshmi Puja</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Religious ceremonies (puja) are conducted in homes and temples. Prayers are offered to Goddess 
                  Lakshmi for prosperity and wellbeing. The sound of bells, chanting, and devotional songs fills 
                  the air, creating a deeply spiritual atmosphere.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-primary">Fireworks & Celebration</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The night sky erupts with fireworks and sparklers. Children run through streets with sparklers, 
                  their laughter mixing with the crackle of firecrackers. Music, dancing, and joyful gatherings 
                  continue late into the night.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <Card className="p-8 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 border-2 border-accent/20">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-7 h-7 text-accent-foreground" />
                  <h3 className="text-2xl">Inclusive Celebration</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-sm leading-relaxed">
                    What makes Diwali in Bartica special is how the entire community participates. While the 
                    festival has Hindu origins, neighbors of all faiths join in lighting lamps, sharing sweets, 
                    and celebrating together. This inclusivity reflects Guyana's beautiful cultural harmony.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Schools close for Diwali, businesses give employees the day off, and government buildings are 
                    decorated with lights. It's a national holiday that brings everyone together in celebration.
                  </p>
                  <div className="mt-6 p-4 bg-white/50 rounded-lg">
                    <p className="text-xs italic">
                      "During Diwali, my whole street becomes family. We light lamps together, share food together, 
                      and celebrate the light together. This is what makes Bartica beautiful—our festivals belong 
                      to everyone." — Bartica Resident
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="mt-6 p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
                <h4 className="mb-3 text-primary">When is Diwali?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Diwali falls on the darkest new moon night of the Hindu lunar month Kartik, typically in 
                  October or November. The exact date changes each year according to the lunar calendar.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Celebrations often extend for several days, with different regions and families observing 
                  various associated festivals and customs.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Visitor Experience */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 border-2 border-accent/20">
            <h2 className="text-3xl mb-6" style={{color: "var(--accent-foreground)"}}>Experience Diwali in Bartica</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="mb-3 text-secondary">What to Expect</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                    <span>Neighborhoods illuminated by thousands of diyas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                    <span>Generous sharing of traditional Indian sweets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                    <span>Beautiful rangoli (colored powder) designs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                    <span>Fireworks displays lighting up the night</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                    <span>Warm hospitality and inclusive celebration</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-secondary">Visitor Tips</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                    <span>Wear modest, respectful clothing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                    <span>Remove shoes when entering homes for puja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                    <span>Ask permission before photographing ceremonies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                    <span>Be prepared for loud fireworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{color: "var(--accent-foreground)"}} className="mt-1">•</span>
                    <span>Accept offered sweets—it's considered rude to refuse</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 bg-white/50 rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                "Experiencing Diwali in Bartica showed me the true meaning of unity in diversity. People of all 
                backgrounds lighting lamps together, sharing sweets, celebrating life—it was pure magic." 
                — First-time Visitor
              </p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button
            onClick={onBack}
            size="lg"
            style={{backgroundColor: "var(--accent)", color: "var(--accent-foreground)"}}
            className="hover:opacity-90 px-12"
          >
            Explore More Events
          </Button>
        </div>
      </div>
    </div>
  );
}

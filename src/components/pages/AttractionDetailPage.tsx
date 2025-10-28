import { ArrowLeft, LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";

interface AttractionDetail {
  title: string;
  subtitle: string;
  badge: string;
  icon: LucideIcon;
  heroImage: string;
  introduction: string[];
  highlights: {
    icon: LucideIcon;
    title: string;
    description: string;
    color: "primary" | "secondary" | "accent";
  }[];
  gallery: string[];
  practicalInfo: {
    whatToBring?: string[];
    goodToKnow?: string[];
    tips?: string[];
  };
  quote?: string;
}

interface AttractionDetailPageProps {
  attraction: AttractionDetail;
  onBack: () => void;
}

export function AttractionDetailPage({ attraction, onBack }: AttractionDetailPageProps) {
  const Icon = attraction.icon;

  const getColorClasses = (color: "primary" | "secondary" | "accent") => {
    const colors = {
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/20",
        gradient: "from-white to-primary/5",
      },
      secondary: {
        bg: "bg-secondary/10",
        text: "text-secondary",
        border: "border-secondary/20",
        gradient: "from-white to-secondary/5",
      },
      accent: {
        bg: "bg-accent/10",
        text: "text-accent-foreground",
        border: "border-accent/20",
        gradient: "from-white to-accent/5",
      },
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Header */}
      <div className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src={attraction.heroImage}
          alt={attraction.title}
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
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <Badge className="bg-accent text-accent-foreground">{attraction.badge}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl text-white mb-4">{attraction.title}</h1>
              <p className="text-xl text-white/90">{attraction.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          {attraction.introduction.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-muted-foreground mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-primary">Experience Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {attraction.highlights.map((highlight, index) => {
              const HighlightIcon = highlight.icon;
              const colors = getColorClasses(highlight.color);
              return (
                <Card
                  key={index}
                  className={`p-6 bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} hover:shadow-xl transition-all`}
                >
                  <div className={`w-12 h-12 rounded-full ${colors.bg} flex items-center justify-center mb-4`}>
                    <HighlightIcon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="mb-3">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Gallery */}
        {attraction.gallery.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl mb-8 text-center text-primary">Gallery</h2>
            <div className={`grid ${attraction.gallery.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
              {attraction.gallery.map((image, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={image}
                    alt={`${attraction.title} - Image ${index + 1}`}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Practical Information */}
        {(attraction.practicalInfo.whatToBring || attraction.practicalInfo.goodToKnow || attraction.practicalInfo.tips) && (
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-2 border-primary/20">
              <h2 className="text-3xl mb-6 text-primary">Plan Your Visit</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {attraction.practicalInfo.whatToBring && (
                  <div>
                    <h4 className="mb-3 text-secondary">What to Bring</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {attraction.practicalInfo.whatToBring.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {attraction.practicalInfo.goodToKnow && (
                  <div>
                    <h4 className="mb-3 text-secondary">Good to Know</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {attraction.practicalInfo.goodToKnow.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {attraction.practicalInfo.tips && attraction.practicalInfo.tips.length > 0 && (
                <div className="mt-8">
                  <h4 className="mb-3 text-secondary">Insider Tips</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {attraction.practicalInfo.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent mt-1">★</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {attraction.quote && (
                <div className="mt-8 p-6 bg-white/50 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">{attraction.quote}</p>
                </div>
              )}
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button
            onClick={onBack}
            size="lg"
            className="bg-primary hover:bg-primary/90 px-12"
          >
            Explore More of Bartica
          </Button>
        </div>
      </div>
    </div>
  );
}

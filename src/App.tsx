import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Attractions } from "./components/Attractions";
import { Events } from "./components/Events";
import { Visit } from "./components/Visit";
import { Footer } from "./components/Footer";
import { StrategicLocationPage } from "./components/pages/StrategicLocationPage";
import { DiverseCommunityPage } from "./components/pages/DiverseCommunityPage";
import { RichHistoryPage } from "./components/pages/RichHistoryPage";
import { EconomicGrowthPage } from "./components/pages/EconomicGrowthPage";
import { AttractionDetailPage } from "./components/pages/AttractionDetailPage";
import { IndigenousHeritagePage } from "./components/pages/IndigenousHeritagePage";
import { GoldMiningAdventurePage } from "./components/pages/GoldMiningAdventurePage";
import { BarticaRegattaPage } from "./components/pages/BarticaRegattaPage";
import { DiwaliPage } from "./components/pages/DiwaliPage";
import { CarnivalPage } from "./components/pages/CarnivalPage";
import { attractionsData } from "./data/attractionsData";

type Page =
  | "home"
  | "strategic-location"
  | "diverse-community"
  | "rich-history"
  | "economic-growth"
  | "marshall-falls"
  | "river-tours"
  | "parrot-island"
  | "local-markets"
  | "indigenous-heritage"
  | "gold-mining"
  | "bartica-regatta"
  | "diwali"
  | "carnival";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render detail pages
  if (currentPage === "strategic-location") {
    return <StrategicLocationPage onBack={handleBackToHome} />;
  }

  if (currentPage === "diverse-community") {
    return <DiverseCommunityPage onBack={handleBackToHome} />;
  }

  if (currentPage === "rich-history") {
    return <RichHistoryPage onBack={handleBackToHome} />;
  }

  if (currentPage === "economic-growth") {
    return <EconomicGrowthPage onBack={handleBackToHome} />;
  }

  // Handle event detail pages
  if (currentPage === "bartica-regatta") {
    return <BarticaRegattaPage onBack={handleBackToHome} />;
  }

  if (currentPage === "diwali") {
    return <DiwaliPage onBack={handleBackToHome} />;
  }

  if (currentPage === "carnival") {
    return <CarnivalPage onBack={handleBackToHome} />;
  }

  // Handle specific attraction detail pages with custom components
  if (currentPage === "indigenous-heritage") {
    return <IndigenousHeritagePage onBack={handleBackToHome} />;
  }

  if (currentPage === "gold-mining") {
    return <GoldMiningAdventurePage onBack={handleBackToHome} />;
  }

  // Handle attraction detail pages using generic template
  if (currentPage in attractionsData) {
    return (
      <AttractionDetailPage
        attraction={attractionsData[currentPage as keyof typeof attractionsData]}
        onBack={handleBackToHome}
      />
    );
  }

  // Render home page
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero heroImage="https://images.unsplash.com/photo-1748098210648-f5650742a133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdXlhbmElMjByaXZlciUyMHRvd258ZW58MXx8fHwxNzYxNjI3Mzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
        
        <About
          riverImage="https://images.unsplash.com/photo-1574100607234-db310a8b4212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJhaW5mb3Jlc3QlMjByaXZlcnxlbnwxfHx8fDE3NjE2MjczNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          onNavigate={handleNavigate}
        />
        
        {/* Economic Growth Banner */}
        <section className="py-16 bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek00OCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-5xl mb-4">
                Bartica: Gateway to Prosperity
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Discover how oil discoveries, modern mining, and strategic development are transforming 
                Bartica from a historic mining town into a thriving economic hub
              </p>
              <button
                onClick={() => handleNavigate("economic-growth")}
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Learn About Our Economic Future</span>
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </section>

        <Attractions
          waterfallImage="https://images.unsplash.com/photo-1582583088753-afb19907963a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHdhdGVyZmFsbHxlbnwxfHx8fDE3NjE2MjczNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          marketImage="https://images.unsplash.com/photo-1663312210776-8ab35d4cd3dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJpYmJlYW4lMjBtYXJrZXQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjE2MjczNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          parrotImage="https://images.unsplash.com/photo-1677358323589-cd329e9cb847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHBhcnJvdHN8ZW58MXx8fHwxNzYxNjI3Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          craftImage="https://images.unsplash.com/photo-1759738103333-1c836a32f848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwY3VsdHVyZSUyMGNyYWZ0c3xlbnwxfHx8fDE3NjE2MjczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          adventureImage="https://images.unsplash.com/photo-1717338542287-1caa5c05e375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBoaWtpbmclMjB0cm9waWNhbHxlbnwxfHx8fDE3NjE2MjczNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          boatImage="https://images.unsplash.com/photo-1654475426661-29f9bf6f984f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwcmFjZSUyMGZlc3RpdmFsfGVufDF8fHx8MTc2MTYyNzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          onNavigate={handleNavigate}
        />
        
        <Events
          regattaImage="https://images.unsplash.com/photo-1654475426661-29f9bf6f984f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwcmFjZSUyMGZlc3RpdmFsfGVufDF8fHx8MTc2MTYyNzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          diwaliImage="https://images.unsplash.com/photo-1635842975205-d6c2f1c0e1fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXdhbGklMjBsaWdodHMlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NjE2MjczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          carnivalImage="https://images.unsplash.com/photo-1759807966328-7379fadd1fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJpYmJlYW4lMjBjYXJuaXZhbCUyMHBhcmFkZXxlbnwxfHx8fDE3NjE2MjczNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          festivalImage="https://images.unsplash.com/photo-1759325349279-12f5cc1876b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZlc3RpdmFsJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYxNjIzMzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          onNavigate={handleNavigate}
        />
        
        <Visit communityImage="https://images.unsplash.com/photo-1761435739748-879d2ecf0c70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkaXZlcnNlJTIwcGVvcGxlfGVufDF8fHx8MTc2MTYyNzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
      </main>
      <Footer />
    </div>
  );
}

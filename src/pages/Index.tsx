import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import travelCollage from "@/assets/travel-collage-new.png";

const Index = () => {
  return (
    <>
      <Navigation />
      <div 
        className="min-h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${travelCollage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <h1 className="text-7xl md:text-8xl font-bold text-foreground mb-6 animate-fade-in glow-text">
            Voyage Flow
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/90 mb-4 animate-fade-in">
            Discover Your Next Adventure
          </p>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Explore breathtaking destinations around the world. From tropical paradises to vibrant cities, your dream journey awaits.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Link to="/register">
              <Button size="lg" className="gradient-cyber text-background px-8 py-6 text-xl font-semibold shadow-glow">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/maldives">
              <Button size="lg" variant="outline" className="px-8 py-6 text-xl font-semibold border-primary text-foreground hover:bg-primary/10">
                Explore Destinations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

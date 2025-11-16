import { useState } from "react";
import Navigation from "@/components/Navigation";
import TripCustomizer from "@/components/TripCustomizer";
import { Button } from "@/components/ui/button";
import newyorkImage from "@/assets/newyork.png";

const NewYork = () => {
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleConfirm = (total: number) => {
    setTotalPrice(total);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      setShowCustomizer(false);
    }, 2500);
  };

  if (showCustomizer) {
    return (
      <>
        <Navigation />
        <TripCustomizer destination="New York" onConfirm={handleConfirm} />
        
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-card border-2 border-primary rounded-2xl p-8 max-w-md w-full mx-4 shadow-glow animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-cyber flex items-center justify-center shadow-glow">
                  <svg
                    className="w-8 h-8 text-background"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 glow-text">Booking Confirmed!</h3>
                <p className="text-muted-foreground">Your New York trip has been confirmed! Total: ${totalPrice}</p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div 
        className="min-h-screen relative flex items-center"
        style={{
          backgroundImage: `url(${newyorkImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 gradient-overlay" />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in glow-text">
              New York City
            </h1>
            <p className="text-2xl text-foreground/90 leading-relaxed mb-8 animate-fade-in">
              The city that never sleeps welcomes you with iconic skylines, world-class museums, Broadway shows, and endless culinary adventures. Experience the energy of Manhattan and beyond.
            </p>
            <Button
              onClick={() => setShowCustomizer(true)}
              size="lg"
              className="gradient-cyber text-background px-8 py-6 text-xl font-semibold shadow-glow"
            >
              Customize Your Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-8 glow-text">Must-Visit Places</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Statue of Liberty</h3>
              <p className="text-muted-foreground">Iconic symbol of freedom with stunning harbor views and Ellis Island history.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Central Park</h3>
              <p className="text-muted-foreground">Urban oasis with 843 acres of green space, lakes, and iconic landmarks.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Times Square</h3>
              <p className="text-muted-foreground">Dazzling hub of neon lights, Broadway theaters, and endless entertainment.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Brooklyn Bridge</h3>
              <p className="text-muted-foreground">Historic suspension bridge offering breathtaking Manhattan skyline views.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Empire State Building</h3>
              <p className="text-muted-foreground">Art Deco masterpiece with observation decks showcasing 360° city views.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Metropolitan Museum</h3>
              <p className="text-muted-foreground">World-renowned art museum with over 2 million works spanning 5,000 years.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-8 glow-text">Suggested 5-Day Itinerary</h2>
          <div className="space-y-6 max-w-4xl">
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold text-primary mb-2">Day 1: Manhattan Highlights</h3>
              <p className="text-foreground/90">Times Square, Rockefeller Center, Fifth Avenue shopping, Broadway show in the evening.</p>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <h3 className="text-2xl font-bold text-secondary mb-2">Day 2: Icons & Views</h3>
              <p className="text-foreground/90">Statue of Liberty ferry, Ellis Island museum, Wall Street, 9/11 Memorial, Empire State Building sunset.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold text-primary mb-2">Day 3: Museums & Central Park</h3>
              <p className="text-foreground/90">Metropolitan Museum morning, Central Park stroll, boat ride, visit Strawberry Fields and Bethesda Fountain.</p>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <h3 className="text-2xl font-bold text-secondary mb-2">Day 4: Brooklyn Adventure</h3>
              <p className="text-foreground/90">Walk Brooklyn Bridge, DUMBO neighborhood, Brooklyn Bridge Park, artisan food markets, trendy Williamsburg.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold text-primary mb-2">Day 5: Culture & Cuisine</h3>
              <p className="text-foreground/90">Chelsea Market, High Line park walk, MoMA, Greenwich Village dining, rooftop bar finale.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewYork;

import { useState } from "react";
import Navigation from "@/components/Navigation";
import TripCustomizer from "@/components/TripCustomizer";
import { Button } from "@/components/ui/button";
import santoriniImage from "@/assets/santorini.png";

const Santorini = () => {
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
        <TripCustomizer destination="Santorini" onConfirm={handleConfirm} />
        
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
                <p className="text-muted-foreground">Your Santorini trip has been confirmed! Total: ${totalPrice}</p>
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
          backgroundImage: `url(${santoriniImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 gradient-overlay" />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in glow-text">
              Santorini
            </h1>
            <p className="text-2xl text-foreground/90 leading-relaxed mb-8 animate-fade-in">
              Marvel at stunning sunsets over white-washed buildings and blue-domed churches. This Greek island gem offers romantic vistas, volcanic beaches, and unforgettable Mediterranean charm.
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
              <h3 className="text-xl font-bold text-primary mb-3">Oia Village</h3>
              <p className="text-muted-foreground">Famous for world's best sunsets, white-washed houses, and blue-domed churches.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Red Beach</h3>
              <p className="text-muted-foreground">Unique volcanic beach with striking red cliffs and crystal-clear waters.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Akrotiri Ruins</h3>
              <p className="text-muted-foreground">Ancient Minoan city preserved by volcanic ash, Greece's Pompeii.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Fira Town</h3>
              <p className="text-muted-foreground">Vibrant capital with cliff-side cafes, museums, and cable car rides.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Santo Winery</h3>
              <p className="text-muted-foreground">Terraced vineyard offering wine tasting with panoramic caldera views.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Amoudi Bay</h3>
              <p className="text-muted-foreground">Picturesque fishing village with seaside tavernas and cliff diving spots.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-8 glow-text">Suggested 4-Day Itinerary</h2>
          <div className="space-y-6 max-w-4xl">
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold text-primary mb-2">Day 1: Arrival & Fira Exploration</h3>
              <p className="text-foreground/90">Arrive in Santorini, check into hotel, explore Fira town, cable car ride, caldera sunset views.</p>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <h3 className="text-2xl font-bold text-secondary mb-2">Day 2: Oia & Northern Coast</h3>
              <p className="text-foreground/90">Morning in Oia village, visit Maritime Museum, sunset at famous castle ruins, dinner at cliffside taverna.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold text-primary mb-2">Day 3: Beaches & Ancient Sites</h3>
              <p className="text-foreground/90">Red Beach morning, lunch in Akrotiri, archaeological site tour, black sand beach at Perissa.</p>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <h3 className="text-2xl font-bold text-secondary mb-2">Day 4: Wine Tour & Sailing</h3>
              <p className="text-foreground/90">Volcano boat tour, hot springs swim, wine tasting at Santo Winery, farewell dinner with caldera views.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Santorini;

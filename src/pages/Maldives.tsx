import { useState } from "react";
import Navigation from "@/components/Navigation";
import TripCustomizer from "@/components/TripCustomizer";
import { Button } from "@/components/ui/button";
import maldivesImage from "@/assets/maldives.png";

const Maldives = () => {
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
        <TripCustomizer destination="Maldives" onConfirm={handleConfirm} />
        
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
                <p className="text-muted-foreground">Your Maldives trip has been confirmed! Total: ${totalPrice}</p>
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
          backgroundImage: `url(${maldivesImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 gradient-overlay" />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in glow-text">
              Maldives
            </h1>
            <p className="text-2xl text-foreground/90 leading-relaxed mb-8 animate-fade-in">
              Experience paradise on Earth with crystal-clear waters, pristine beaches, and luxury overwater bungalows. The Maldives offers unmatched tropical beauty and serenity.
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
              <h3 className="text-xl font-bold text-primary mb-3">Malé City</h3>
              <p className="text-muted-foreground">Explore the vibrant capital with its colorful markets, historic mosques, and local culture.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Banana Reef</h3>
              <p className="text-muted-foreground">World-class diving spot with stunning coral formations and diverse marine life.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Vaadhoo Island</h3>
              <p className="text-muted-foreground">Witness the magical bioluminescent beach known as the "Sea of Stars".</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">HP Reef</h3>
              <p className="text-muted-foreground">Premium diving location famous for shark and manta ray encounters.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Artificial Beach</h3>
              <p className="text-muted-foreground">Relax at this public beach with cafes, water sports, and stunning sunset views.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Fulhadhoo Island</h3>
              <p className="text-muted-foreground">Pristine, less-touristy island perfect for peaceful beach experiences.</p>
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
              <h3 className="text-2xl font-bold text-primary mb-2">Day 1: Arrival & Malé Exploration</h3>
              <p className="text-foreground/90">Arrive at Velana International Airport, transfer to resort, explore Malé city markets and Grand Friday Mosque.</p>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <h3 className="text-2xl font-bold text-secondary mb-2">Day 2: Island Hopping & Snorkeling</h3>
              <p className="text-foreground/90">Visit local islands, snorkel at Banana Reef, enjoy traditional Maldivian lunch on a sandbank.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold text-primary mb-2">Day 3: Water Sports & Relaxation</h3>
              <p className="text-foreground/90">Try jet skiing, parasailing, or paddleboarding. Spa afternoon followed by sunset dolphin cruise.</p>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <h3 className="text-2xl font-bold text-secondary mb-2">Day 4: Diving Adventure</h3>
              <p className="text-foreground/90">Scuba diving at HP Reef, encounter manta rays and whale sharks, evening at Vaadhoo's glowing beach.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold text-primary mb-2">Day 5: Leisure & Departure</h3>
              <p className="text-foreground/90">Morning beach relaxation, underwater restaurant experience, souvenir shopping, transfer to airport.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maldives;

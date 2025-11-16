import { useState } from "react";
import Navigation from "@/components/Navigation";
import TripCustomizer from "@/components/TripCustomizer";
import { Button } from "@/components/ui/button";
import baliImage from "@/assets/bali.png";

const Bali = () => {
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
        <TripCustomizer destination="Bali" onConfirm={handleConfirm} />
        
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
                <p className="text-muted-foreground">Your Bali trip has been confirmed! Total: ${totalPrice}</p>
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
          backgroundImage: `url(${baliImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 gradient-overlay" />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in glow-text">
              Bali
            </h1>
            <p className="text-2xl text-foreground/90 leading-relaxed mb-8 animate-fade-in">
              Discover the Island of the Gods, where ancient temples meet tropical beaches. Experience vibrant culture, lush rice terraces, and world-class surfing in this Indonesian paradise.
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
              <h3 className="text-xl font-bold text-primary mb-3">Ubud Rice Terraces</h3>
              <p className="text-muted-foreground">Iconic cascading rice paddies offering breathtaking views and photo opportunities.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Tanah Lot Temple</h3>
              <p className="text-muted-foreground">Ancient Hindu shrine perched on a rock formation surrounded by crashing waves.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Sacred Monkey Forest</h3>
              <p className="text-muted-foreground">Lush sanctuary home to hundreds of playful long-tailed macaques and ancient temples.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Mount Batur</h3>
              <p className="text-muted-foreground">Active volcano offering sunrise trekking with spectacular panoramic views.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Seminyak Beach</h3>
              <p className="text-muted-foreground">Trendy beach area with world-class surfing, beach clubs, and stunning sunsets.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Tirta Empul Temple</h3>
              <p className="text-muted-foreground">Holy water temple where visitors can participate in traditional purification rituals.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-8 glow-text">Suggested 6-Day Itinerary</h2>
          <div className="space-y-6 max-w-4xl">
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold text-primary mb-2">Day 1: Arrival & Seminyak Sunset</h3>
              <p className="text-foreground/90">Arrive in Bali, check into hotel, relax at Seminyak Beach, enjoy dinner at a beachfront restaurant.</p>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <h3 className="text-2xl font-bold text-secondary mb-2">Day 2: Ubud Cultural Experience</h3>
              <p className="text-foreground/90">Visit Tegalalang Rice Terraces, explore Sacred Monkey Forest, traditional Balinese dance performance.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold text-primary mb-2">Day 3: Temples & Waterfalls</h3>
              <p className="text-foreground/90">Morning at Tirta Empul Temple, visit Tegenungan Waterfall, afternoon at Ubud Art Market.</p>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <h3 className="text-2xl font-bold text-secondary mb-2">Day 4: Mount Batur Sunrise Trek</h3>
              <p className="text-foreground/90">Pre-dawn hike to Mount Batur summit, breakfast with volcano views, hot springs relaxation.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold text-primary mb-2">Day 5: Beach Hopping & Water Sports</h3>
              <p className="text-foreground/90">Surfing lessons, visit Tanah Lot Temple at sunset, explore Canggu's hip cafes and bars.</p>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <h3 className="text-2xl font-bold text-secondary mb-2">Day 6: Spa Day & Departure</h3>
              <p className="text-foreground/90">Traditional Balinese spa treatment, last-minute shopping at Ubud market, transfer to airport.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bali;

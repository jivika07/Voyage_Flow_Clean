import { useState } from "react";
import Navigation from "@/components/Navigation";
import TripCustomizer from "@/components/TripCustomizer";
import { Button } from "@/components/ui/button";
import seoulImage from "@/assets/seoul.png";

const Seoul = () => {
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
        <TripCustomizer destination="Seoul" onConfirm={handleConfirm} />
        
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
                <p className="text-muted-foreground">Your Seoul trip has been confirmed! Total: ${totalPrice}</p>
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
          backgroundImage: `url(${seoulImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 gradient-overlay" />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in glow-text">
              Seoul
            </h1>
            <p className="text-2xl text-foreground/90 leading-relaxed mb-8 animate-fade-in">
              Immerse yourself in a vibrant blend of ancient palaces and futuristic technology. Seoul captivates with neon-lit streets, K-pop culture, incredible cuisine, and rich history.
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
              <h3 className="text-xl font-bold text-primary mb-3">Gyeongbokgung Palace</h3>
              <p className="text-muted-foreground">Majestic royal palace with traditional changing of the guard ceremony and museums.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Bukchon Hanok Village</h3>
              <p className="text-muted-foreground">Historic neighborhood with traditional Korean houses and cultural experiences.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Myeongdong Shopping</h3>
              <p className="text-muted-foreground">Bustling district with K-beauty shops, street food, and trendy fashion boutiques.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">N Seoul Tower</h3>
              <p className="text-muted-foreground">Iconic landmark offering 360° city views and romantic love lock terraces.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Gangnam District</h3>
              <p className="text-muted-foreground">Ultra-modern area with high-end shopping, K-pop entertainment, and nightlife.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-glow">
              <h3 className="text-xl font-bold text-primary mb-3">Dongdaemun Design Plaza</h3>
              <p className="text-muted-foreground">Futuristic architecture hosting exhibitions, fashion shows, and night markets.</p>
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
              <h3 className="text-2xl font-bold text-primary mb-2">Day 1: Palace & Traditional Culture</h3>
              <p className="text-foreground/90">Gyeongbokgung Palace tour, National Folk Museum, Bukchon Hanok Village, traditional tea ceremony.</p>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <h3 className="text-2xl font-bold text-secondary mb-2">Day 2: Modern Seoul</h3>
              <p className="text-foreground/90">Gangnam district, COEX Mall, K-Star Road, Korean BBQ dinner, Gangnam nightlife experience.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold text-primary mb-2">Day 3: Shopping & Street Food</h3>
              <p className="text-foreground/90">Myeongdong shopping spree, street food tasting, Namdaemun Market, N Seoul Tower sunset.</p>
            </div>
            <div className="border-l-4 border-secondary pl-6 py-4">
              <h3 className="text-2xl font-bold text-secondary mb-2">Day 4: DMZ Tour & River Cruise</h3>
              <p className="text-foreground/90">DMZ guided tour to border, Third Infiltration Tunnel, Dora Observatory, evening Han River cruise.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold text-primary mb-2">Day 5: Art & Entertainment</h3>
              <p className="text-foreground/90">Insadong art district, Korean calligraphy, Dongdaemun Design Plaza, K-pop concert or musical show.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seoul;

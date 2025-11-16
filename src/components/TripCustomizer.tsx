import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface TravelOption {
  id: string;
  label: string;
  price: number;
  category: string;
}

interface TripCustomizerProps {
  destination: string;
  onConfirm: (total: number) => void;
}

const TripCustomizer = ({ destination, onConfirm }: TripCustomizerProps) => {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());

  const travelOptions: TravelOption[] = [
    // Travel Options
    { id: "economy-flight", label: "Economy Flight", price: 500, category: "Travel" },
    { id: "business-flight", label: "Business Class Flight", price: 1500, category: "Travel" },
    { id: "first-class", label: "First Class Flight", price: 3000, category: "Travel" },
    { id: "private-jet", label: "Private Jet", price: 10000, category: "Travel" },
    
    // Accommodation
    { id: "hostel", label: "Hostel Stay", price: 50, category: "Accommodation" },
    { id: "hotel", label: "3-Star Hotel", price: 150, category: "Accommodation" },
    { id: "luxury-hotel", label: "5-Star Luxury Hotel", price: 400, category: "Accommodation" },
    { id: "villa", label: "Private Villa", price: 800, category: "Accommodation" },
    
    // Food Packages
    { id: "street-food", label: "Street Food Tour", price: 100, category: "Food" },
    { id: "local-dining", label: "Local Restaurant Package", price: 250, category: "Food" },
    { id: "fine-dining", label: "Fine Dining Experience", price: 500, category: "Food" },
    { id: "private-chef", label: "Private Chef Services", price: 1000, category: "Food" },
    
    // Activities
    { id: "city-tour", label: "City Walking Tour", price: 75, category: "Activities" },
    { id: "adventure", label: "Adventure Sports Package", price: 300, category: "Activities" },
    { id: "spa", label: "Spa & Wellness Package", price: 400, category: "Activities" },
    { id: "cultural", label: "Cultural Immersion Experience", price: 350, category: "Activities" },
  ];

  const toggleOption = (optionId: string) => {
    setSelectedOptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(optionId)) {
        newSet.delete(optionId);
      } else {
        newSet.add(optionId);
      }
      return newSet;
    });
  };

  const calculateTotal = (): number => {
    return Array.from(selectedOptions).reduce((total, optionId) => {
      const option = travelOptions.find(opt => opt.id === optionId);
      return total + (option?.price || 0);
    }, 0);
  };

  const groupedOptions = travelOptions.reduce((acc, option) => {
    if (!acc[option.category]) {
      acc[option.category] = [];
    }
    acc[option.category].push(option);
    return acc;
  }, {} as Record<string, TravelOption[]>);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 glow-text">
            Customize Your {destination} Journey
          </h1>
          <p className="text-xl text-muted-foreground">
            Select your preferences and see the cost in real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {Object.entries(groupedOptions).map(([category, options]) => (
              <div key={category} className="bg-card rounded-2xl p-6 border border-border shadow-glow">
                <h3 className="text-2xl font-bold text-primary mb-4">{category}</h3>
                <div className="space-y-3">
                  {options.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:shadow-glow transition-smooth cursor-pointer"
                      onClick={() => toggleOption(option.id)}
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={selectedOptions.has(option.id)}
                          onCheckedChange={() => toggleOption(option.id)}
                        />
                        <span className="font-medium text-foreground">{option.label}</span>
                      </div>
                      <span className="text-primary font-bold text-lg">${option.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-2xl p-6 border border-primary shadow-glow">
              <h3 className="text-2xl font-bold text-foreground mb-6">Trip Summary</h3>
              
              <div className="space-y-4 mb-6">
                {Array.from(selectedOptions).map((optionId) => {
                  const option = travelOptions.find(opt => opt.id === optionId);
                  if (!option) return null;
                  return (
                    <div key={optionId} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{option.label}</span>
                      <span className="text-foreground font-medium">${option.price}</span>
                    </div>
                  );
                })}
              </div>

              {selectedOptions.size === 0 && (
                <p className="text-center text-muted-foreground text-sm mb-6">
                  Select options to see your trip cost
                </p>
              )}

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-foreground">Total</span>
                  <span className="text-4xl font-bold text-primary glow-text">
                    ${calculateTotal()}
                  </span>
                </div>
              </div>

              <Button
                onClick={() => onConfirm(calculateTotal())}
                disabled={selectedOptions.size === 0}
                className="w-full gradient-cyber text-background py-6 font-semibold text-lg disabled:opacity-50 shadow-glow"
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCustomizer;

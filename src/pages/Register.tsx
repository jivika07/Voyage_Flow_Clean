import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  pin: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  pin?: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    pin: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.match(/^\d{10}$/)) {
      errors.phone = "Phone number must be exactly 10 digits";
    }
    
    if (!formData.pin.match(/^\d{6}$/)) {
      errors.pin = "PIN must be exactly 6 digits";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/maldives");
      }, 2000);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <>
      <Navigation />
      
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
              <h3 className="text-2xl font-bold text-foreground mb-2 glow-text">Success!</h3>
              <p className="text-muted-foreground">Registration successful! Welcome aboard.</p>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen flex items-center justify-center p-4 gradient-cyber animate-fade-in">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-background mb-2 glow-text">
              Voyage Flow
            </h1>
            <p className="text-background/90 text-xl">Begin your journey today</p>
          </div>
          
          <form onSubmit={handleSubmitRegistration} className="bg-card rounded-2xl p-8 shadow-glow border border-primary">
            <h2 className="text-2xl font-bold text-foreground mb-6">Create Account</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="mt-1 bg-muted border-border text-foreground"
                  placeholder="John Doe"
                />
                {formErrors.name && (
                  <p className="text-destructive text-sm mt-1">{formErrors.name}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1 bg-muted border-border text-foreground"
                  placeholder="john@example.com"
                />
                {formErrors.email && (
                  <p className="text-destructive text-sm mt-1">{formErrors.email}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-1 bg-muted border-border text-foreground"
                  placeholder="1234567890"
                  maxLength={10}
                />
                {formErrors.phone && (
                  <p className="text-destructive text-sm mt-1">{formErrors.phone}</p>
                )}
                <p className="text-muted-foreground text-xs mt-1">10 digits required</p>
              </div>
              
              <div>
                <Label htmlFor="pin" className="text-foreground">PIN Code</Label>
                <Input
                  id="pin"
                  type="text"
                  value={formData.pin}
                  onChange={(e) => handleInputChange("pin", e.target.value)}
                  className="mt-1 bg-muted border-border text-foreground"
                  placeholder="123456"
                  maxLength={6}
                />
                {formErrors.pin && (
                  <p className="text-destructive text-sm mt-1">{formErrors.pin}</p>
                )}
                <p className="text-muted-foreground text-xs mt-1">6 digits required</p>
              </div>
            </div>
            
            <Button type="submit" className="w-full mt-6 gradient-cyber text-background font-semibold py-6 shadow-glow">
              Start Exploring
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

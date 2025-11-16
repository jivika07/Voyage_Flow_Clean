import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const destinations = [
    { name: "Home", path: "/" },
    { name: "Maldives", path: "/maldives" },
    { name: "Bali", path: "/bali" },
    { name: "New York", path: "/newyork" },
    { name: "Santorini", path: "/santorini" },
    { name: "Seoul", path: "/seoul" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-glow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-3xl font-bold glow-text">
            Voyage Flow
          </Link>
          <div className="flex items-center gap-6 overflow-x-auto">
            {destinations.map((dest) => (
              <Link
                key={dest.path}
                to={dest.path}
                className={`text-base font-semibold transition-smooth whitespace-nowrap ${
                  location.pathname === dest.path
                    ? "text-primary glow-text"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {dest.name}
              </Link>
            ))}
            <Link to="/register">
              <Button className="gradient-cyber text-background font-semibold shadow-glow">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

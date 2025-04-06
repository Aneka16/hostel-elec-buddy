
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Navigation = () => {
  const { user, signout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signout();
    navigate("/");
  };

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="staymate-container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/a378bc6a-e4a7-4b28-9b2d-fb70b1bc8991.png" 
              alt="StayMate Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-staymate-brown ml-2">StayMate</span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-staymate-brown hover:text-staymate-orange font-medium transition-colors">
            Home
          </Link>
          {isAuthenticated && (
            <>
              <Link to="/rooms" className="text-staymate-brown hover:text-staymate-orange font-medium transition-colors">
                Rooms
              </Link>
              <Link to="/electrical-report" className="text-staymate-brown hover:text-staymate-orange font-medium transition-colors">
                Electrical report
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="flex items-center gap-2 text-staymate-brown hover:text-staymate-orange">
                <div className="bg-staymate-orange text-white p-1.5 rounded-full">
                  <User className="h-5 w-5" />
                </div>
                <span className="hidden sm:inline">My Profile</span>
              </Link>
              <Button 
                variant="outline" 
                className="border-staymate-brown text-staymate-brown hover:bg-staymate-beige hover:text-staymate-brown"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/signin">
                <Button variant="outline" className="border-staymate-brown text-staymate-brown hover:bg-staymate-beige hover:text-staymate-brown">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-staymate-orange text-white hover:bg-orange-600">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;

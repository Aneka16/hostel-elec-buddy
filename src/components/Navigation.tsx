
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Search, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const { user, signout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    signout();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="staymate-container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 ml-2">DoctorsDesk</span>
          </Link>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-blue-600" /> : <Menu className="h-6 w-6 text-blue-600" />}
        </button>

        <nav className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none z-50 md:space-x-8 p-4 md:p-0`}>
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0">
            Home
          </Link>
          <Link to="/doctors" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0">
            Find Doctors
          </Link>
          <Link to="/hospitals" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0">
            Hospitals
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0">
            Services
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 md:py-0">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <div className="bg-blue-600 text-white p-1.5 rounded-full">
                  <User className="h-5 w-5" />
                </div>
                <span className="hidden sm:inline">My Profile</span>
              </Link>
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/signin">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-600">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;

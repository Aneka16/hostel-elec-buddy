
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-staymate-beige">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="bg-staymate-light-orange p-4 rounded-full inline-flex mb-6">
            <AlertCircle className="h-12 w-12 text-staymate-orange" />
          </div>
          <h1 className="text-5xl font-bold text-staymate-brown mb-4">404</h1>
          <p className="text-xl text-staymate-brown mb-8">Oops! The page you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="bg-staymate-orange text-white hover:bg-orange-600">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <footer className="bg-white border-t border-staymate-dark-beige py-6">
        <div className="staymate-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-staymate-brown font-medium">© 2025 StayMate. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">Terms</a>
              <a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">Privacy</a>
              <a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;

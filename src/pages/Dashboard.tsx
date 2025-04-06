
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Zap } from "lucide-react";

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-staymate-beige">
      <Navigation />
      
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="staymate-container">
          <div className="bg-gradient-to-r from-staymate-orange to-orange-500 text-white rounded-2xl shadow-lg p-8 mb-10">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
            <p className="opacity-90">
              College: {user.college}
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-staymate-brown mb-6">What would you like to do today?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-staymate-light-orange inline-flex p-3 rounded-lg mb-2">
                  <Building className="h-6 w-6 text-staymate-orange" />
                </div>
                <CardTitle className="text-xl font-bold text-staymate-brown">Room Accommodation</CardTitle>
                <CardDescription>
                  Check availability and details for hostel rooms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-staymate-brown mb-6">
                  Browse available hostels and check room availability for different types of accommodations.
                </p>
                <Button 
                  onClick={() => navigate("/rooms")}
                  className="bg-staymate-orange text-white hover:bg-orange-600"
                >
                  Browse Rooms
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-staymate-light-orange inline-flex p-3 rounded-lg mb-2">
                  <Zap className="h-6 w-6 text-staymate-orange" />
                </div>
                <CardTitle className="text-xl font-bold text-staymate-brown">Electricity Issue Reporting</CardTitle>
                <CardDescription>
                  Report and track electricity-related problems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-staymate-brown mb-6">
                  Submit reports for electricity issues in your hostel and get real-time updates on resolution.
                </p>
                <Button 
                  onClick={() => navigate("/electrical-report")}
                  className="bg-staymate-orange text-white hover:bg-orange-600"
                >
                  Report Issue
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-staymate-brown mb-4">Recent Notifications</h3>
            <div className="p-4 bg-gray-50 rounded-lg text-staymate-brown">
              <p className="italic">No recent notifications.</p>
            </div>
          </div>
        </div>
      </main>
      
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

export default Dashboard;

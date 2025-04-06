
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ClipboardList, PhoneCall, Users, Zap } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-staymate-beige to-staymate-light-orange">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="staymate-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1 animate-fade-in">
                <div className="mb-2 text-staymate-orange font-semibold uppercase tracking-wider">EDUCATION</div>
                <h1 className="text-4xl md:text-5xl font-bold text-staymate-brown mb-4">Welcome to</h1>
                <p className="text-xl text-staymate-brown mb-6">Your comfort is our priority. Manage your stay with ease.</p>
                
                <Button 
                  className="staymate-btn-primary"
                  onClick={() => navigate(isAuthenticated ? '/dashboard' : '/signin')}
                >
                  Manage your stay
                </Button>
                
                <div className="mt-12 flex flex-wrap gap-6">
                  <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md">
                    <ClipboardList className="h-6 w-6 text-staymate-orange" />
                  </div>
                  <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md">
                    <Zap className="h-6 w-6 text-staymate-orange" />
                  </div>
                  <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md">
                    <PhoneCall className="h-6 w-6 text-staymate-orange" />
                  </div>
                  <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md">
                    <Users className="h-6 w-6 text-staymate-orange" />
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden p-3 mx-auto md:ml-auto max-w-xs animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1517256673644-36ad11246d21?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Female student" 
                    className="w-full h-auto rounded-xl object-cover aspect-[3/4]" 
                  />
                </div>
                
                <div 
                  className="absolute right-0 md:right-10 bottom-4 md:bottom-0 bg-white rounded-2xl shadow-xl overflow-hidden p-3 max-w-xs animate-fade-in" 
                  style={{ animationDelay: '0.4s' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Male student" 
                    className="w-full h-auto rounded-xl object-cover aspect-[3/4] max-h-52" 
                  />
                </div>
                
                <div className="absolute right-4 top-6 bg-white rounded-xl shadow-lg p-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <p className="text-sm font-medium text-staymate-brown">Find your perfect stay</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 bg-white">
          <div className="staymate-container text-center">
            <h2 className="text-3xl font-bold text-staymate-brown mb-12">Welcome</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="staymate-card">
                <div className="rounded-full bg-staymate-light-orange p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <ClipboardList className="h-8 w-8 text-staymate-orange" />
                </div>
                <h3 className="text-xl font-semibold text-staymate-brown mb-4">Room Accommodation</h3>
                <p className="text-staymate-brown">Check availability and book rooms in various hostels within the campus.</p>
              </div>
              
              <div className="staymate-card">
                <div className="rounded-full bg-staymate-light-orange p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-staymate-orange" />
                </div>
                <h3 className="text-xl font-semibold text-staymate-brown mb-4">Electricity Issue Reporting</h3>
                <p className="text-staymate-brown">Report electricity problems and get real-time updates on resolution.</p>
              </div>
              
              <div className="staymate-card lg:col-span-1 md:col-span-2 lg:col-start-2 lg:col-end-3 md:col-start-1 md:col-end-3">
                <div className="rounded-full bg-staymate-light-orange p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <PhoneCall className="h-8 w-8 text-staymate-orange" />
                </div>
                <h3 className="text-xl font-semibold text-staymate-brown mb-4">24/7 Support</h3>
                <p className="text-staymate-brown">Get assistance whenever you need with our responsive support system.</p>
              </div>
            </div>
          </div>
        </section>
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

export default Index;

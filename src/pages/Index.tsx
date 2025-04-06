
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { 
  ClipboardList, 
  PhoneCall, 
  Users, 
  Zap, 
  CheckCircle,
  Code,
  Database,
  Laptop
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-r from-staymate-beige to-staymate-light-orange">
          <div className="staymate-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 animate-fade-in">
                <div className="mb-3 text-staymate-orange font-semibold uppercase tracking-wider">STUDENT HOSTEL MANAGEMENT</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-staymate-brown mb-4">Welcome to <span className="text-staymate-orange">StayMate</span></h1>
                <p className="text-lg text-staymate-brown mb-8 max-w-lg">Your complete solution for hostel accommodation and maintenance. Manage your stay with comfort and convenience.</p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="staymate-btn-primary"
                    onClick={() => navigate(isAuthenticated ? '/dashboard' : '/signin')}
                  >
                    Manage your stay
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="border-staymate-brown text-staymate-brown hover:bg-staymate-beige"
                    onClick={() => {
                      const featuresSection = document.getElementById("features");
                      featuresSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Learn more
                  </Button>
                </div>
                
                <div className="mt-12 flex flex-wrap gap-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
                    <ClipboardList className="h-5 w-5 text-staymate-orange" />
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
                    <Zap className="h-5 w-5 text-staymate-orange" />
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
                    <PhoneCall className="h-5 w-5 text-staymate-orange" />
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
                    <Users className="h-5 w-5 text-staymate-orange" />
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative h-full flex justify-center">
                <div className="relative h-auto max-w-sm">
                  <div className="absolute -left-16 top-1/2 -translate-y-1/2 transform rotate-6 animate-fade-in z-10 bg-white rounded-xl shadow-xl overflow-hidden" style={{ animationDelay: '0.3s' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1517256673644-36ad11246d21?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Student in hostel" 
                      className="w-full h-auto object-cover aspect-[3/4] max-h-52" 
                    />
                  </div>
                  
                  <div className="relative z-20 bg-white rounded-xl shadow-xl overflow-hidden p-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Student relaxing" 
                      className="w-full h-auto rounded-lg object-cover aspect-[4/5] max-h-80" 
                    />
                  </div>
                  
                  <div className="absolute -right-8 bottom-4 transform -rotate-3 animate-fade-in z-10 bg-white rounded-xl shadow-xl overflow-hidden" style={{ animationDelay: '0.5s' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                      alt="Student studying" 
                      className="w-full h-auto object-cover aspect-[3/4] max-h-52" 
                    />
                  </div>
                </div>
                
                <div className="absolute left-1/4 -top-4 bg-white rounded-xl shadow-lg p-4 animate-fade-in z-30" style={{ animationDelay: '0.6s' }}>
                  <p className="text-sm font-medium text-staymate-brown">Find your perfect hostel stay</p>
                </div>
                
                <div className="absolute right-1/4 -bottom-4 bg-white rounded-xl shadow-lg p-4 animate-fade-in z-30" style={{ animationDelay: '0.7s' }}>
                  <p className="text-sm font-medium text-staymate-brown">Easy maintenance requests</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-staymate-orange opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-staymate-orange opacity-5 rounded-full -ml-48 -mb-48"></div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="staymate-container text-center">
            <h2 className="text-3xl font-bold text-staymate-brown mb-4">Our Features</h2>
            <p className="text-staymate-brown max-w-xl mx-auto mb-12">StayMate provides a comprehensive solution for your hostel management needs</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="staymate-card group hover:translate-y-[-5px] transition-all duration-300">
                <div className="rounded-full bg-staymate-light-orange p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-staymate-orange group-hover:text-white transition-colors">
                  <ClipboardList className="h-8 w-8 text-staymate-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-staymate-brown mb-4">Room Accommodation</h3>
                <p className="text-staymate-brown">Check availability and book rooms in various hostels within the campus with room-specific details.</p>
              </div>
              
              <div className="staymate-card group hover:translate-y-[-5px] transition-all duration-300">
                <div className="rounded-full bg-staymate-light-orange p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-staymate-orange group-hover:text-white transition-colors">
                  <Zap className="h-8 w-8 text-staymate-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-staymate-brown mb-4">Electricity Issue Reporting</h3>
                <p className="text-staymate-brown">Report electricity problems effortlessly and get real-time updates on resolution status.</p>
              </div>
              
              <div className="staymate-card group hover:translate-y-[-5px] transition-all duration-300">
                <div className="rounded-full bg-staymate-light-orange p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-staymate-orange group-hover:text-white transition-colors">
                  <PhoneCall className="h-8 w-8 text-staymate-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-staymate-brown mb-4">24/7 Support</h3>
                <p className="text-staymate-brown">Get assistance whenever you need with our responsive support system for all your hostel-related queries.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tech Stack Section */}
        <section className="py-16 bg-staymate-beige">
          <div className="staymate-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-staymate-brown mb-4">Our Tech Stack</h2>
              <p className="text-staymate-brown max-w-xl mx-auto">Built with modern technologies for optimal performance and user experience</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100 p-3 mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">React</h3>
                <p className="text-sm text-gray-600">Frontend library for building interactive UIs</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="rounded-full bg-cyan-100 p-3 mb-4">
                  <Laptop className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="font-semibold mb-2">TypeScript</h3>
                <p className="text-sm text-gray-600">Strongly typed programming language</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="rounded-full bg-indigo-100 p-3 mb-4">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-indigo-600">
                      <path d="M12 6v12m-8-6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Tailwind CSS</h3>
                <p className="text-sm text-gray-600">Utility-first CSS framework</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="rounded-full bg-emerald-100 p-3 mb-4">
                  <Database className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">Tanstack Query</h3>
                <p className="text-sm text-gray-600">Powerful data synchronization</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-staymate-orange to-orange-500">
          <div className="staymate-container text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
            <p className="text-white mb-8 max-w-xl mx-auto">Join StayMate today and experience hassle-free hostel accommodation and maintenance</p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                className="bg-white text-staymate-orange hover:bg-gray-100"
                onClick={() => navigate('/signup')}
              >
                Sign up now
              </Button>
              
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => navigate('/signin')}
              >
                Sign in
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white border-t border-staymate-dark-beige py-8">
        <div className="staymate-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center justify-center md:justify-start">
                <img 
                  src="/lovable-uploads/1632d0ae-29e0-45f7-a83c-2c00a850e42c.png" 
                  alt="StayMate Logo" 
                  className="h-12 w-12 object-contain"
                />
                <span className="text-2xl font-bold text-staymate-brown ml-2">StayMate</span>
              </div>
              <p className="text-staymate-brown text-sm mt-2">Your complete hostel management solution</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-center md:text-left mb-6 md:mb-0">
              <div>
                <h3 className="font-semibold mb-2 text-staymate-brown">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">Room Booking</a></li>
                  <li><a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">Maintenance</a></li>
                  <li><a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-staymate-brown">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">About Us</a></li>
                  <li><a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">Careers</a></li>
                  <li><a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 sm:col-span-1">
                <h3 className="font-semibold mb-2 text-staymate-brown">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">Terms</a></li>
                  <li><a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">Privacy</a></li>
                  <li><a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-staymate-dark-beige mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-staymate-brown text-sm font-medium">© 2025 StayMate. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a href="#" className="text-staymate-brown hover:text-staymate-orange transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Search, 
  Filter, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Star, 
  Download, 
  Bell, 
  Video, 
  Activity, 
  Brain,
  Stethoscope
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const [searchLocation, setSearchLocation] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Doctor's clinic? Just a click away!
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl text-blue-100">
              Find and book appointments with top doctors near you based on your location.
            </p>
            
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-3 flex flex-col md:flex-row gap-2">
              <div className="flex-grow flex items-center bg-gray-50 rounded-md px-3">
                <MapPin className="text-blue-600 mr-2" size={20} />
                <Input 
                  className="border-0 focus-visible:ring-0 bg-transparent text-gray-800" 
                  placeholder="Enter your location" 
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
              <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
                <Search className="w-5 h-5 mr-2" /> Find Doctors Near Me
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button className="flex items-center bg-blue-700/30 hover:bg-blue-700/40 px-4 py-2 rounded-full text-sm transition-colors">
                <span className="mr-1">Cardiologist</span>
              </button>
              <button className="flex items-center bg-blue-700/30 hover:bg-blue-700/40 px-4 py-2 rounded-full text-sm transition-colors">
                <span className="mr-1">Pediatrician</span>
              </button>
              <button className="flex items-center bg-blue-700/30 hover:bg-blue-700/40 px-4 py-2 rounded-full text-sm transition-colors">
                <span className="mr-1">Orthopedic</span>
              </button>
              <button className="flex items-center bg-blue-700/30 hover:bg-blue-700/40 px-4 py-2 rounded-full text-sm transition-colors">
                <span className="mr-1">Dermatologist</span>
              </button>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find your doctor in 3 simple steps, saving time and effort
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Search</h3>
                <p className="text-gray-600">Find doctors near you based on specialty, ratings, and fees</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Filter className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Compare</h3>
                <p className="text-gray-600">Compare doctors based on experience, fees, and patient reviews</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Book</h3>
                <p className="text-gray-600">Book appointments instantly with your preferred doctor</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Platform Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the powerful tools that make finding healthcare providers easier than ever
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Location-based Search</h3>
                  <p className="text-sm text-gray-600">Find doctors and hospitals near your current location</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Filter className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Smart Filters</h3>
                  <p className="text-sm text-gray-600">Filter by specialization, fees, ratings, and availability</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Stethoscope className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Doctor Profiles</h3>
                  <p className="text-sm text-gray-600">View detailed profiles with experience, fees, and reviews</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Real-time Availability</h3>
                  <p className="text-sm text-gray-600">See doctor's available time slots in real-time</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Doctor Profile Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How Doctor Profiles Look</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get comprehensive information to make informed decisions about your healthcare provider
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="border-none shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-6 px-8 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-white p-1 rounded-full mr-4">
                      <div className="w-20 h-20 rounded-full bg-gray-200"></div>
                    </div>
                    <div className="text-white">
                      <h3 className="text-xl font-bold">Dr. Sarah Johnson</h3>
                      <p className="opacity-90">Cardiologist, 15 years exp.</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
                        <span>4.9</span>
                        <span className="mx-2 opacity-60">•</span>
                        <span>520 Reviews</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="block text-white text-xl font-bold mb-1">$120</span>
                    <span className="text-sm text-blue-100">Consultation Fee</span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">Availability</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Monday</span>
                          <span className="font-medium">9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Wednesday</span>
                          <span className="font-medium">10:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Friday</span>
                          <span className="font-medium">9:00 AM - 3:00 PM</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">Specialities</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Heart Disease</span>
                        <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Hypertension</span>
                        <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Arrhythmia</span>
                        <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Valve Disease</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">Location</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Central Heart Hospital<br />
                        123 Medical Center Blvd<br />
                        San Francisco, CA 94143
                      </p>
                      <div className="text-sm text-blue-600 font-medium">2.3 miles away</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Premium Services */}
        <section className="py-16 bg-gradient-to-r from-blue-100 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Premium Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Enhance your healthcare experience with our premium features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Online Appointment Booking</h3>
                  <p className="text-sm text-gray-600 mb-4">Book appointments instantly without phone calls or waiting</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Real-time Checkup Updates</h3>
                  <p className="text-sm text-gray-600 mb-4">Receive timely updates about your medical checkups</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Download className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">One-Click Medical Reports</h3>
                  <p className="text-sm text-gray-600 mb-4">Access and download your medical reports instantly</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Coming Soon */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Exciting new features that will revolutionize your healthcare experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col items-center text-center">
                <div className="rounded-full bg-gray-200 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-gray-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">AI-based Recommendations</h3>
                <p className="text-sm text-gray-500 mb-4">Get personalized doctor and treatment recommendations based on your medical history</p>
                <span className="inline-block bg-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full">Coming Soon</span>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col items-center text-center">
                <div className="rounded-full bg-gray-200 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-gray-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Online Video Consultations</h3>
                <p className="text-sm text-gray-500 mb-4">Consult with doctors from the comfort of your home via secure video calls</p>
                <span className="inline-block bg-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full">Coming Soon</span>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col items-center text-center">
                <div className="rounded-full bg-gray-200 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-gray-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Health Tracking & Reminders</h3>
                <p className="text-sm text-gray-500 mb-4">Track your health metrics and receive personalized medication reminders</p>
                <span className="inline-block bg-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to find your doctor?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who've found the perfect healthcare provider with DoctorsDesk
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
                Find Doctors Near Me
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700 text-lg px-8 py-6 h-auto">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">DoctorsDesk</h3>
              <p className="text-gray-400 mb-4">Making healthcare accessible to everyone, everywhere.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/doctors" className="text-gray-400 hover:text-white transition-colors">Find Doctors</Link></li>
                <li><Link to="/hospitals" className="text-gray-400 hover:text-white transition-colors">Hospitals</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">HIPAA Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">1234 Healthcare Blvd</li>
                <li className="text-gray-400">San Francisco, CA 94143</li>
                <li className="text-gray-400">contact@doctorsdesk.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DoctorsDesk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

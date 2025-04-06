
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { MapPin, Search, Filter, Stethoscope } from "lucide-react";
import { Input } from "@/components/ui/input";

const Doctors = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Find Doctors</h1>
          <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-3 flex flex-col md:flex-row gap-2">
            <div className="flex-grow flex items-center bg-gray-50 rounded-md px-3">
              <MapPin className="text-blue-600 mr-2" size={20} />
              <Input 
                className="border-0 focus-visible:ring-0 bg-transparent text-gray-800" 
                placeholder="Enter your location" 
              />
            </div>
            <div className="flex-grow flex items-center bg-gray-50 rounded-md px-3">
              <Stethoscope className="text-blue-600 mr-2" size={20} />
              <Input 
                className="border-0 focus-visible:ring-0 bg-transparent text-gray-800" 
                placeholder="Doctor specialty" 
              />
            </div>
            <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
              <Search className="w-5 h-5 mr-2" /> Search
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Filter className="mr-2 h-5 w-5" /> Filters
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Specialization</h3>
                <div className="space-y-2">
                  {["Cardiologist", "Dermatologist", "Pediatrician", "Orthopedic", "Neurologist"].map((specialty) => (
                    <div key={specialty} className="flex items-center">
                      <input type="checkbox" id={specialty} className="mr-2" />
                      <label htmlFor={specialty} className="text-sm">{specialty}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Consultation Fee</h3>
                <div className="space-y-2">
                  {["$0 - $50", "$50 - $100", "$100 - $150", "$150 - $200", "$200+"].map((fee) => (
                    <div key={fee} className="flex items-center">
                      <input type="checkbox" id={fee} className="mr-2" />
                      <label htmlFor={fee} className="text-sm">{fee}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Ratings</h3>
                <div className="space-y-2">
                  {["5 Stars", "4+ Stars", "3+ Stars", "2+ Stars"].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input type="checkbox" id={rating} className="mr-2" />
                      <label htmlFor={rating} className="text-sm">{rating}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Availability</h3>
                <div className="space-y-2">
                  {["Today", "Tomorrow", "This Week", "Weekend", "Next Week"].map((time) => (
                    <div key={time} className="flex items-center">
                      <input type="checkbox" id={time} className="mr-2" />
                      <label htmlFor={time} className="text-sm">{time}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
            </div>
          </div>
          
          <div className="md:w-3/4">
            <p className="text-center text-gray-500 py-12">This page is currently under development. The doctor search functionality will be available soon.</p>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} DoctorsDesk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Doctors;

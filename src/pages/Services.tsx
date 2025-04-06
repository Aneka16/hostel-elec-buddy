
import Navigation from "@/components/Navigation";
import { Calendar, Download, Activity, Video, Bell, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Our Services</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Discover the wide range of services available on DoctorsDesk
          </p>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-4 py-12">
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
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Real-time availability checking</li>
                <li>• Instant confirmation</li>
                <li>• Email and SMS reminders</li>
                <li>• Easy rescheduling</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
            <CardContent className="p-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Real-time Checkup Updates</h3>
              <p className="text-sm text-gray-600 mb-4">Receive timely updates about your medical checkups</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Test result notifications</li>
                <li>• Procedure status tracking</li>
                <li>• Appointment reminders</li>
                <li>• Doctor's comments and notes</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
            <CardContent className="p-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">One-Click Medical Reports</h3>
              <p className="text-sm text-gray-600 mb-4">Access and download your medical reports instantly</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Secure access to all reports</li>
                <li>• PDF and printable formats</li>
                <li>• Historical records access</li>
                <li>• Share with other doctors securely</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Exciting new features that will revolutionize your healthcare experience
          </p>
          
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
      </div>
      
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} DoctorsDesk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Services;

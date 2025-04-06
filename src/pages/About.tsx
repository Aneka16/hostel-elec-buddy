
import Navigation from "@/components/Navigation";
import { HeartPulse, Users, Shield, Award, Clock, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">About DoctorsDesk</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            We're on a mission to make healthcare accessible to everyone
          </p>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At DoctorsDesk, we believe that everyone deserves easy access to quality healthcare. Our platform connects patients with the right healthcare providers, making the process seamless, transparent, and efficient.
            </p>
            <p className="text-gray-600">
              We're committed to transforming the healthcare experience by leveraging technology to bridge the gap between patients and doctors, ultimately improving health outcomes for communities worldwide.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <div className="flex justify-center mb-6">
                <HeartPulse className="h-20 w-20 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Making Healthcare Accessible</h3>
              <p className="text-gray-600 text-center">
                Our platform breaks down barriers to healthcare access, ensuring that finding and booking appointments with qualified healthcare providers is just a click away.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do at DoctorsDesk
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-blue-100 p-3">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Patient-Centered</h3>
            <p className="text-gray-600">
              We design our services with patients' needs as our top priority, ensuring a seamless and supportive healthcare journey.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-blue-100 p-3">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Trust & Privacy</h3>
            <p className="text-gray-600">
              We maintain the highest standards of security and confidentiality for all user data and medical information.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-blue-100 p-3">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Care</h3>
            <p className="text-gray-600">
              We partner with verified, qualified healthcare providers to ensure patients receive the best possible care.
            </p>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Since our inception, we've been making healthcare more accessible
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
            <p className="text-gray-700">Patients Served</p>
          </div>
          
          <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-700">Registered Doctors</p>
          </div>
          
          <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-700">Partner Hospitals</p>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Us in Our Mission</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're a patient looking for care or a healthcare provider wanting to expand your reach, DoctorsDesk is here to connect you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Find a Doctor
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Register as a Provider
            </button>
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

export default About;

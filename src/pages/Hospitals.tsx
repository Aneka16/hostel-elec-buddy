
import Navigation from "@/components/Navigation";

const Hospitals = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Hospitals & Clinics</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Find the best hospitals and clinics in your area
          </p>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-4 py-12">
        <p className="text-center text-gray-500 py-12">This page is currently under development. The hospitals and clinics search functionality will be available soon.</p>
      </div>
      
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} DoctorsDesk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Hospitals;

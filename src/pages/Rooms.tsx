
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Mock data for hostels
const hostels = [
  {
    id: "gargi",
    name: "Gargi Hostel",
    type: "Female",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    rooms: [
      { type: "2-Seater", available: 5, total: 20 },
      { type: "3-Seater", available: 2, total: 15 },
      { type: "4-Seater", available: 0, total: 10 }
    ]
  },
  {
    id: "sarojini",
    name: "Sarojini Hostel",
    type: "Female",
    image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    rooms: [
      { type: "2-Seater", available: 3, total: 25 },
      { type: "3-Seater", available: 1, total: 20 },
      { type: "4-Seater", available: 4, total: 15 }
    ]
  },
  {
    id: "saraswati",
    name: "Saraswati Hostel",
    type: "Female",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    rooms: [
      { type: "2-Seater", available: 0, total: 15 },
      { type: "3-Seater", available: 5, total: 20 },
      { type: "4-Seater", available: 2, total: 10 }
    ]
  },
  {
    id: "cv-raman",
    name: "CV Raman Hostel",
    type: "Male",
    image: "https://images.unsplash.com/photo-1629037516692-8cefcd24e3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    rooms: [
      { type: "2-Seater", available: 2, total: 25 },
      { type: "3-Seater", available: 7, total: 30 },
      { type: "4-Seater", available: 3, total: 15 }
    ]
  },
  {
    id: "aryabhatta",
    name: "Aryabhatta Hostel",
    type: "Male",
    image: "https://images.unsplash.com/photo-1541878578057-63a62aca1cff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    rooms: [
      { type: "2-Seater", available: 4, total: 20 },
      { type: "3-Seater", available: 0, total: 15 },
      { type: "4-Seater", available: 5, total: 20 }
    ]
  },
  {
    id: "chandragupta",
    name: "Chandragupta Hostel",
    type: "Male",
    image: "https://images.unsplash.com/photo-1598535376867-bf266ee9422b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    rooms: [
      { type: "2-Seater", available: 1, total: 15 },
      { type: "3-Seater", available: 4, total: 25 },
      { type: "4-Seater", available: 0, total: 10 }
    ]
  }
];

const Rooms = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [filteredHostels, setFilteredHostels] = useState(hostels);
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredHostels(hostels);
    } else if (activeTab === "male") {
      setFilteredHostels(hostels.filter(hostel => hostel.type === "Male"));
    } else if (activeTab === "female") {
      setFilteredHostels(hostels.filter(hostel => hostel.type === "Female"));
    }
  }, [activeTab]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-staymate-beige">
      <Navigation />
      
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="staymate-container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-staymate-brown mb-2">Room Accommodation</h1>
            <p className="text-staymate-brown">Browse available hostel rooms at KIET Group of Institutions</p>
          </div>
          
          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="all">All Hostels</TabsTrigger>
              <TabsTrigger value="male">Male Hostels</TabsTrigger>
              <TabsTrigger value="female">Female Hostels</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHostels.map((hostel) => (
                  <HostelCard key={hostel.id} hostel={hostel} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="male" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHostels.map((hostel) => (
                  <HostelCard key={hostel.id} hostel={hostel} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="female" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHostels.map((hostel) => (
                  <HostelCard key={hostel.id} hostel={hostel} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-staymate-brown mb-4">Important Information</h3>
            <ul className="list-disc list-inside space-y-2 text-staymate-brown">
              <li>Room allocation is based on first-come, first-served basis</li>
              <li>For detailed pricing information, please visit the administrative office</li>
              <li>Students must adhere to all hostel rules and regulations</li>
              <li>For further inquiries, contact the hostel warden</li>
            </ul>
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

interface HostelCardProps {
  hostel: {
    id: string;
    name: string;
    type: string;
    image: string;
    rooms: {
      type: string;
      available: number;
      total: number;
    }[];
  };
}

const HostelCard: React.FC<HostelCardProps> = ({ hostel }) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={hostel.image} 
          alt={hostel.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold text-staymate-brown">{hostel.name}</CardTitle>
          <Badge variant={hostel.type === "Male" ? "secondary" : "outline"} className={hostel.type === "Male" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : "bg-pink-100 text-pink-800 hover:bg-pink-100"}>
            {hostel.type}
          </Badge>
        </div>
        <CardDescription>
          KIET Group of Institutions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="font-medium text-staymate-brown">Room Availability:</h4>
          <div className="grid grid-cols-3 gap-2">
            {hostel.rooms.map((room, idx) => (
              <div key={idx} className="bg-staymate-beige rounded-lg p-3 text-center">
                <div className="text-xs font-medium text-staymate-brown mb-1">{room.type}</div>
                <div className={`text-lg font-bold ${room.available > 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {room.available}/{room.total}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Rooms;

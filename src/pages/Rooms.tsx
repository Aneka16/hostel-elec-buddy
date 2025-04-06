
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Mock data for hostels with specific room numbers
const hostels = [
  {
    id: "gargi",
    name: "Gargi Hostel",
    type: "Female",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    rooms: [
      { 
        type: "2-Seater", 
        available: 5, 
        total: 20,
        availableRooms: [
          { roomNumber: "G-201", floor: "2nd Floor" },
          { roomNumber: "G-205", floor: "2nd Floor" },
          { roomNumber: "G-212", floor: "2nd Floor" },
          { roomNumber: "G-301", floor: "3rd Floor" },
          { roomNumber: "G-315", floor: "3rd Floor" }
        ] 
      },
      { 
        type: "3-Seater", 
        available: 2, 
        total: 15,
        availableRooms: [
          { roomNumber: "G-104", floor: "1st Floor" },
          { roomNumber: "G-110", floor: "1st Floor" }
        ] 
      },
      { 
        type: "4-Seater", 
        available: 0, 
        total: 10,
        availableRooms: [] 
      }
    ]
  },
  {
    id: "sarojini",
    name: "Sarojini Hostel",
    type: "Female",
    image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    rooms: [
      { 
        type: "2-Seater", 
        available: 3, 
        total: 25,
        availableRooms: [
          { roomNumber: "S-105", floor: "1st Floor" },
          { roomNumber: "S-210", floor: "2nd Floor" },
          { roomNumber: "S-318", floor: "3rd Floor" }
        ] 
      },
      { 
        type: "3-Seater", 
        available: 1, 
        total: 20,
        availableRooms: [
          { roomNumber: "S-225", floor: "2nd Floor" }
        ] 
      },
      { 
        type: "4-Seater", 
        available: 4, 
        total: 15,
        availableRooms: [
          { roomNumber: "S-401", floor: "4th Floor" },
          { roomNumber: "S-405", floor: "4th Floor" },
          { roomNumber: "S-410", floor: "4th Floor" },
          { roomNumber: "S-415", floor: "4th Floor" }
        ] 
      }
    ]
  },
  {
    id: "saraswati",
    name: "Saraswati Hostel",
    type: "Female",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    rooms: [
      { 
        type: "2-Seater", 
        available: 0, 
        total: 15,
        availableRooms: [] 
      },
      { 
        type: "3-Seater", 
        available: 5, 
        total: 20,
        availableRooms: [
          { roomNumber: "SW-102", floor: "1st Floor" },
          { roomNumber: "SW-108", floor: "1st Floor" },
          { roomNumber: "SW-214", floor: "2nd Floor" },
          { roomNumber: "SW-220", floor: "2nd Floor" },
          { roomNumber: "SW-305", floor: "3rd Floor" }
        ] 
      },
      { 
        type: "4-Seater", 
        available: 2, 
        total: 10,
        availableRooms: [
          { roomNumber: "SW-401", floor: "4th Floor" },
          { roomNumber: "SW-410", floor: "4th Floor" }
        ] 
      }
    ]
  },
  {
    id: "cv-raman",
    name: "CV Raman Hostel",
    type: "Male",
    image: "https://images.unsplash.com/photo-1629037516692-8cefcd24e3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    rooms: [
      { 
        type: "2-Seater", 
        available: 2, 
        total: 25,
        availableRooms: [
          { roomNumber: "CV-112", floor: "1st Floor" },
          { roomNumber: "CV-205", floor: "2nd Floor" }
        ] 
      },
      { 
        type: "3-Seater", 
        available: 7, 
        total: 30,
        availableRooms: [
          { roomNumber: "CV-120", floor: "1st Floor" },
          { roomNumber: "CV-125", floor: "1st Floor" },
          { roomNumber: "CV-210", floor: "2nd Floor" },
          { roomNumber: "CV-215", floor: "2nd Floor" },
          { roomNumber: "CV-301", floor: "3rd Floor" },
          { roomNumber: "CV-310", floor: "3rd Floor" },
          { roomNumber: "CV-320", floor: "3rd Floor" }
        ] 
      },
      { 
        type: "4-Seater", 
        available: 3, 
        total: 15,
        availableRooms: [
          { roomNumber: "CV-405", floor: "4th Floor" },
          { roomNumber: "CV-410", floor: "4th Floor" },
          { roomNumber: "CV-415", floor: "4th Floor" }
        ] 
      }
    ]
  },
  {
    id: "aryabhatta",
    name: "Aryabhatta Hostel",
    type: "Male",
    image: "https://images.unsplash.com/photo-1541878578057-63a62aca1cff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    rooms: [
      { 
        type: "2-Seater", 
        available: 4, 
        total: 20,
        availableRooms: [
          { roomNumber: "A-101", floor: "1st Floor" },
          { roomNumber: "A-110", floor: "1st Floor" },
          { roomNumber: "A-201", floor: "2nd Floor" },
          { roomNumber: "A-210", floor: "2nd Floor" }
        ] 
      },
      { 
        type: "3-Seater", 
        available: 0, 
        total: 15,
        availableRooms: [] 
      },
      { 
        type: "4-Seater", 
        available: 5, 
        total: 20,
        availableRooms: [
          { roomNumber: "A-301", floor: "3rd Floor" },
          { roomNumber: "A-305", floor: "3rd Floor" },
          { roomNumber: "A-310", floor: "3rd Floor" },
          { roomNumber: "A-401", floor: "4th Floor" },
          { roomNumber: "A-405", floor: "4th Floor" }
        ] 
      }
    ]
  },
  {
    id: "chandragupta",
    name: "Chandragupta Hostel",
    type: "Male",
    image: "https://images.unsplash.com/photo-1598535376867-bf266ee9422b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    rooms: [
      { 
        type: "2-Seater", 
        available: 1, 
        total: 15,
        availableRooms: [
          { roomNumber: "C-215", floor: "2nd Floor" }
        ] 
      },
      { 
        type: "3-Seater", 
        available: 4, 
        total: 25,
        availableRooms: [
          { roomNumber: "C-101", floor: "1st Floor" },
          { roomNumber: "C-110", floor: "1st Floor" },
          { roomNumber: "C-201", floor: "2nd Floor" },
          { roomNumber: "C-301", floor: "3rd Floor" }
        ] 
      },
      { 
        type: "4-Seater", 
        available: 0, 
        total: 10,
        availableRooms: [] 
      }
    ]
  }
];

const Rooms = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [filteredHostels, setFilteredHostels] = useState(hostels);
  const [selectedHostel, setSelectedHostel] = useState<string | null>(null);
  const [selectedRoomType, setSelectedRoomType] = useState<string | null>(null);
  
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
    // Reset selections when changing tabs
    setSelectedHostel(null);
    setSelectedRoomType(null);
  }, [activeTab]);

  if (!isAuthenticated) {
    return null;
  }

  const handleHostelClick = (hostelId: string) => {
    setSelectedHostel(selectedHostel === hostelId ? null : hostelId);
    setSelectedRoomType(null); // Reset room type when changing hostel
  };

  const handleRoomTypeClick = (roomType: string) => {
    setSelectedRoomType(selectedRoomType === roomType ? null : roomType);
  };

  const selectedHostelData = selectedHostel ? hostels.find(h => h.id === selectedHostel) : null;

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
            
            {!selectedHostel ? (
              <TabsContent value={activeTab} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredHostels.map((hostel) => (
                    <HostelCard 
                      key={hostel.id} 
                      hostel={hostel} 
                      onClick={() => handleHostelClick(hostel.id)}
                    />
                  ))}
                </div>
              </TabsContent>
            ) : (
              <div className="mt-6">
                <button 
                  onClick={() => setSelectedHostel(null)} 
                  className="mb-4 flex items-center text-staymate-brown hover:text-staymate-orange transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                  Back to all hostels
                </button>
                
                {selectedHostelData && (
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-staymate-brown">{selectedHostelData.name}</h2>
                        <p className="text-staymate-brown">KIET Group of Institutions</p>
                      </div>
                      <Badge variant={selectedHostelData.type === "Male" ? "secondary" : "outline"} className={selectedHostelData.type === "Male" ? "bg-blue-100 text-blue-800 hover:bg-blue-100 mt-2 md:mt-0" : "bg-pink-100 text-pink-800 hover:bg-pink-100 mt-2 md:mt-0"}>
                        {selectedHostelData.type}
                      </Badge>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-staymate-brown mb-3">Room Types</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {selectedHostelData.rooms.map((room, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleRoomTypeClick(room.type)}
                            className={`p-4 rounded-lg border transition-all ${selectedRoomType === room.type ? 'border-staymate-orange bg-staymate-light-orange' : 'border-staymate-dark-beige hover:border-staymate-orange'} ${room.available === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            disabled={room.available === 0}
                          >
                            <div className="text-lg font-semibold text-staymate-brown">{room.type}</div>
                            <div className={`text-lg font-bold ${room.available > 0 ? 'text-green-600' : 'text-red-500'}`}>
                              {room.available}/{room.total} available
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {selectedRoomType && (
                      <div className="mt-8">
                        <h3 className="text-lg font-semibold text-staymate-brown mb-3">Available {selectedRoomType} Rooms</h3>
                        <div className="bg-staymate-beige rounded-lg p-4">
                          {selectedHostelData.rooms.find(r => r.type === selectedRoomType)?.availableRooms.length === 0 ? (
                            <p className="text-staymate-brown text-center py-4">No rooms available in this category</p>
                          ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                              {selectedHostelData.rooms.find(r => r.type === selectedRoomType)?.availableRooms.map((room, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                  <div className="text-lg font-bold text-staymate-orange">{room.roomNumber}</div>
                                  <div className="text-sm text-staymate-brown">{room.floor}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
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
      availableRooms: {
        roomNumber: string;
        floor: string;
      }[];
    }[];
  };
  onClick?: () => void;
}

const HostelCard: React.FC<HostelCardProps> = ({ hostel, onClick }) => {
  return (
    <Card 
      className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
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

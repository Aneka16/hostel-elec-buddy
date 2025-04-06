
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Activity, AlertCircle, CheckCircle2, ClockIcon, Zap } from "lucide-react";

interface ElectricalIssue {
  id: string;
  hostel: string;
  roomNumber: string;
  issueType: string;
  description: string;
  status: "pending" | "in-progress" | "resolved";
  createdAt: Date;
  resolvedAt?: Date;
}

const ElectricalReport = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [hostel, setHostel] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [issues, setIssues] = useState<ElectricalIssue[]>([]);
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated, navigate]);

  // Load mock issues
  useEffect(() => {
    const mockIssues: ElectricalIssue[] = [
      {
        id: "issue-1",
        hostel: "Aryabhatta Hostel",
        roomNumber: "A-203",
        issueType: "Power Outage",
        description: "Complete power outage in my room for the last 2 hours",
        status: "resolved",
        createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000), // 3 days ago
        resolvedAt: new Date(Date.now() - 70 * 60 * 60 * 1000) // 2 hours later
      },
      {
        id: "issue-2",
        hostel: "Gargi Hostel",
        roomNumber: "G-112",
        issueType: "Faulty Switch",
        description: "The light switch in the bathroom is not working properly",
        status: "in-progress",
        createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
      }
    ];
    
    setIssues(mockIssues);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!hostel || !roomNumber || !issueType || !description) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newIssue: ElectricalIssue = {
        id: `issue-${Math.random().toString(36).substr(2, 9)}`,
        hostel,
        roomNumber,
        issueType,
        description,
        status: "pending",
        createdAt: new Date()
      };
      
      setIssues([newIssue, ...issues]);
      
      toast.success("Electrical issue reported successfully! An electrician will be notified.");
      
      // Reset form
      setHostel("");
      setRoomNumber("");
      setIssueType("");
      setDescription("");
      setIsSubmitting(false);
    }, 1000);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-staymate-beige">
      <Navigation />
      
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="staymate-container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-staymate-brown mb-2">Electrical Issue Reporting</h1>
            <p className="text-staymate-brown">Report and track electricity-related problems in your hostel</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="bg-staymate-light-orange inline-flex p-3 rounded-lg mb-2">
                    <Zap className="h-6 w-6 text-staymate-orange" />
                  </div>
                  <CardTitle className="text-xl font-bold text-staymate-brown">Report an Issue</CardTitle>
                  <CardDescription>
                    Fill out the form to report an electrical problem
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="hostel" className="staymate-label">Hostel</Label>
                      <Select value={hostel} onValueChange={setHostel}>
                        <SelectTrigger id="hostel" className="staymate-input">
                          <SelectValue placeholder="Select Hostel" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Gargi Hostel">Gargi Hostel</SelectItem>
                          <SelectItem value="CV Raman Hostel">CV Raman Hostel</SelectItem>
                          <SelectItem value="Aryabhatta Hostel">Aryabhatta Hostel</SelectItem>
                          <SelectItem value="Chandragupta Hostel">Chandragupta Hostel</SelectItem>
                          <SelectItem value="Sarojini Hostel">Sarojini Hostel</SelectItem>
                          <SelectItem value="Saraswati Hostel">Saraswati Hostel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="roomNumber" className="staymate-label">Room Number</Label>
                      <Input
                        id="roomNumber"
                        value={roomNumber}
                        onChange={(e) => setRoomNumber(e.target.value)}
                        placeholder="e.g., A-101"
                        className="staymate-input"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="issueType" className="staymate-label">Issue Type</Label>
                      <Select value={issueType} onValueChange={setIssueType}>
                        <SelectTrigger id="issueType" className="staymate-input">
                          <SelectValue placeholder="Select Issue Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Power Outage">Power Outage</SelectItem>
                          <SelectItem value="Faulty Switch">Faulty Switch</SelectItem>
                          <SelectItem value="Flickering Lights">Flickering Lights</SelectItem>
                          <SelectItem value="Sparking Socket">Sparking Socket</SelectItem>
                          <SelectItem value="Fan Not Working">Fan Not Working</SelectItem>
                          <SelectItem value="Circuit Breaker Tripped">Circuit Breaker Tripped</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description" className="staymate-label">Description</Label>
                      <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Please describe the issue in detail..."
                        className="staymate-input min-h-[120px]"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-staymate-orange text-white hover:bg-orange-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Report"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="bg-staymate-light-orange inline-flex p-3 rounded-lg mb-2">
                    <Activity className="h-6 w-6 text-staymate-orange" />
                  </div>
                  <CardTitle className="text-xl font-bold text-staymate-brown">Your Issues</CardTitle>
                  <CardDescription>
                    Track the status of your electrical issue reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {issues.length > 0 ? (
                    <div className="space-y-4">
                      {issues.map((issue) => (
                        <div 
                          key={issue.id} 
                          className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold text-staymate-brown">{issue.issueType}</h4>
                              <p className="text-sm text-muted-foreground">{issue.hostel} • Room {issue.roomNumber}</p>
                            </div>
                            <StatusBadge status={issue.status} />
                          </div>
                          <p className="text-sm text-staymate-brown mb-3">{issue.description}</p>
                          <div className="flex justify-between items-center text-xs text-muted-foreground">
                            <span>Reported: {formatDate(issue.createdAt)}</span>
                            {issue.resolvedAt && (
                              <span>Resolved: {formatDate(issue.resolvedAt)}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium text-staymate-brown mb-1">No issues reported</h3>
                      <p className="text-muted-foreground">You haven't reported any electrical issues yet.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg mt-6">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-staymate-brown">Issue Resolution Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-staymate-light-orange p-2 rounded-full">
                        <AlertCircle className="h-5 w-5 text-staymate-orange" />
                      </div>
                      <div>
                        <h4 className="font-medium text-staymate-brown">Step 1: Report Submission</h4>
                        <p className="text-sm text-muted-foreground">Submit the issue details through the form</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-staymate-light-orange p-2 rounded-full">
                        <ClockIcon className="h-5 w-5 text-staymate-orange" />
                      </div>
                      <div>
                        <h4 className="font-medium text-staymate-brown">Step 2: Electrician Notification</h4>
                        <p className="text-sm text-muted-foreground">The relevant electrician is notified and assigned</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-staymate-light-orange p-2 rounded-full">
                        <Activity className="h-5 w-5 text-staymate-orange" />
                      </div>
                      <div>
                        <h4 className="font-medium text-staymate-brown">Step 3: Issue Resolution</h4>
                        <p className="text-sm text-muted-foreground">The electrician works on fixing the reported issue</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-staymate-light-orange p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-staymate-orange" />
                      </div>
                      <div>
                        <h4 className="font-medium text-staymate-brown">Step 4: Confirmation</h4>
                        <p className="text-sm text-muted-foreground">You'll receive a notification once the issue is resolved</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-staymate-dark-beige py-6 mt-12">
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

// Helper components and functions
const StatusBadge = ({ status }: { status: string }) => {
  let color, icon, text;
  
  switch (status) {
    case "pending":
      color = "bg-yellow-100 text-yellow-800";
      icon = <AlertCircle className="h-4 w-4" />;
      text = "Pending";
      break;
    case "in-progress":
      color = "bg-blue-100 text-blue-800";
      icon = <Activity className="h-4 w-4" />;
      text = "In Progress";
      break;
    case "resolved":
      color = "bg-green-100 text-green-800";
      icon = <CheckCircle2 className="h-4 w-4" />;
      text = "Resolved";
      break;
    default:
      color = "bg-gray-100 text-gray-800";
      icon = <AlertCircle className="h-4 w-4" />;
      text = status;
  }
  
  return (
    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${color}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export default ElectricalReport;

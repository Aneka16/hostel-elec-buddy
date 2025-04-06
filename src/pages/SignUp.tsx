
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [college, setCollege] = useState("KIET Group of Institutions");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword || !college) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    setIsLoading(true);
    
    try {
      await signup(name, email, password, college);
      toast.success("Account created successfully! Please sign in.");
      navigate("/signin");
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
      console.error("Sign up error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-staymate-beige">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-lg">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-staymate-brown">Create your account</h2>
            <p className="mt-2 text-sm text-staymate-brown">
              Already have an account?{" "}
              <Link to="/signin" className="font-medium text-staymate-orange hover:text-orange-600">
                Sign in
              </Link>
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="staymate-label">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="staymate-input"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="staymate-label">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="staymate-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="staymate-label">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="staymate-input"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="confirm-password" className="staymate-label">
                  Confirm Password
                </label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="staymate-input"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="college" className="staymate-label">
                  College Name
                </label>
                <Select value={college} onValueChange={setCollege}>
                  <SelectTrigger id="college" className="staymate-input">
                    <SelectValue placeholder="Select College" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="KIET Group of Institutions">KIET Group of Institutions</SelectItem>
                    <SelectItem value="other" disabled>More colleges coming soon...</SelectItem>
                  </SelectContent>
                </Select>
                <p className="mt-1 text-xs text-muted-foreground">
                  Currently only KIET Group of Institutions is supported. More colleges will be added soon.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-staymate-orange focus:ring-staymate-orange border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-staymate-brown">
                I agree to the{" "}
                <a href="#" className="font-medium text-staymate-orange hover:text-orange-600">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="font-medium text-staymate-orange hover:text-orange-600">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-staymate-orange hover:bg-orange-600 text-white font-medium py-3 rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

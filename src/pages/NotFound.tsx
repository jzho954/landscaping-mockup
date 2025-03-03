
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-montserrat">
      <div className="text-center px-4 animate-fade-in">
        <h1 className="text-forest text-9xl font-extrabold mb-6">404</h1>
        <p className="text-2xl text-earth font-medium mb-8">Oops! Page not found</p>
        <Button 
          asChild
          className="bg-lime text-forest hover:bg-lime/90 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
        >
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

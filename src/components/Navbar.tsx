
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Handle hash navigation when component mounts or location changes
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure proper scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      // If we're not on the homepage, navigate to homepage with hash
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinkClass = "text-white hover:text-lime transition-colors duration-300";

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 font-montserrat",
        scrolled ? "bg-forest shadow-md py-2" : "bg-forest/90 py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-extrabold tracking-tight hover:text-lime transition-colors duration-300">
          GreenScape
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={navLinkClass}>Home</Link>
          <Link to="/#services" className={navLinkClass}>Services</Link>
          <Link to="/#testimonials" className={navLinkClass}>Testimonials</Link>
          <Link to="/#projects" className={navLinkClass}>Portfolio</Link>
          <Link to="/#faq" className={navLinkClass}>FAQ</Link>
          <Link to="/#contact" className={navLinkClass}>Contact Us</Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white hover:text-lime hover:bg-transparent"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            "fixed inset-y-0 right-0 transform bg-forest shadow-lg w-64 overflow-auto transition-transform duration-300 ease-in-out z-50 md:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col p-8 space-y-4">
            <Button 
              variant="ghost" 
              className="self-end text-white hover:text-lime hover:bg-transparent p-1 mb-6"
              onClick={toggleMenu}
            >
              <X size={24} />
            </Button>
            <Link to="/" className="text-white hover:text-lime text-left py-2 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/#services" className="text-white hover:text-lime text-left py-2 transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/#testimonials" className="text-white hover:text-lime text-left py-2 transition-colors" onClick={() => setIsOpen(false)}>Testimonials</Link>
            <Link to="/#projects" className="text-white hover:text-lime text-left py-2 transition-colors" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link to="/#faq" className="text-white hover:text-lime text-left py-2 transition-colors" onClick={() => setIsOpen(false)}>FAQ</Link>
            <Link to="/#contact" className="text-white hover:text-lime text-left py-2 transition-colors" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

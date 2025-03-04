
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 font-montserrat",
        scrolled ? "bg-forest shadow-md py-2" : "bg-forest/90 py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-white text-xl font-extrabold tracking-tight hover:text-lime transition-colors duration-300">
          GreenScape
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("home")} className="nav-link">Home</button>
          <button onClick={() => scrollToSection("services")} className="nav-link">Services</button>
          <button onClick={() => scrollToSection("testimonials")} className="nav-link">Testimonials</button>
          <button onClick={() => scrollToSection("portfolio")} className="nav-link">Portfolio</button>
          <button onClick={() => scrollToSection("faq")} className="nav-link">FAQ</button>
          <button onClick={() => scrollToSection("contact")} className="nav-link">Contact Us</button>
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
            <button onClick={() => scrollToSection("home")} className="text-white hover:text-lime text-left py-2 transition-colors">Home</button>
            <button onClick={() => scrollToSection("services")} className="text-white hover:text-lime text-left py-2 transition-colors">Services</button>
            <button onClick={() => scrollToSection("testimonials")} className="text-white hover:text-lime text-left py-2 transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection("portfolio")} className="text-white hover:text-lime text-left py-2 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection("faq")} className="text-white hover:text-lime text-left py-2 transition-colors">FAQ</button>
            <button onClick={() => scrollToSection("contact")} className="text-white hover:text-lime text-left py-2 transition-colors">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

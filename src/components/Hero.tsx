
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 min-h-[90vh] flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <p className="inline-block px-3 py-1 bg-forest/10 text-forest rounded-full text-sm font-semibold mb-6 tracking-wide">
            Professional Landscaping Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-forest leading-tight">
            GreenScape – Crafting Your Perfect Outdoors
          </h1>
          <p className="text-xl text-earth font-medium mb-8 max-w-2xl mx-auto">
            Transform your outdoor space into a breathtaking landscape that enhances your property's beauty and value.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-lime text-forest hover:bg-lime/90 font-semibold px-8 py-6 text-lg rounded-md animate-pulse-subtle transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Button>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto relative animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div className="relative w-full h-80 md:h-96 lg:h-[450px] rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
              alt="Beautiful landscaped garden" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent"></div>
          </div>
        </div>
      </div>
      
      <div className="hero-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Services = () => {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const servicesRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Lawn Care",
      description: "Professional lawn maintenance services including mowing, fertilization, aeration, and weed control to keep your lawn healthy and vibrant all year round.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
    },
    {
      id: 2,
      title: "Garden Design",
      description: "Custom garden design services tailored to your preferences and property. We create beautiful, sustainable gardens that enhance your outdoor living space.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
    },
    {
      id: 3,
      title: "Tree Trimming",
      description: "Expert tree care services including trimming, pruning, and shaping to maintain tree health, improve appearance, and ensure safety around your property.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    },
    {
      id: 4,
      title: "Hardscaping",
      description: "Custom hardscape installations including patios, walkways, retaining walls, and outdoor living spaces that complement your landscape design.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Start observing individual service cards once the container is visible
            observeServiceCards();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const observeServiceCards = () => {
    const serviceElements = document.querySelectorAll('.service-card');
    
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const serviceId = Number(entry.target.getAttribute('data-id'));
            setVisibleServices(prev => [...prev, serviceId]);
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    serviceElements.forEach(element => {
      cardObserver.observe(element);
    });
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6" ref={servicesRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <p className="inline-block px-3 py-1 bg-forest/10 text-forest rounded-full text-sm font-semibold mb-4 tracking-wide">
            Our Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-forest">
            Professional Landscaping Services
          </h2>
          <p className="text-lg text-earth">
            We offer a comprehensive range of landscaping services to enhance your outdoor space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link 
              to={`/services/${service.id}`} 
              key={service.id}
              className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2 rounded-xl"
            >
              <Card 
                className={`service-card overflow-hidden transition-all duration-500 h-full ${
                  visibleServices.includes(service.id) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                data-id={service.id}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-forest">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-earth">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "1");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const projects = [
    {
      id: 1,
      title: "Modern Backyard Oasis",
      description: "Complete landscape redesign with sustainable plants and modern hardscaping.",
      longDescription: "This project transformed a neglected backyard into a stunning outdoor retreat. We incorporated drought-resistant plants, a modern water feature, and custom hardscaping elements to create a low-maintenance yet visually striking space. The design includes distinct zones for dining, lounging, and gardening, connected by elegant pathways.",
      imageUrl: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      extraImages: [
        "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1563341591-a4ef278cb0c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ],
      tags: ["Design", "Hardscaping", "Sustainable"],
      details: [
        "Area: 1,500 sq ft",
        "Timeline: 6 weeks",
        "Features: Custom water feature, stone pathways, native plant garden",
        "Materials: Natural stone, sustainable wood, drought-resistant plants"
      ]
    },
    {
      id: 2,
      title: "English Garden",
      description: "Traditional English garden with native flowering plants and stone pathways.",
      longDescription: "Inspired by classic English gardens, this project features lush perennial borders, meandering pathways, and intimate garden rooms. We selected flowering plants that provide visual interest throughout all seasons, with a focus on attracting pollinators and beneficial insects. The garden includes a charming sitting area surrounded by fragrant roses and lavender.",
      imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      extraImages: [
        "https://images.unsplash.com/photo-1501685532562-aa6846b353e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1597273195621-7e4ff81d11f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ],
      tags: ["Garden", "Flowers", "Traditional"],
      details: [
        "Area: 2,200 sq ft",
        "Timeline: 8 weeks",
        "Features: Rose garden, stone pathways, garden bench, bird bath",
        "Materials: Natural stone, brick, variety of perennial plants"
      ]
    },
    {
      id: 3,
      title: "Zen Rock Garden",
      description: "Minimalist Japanese-inspired garden with raked gravel and carefully placed stones.",
      longDescription: "This tranquil Zen garden creates a peaceful retreat for meditation and reflection. The design features carefully placed rocks of varying sizes and shapes, surrounded by meticulously raked gravel patterns representing flowing water. We included a small bamboo water feature, traditional Japanese plants like maple and cherry trees, and a simple wooden bench for contemplation.",
      imageUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      extraImages: [
        "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1625544939269-fc6a4003af10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ],
      tags: ["Zen", "Minimalist", "Oriental"],
      details: [
        "Area: 800 sq ft",
        "Timeline: 4 weeks",
        "Features: Rock arrangements, raked gravel patterns, bamboo water feature",
        "Materials: Natural stone, fine gravel, bamboo, Japanese maples"
      ]
    },
    {
      id: 4,
      title: "Urban Rooftop Garden",
      description: "Transforming city spaces with container gardens and vertical planting systems.",
      longDescription: "This innovative rooftop garden transforms an unused urban space into a lush oasis. We designed a comprehensive container garden system with built-in irrigation, vertical green walls, and modular seating areas. The plant selection focuses on species that can thrive in the challenging rooftop environment while providing shade, beauty, and even edible harvests for the residents.",
      imageUrl: "https://images.unsplash.com/photo-1563341591-a4ef278cb0c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      extraImages: [
        "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1571217668979-f4ec456e14d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ],
      tags: ["Urban", "Rooftop", "Container"],
      details: [
        "Area: 1,200 sq ft",
        "Timeline: 5 weeks",
        "Features: Container gardens, vertical planters, modular furniture, drip irrigation",
        "Materials: Lightweight containers, vertical garden systems, drought-resistant plants"
      ]
    },
    {
      id: 5,
      title: "Mediterranean Landscape",
      description: "Drought-resistant Mediterranean garden with olive trees and lavender.",
      longDescription: "Inspired by the gardens of Southern Europe, this Mediterranean landscape features drought-resistant plants with silvery foliage, aromatic herbs, and sculptural olive trees. We designed a gravel terrace with terracotta containers and a stone fountain as the central focal point. The garden requires minimal watering while providing year-round structure and seasonal color.",
      imageUrl: "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      extraImages: [
        "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1603193749550-53d9f457ef41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ],
      tags: ["Mediterranean", "Drought-resistant"],
      details: [
        "Area: 1,800 sq ft",
        "Timeline: 7 weeks",
        "Features: Olive trees, gravel terrace, stone fountain, herb garden",
        "Materials: Gravel, natural stone, terracotta, Mediterranean plants"
      ]
    },
    {
      id: 6,
      title: "Poolside Paradise",
      description: "Complete pool area redesign with tropical plants and custom lighting.",
      longDescription: "This poolside renovation transformed an outdated pool area into a tropical paradise. The design includes lush plantings, custom pool lighting, a natural stone deck, and an outdoor kitchen and bar area. We created distinct zones for swimming, lounging, and dining, all unified through consistent materials and strategic lighting that extends the usability of the space into the evening.",
      imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      extraImages: [
        "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ],
      tags: ["Pool", "Tropical", "Lighting"],
      details: [
        "Area: 2,500 sq ft",
        "Timeline: 10 weeks",
        "Features: Pool deck, outdoor kitchen, custom lighting, tropical plantings",
        "Materials: Natural stone, tropical hardwoods, LED lighting systems"
      ]
    }
  ];

  const project = projects.find(p => p.id === projectId) || projects[0];
  
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24 pt-32">
        <Link to="/#projects" className="inline-flex items-center text-forest hover:text-lime transition-colors mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Portfolio
        </Link>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-forest">{project.title}</h1>
            <p className="text-lg text-earth mb-6">{project.longDescription}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-forest">Project Details</h3>
              <ul className="space-y-2 text-earth">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-lime/20 text-forest text-sm font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <Button asChild className="bg-forest hover:bg-forest/90 text-white">
              <Link to="/#contact">Request Similar Project</Link>
            </Button>
          </div>
          
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {project.extraImages.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={img} 
                    alt={`${project.title} - additional view ${idx + 1}`} 
                    className="w-full h-40 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-forest">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== projectId)
              .slice(0, 3)
              .map(p => (
                <Link key={p.id} to={`/portfolio/${p.id}`} className="block transition-transform hover:scale-[1.02]">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={p.imageUrl} 
                        alt={p.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-forest mb-2">{p.title}</h3>
                      <p className="text-earth text-sm">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PortfolioDetail;

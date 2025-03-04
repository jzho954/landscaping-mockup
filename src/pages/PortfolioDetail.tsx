
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, Tag, User, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  fullDescription?: string;
  client?: string;
  date?: string;
  location?: string;
  galleryImages?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Backyard Oasis",
    description: "Complete landscape redesign with sustainable plants and modern hardscaping.",
    imageUrl: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tags: ["Design", "Hardscaping", "Sustainable"],
    fullDescription: "This complete backyard transformation turned a neglected space into a stunning outdoor living area. The project included installation of drought-resistant native plants, a modern paver patio, ambient lighting, and a custom water feature. The design prioritized sustainability with rainwater harvesting systems and solar-powered lighting elements.",
    client: "Johnson Family",
    date: "April 2023",
    location: "Oakwood Heights",
    galleryImages: [
      "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595435742656-c78b7df695c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596702874788-8d8a5f0e7066?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1471973813194-efb2ca3f3b52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 2,
    title: "English Garden",
    description: "Traditional English garden with native flowering plants and stone pathways.",
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tags: ["Garden", "Flowers", "Traditional"],
    fullDescription: "This charming English garden project transformed a bare yard into a lush, flowering paradise. We designed and implemented a classic layout with meandering stone pathways, carefully selected perennial borders, and strategic focal points. The garden includes a mix of traditional English flowers like roses, lavender, and foxgloves, creating year-round interest and color.",
    client: "Williams Residence",
    date: "June 2022",
    location: "Meadowbrook",
    galleryImages: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586971747028-93cf88518e71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 3,
    title: "Zen Rock Garden",
    description: "Minimalist Japanese-inspired garden with raked gravel and carefully placed stones.",
    imageUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tags: ["Zen", "Minimalist", "Oriental"],
    fullDescription: "This Japanese-inspired Zen garden creates a peaceful retreat for meditation and contemplation. The design features meticulously raked gravel patterns symbolizing water, strategically placed natural stones, and minimalist plantings including Japanese maples and moss gardens. The space includes a small wooden deck for seating and a traditional bamboo water feature that adds gentle sound to enhance the calming atmosphere.",
    client: "Chen Family",
    date: "October 2023",
    location: "Pine Valley",
    galleryImages: [
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1631772559000-c7150e973069?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503787722143-b1a63db11b23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 4,
    title: "Urban Rooftop Garden",
    description: "Transforming city spaces with container gardens and vertical planting systems.",
    imageUrl: "https://images.unsplash.com/photo-1563341591-a4ef278cb0c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tags: ["Urban", "Rooftop", "Container"],
    fullDescription: "This innovative rooftop garden brings nature to the urban landscape. Our design maximized limited space with multi-level container arrangements, vertical growing systems, and built-in seating. The plant selection focuses on drought-tolerant varieties suitable for rooftop conditions, including ornamental grasses, succulents, and hardy perennials. The space also incorporates a small herb and vegetable garden, allowing the clients to grow their own food in the heart of the city.",
    client: "Garcia Apartments",
    date: "August 2022",
    location: "Downtown",
    galleryImages: [
      "https://images.unsplash.com/photo-1563341591-a4ef278cb0c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556011272-dc336145ccce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 5,
    title: "Mediterranean Landscape",
    description: "Drought-resistant Mediterranean garden with olive trees and lavender.",
    imageUrl: "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tags: ["Mediterranean", "Drought-resistant"],
    fullDescription: "This Mediterranean-inspired landscape transforms a water-intensive yard into a beautiful, drought-resistant garden. Featuring olive trees, lavender, rosemary, and other Mediterranean plants, the design creates a sensory experience with fragrant herbs and textural variety. The landscape includes a gravel patio with Tuscan-inspired terracotta pots, a small stone fountain, and strategic shade areas to create comfortable outdoor living spaces even in hot weather.",
    client: "Rossi Estate",
    date: "July 2023",
    location: "Sunnydale",
    galleryImages: [
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592496001020-d31bd830f5dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1588058365815-c96fd519707e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1534791831448-2720ae8d211e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 6,
    title: "Poolside Paradise",
    description: "Complete pool area redesign with tropical plants and custom lighting.",
    imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tags: ["Pool", "Tropical", "Lighting"],
    fullDescription: "This poolside transformation created a resort-like atmosphere in a residential backyard. The design includes lush tropical plantings, custom deck surfaces, and an innovative lighting plan that extends the usability of the space into the evening. Special features include a built-in outdoor kitchen, privacy screening with bamboo, and a dedicated lounge area with weather-resistant furniture. The plant selection focuses on creating a tropical feel while selecting varieties that can thrive in the local climate.",
    client: "Thompson Residence",
    date: "May 2023",
    location: "Bayside",
    galleryImages: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1615765544929-a68e3b88d5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551025793-9a9d73b0d7fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592296429945-93008e7e5e62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ]
  }
];

const PortfolioDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (id) {
      const foundProject = projects.find(p => p.id === parseInt(id));
      if (foundProject) {
        setProject(foundProject);
        setSelectedImage(foundProject.imageUrl);
      }
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-earth">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <Link to="/#projects" className="inline-flex items-center text-forest hover:text-lime transition-colors mb-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Projects
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-forest mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-lime/20 text-forest text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6 rounded-xl overflow-hidden border border-gray-100 shadow-lg">
              <img 
                src={selectedImage} 
                alt={project.title} 
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {project.galleryImages?.map((image, idx) => (
                <div 
                  key={idx}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === image ? 'border-lime shadow-md scale-105' : 'border-transparent hover:border-lime/50'
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`Gallery image ${idx + 1}`} 
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-forest mb-4">Project Details</h3>
            
            {project.client && (
              <div className="flex items-center mb-4">
                <User className="h-5 w-5 text-lime mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Client</p>
                  <p className="text-earth font-medium">{project.client}</p>
                </div>
              </div>
            )}
            
            {project.date && (
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-lime mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="text-earth font-medium">{project.date}</p>
                </div>
              </div>
            )}
            
            {project.location && (
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-lime mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-earth font-medium">{project.location}</p>
                </div>
              </div>
            )}
            
            {project.tags && (
              <div className="flex items-start mb-4">
                <Tag className="h-5 w-5 text-lime mr-2 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Tags</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-lime/20 text-forest text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-8">
              <Button className="w-full bg-forest hover:bg-forest/90 text-white">
                Request Similar Project
              </Button>
            </div>
          </div>
        </div>
        
        <div className="prose prose-green max-w-none mb-16">
          <h2 className="text-2xl font-bold text-forest mb-4">Project Overview</h2>
          <p className="text-earth text-lg leading-relaxed mb-6">{project.fullDescription}</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PortfolioDetail;

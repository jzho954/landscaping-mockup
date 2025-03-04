
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  longDescription: string;
  challenges: string;
  solution: string;
  results: string;
  gallery: string[];
  client: string;
  location: string;
  completionDate: string;
}

const projects: ProjectDetail[] = [
  {
    id: 1,
    title: "Modern Backyard Oasis",
    description: "Complete landscape redesign with sustainable plants and modern hardscaping.",
    imageUrl: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tags: ["Design", "Hardscaping", "Sustainable"],
    longDescription: "This project transformed a neglected backyard into a modern outdoor living space. Our client wanted a sustainable garden that required minimal maintenance while creating a peaceful retreat for relaxation and entertaining. We incorporated native plants, efficient irrigation systems, and contemporary hardscaping elements to create a harmonious balance between nature and design.",
    challenges: "The site presented several challenges, including poor drainage, compacted soil, and an awkward layout. Additionally, the client wanted to preserve several mature trees while completely reimagining the space.",
    solution: "We developed a comprehensive drainage solution with permeable pavers and strategic grading. The soil was improved with organic amendments and we designed around the existing trees, making them focal points in the new landscape. We installed raised planter beds for vegetables, created defined outdoor rooms with varied hardscaping materials, and incorporated a modern water feature as a central element.",
    results: "The transformed space now serves as an extension of the home, with multiple areas for dining, lounging, and entertaining. The native plant palette has attracted local wildlife, and the efficient irrigation system has reduced water usage by 40%. The client reports spending significantly more time outdoors and hosting regular gatherings in their new outdoor oasis.",
    gallery: [
      "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    client: "Johnson Family",
    location: "Portland, Oregon",
    completionDate: "Summer 2023"
  },
  {
    id: 2,
    title: "English Garden",
    description: "Traditional English garden with native flowering plants and stone pathways.",
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tags: ["Garden", "Flowers", "Traditional"],
    longDescription: "This project was inspired by the classic English gardens of the Victorian era. Our clients, avid gardeners themselves, wanted to create a lush, flowering paradise that would provide visual interest throughout all seasons. The design incorporates formal elements like symmetrical planting beds and carefully placed focal points, while allowing for the natural exuberance of cottage-style plantings.",
    challenges: "The site was previously a flat, featureless lawn with poor soil quality. Creating the varied topography and establishing good growing conditions for the diverse plant palette required significant site preparation.",
    solution: "We began with extensive soil remediation, adding organic matter and improving drainage where needed. We created gentle berms and swales to add topographical interest and defined garden rooms with yew hedges and stone walls. Plant selection focused on traditional English garden favorites combined with native alternatives that would thrive in the local climate while providing similar aesthetic qualities.",
    results: "The garden has matured beautifully, creating a lush retreat that changes with each season. Clients report spending hours tending to their plants and enjoying the peaceful ambiance. The garden has been featured in a local garden tour and has become a neighborhood attraction during peak blooming periods.",
    gallery: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1597655601841-214a4d0b9bf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    client: "Williams Residence",
    location: "Seattle, Washington",
    completionDate: "Spring 2022"
  },
  {
    id: 3,
    title: "Zen Rock Garden",
    description: "Minimalist Japanese-inspired garden with raked gravel and carefully placed stones.",
    imageUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tags: ["Zen", "Minimalist", "Oriental"],
    longDescription: "This Japanese-inspired meditation garden was designed for a client seeking a peaceful retreat from their busy professional life. Drawing on the principles of traditional karesansui (dry landscape) gardens, the design emphasizes simplicity, restraint, and symbolic representation of natural elements through carefully placed rocks, raked gravel, and minimal plantings.",
    challenges: "Creating an authentic Japanese garden experience required deep knowledge of traditional design principles and techniques. Additionally, the small urban lot presented constraints on scale and required creative solutions for privacy.",
    solution: "We collaborated with a Japanese garden specialist to ensure authenticity in our approach. The design incorporated a custom-built bamboo fence for privacy, a small tsukubai (water basin), carefully selected stone elements, and a restrained palette of traditional Japanese plants including Japanese maple, moss, and bamboo. The centerpiece is a meticulously designed gravel area with larger stones representing mountains and islands.",
    results: "The garden has become a daily sanctuary for the client, who reports using the space for meditation and contemplation. Neighbors and visitors frequently comment on the striking contrast between the serene garden and the bustling urban environment surrounding it. The project has helped the client achieve their goal of creating a meaningful connection to Japanese aesthetics and philosophy in their everyday life.",
    gallery: [
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1580600301354-0ce8faef576c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    client: "Dr. Chen",
    location: "San Francisco, California",
    completionDate: "Fall 2022"
  },
  {
    id: 4,
    title: "Urban Rooftop Garden",
    description: "Transforming city spaces with container gardens and vertical planting systems.",
    imageUrl: "https://images.unsplash.com/photo-1563341591-a4ef278cb0c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tags: ["Urban", "Rooftop", "Container"],
    longDescription: "This innovative rooftop garden transformed an underutilized urban space into a thriving green oasis. The clients, a young professional couple, wanted to maximize their outdoor living area while creating a sustainable urban garden that could produce fresh herbs and vegetables along with providing a relaxing atmosphere for entertaining.",
    challenges: "The rooftop location presented numerous challenges, including weight restrictions, exposure to high winds, limited water access, and extreme temperature fluctuations. Additionally, the space needed to accommodate both food production and social gathering areas.",
    solution: "We designed a lightweight, modular system using specially designed containers and vertical growing structures. The plant selection focused on wind-resistant varieties and those suitable for the specific microclimates created on the roof. A custom irrigation system with rainwater harvesting capabilities ensures efficient water use. Multi-functional furniture pieces provide flexibility for different uses of the space.",
    results: "The rooftop has been transformed into a productive urban farm and stylish entertaining area. The clients harvest fresh produce three seasons of the year and have dramatically reduced their carbon footprint by growing food locally. The space has been featured in an urban gardening magazine and serves as an example of how city dwellers can reconnect with nature and sustainable food production even in dense urban environments.",
    gallery: [
      "https://images.unsplash.com/photo-1563341591-a4ef278cb0c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598901847919-b95dd0fabbb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595859703065-2259982784bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    client: "Martinez-Kim Residence",
    location: "Chicago, Illinois",
    completionDate: "Summer 2021"
  },
  {
    id: 5,
    title: "Mediterranean Landscape",
    description: "Drought-resistant Mediterranean garden with olive trees and lavender.",
    imageUrl: "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tags: ["Mediterranean", "Drought-resistant"],
    longDescription: "This Mediterranean-inspired landscape was designed for a client looking to create a drought-tolerant garden that would thrive in their arid climate while evoking the charm of Southern European gardens. The project emphasized water conservation without sacrificing beauty or functionality.",
    challenges: "The site was previously dominated by water-intensive lawn and non-native plants unsuited to the local climate. The client wanted a complete transformation to reduce water use while creating a cohesive Mediterranean aesthetic that complemented their home's architecture.",
    solution: "We completely removed the existing lawn and implemented a design centered around a gravel and flagstone courtyard with drought-resistant Mediterranean plants including olive trees, lavender, rosemary, and ornamental grasses. A small, recirculating fountain provides the soothing sound of water without excessive consumption. Drip irrigation systems target water directly to plant roots, minimizing waste.",
    results: "The new landscape has reduced the property's water consumption by over 60% while creating a beautiful, low-maintenance environment. The fragrant herbs and flowering plants attract beneficial insects, and the outdoor dining area under a pergola draped with grapevines has become the client's favorite spot for entertaining. The garden demonstrates how water-wise landscaping can be both environmentally responsible and aesthetically pleasing.",
    gallery: [
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1533481405265-e9ce0c044abb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    client: "Garcia Family",
    location: "Tucson, Arizona",
    completionDate: "Spring 2023"
  },
  {
    id: 6,
    title: "Poolside Paradise",
    description: "Complete pool area redesign with tropical plants and custom lighting.",
    imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tags: ["Pool", "Tropical", "Lighting"],
    longDescription: "This project transformed an outdated pool area into a luxurious tropical retreat. The clients, who frequently entertain and have teenage children, wanted a resort-like atmosphere that would provide both relaxation and recreation opportunities while extending their outdoor living season as long as possible.",
    challenges: "The existing pool was in good structural condition but the surrounding landscape and hardscaping were dated and uninspiring. The space lacked proper lighting, comfortable seating areas, and visual appeal. Additionally, the clients wanted to create more privacy from neighboring properties.",
    solution: "Our design preserved the existing pool shell while completely reimagining the surrounding space. We created different zones for dining, lounging, and sunbathing with high-quality outdoor furniture. Tropical plantings including palms, bananas, and colorful perennials create a lush atmosphere. Privacy screening was achieved through a combination of strategic plantings and custom wood features. An extensive lighting system extends usability into the evening with underwater pool lights, uplighting on specimen plants, and ambient lighting throughout the space.",
    results: "The renovated pool area has become the family's favorite gathering place and has significantly increased the amount of time they spend outdoors. The teenagers regularly invite friends over, and the clients report hosting more frequent social events. The evening lighting transforms the space after dark, creating a magical atmosphere that has made the pool area a destination even when swimming isn't the primary activity.",
    gallery: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543489822-c49534f3271f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552089123-2d26226fc2b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    client: "Thompson Family",
    location: "Miami, Florida",
    completionDate: "Summer 2022"
  }
];

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const projectDetail = projects.find(p => p.id === parseInt(id));
      if (projectDetail) {
        setProject(projectDetail);
      } else {
        navigate("/");
      }
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center text-forest hover:text-lime"
            onClick={() => navigate("/#projects")}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-forest mb-6">{project.title}</h1>
              
              <div className="mb-8">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-lime/20 text-forest text-sm font-medium rounded-full flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="prose max-w-none mb-8">
                <p className="text-earth text-lg mb-6">{project.longDescription}</p>
                
                <h2 className="text-2xl font-bold text-forest mt-8 mb-4">Challenges</h2>
                <p className="text-earth mb-6">{project.challenges}</p>
                
                <h2 className="text-2xl font-bold text-forest mt-8 mb-4">Our Solution</h2>
                <p className="text-earth mb-6">{project.solution}</p>
                
                <h2 className="text-2xl font-bold text-forest mt-8 mb-4">Results</h2>
                <p className="text-earth mb-6">{project.results}</p>
              </div>
              
              <div className="mt-12 mb-8">
                <h2 className="text-2xl font-bold text-forest mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={image} 
                        alt={`${project.title} gallery image ${index + 1}`} 
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-forest/5 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-forest mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Client</h4>
                      <p className="font-medium text-forest">{project.client}</p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                      <p className="font-medium text-forest">{project.location}</p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Completion Date</h4>
                      <p className="font-medium text-forest">{project.completionDate}</p>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Project Tags</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-lime/20 text-forest text-xs font-medium rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-lime/10 rounded-xl p-6">
                  <h3 className="text-forest font-bold mb-3">Interested in a similar project?</h3>
                  <p className="text-earth mb-4">Contact us today to discuss your landscaping needs and get started on your dream outdoor space.</p>
                  <Button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-lime hover:bg-lime/90 text-white"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;

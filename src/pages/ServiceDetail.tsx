
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Clock, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ServiceDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  longDescription: string;
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing: {
    type: string;
    price: string;
    features: string[];
  }[];
}

const services: ServiceDetail[] = [
  {
    id: 1,
    title: "Lawn Care",
    description: "Professional lawn maintenance services including mowing, fertilization, aeration, and weed control to keep your lawn healthy and vibrant all year round.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    longDescription: "Our comprehensive lawn care services are designed to create and maintain a lush, healthy lawn that enhances your property's beauty and value. We combine expert knowledge with eco-friendly practices to deliver results that exceed expectations. From regular mowing and edging to seasonal fertilization and weed control, our team provides all the essential care your lawn needs throughout the year.",
    benefits: [
      "Enhances curb appeal and property value",
      "Prevents weed growth and disease",
      "Ensures healthy growth year-round",
      "Reduces erosion and improves soil quality",
      "Environmentally responsible practices"
    ],
    process: [
      {
        step: 1,
        title: "Initial Assessment",
        description: "We evaluate your lawn's current condition, soil quality, and specific needs."
      },
      {
        step: 2,
        title: "Customized Plan",
        description: "We develop a tailored maintenance schedule based on your lawn's unique requirements."
      },
      {
        step: 3,
        title: "Regular Maintenance",
        description: "Our team provides consistent care following the established schedule."
      },
      {
        step: 4,
        title: "Seasonal Treatments",
        description: "We implement specialized treatments to address seasonal challenges."
      }
    ],
    pricing: [
      {
        type: "Basic",
        price: "$99/month",
        features: [
          "Bi-weekly mowing",
          "Edge trimming",
          "Seasonal fertilization",
          "Basic weed control"
        ]
      },
      {
        type: "Premium",
        price: "$199/month",
        features: [
          "Weekly mowing",
          "Edge trimming",
          "Blowing clean-up",
          "Seasonal fertilization",
          "Complete weed control",
          "Aeration and overseeding",
          "Pest management"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Garden Design",
    description: "Custom garden design services tailored to your preferences and property. We create beautiful, sustainable gardens that enhance your outdoor living space.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    longDescription: "Our garden design service transforms ordinary outdoor spaces into extraordinary living environments. Our experienced designers work closely with you to understand your vision, preferences, and how you want to use your garden. We consider all elements—from plant selection and hardscaping to lighting and water features—to create a cohesive, sustainable design that reflects your personality and complements your home's architecture.",
    benefits: [
      "Creates a personalized outdoor living space",
      "Increases property value",
      "Improves environmental impact with native plants",
      "Reduces water usage with smart design",
      "Provides year-round visual interest"
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description: "We discuss your goals, preferences, and budget to understand your vision."
      },
      {
        step: 2,
        title: "Site Analysis",
        description: "We analyze your property's conditions, including soil, light, and existing features."
      },
      {
        step: 3,
        title: "Concept Design",
        description: "We create detailed design concepts including plant selections and layout."
      },
      {
        step: 4,
        title: "Implementation",
        description: "Our expert team brings the design to life with careful installation."
      }
    ],
    pricing: [
      {
        type: "Design Only",
        price: "$1,500-$3,000",
        features: [
          "Professional consultation",
          "Detailed site analysis",
          "Custom design plans",
          "Plant selection guide",
          "Implementation guidance"
        ]
      },
      {
        type: "Design & Installation",
        price: "$5,000-$20,000+",
        features: [
          "All Design Only features",
          "Complete installation service",
          "Plant sourcing and quality assurance",
          "Hardscape installation",
          "Irrigation system setup",
          "30-day plant health guarantee"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Tree Trimming",
    description: "Expert tree care services including trimming, pruning, and shaping to maintain tree health, improve appearance, and ensure safety around your property.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    longDescription: "Our professional tree trimming services help maintain the health, safety, and aesthetic appeal of your trees. Proper pruning not only enhances the appearance of your landscape but also promotes tree health by removing dead or diseased branches and improving airflow. Our certified arborists use industry best practices to carefully trim trees of all sizes, ensuring their longevity while minimizing risks to your property.",
    benefits: [
      "Promotes tree health and longevity",
      "Prevents property damage from falling branches",
      "Improves sunlight penetration for undergrowth",
      "Enhances the aesthetic appearance of trees",
      "Identifies potential tree issues early"
    ],
    process: [
      {
        step: 1,
        title: "Tree Assessment",
        description: "Our arborists evaluate the tree's health, structure, and specific trimming needs."
      },
      {
        step: 2,
        title: "Trimming Plan",
        description: "We create a customized plan targeting specific branches for optimal results."
      },
      {
        step: 3,
        title: "Professional Pruning",
        description: "Our team uses specialized equipment and techniques for precise cutting."
      },
      {
        step: 4,
        title: "Clean-up",
        description: "We remove all debris and leave your property clean and tidy."
      }
    ],
    pricing: [
      {
        type: "Small Trees",
        price: "$150-$400",
        features: [
          "Trees under 30 feet",
          "Crown cleaning",
          "Dead wood removal",
          "Shaping and thinning",
          "Debris removal"
        ]
      },
      {
        type: "Large Trees",
        price: "$500-$1,200+",
        features: [
          "Trees over 30 feet",
          "Crown reduction",
          "Hazardous limb removal",
          "Structural pruning",
          "Complete cleanup",
          "Free follow-up inspection"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Hardscaping",
    description: "Custom hardscape installations including patios, walkways, retaining walls, and outdoor living spaces that complement your landscape design.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    longDescription: "Our hardscaping services add structure, functionality, and visual appeal to your outdoor space. From elegant patios and walkways to sturdy retaining walls and custom outdoor kitchens, we create durable hardscape features that complement your landscape and extend your living space outdoors. Our expert team uses premium materials and skilled craftsmanship to build hardscape elements that withstand the test of time while enhancing your property's value and enjoyment.",
    benefits: [
      "Creates functional outdoor living spaces",
      "Adds significant value to your property",
      "Reduces maintenance compared to lawn areas",
      "Solves drainage and erosion issues",
      "Complements and enhances landscaping"
    ],
    process: [
      {
        step: 1,
        title: "Design Consultation",
        description: "We discuss your needs and preferences to create a custom hardscape plan."
      },
      {
        step: 2,
        title: "Site Preparation",
        description: "We prepare the area with proper grading, drainage, and foundation work."
      },
      {
        step: 3,
        title: "Construction",
        description: "Our skilled team builds your hardscape features with precision and attention to detail."
      },
      {
        step: 4,
        title: "Finishing Touches",
        description: "We complete the project with landscaping integration and final adjustments."
      }
    ],
    pricing: [
      {
        type: "Basic Patio/Walkway",
        price: "$2,500-$8,000",
        features: [
          "Quality pavers or natural stone",
          "Professional installation",
          "Proper drainage setup",
          "Edge restraints",
          "Polymeric sand finishing"
        ]
      },
      {
        type: "Complete Outdoor Living Space",
        price: "$15,000-$50,000+",
        features: [
          "Custom patio design",
          "Built-in seating or fireplace",
          "Retaining walls as needed",
          "Outdoor kitchen foundations",
          "Lighting installation",
          "Integrated planting areas",
          "5-year workmanship warranty"
        ]
      }
    ]
  }
];

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<ServiceDetail | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const serviceDetail = services.find(s => s.id === parseInt(id));
      if (serviceDetail) {
        setService(serviceDetail);
      } else {
        navigate("/");
      }
    }
  }, [id, navigate]);

  if (!service) {
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
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-forest mb-6">{service.title}</h1>
              
              <p className="text-earth text-lg mb-8">{service.longDescription}</p>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-forest mb-4">Benefits</h2>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-lime mr-2 mt-1 flex-shrink-0" />
                      <span className="text-earth">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-forest mb-4">Our Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.process.map((step) => (
                    <div key={step.step} className="border border-gray-200 rounded-lg p-4">
                      <div className="bg-lime/10 text-lime font-bold w-8 h-8 rounded-full flex items-center justify-center mb-3">
                        {step.step}
                      </div>
                      <h3 className="font-bold text-forest mb-2">{step.title}</h3>
                      <p className="text-earth">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="sticky top-24">
                <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div className="bg-forest/5 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-forest mb-4">Pricing Options</h3>
                  <div className="space-y-6">
                    {service.pricing.map((option, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-forest">{option.type}</h4>
                          <span className="font-bold text-lime">{option.price}</span>
                        </div>
                        <ul className="space-y-1">
                          {option.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <Check className="h-4 w-4 text-lime mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-earth">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-lime/10 rounded-xl p-6">
                  <h3 className="flex items-center text-forest font-bold mb-3">
                    <Clock className="mr-2 h-5 w-5 text-lime" />
                    Request a Consultation
                  </h3>
                  <p className="text-earth mb-4">Interested in our {service.title.toLowerCase()} services? Get in touch for a free consultation and estimate.</p>
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

export default ServiceDetail;

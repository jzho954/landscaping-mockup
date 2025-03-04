
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Backyard Oasis",
      description: "Complete landscape redesign with sustainable plants and modern hardscaping.",
      imageUrl: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Design", "Hardscaping", "Sustainable"]
    },
    {
      id: 2,
      title: "English Garden",
      description: "Traditional English garden with native flowering plants and stone pathways.",
      imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Garden", "Flowers", "Traditional"]
    },
    {
      id: 3,
      title: "Zen Rock Garden",
      description: "Minimalist Japanese-inspired garden with raked gravel and carefully placed stones.",
      imageUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Zen", "Minimalist", "Oriental"]
    },
    {
      id: 4,
      title: "Urban Rooftop Garden",
      description: "Transforming city spaces with container gardens and vertical planting systems.",
      imageUrl: "https://images.unsplash.com/photo-1563341591-a4ef278cb0c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Urban", "Rooftop", "Container"]
    },
    {
      id: 5,
      title: "Mediterranean Landscape",
      description: "Drought-resistant Mediterranean garden with olive trees and lavender.",
      imageUrl: "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Mediterranean", "Drought-resistant"]
    },
    {
      id: 6,
      title: "Poolside Paradise",
      description: "Complete pool area redesign with tropical plants and custom lighting.",
      imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Pool", "Tropical", "Lighting"]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const projectsToShow = 3;
  const maxIndex = Math.max(0, projects.length - projectsToShow);

  const nextProject = () => {
    if (currentIndex < maxIndex) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          containerRef.current?.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <p className="inline-block px-3 py-1 bg-forest/10 text-forest rounded-full text-sm font-semibold mb-4 tracking-wide">
            Our Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-forest">
            See Our Projects
          </h2>
          <p className="text-lg text-earth">
            Explore our latest landscaping and garden design projects that showcase our expertise and creativity.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative opacity-100"
        >
          <div className="overflow-hidden">
            <div className="flex transition-all duration-500 mb-8">
              {projects.slice(currentIndex, currentIndex + projectsToShow).map((project, index) => (
                <motion.div
                  key={project.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full md:w-1/3 px-4 mb-8"
                >
                  <Link to={`/portfolio/${project.id}`} className="block h-full">
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] h-full flex flex-col">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-6 flex-grow">
                        <h3 className="text-xl font-bold mb-2 text-forest">{project.title}</h3>
                        <p className="text-earth mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-lime/20 text-forest text-xs font-medium rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <Button
              onClick={prevProject}
              disabled={currentIndex === 0}
              variant="outline"
              className="rounded-full p-3 border-forest text-forest hover:bg-forest hover:text-white disabled:opacity-50"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            
            <Button
              onClick={nextProject}
              disabled={currentIndex >= maxIndex}
              variant="outline"
              className="rounded-full p-3 border-forest text-forest hover:bg-forest hover:text-white disabled:opacity-50"
            >
              <ArrowRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

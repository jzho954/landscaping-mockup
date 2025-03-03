
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useEffect } from "react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "GreenScape transformed our backyard into a stunning oasis. Their attention to detail was impressive!",
      author: "John D."
    },
    {
      id: 2,
      quote: "Fast, professional, and the results exceeded our expectations. Worth every penny!",
      author: "Sarah K."
    },
    {
      id: 3,
      quote: "Our garden has never looked better. The team was knowledgeable and a pleasure to work with.",
      author: "Michael R."
    },
    {
      id: 4,
      quote: "We've received countless compliments on our new landscape design. Couldn't be happier!",
      author: "Emma L."
    },
    {
      id: 5,
      quote: "Professional from start to finish. The hardscaping work they did completely transformed our property.",
      author: "David W."
    },
    {
      id: 6,
      quote: "Their lawn care program has made our yard the envy of the neighborhood. Highly recommend!",
      author: "Jennifer P."
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      // Clone the testimonials for a seamless infinite scroll effect
      const clone = contentRef.current.cloneNode(true);
      containerRef.current.appendChild(clone);
    }
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <p className="inline-block px-3 py-1 bg-forest/10 text-forest rounded-full text-sm font-semibold mb-4 tracking-wide">
            Client Feedback
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-forest">
            What Our Clients Say
          </h2>
          <p className="text-lg text-earth">
            Don't just take our word for it. Hear what our satisfied clients have to say.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="overflow-hidden opacity-0"
        >
          <div 
            ref={contentRef}
            className="flex animate-marquee hover:pause py-4"
          >
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="min-w-[300px] max-w-xs mx-4 mb-4 border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <svg className="h-8 w-8 text-forest mb-4 opacity-80" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-earth mb-4">{testimonial.quote}</p>
                  <p className="font-semibold text-forest">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

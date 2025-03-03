
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRef, useEffect } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqRef = useRef<HTMLDivElement>(null);

  const faqItems: FAQItem[] = [
    {
      id: "faq-1",
      question: "How often should I schedule lawn maintenance?",
      answer: "For optimal results, we recommend weekly lawn maintenance during the growing season (spring and summer) and bi-weekly during fall and winter. However, the frequency can be adjusted based on your specific lawn type, local climate, and personal preferences."
    },
    {
      id: "faq-2",
      question: "Do you offer sustainable landscaping options?",
      answer: "Yes! We specialize in sustainable landscaping practices including native plant installation, water-efficient irrigation systems, rain gardens, and eco-friendly maintenance methods. Our sustainable designs reduce water usage, minimize chemical inputs, and create habitats for local wildlife."
    },
    {
      id: "faq-3",
      question: "What is the best time of year for landscape renovation?",
      answer: "Fall and early spring are typically the best times for major landscape renovations. These seasons offer mild temperatures and optimal growing conditions for new plants. However, certain projects can be completed year-round, and we can work with you to develop a timeline that suits your specific project needs."
    },
    {
      id: "faq-4",
      question: "Do you handle large commercial landscaping projects?",
      answer: "Absolutely! We have extensive experience with commercial landscaping projects of all sizes. Our team is equipped to handle everything from office parks and retail spaces to multi-family housing complexes. We provide comprehensive commercial services including design, installation, and ongoing maintenance."
    },
    {
      id: "faq-5",
      question: "What is included in your regular maintenance package?",
      answer: "Our standard maintenance package includes mowing, edging, blowing, seasonal clean-ups, and basic weed control. We also offer premium packages that include additional services such as fertilization, aeration, dethatching, pruning, and pest management. All maintenance plans can be customized to meet your specific needs and budget."
    },
    {
      id: "faq-6",
      question: "How do I get a quote for my landscaping project?",
      answer: "Getting a quote is easy! Simply fill out our contact form, and one of our landscape professionals will reach out to schedule a consultation. During the consultation, we'll discuss your vision, assess your property, and provide a detailed estimate. There's no obligation, and the initial consultation is complimentary."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          faqRef.current?.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <p className="inline-block px-3 py-1 bg-forest/10 text-forest rounded-full text-sm font-semibold mb-4 tracking-wide">
            Common Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-forest">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-earth">
            Find answers to our most commonly asked questions about our landscaping services.
          </p>
        </div>

        <div ref={faqRef} className="max-w-3xl mx-auto opacity-100 transition-opacity duration-500">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-semibold text-forest hover:text-forest/80 py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-earth pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

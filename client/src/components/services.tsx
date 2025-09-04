import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const ref = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="fade-in grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {SERVICES.map((service, index) => (
            <div key={service.number} className="space-y-8" data-testid={`service-${index + 1}`}>
              <div className="text-6xl lg:text-7xl font-light text-muted-foreground">
                {service.number}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-light">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <button
                  onClick={() => scrollToSection(service.link)}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  data-testid={`service-${index + 1}-link`}
                >
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

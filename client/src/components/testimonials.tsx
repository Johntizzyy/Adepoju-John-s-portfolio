import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-testid="testimonials-header">
          <h2 className="text-3xl lg:text-4xl font-light mb-4">What my</h2>
          <h3 className="text-3xl lg:text-4xl font-light">clients say</h3>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            See what my clients have to say about working with me and the results I helped them achieve.
          </p>
        </div>

        <div ref={ref} className="fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-8 space-y-6"
              data-testid={`testimonial-${index + 1}`}
            >
              <p className="text-muted-foreground leading-relaxed" data-testid={`testimonial-${index + 1}-content`}>
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid={`testimonial-${index + 1}-avatar`}
                />
                <div>
                  <div className="font-medium" data-testid={`testimonial-${index + 1}-name`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`testimonial-${index + 1}-company`}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

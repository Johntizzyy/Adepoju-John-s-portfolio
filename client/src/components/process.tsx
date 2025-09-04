import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { PROCESS_STEPS } from "@/lib/constants";
import { Check } from "lucide-react";

export default function Process() {
  const ref = useScrollAnimation();

  return (
    <section id="process" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-testid="process-header">
          <h2 className="text-3xl lg:text-4xl font-light mb-4">The Process</h2>
          <h3 className="text-4xl lg:text-5xl font-light mb-6">Your Website</h3>
          <h4 className="text-3xl lg:text-4xl font-light text-muted-foreground mb-8">in 5 steps</h4>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My process ensures that I create a website tailored to your business needs and technical requirements.
          </p>
        </div>

        <div ref={ref} className="fade-in space-y-24">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              data-testid={`process-step-${index + 1}`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "order-2 lg:order-1" : ""}`}>
                <div className="text-6xl font-light text-muted-foreground">{step.number}</div>
                <h3 className="text-2xl lg:text-3xl font-light">{step.title}</h3>
                <h4 className="text-xl font-medium">{step.subtitle}</h4>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              <div className={`bg-card rounded-xl p-8 space-y-4 ${index % 2 === 1 ? "order-1 lg:order-2" : ""}`}>
                <ul className="space-y-3 text-muted-foreground">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

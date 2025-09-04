import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { PROJECTS } from "@/lib/constants";

export default function Work() {
  const ref = useScrollAnimation();

  return (
    <section id="work" className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light" data-testid="work-title">
            Selected Work
          </h2>
          <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="work-see-all">
            See all
          </button>
        </div>

        <div ref={ref} className="fade-in grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="project-card" data-testid={`project-${index + 1}`}>
              <div className="bg-card rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  data-testid={`project-${index + 1}-image`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2" data-testid={`project-${index + 1}-title`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid={`project-${index + 1}-category`}>
                    {project.category}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`project-${index + 1}-description`}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

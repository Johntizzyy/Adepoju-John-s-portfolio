import { useRoute } from "wouter";
import { PROJECTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Project() {
  const [, params] = useRoute("/project/:id");
  const projectId = params?.id ? parseInt(params.id) : null;

  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Button asChild>
            <a href="/">Go Back Home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <a href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </a>
        </Button>

        {/* Project Header */}
        <div className="mb-8">
          <div className="text-sm text-muted-foreground mb-2">
            {project.category}
          </div>
          <h1 className="text-4xl lg:text-5xl font-light mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-medium mb-4">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Category</h3>
              <p className="text-muted-foreground">{project.category}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Live Demo</h3>
              <Button asChild className="w-full">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Project Information */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-medium mb-4">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Technology Stack</h3>
              <p className="text-muted-foreground">
                Modern web technologies including React, TypeScript, and
                responsive design principles.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Features</h3>
              <p className="text-muted-foreground">
                Responsive design, modern UI/UX, optimized performance, and
                cross-browser compatibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

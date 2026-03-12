import { useState } from "react";
import { Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  galleryImages: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);

  const projects: Project[] = [
    {
      title: "Music Lesson Scheduler",
      description: "Application created to simplify class replacement management for music teachers, reducing scheduling conflicts and improving organization.",
      fullDescription:
        "Application created to help music teachers manage students, " +
        "class replacements, and lesson organization in a centralized and intuitive interface. " +
        "The system improves scheduling control, tracks student progress through assigned songs, " +
        "and keeps event dates organized — all in one place. " +
        "It is fully responsive, providing a seamless experience across desktop, tablet, and mobile devices.",
      
      tags: ["React", "Node.js", "Express.js"],
      image: "/makeupProject/makeups-login.png",
      galleryImages: [
        "/makeupProject/makeups-list.png",
        "/makeupProject/initial-page.png"
      ],
    },
  ];

  return (
    <>
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Portfolio</p>
            <h2 className="section-title">
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Some of the projects I've worked on recently
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  
                  {/* Overlay - View More */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/70">
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full">
                      <Eye size={18} />
                      <span className="font-medium">View More</span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => { setSelectedProject(null); setShowAllImages(false); }}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            {/* Left side - Text content */}
            <div className="flex-1 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-primary mb-2">About the Project</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject?.fullDescription}
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-primary mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Separator orientation="vertical" className="hidden md:block h-auto" />

            {/* Right side - Gallery */}
            <div className="flex-1 space-y-4">
              <h4 className="text-sm font-medium text-primary mb-2">Project Gallery</h4>
              
              {/* Main featured image */}
              {selectedProject && (
                <img
                  src={selectedProject.galleryImages[0]}
                  alt={`${selectedProject.title} - main screenshot`}
                  className="w-full rounded-lg object-contain aspect-video"
                />
              )}

              {/* Expandable gallery */}
              {selectedProject && selectedProject.galleryImages.length > 1 && (
                <>
                  {showAllImages && (
                    <div className="grid grid-cols-2 gap-3 animate-in fade-in-0 slide-in-from-top-4 duration-300">
                      {selectedProject.galleryImages.slice(1).map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${selectedProject.title} screenshot ${index + 2}`}
                          className="w-full rounded-lg object-contain aspect-video hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                      ))}
                    </div>
                  )}
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={() => setShowAllImages(!showAllImages)}
                  >
                    {showAllImages ? (
                      <>
                        <ChevronUp size={16} />
                        View less
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} />
                        View more ({selectedProject.galleryImages.length - 1} pics)
                      </>
                    )}
                  </Button>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Projects;

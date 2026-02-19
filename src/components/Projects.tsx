import { useState } from 'react';
import { Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

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

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Complete e-commerce platform with cart, payments, and admin dashboard.',
      fullDescription: 'A comprehensive e-commerce solution built from the ground up, featuring a fully functional shopping cart, secure payment processing through multiple gateways, and a powerful admin dashboard for inventory and order management. The platform supports multi-vendor capabilities, real-time inventory tracking, and advanced analytics for business insights.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      galleryImages: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      ],
    },
    {
      title: 'Task Management App',
      description: 'Task management application with real-time collaboration.',
      fullDescription: 'An enterprise-grade task management solution designed for teams of all sizes. Features include real-time collaboration with live updates, customizable workflows, time tracking, and detailed reporting. The application integrates with popular tools and provides a seamless experience across desktop and mobile devices.',
      tags: ['TypeScript', 'React', 'Socket.io', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      galleryImages: [
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      ],
    },
    {
      title: 'Analytics Dashboard',
      description: 'Analytics dashboard with interactive visualizations and reports.',
      fullDescription: 'A powerful analytics platform that transforms raw data into actionable insights. Built with performance in mind, it handles millions of data points while maintaining responsive visualizations. Features include customizable dashboards, automated reporting, predictive analytics, and data export capabilities in multiple formats.',
      tags: ['Next.js', 'D3.js', 'Python', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      galleryImages: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
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
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
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
              <div className="grid gap-4">
                {selectedProject?.galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    className="w-full rounded-lg object-cover aspect-video"
                  />
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Projects;

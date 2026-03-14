import { useState } from "react";
import { ZoomIn, X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";
import { projects } from "./data/index";
import { Project } from "./data/projectTypes";

import ProjectCard from "./ProjectCard";
import ProjectsHeader from "./ProjectsHeader";
import ExtraImagesGallery from "./ExtraImagesGallery";
import ProjectDetailsLeft from "./ProjectDetailsLeft";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import ImageLightboxDialog from "./ImageLightboxDialog";

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">

          <ProjectsHeader />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* DETAILS */}

      <ProjectDetailsDialog
        project={selected}
        onClose={() => {
          if (!lightboxImage) setSelected(null);
        }}
        onOpenImage={setLightboxImage}
      />

      {/* LIGHTBOX */}

      <ImageLightboxDialog
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
};

export default Projects;
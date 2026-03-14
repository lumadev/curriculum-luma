import { useState } from "react";

import { projects } from "./data/index";
import { Project } from "./data/projectTypes";

import ProjectCard from "./ProjectCard";
import ProjectsHeader from "./ProjectsHeader";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import ImageLightboxDialog from "./ImageLightboxDialog";

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
          if (lightboxIndex === null) {
            setSelected(null);
          }
        }}
        onOpenImage={(index) => setLightboxIndex(index)}
      />

      {/* LIGHTBOX */}

      <ImageLightboxDialog
        images={selected?.galleryImages ?? []}
        index={lightboxIndex}
        setIndex={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </>
  );
};

export default Projects;

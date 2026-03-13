import { useState } from "react";
import { ZoomIn, X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";

import ProjectCard from "./ProjectCard";
import ProjectsHeader from "./ProjectsHeader";
import ExtraImagesGallery from "./ExtraImagesGallery";
import ProjectDetailsLeft from "./ProjectDetailsLeft";

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  galleryImages: string[];
}

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "Music Lesson Scheduler",
      description:
        "Application created to simplify class replacement management for music teachers.",
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
        "/makeupProject/initial-page.png",
      ],
    },
  ];

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

      <Dialog
        open={!!selected}
        onOpenChange={() => {
          if (!lightboxImage) {
            setSelected(null);
          }
        }}
      >
        <DialogContent
          className="max-w-5xl max-h-[90vh] overflow-y-auto"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">
              {selected?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col md:flex-row gap-6 mt-4">

            {/* LEFT */}

            {selected && (
              <ProjectDetailsLeft
                fullDescription={selected.fullDescription}
                tags={selected.tags}
              />
            )}

            <Separator
              orientation="vertical"
              className="hidden md:block"
            />

            {/* RIGHT */}

            <div className="flex-1 space-y-4">

              <h4 className="text-sm font-medium text-primary">
                Gallery
              </h4>

              {/* MAIN IMAGE */}

              {selected && (
                <div
                  className="relative cursor-pointer rounded-lg overflow-hidden"
                  onClick={() =>
                    setLightboxImage(selected.galleryImages[0])
                  }
                >
                  <img
                    src={selected.galleryImages[0]}
                    className="w-full aspect-video object-contain"
                  />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition">
                    <ZoomIn size={28} className="text-foreground" />
                  </div>
                </div>
              )}

              {/* EXTRA IMAGES */}

              {selected && (
                <ExtraImagesGallery
                  images={selected.galleryImages}
                  onSelectImage={setLightboxImage}
                />
              )}

            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!lightboxImage}
        onOpenChange={() => setLightboxImage(null)}
      >
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] bg-transparent border-none shadow-none p-0 [&>button]:hidden"
        >
          <div className="relative flex items-center justify-center">
            <button
              className="absolute top-2 right-2 md:top-4 md:right-4 z-20 p-2 rounded-full bg-muted/80 backdrop-blur hover:bg-accent transition"
              onClick={() => setLightboxImage(null)}
            >
              <X size={24} />
            </button>

            {lightboxImage && (
              <img
                src={lightboxImage}
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Projects;
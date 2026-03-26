import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";
import { ZoomIn } from "lucide-react";
import { Project } from "./data/projectTypes";
import { useTranslation } from "react-i18next";

import ExtraImagesGallery from "./ExtraImagesGallery";
import ProjectDetailsLeft from "./ProjectDetailsLeft";

interface Props {
  project: Project | null;
  onClose: () => void;
  onOpenImage: (index: number) => void;
}

const ProjectDetailsDialog = ({
  project,
  onClose,
  onOpenImage,
}: Props) => {
  const { t, i18n } = useTranslation();

  const titleKey = `${project?.id}.title`;
  const descriptionKey = `${project?.id}.description`;

  const title = i18n.exists(titleKey) ? t(titleKey) : null;
  const description = i18n.exists(descriptionKey) ? t(descriptionKey) : null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">
            {title}
          </DialogTitle>

          <DialogDescription className="sr-only">
            {description}
          </DialogDescription>
        </DialogHeader>

        {project && (
          <div className="flex flex-col md:flex-row gap-6 mt-4">

            {/* LEFT */}
            <ProjectDetailsLeft
              selectedProject={project}
            />

            <Separator
              orientation="vertical"
              className="hidden md:block"
            />

            {/* RIGHT */}
            <div className="flex-1 space-y-4">
              <h4 className="text-sm font-medium text-primary">
                {t("projectDetails.sections.gallery")}
              </h4>

              {/* MAIN IMAGE */}
              <div
                className="relative cursor-pointer rounded-lg overflow-hidden"
                onClick={() => onOpenImage(0)}
              >
                <img
                  src={project.galleryImages[0]}
                  className="w-full aspect-video object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition">
                  <ZoomIn size={28} />
                </div>
              </div>

              {/* EXTRA */}
              <ExtraImagesGallery
                images={project.galleryImages}
                onSelectImage={(index) => onOpenImage(index)}
              />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;

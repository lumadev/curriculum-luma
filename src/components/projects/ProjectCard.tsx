import { Eye } from "lucide-react";
import { Project } from "./data/projectTypes";
import { useState } from "react";

interface Props {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: Props) => {
  const [isVertical, setIsVertical] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalHeight > img.naturalWidth) {
      setIsVertical(true);
    }
  };

  return (
    <div
      className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-500 cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`
          relative
          h-48
          overflow-hidden
          flex
          items-center
          justify-center
          ${isVertical ? "bg-white p-2" : ""}
        `}
      >
        <img
          src={project.image}
          alt={project.title}
          onLoad={handleLoad}
          className={`
            w-full
            h-full
            transition-transform
            duration-500
            group-hover:scale-110
            ${isVertical ? "object-contain" : "object-cover"}
          `}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/70">
          <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full">
            <Eye size={20} />
            <span className="text-base md:text-lg">View More</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-xl md:text-2xl mb-2">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-base md:text-lg mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary text-sm md:text-base rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
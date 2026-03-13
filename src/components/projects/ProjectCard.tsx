import { Eye } from "lucide-react";
import { Project } from "./types";

interface Props {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: Props) => {
  return (
    <div
      className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-500 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/70">
          <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full">
            <Eye size={18} />
            <span>View More</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-xl mb-2">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
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
  );
};

export default ProjectCard;
interface Props {
  fullDescription: string;
  tags: string[];
}

const ProjectDetailsLeft = ({ fullDescription, tags }: Props) => {
  return (
    <div className="flex-1 space-y-4">

      <div>
        <h4 className="text-sm font-medium text-primary mb-2">
          About the Project
        </h4>

        <p className="text-muted-foreground">
          {fullDescription}
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-primary mb-2">
          Technologies
        </h4>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsLeft;
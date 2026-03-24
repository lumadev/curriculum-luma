import { useTranslation } from "react-i18next";

const ProjectsHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-16">
      <p className="text-primary font-medium mb-2 text-lg md:text-xl">
        {t("projects.sectionSubtitle")}
      </p>

      <h2 className="section-title text-3xl md:text-5xl">
        <span className="gradient-text">
          {t("projects.sectionTitle")}
        </span>
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg md:text-xl">
        {t("projects.sectionDescription")}
      </p>
    </div>
  );
};

export default ProjectsHeader;
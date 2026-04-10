import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Project } from "./data/projectTypes";
import { useTranslation } from "react-i18next";

interface Props {
  selectedProject: Project;
}

const ProjectDetailsLeft = ({ selectedProject }: Props) => {
  const { t, i18n } = useTranslation();
  const selectedProjectId = selectedProject.id;

  const raw = t(`${selectedProjectId}.responsibilities`, {
    returnObjects: true,
  });

  
  const fullDescriptionKey = `${selectedProjectId}.fullDescription`;
  const roleKey = `${selectedProjectId}.role`;
  const roleDescriptionKey = `${selectedProjectId}.roleDescription`;

  const fullDescription = i18n.exists(fullDescriptionKey) ? t(fullDescriptionKey) : null;
  const role = i18n.exists(roleKey) ? t(roleKey) : null;
  const roleDescription = i18n.exists(roleDescriptionKey) ? t(roleDescriptionKey) : null;

  const responsibilities = Array.isArray(raw) ? raw : [];

  return (
    <Tabs defaultValue="about" className="flex-1">
      <TabsList className="w-full bg-transparent border-b border-border rounded-none h-auto p-0 gap-4">
        <TabsTrigger value="about" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none bg-transparent px-1 pb-2 gap-2">
          {t("projectDetails.tabs.about")}
        </TabsTrigger>

        {roleDescription && (
          <TabsTrigger
            value="experience"
            className="rounded-none border-b-2 border-transparent 
            data-[state=active]:border-primary 
            data-[state=active]:bg-transparent 
            data-[state=active]:shadow-none 
            bg-transparent px-1 pb-2 gap-2"
          >
            {t("projectDetails.tabs.experience")}
          </TabsTrigger>
        )}
      </TabsList>

      <TabsContent value="about" className="space-y-4 mt-4">
        <div>
          <h4 className="text-sm font-medium text-primary mb-2">
            {t("projectDetails.sections.aboutProject")}
          </h4>
          {fullDescription && (
            <p className="text-muted-foreground leading-relaxed">
              {fullDescription}
            </p>
          )}
        </div>
        <div>
          <h4 className="text-sm font-medium text-primary mb-2">
            {t("projectDetails.sections.technologies")}
          </h4>
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
      </TabsContent>
    
      <TabsContent value="experience" className="space-y-4 mt-4">
        <div>
          {role && (
            <div className="flex items-center gap-2 mb-2">
              {role && (
                <span className="py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {role}
                </span>
              )}
            </div>
          )}
          {roleDescription && (
            <p className="text-muted-foreground leading-relaxed">
              {roleDescription}
            </p>
          )}
        </div>
        {responsibilities?.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-primary mb-3">
              {t("projectDetails.sections.responsibilities")}
            </h4>
            <ul className="space-y-2">
              {responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default ProjectDetailsLeft;
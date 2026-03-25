import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Project } from "./data/projectTypes";
import { useTranslation } from "react-i18next";

interface Props {
  selectedProject: Project;
}

const ProjectDetailsLeft = ({ selectedProject }: Props) => {
  const { t } = useTranslation();

  const raw = t(`${selectedProject.id}.responsibilities`, {
    returnObjects: true,
  });

  const responsibilities = Array.isArray(raw) ? raw : [];

  return (
    <Tabs defaultValue="about" className="flex-1">
      <TabsList className="w-full bg-transparent border-b border-border rounded-none h-auto p-0 gap-4">
        <TabsTrigger value="about" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none bg-transparent px-1 pb-2 gap-2">
          About
        </TabsTrigger>

        {selectedProject?.roleDescription && (
          <TabsTrigger
            value="experience"
            className="rounded-none border-b-2 border-transparent 
            data-[state=active]:border-primary 
            data-[state=active]:bg-transparent 
            data-[state=active]:shadow-none 
            bg-transparent px-1 pb-2 gap-2"
          >
            My Role
          </TabsTrigger>
        )}
      </TabsList>

      <TabsContent value="about" className="space-y-4 mt-4">
        <div>
          <h4 className="text-sm font-medium text-primary mb-2">About the Project</h4>
          <p className="text-muted-foreground leading-relaxed">
            {t(selectedProject.fullDescription)} 
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
      </TabsContent>
      
      {selectedProject?.roleDescription && (
        <TabsContent value="experience" className="space-y-4 mt-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {t(selectedProject.role)} 
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t(selectedProject.roleDescription)} 
            </p>
          </div>
          {responsibilities?.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-primary mb-3">
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </TabsContent>
      )}
    </Tabs>
  );
};

export default ProjectDetailsLeft;
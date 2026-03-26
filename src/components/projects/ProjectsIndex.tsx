import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { projectsData } from "./data/index";
import { Project } from "./data/projectTypes";
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

import ProjectCard from "./ProjectCard";
import ProjectsHeader from "./ProjectsHeader";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import ImageLightboxDialog from "./ImageLightboxDialog";

const Projects = () => {
  const { t, i18n } = useTranslation();

  const normalizedProjects = useMemo(() => {
    return projectsData.map((project, index) => {
      const titleKey = `${project.id}.title`;
      const descriptionKey = `${project.id}.description`;
      const roleKey = `${project.id}.role`;

      const title = i18n.exists(titleKey) ? t(titleKey) : "";
      const description = i18n.exists(descriptionKey) ? t(descriptionKey) : "";
      const role = i18n.exists(roleKey) ? t(roleKey) : null;

      return {
        index,
        project,
        title,
        description,
        role
      };
    });
  }, [t, i18n]);

  const [selected, setSelected] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeRole, setActiveRole] = useState<string | null>(null);

  const roleTypes = [
    { label: 'Frontend', match: 'Frontend' },
    { label: 'Backend', match: 'Backend' },
    { label: 'Full Stack', match: 'Full Stack' },
  ];

  const clearFilters = () => {
    setSearchQuery('');
    setActiveRole(null);
  };

  const hasActiveFilters = searchQuery || activeRole;

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase();

    return normalizedProjects.filter(({ project, title, role, description }) => {
      const matchesSearch =
        !searchQuery ||
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        role.toLowerCase().includes(query) ||
        project.tags.some(t => t.toLowerCase().includes(query));

      const matchesRole =
        !activeRole || role.includes(activeRole);

      return matchesSearch && matchesRole;
    });
  }, [normalizedProjects, searchQuery, activeRole]);

  return (
    <>
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">

          <ProjectsHeader />

          {/* Filters */}
          <div className="mb-10 space-y-4">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={t("projects.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-card border-border"
              />
            </div>

            {/* Role filters */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <Filter size={14} className="text-muted-foreground" />
                {roleTypes.map(r => (
                  <button
                    key={r.label}
                    onClick={() => setActiveRole(activeRole === r.match ? null : r.match)}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-all duration-200 ${
                      activeRole === r.match
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-card text-muted-foreground border-border hover:border-primary/50'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-2"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length === 0 ? (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                {t("projects.noProjectsSearch")}
              </div>
            ) : null}
            {filteredProjects.map((projectFormatted, index) => (
              <ProjectCard
                key={projectFormatted.project.image}
                project={projectFormatted.project}
                onClick={() => setSelected(projectFormatted.project)}
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

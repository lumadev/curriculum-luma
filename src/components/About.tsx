import { Code2, Zap, Users, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      id: "cleanCode",
      icon: Code2,
      title: t("about.highlights.cleanCode.title"),
      description: t("about.highlights.cleanCode.description"),
    },
    {
      id: "performance",
      icon: Zap,
      title: t("about.highlights.performance.title"),
      description: t("about.highlights.performance.description"),
    },
    {
      id: "collaboration",
      icon: Users,
      title: t("about.highlights.collaboration.title"),
      description: t("about.highlights.collaboration.description"),
    },
    {
      id: "innovation",
      icon: Lightbulb,
      title: t("about.highlights.innovation.title"),
      description: t("about.highlights.innovation.description"),
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-5xl">
              {t("about.sectionTitleStart")}{" "}
              <span className="gradient-text">
                {t("about.sectionTitleHighlight")}
              </span>
            </h2>

            <p className="text-primary font-medium mb-2 text-lg md:text-xl">
              {t("about.sectionSubtitle")}
            </p>
          </div>

          {/* About Content */}
          <div className="glass-card p-8 md:p-12 mb-12">
            <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed">

              <p>
                <span className="text-foreground font-medium pr-2 text-lg md:text-xl">
                  {t("about.description.introStrong")}
                </span>
                {t("about.description.introText")}
              </p>

              <p>
                {t("about.description.experienceStart")}{" "}
                <span className="text-foreground font-medium ml-2 text-lg md:text-xl">
                  {t("about.description.experienceStrong")},
                </span>{" "}
                {t("about.description.experienceMiddle")}
                <span className="text-foreground font-medium ml-2 text-lg md:text-xl">
                  {t("about.description.experienceTech")}
                </span>{" "}
                {t("about.description.experienceEnd")}
              </p>

              <p>
                {t("about.description.communicationStart")}{" "}
                <span className="text-foreground font-medium text-lg md:text-xl">
                  {t("about.description.communicationStrong")}
                </span>
                {t("about.description.communicationEnd")}
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-display font-semibold text-foreground text-lg md:text-xl mb-2">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-muted-foreground">
                  {item.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
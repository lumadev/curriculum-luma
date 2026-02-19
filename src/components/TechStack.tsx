import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPhp,
  SiVuedotjs,
  SiJavascript,
  SiPostgresql, 
  SiMysql,
  SiGit 
} from 'react-icons/si';

const TechStack = () => {
  const technologies = [
    { name: 'Vue.js', icon: SiVuedotjs },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'PHP', icon: SiPhp },
    { name: 'React.js', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'MySQL', icon: SiMysql },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Git', icon: SiGit },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Technologies</p>
          <h2 className="section-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Tools and technologies I use to create amazing solutions
          </p>
        </div>

        {/* Tech Carousel */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex gap-8 py-8 overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 glass-card px-8 py-6 flex items-center gap-4 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-default"
                >
                  <tech.icon className="w-8 h-8 text-foreground/80" />
                  <span className="font-display font-medium text-foreground whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional skills grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            'AI Tools', 
            'Domain-Driven Design',
            'CI/CD',
            'Agile/Scrum',
            'Unit/Functional Tests',
            'Web Security',
            'REST APIs',
            'Design Patterns'].map(
            (skill) => (
              <div
                key={skill}
                className="px-4 py-3 bg-secondary/50 rounded-lg text-center text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStack;

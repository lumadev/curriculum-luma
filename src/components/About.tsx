import { Code2, Zap, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Well-documented and maintainable code'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized applications for maximum efficiency'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Teamwork and effective communication'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and solutions'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 text-lg md:text-xl">Get to Know Me</p>
            <h2 className="section-title text-3xl md:text-5xl">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          {/* About Content */}
          <div className="glass-card p-8 md:p-12 mb-12">
            <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed md:leading-relaxed">
              
              <p>
                <span className="text-foreground font-medium pr-2 text-lg md:text-xl">
                  Senior Full-Stack Engineer focused on scalable web applications
                </span>
                {" "}
                with strong expertise in architecture, performance, scalability, and clean code practices.
                {" "}
                I have over 14 years of experience designing and building robust, scalable, 
                and maintainable systems using modern web technologies.
              </p>

              <p>
                I have extensive experience in
                <span className="text-foreground font-medium ml-2 text-lg md:text-xl">
                  full-stack development
                </span>
                {" "}
                working with technologies such as
                <span className="text-foreground font-medium ml-2 text-lg md:text-xl">
                  Vue.js, TypeScript, Node.js, PHP, React, Next.js, 
                </span>
                {" "}
                and modern architectures.{" "}
                I care deeply about code quality, performance, and long-term maintainability, and I enjoy solving 
                complex technical problems with simple and well-structured solutions.
              </p>

              <p>
                Beyond code, I value{" "}
                <span className="text-foreground font-medium text-lg md:text-xl">
                  clear communication
                </span>
                {", "}
                ownership, and collaboration.{" "}
                I have experience working closely with engineering, product, 
                and design teams to deliver high-quality software aligned with business goals and user needs.
              </p>

              <p>
                I am passionate about building impactful products and continuously improving 
                both systems and development processes.
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
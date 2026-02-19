import { Code2, Zap, Users, Lightbulb } from 'lucide-react';
const About = () => {
  const highlights = [{
    icon: Code2,
    title: 'Clean Code',
    description: 'Well-documented and maintainable code'
  }, {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized applications for maximum efficiency'
  }, {
    icon: Users,
    title: 'Collaboration',
    description: 'Teamwork and effective communication'
  }, {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Always exploring new technologies and solutions'
  }];
  return <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Get to Know Me</p>
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          {/* About Content */}
          <div className="glass-card p-8 md:p-12 mb-12">
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>Software Engineer with strong focus on architecture, performance, scalability, and good coding practices. Excellent collaboration, communication, and mentoring skills. Commitment to delivering software that exceeds expectations.<span className="text-foreground font-medium">Software Engineer</span> with 
                a passion for developing technological solutions that make a difference. My journey 
                in programming started years ago, and since then I've been specializing in creating 
                robust and scalable applications.
              </p>
              <p>
                I have solid experience in <span className="text-foreground font-medium">full-stack 
                development</span>, working with various modern technologies. I believe that good 
                code goes beyond just working — it needs to be clean, testable, and easy to maintain.
              </p>
              <p>Beyond code, I highly value clear communication and teamwork. <span className="text-foreground font-medium">clear 
                communication</span> and teamwork. I believe the best products come from 
                collaboration between people with different perspectives and skills.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => <div key={item.title} className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;
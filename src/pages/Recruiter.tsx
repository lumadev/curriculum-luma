import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Briefcase, Code, Users, Target, MessageSquare, Lightbulb } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const categories = [
  {
    id: 'background',
    label: 'Background',
    icon: Briefcase,
    questions: [
      {
        q: 'Tell me about yourself.',
        a: "I'm a Software Engineer with experience building scalable web applications. I specialize in both frontend and backend development, working with technologies like React, Vue.js, Node.js, PHP, and relational databases. I'm passionate about clean architecture, applying Domain-Driven Design principles, and delivering high-quality software that solves real business problems.",
      },
      {
        q: 'Why did you choose software engineering?',
        a: "I've always been drawn to problem-solving and building things. Software engineering gives me the ability to create solutions that impact thousands of users. The constant evolution of technology keeps me motivated to learn and grow every day.",
      },
      {
        q: 'What are your greatest strengths?',
        a: 'My ability to understand complex business requirements and translate them into well-architected solutions. I write testable, maintainable code following SOLID principles and DDD patterns. I communicate effectively with both technical and non-technical stakeholders.',
      },
    ],
  },
  {
    id: 'technical',
    label: 'Technical',
    icon: Code,
    questions: [
      {
        q: 'What is your tech stack?',
        a: "I work with Vue.js and React on the frontend, Node.js and PHP on the backend, and MySQL/PostgreSQL for databases. I use TypeScript across the stack for type safety. I'm experienced with Git workflows, CI/CD pipelines, and modern development practices.",
      },
      {
        q: 'How do you ensure code quality?',
        a: 'I follow test-driven development with unit and functional tests, apply SOLID principles and DDD patterns, conduct thorough code reviews, and maintain consistent coding standards. I also prioritize web security best practices in every project.',
      },
      {
        q: 'How do you approach learning new technologies?',
        a: 'I start by understanding the problem the technology solves, then build small proof-of-concept projects. I read official documentation, follow community best practices, and apply what I learn in real-world scenarios as quickly as possible.',
      },
    ],
  },
  {
    id: 'teamwork',
    label: 'Teamwork',
    icon: Users,
    questions: [
      {
        q: 'How do you work in a team?',
        a: 'I believe in clear communication, mutual respect, and shared ownership. I actively participate in code reviews, pair programming sessions, and team discussions. I value diverse perspectives and believe the best solutions come from collaboration.',
      },
      {
        q: 'How do you handle disagreements with colleagues?',
        a: "I focus on the technical merits of each approach rather than personal preferences. I present data and examples to support my position, remain open to other viewpoints, and ultimately prioritize what's best for the project and the team.",
      },
      {
        q: 'How do you handle feedback?',
        a: 'I see feedback as an opportunity to grow. I actively seek constructive criticism from peers and leads, reflect on it objectively, and implement changes where appropriate. I also provide thoughtful, respectful feedback to others.',
      },
    ],
  },
  {
    id: 'problem-solving',
    label: 'Problem Solving',
    icon: Target,
    questions: [
      // {
      //   q: 'Describe a challenging bug you solved.',
      //   a: 'I once debugged a complex race condition in an asynchronous data pipeline that caused intermittent data corruption. I systematically isolated the issue using logging and unit tests, identified the root cause in the event ordering, and implemented a proper queue-based solution that eliminated the problem entirely.',
      // },
      {
        q: 'How do you approach complex problems?',
        a: 'I break them down into smaller, manageable pieces. I identify the core issue, research potential solutions, prototype quickly, and iterate. I also leverage Domain-Driven Design to ensure the solution aligns with the business domain and is maintainable long-term.',
      },
    ],
  },
  {
    id: 'culture',
    label: 'Culture Fit',
    icon: MessageSquare,
    questions: [
      {
        q: 'What kind of work environment do you thrive in?',
        a: 'I thrive in environments that value innovation, continuous learning, and autonomy. I enjoy working with teams that embrace agile practices, encourage experimentation, and maintain high engineering standards while fostering a supportive and inclusive culture.',
      },
      {
        q: 'Where do you see yourself in 5 years?',
        a: 'I see myself as a senior technical leader, driving architectural decisions and mentoring other engineers. I want to continue deepening my expertise while broadening my impact — contributing to products that make a meaningful difference.',
      },
      {
        q: 'What motivates you?',
        a: "Building software that people actually use and benefit from. The satisfaction of solving a hard problem elegantly, seeing a feature go live, and knowing it improves someone's workflow — that drives me every day.",
      },
    ],
  },
  {
    id: 'goals',
    label: 'Goals',
    icon: Lightbulb,
    questions: [
      {
        q: 'What are you looking for in your next role?',
        a: "I'm looking for a role where I can work on challenging technical problems, contribute to meaningful products, and grow as an engineer. I value companies with strong engineering culture, and a clear product vision.",
      },
      {
        q: 'What are your salary expectations?',
        a: "I'm open to discussing compensation based on the role's scope, responsibilities, and the overall benefits package. I prioritize finding the right fit in terms of culture, growth opportunities, and technical challenges.",
      },
    ],
  },
];

const Recruiter = () => {
  const [activeCategory, setActiveCategory] = useState('background');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/30 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </a>
          <span className="text-2xl font-display font-bold gradient-text">Recruiter Area</span>
          <div className="w-[120px]" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Intro */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Common <span className="gradient-text">Q&A</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated guide with answers to frequently asked questions by recruiters and hiring managers. Feel free to explore or share this page.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  isActive
                    ? 'bg-primary/10 border-primary/50 text-primary'
                    : 'border-border/50 text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                <Icon size={14} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Q&A */}
        {categories.map((cat) => (
          activeCategory === cat.id ? (
            <div key={cat.id}>
              <Accordion type="single" collapsible defaultValue={`${cat.id}-0`} className="space-y-3">
                {cat.questions.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${cat.id}-${idx}`}
                    className="glass-card border-border/30 px-6 rounded-2xl overflow-hidden"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold text-base md:text-lg hover:no-underline py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : null
        ))}

        {/* Footer note */}
        <div className="text-center mt-16 text-muted-foreground text-sm">
          <p>This page is a quick reference for interviews and recruiter conversations.</p>
          <p className="mt-1">Feel free to reach out for a more in-depth discussion.</p>
        </div>
      </div>
    </div>
  );
};

export default Recruiter;

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
        a: "I'm a Senior Full Stack Engineer focused on scalable web applications with strong expertise in architecture, performance, scalability, and clean code practices. I have over 14 years of experience designing and building robust, scalable, and maintainable systems using modern web technologies. I have extensive experience in full stack development, working with technologies such as Vue.js, TypeScript, Node.js, PHP, React, Next.js and modern architectures. I care deeply about code quality, performance, and long-term maintainability, and I enjoy solving complex technical problems with simple and well-structured solutions. Beyond code, I value clear communication, ownership, and collaboration. I have experience working closely with engineering, product, and design teams to deliver high-quality software aligned with business goals and user needs.",
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
        q: 'Describe a React project you worked on',
        a: "One project I worked on was an e-commerce platform that supported both ready-to-ship and customizable 3D products. I was responsible for the frontend architecture using React, where I designed reusable components and structured the application to support scalability as new product types were added. One key decision was separating UI components from business logic using hooks and service layers, which made the codebase easier to maintain and test. I also integrated Cloudinary for image handling and optimized loading strategies to improve performance. As a result, we improved page load times and made it easier to introduce new features without affecting existing functionality.",
      },
      {
        q: 'Loading Performance in React',
        a: 'When I talk about loading performance in React, I usually think about how quickly the user can see and interact with meaningful content, not just how fast the app technically loads. I approach this in a few key ways. First, I use code splitting and lazy loading to reduce the initial bundle size. With tools like React.lazy and dynamic imports, I make sure only the necessary code is loaded upfront, and the rest is loaded on demand. I also focus on optimizing asset delivery, especially images. For example, I use services like Cloudinary to serve properly sized and compressed images, which significantly reduces load time. Another important aspect is handling loading states effectively. Instead of showing blank screens, I use skeletons or placeholders to improve perceived performance and keep the user engaged while data is being fetched. For data fetching, I often use tools like React Query, which provide caching, background updates, and reduce unnecessary network requests. This helps make the app feel faster even when dealing with remote data. Finally, I monitor performance using tools like Lighthouse and React DevTools Profiler to identify bottlenecks and continuously improve the loading experience. Overall, my goal is to balance real performance optimizations with a smooth user experience.”',
      },
      {
        q: 'How do you manage state in complex applications (react)',
        a: `In complex React applications, I approach state management by first categorizing state based on scope and responsibility.

        For local UI state (like modals, inputs, toggles), I keep it close to the component using useState or useReducer.

        For shared state across components, I prefer lightweight solutions like Context combined with useReducer, but only when the scope is controlled to avoid unnecessary re-renders.

        When the application grows and state becomes more complex—especially with async logic and cross-feature communication—I use dedicated state management tools like Redux Toolkit or Zustand, depending on the use case.

        I separate server state from client state because they have different concerns. Server state is asynchronous, shared, and needs caching and synchronization, so I use tools like React Query to handle things like caching, background updates, and invalidation. This removes a lot of manual state management. For client state, like UI interactions or local inputs, I keep it simple using useState or useReducer.

        Architecturally, I focus on:

        Keeping state as close as possible to where it’s used
        Avoiding unnecessary global state
        Normalizing complex data structures
        Splitting state by domain or feature`
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
        a: 'I see myself as a senior technical leader. I want to continue working closely with technologies and projects I have a strong affinity for, as that’s where I do my best work and keep evolving. I also see myself in a company with strong cultural values, where I feel motivated to keep growing and contributing in a meaningful way.'
      },
      {
        q: 'What motivates you?',
        a: "Building software that people actually use and benefit from. The satisfaction of seeing a feature go live and knowing it improves someone's workflow drives me every day. I’m also motivated by working with technologies I have a strong affinity for, as it allows me to stay engaged and continuously improve my skills. On top of that, being part of a company with a positive culture makes a big difference to me—it creates an environment where collaboration thrives and people feel encouraged to do their best work.",
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

import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import profileImage from '@/assets/profile-placeholder.jpg';

const Hero = () => {
  const socialLinks = [{
    icon: FaGithub ,
    href: 'https://github.com/lumadev',
    label: 'GitHub'
  }, {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/luma-macagnan-5756055b/',
    label: 'LinkedIn'
  }, {
    icon: FaEnvelope,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=luma.softwaredev@gmail.com",
    label: 'Email'
  }];
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo */}
          <div className="relative animate-fade-up order-1 lg:order-1">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden relative animate-pulse-glow">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
            <p className="text-primary font-medium mb-4 animate-fade-up opacity-0 delay-100">
              Software Engineer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-up opacity-0 delay-200">
              Let's build{' '}
              <span className="gradient-text">something</span>
              <br />
              together
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 animate-fade-up opacity-0 delay-300">Passionate developer focused on building elegant and scalable solutions. With experience in systems architecture and full-stack development, I turn complex ideas into reliable, high-quality digital products.</p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-up opacity-0 delay-400">
              {
                socialLinks.map(social => 
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110" aria-label={social.label}>
                    <social.icon size={20} />
                  </a>
                )
              }
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-up opacity-0 delay-500">
              <a href="#contact" className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all duration-300 hover:scale-105">
                Get in Touch
              </a>
              <a href="#projects" className="px-8 py-3 border border-border rounded-full font-medium text-foreground hover:bg-secondary transition-all duration-300">
                View Projects
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button onClick={() => document.getElementById('about')?.scrollIntoView({
        behavior: 'smooth'
      })} className="absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110" aria-label="Scroll to about section">
          <ArrowDown size={24} />
        </button>
      </div>
    </section>;
};
export default Hero;
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import profileImage from '@/assets/profile-placeholder.jpg';

const Hero = () => {
  const { t } = useTranslation();

  const socialLinks = [{
    icon: FaGithub,
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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-32">
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

    <div className="container mx-auto px-6 relative">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
        {/* Photo */}
        <div className="relative animate-fade-up order-1 lg:order-1">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden relative animate-pulse-glow">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
          {/* Software Engineer */}
          <p className="text-primary font-medium mb-4 animate-fade-up opacity-0 delay-100">
            {t("hero.jobTitle")}
          </p>
          {/* Let's build something together */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 animate-fade-up opacity-0 delay-200">
            {t("hero.heading.buildPrefix")}{" "}
            <span className="gradient-text">
              {t("hero.heading.buildHighlight")}
            </span>
            <br />
            {t("hero.heading.buildSuffix")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 animate-fade-up opacity-0 delay-300">
            {t("hero.description")}
          </p>

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
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              {t("hero.actions.checkProjects")}
              <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={() => document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
      })} className="group absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110" aria-label={t("hero.accessibility.scrollToAbout")}>
        <ChevronDown size={24} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-1" />
      </button>
    </div>
  </section>;
};
export default Hero;
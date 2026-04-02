import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from "react-i18next";

const navItems = [
  { labelKey: 'header.about', href: '#about' },
  { labelKey: 'header.skills', href: '#skills' },
  { labelKey: 'header.projects', href: '#projects' },
  { labelKey: 'Recruiter', href: '/recruiter' },
];

const Header = () => {
  const { t } = useTranslation()

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.labelKey}>
                <a href={item.href} className="nav-link text-sm font-medium">
                  {t(item.labelKey)}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#projects"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
          >
            {t("header.viewWork")}
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in bg-background/95 backdrop-blur-lg relative z-50">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.labelKey}>
                  <a
                    href={item.href}
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("header.viewWork")}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

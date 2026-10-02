import { useState } from 'react';
import { ArrowLeft, Briefcase, Code, Lightbulb, MessageSquare, Target, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const categories = [
  { id: 'background', icon: Briefcase },
  { id: 'technical', icon: Code },
  { id: 'teamwork', icon: Users },
  { id: 'problem-solving', icon: Target },
  { id: 'culture', icon: MessageSquare },
  { id: 'goals', icon: Lightbulb },
] as const;

type QuestionAnswer = { q: string; a: string };
type CategoryContent = { label: string; questions: QuestionAnswer[] };

const Recruiter = () => {
  const [activeCategory, setActiveCategory] = useState<string>('background');
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage?.startsWith('pt') ? 'pt-BR' : 'en';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-card/30 backdrop-blur-xl">
        <div className="container mx-auto grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-3 px-4 py-3 sm:px-6 md:grid-cols-3 md:gap-4 md:py-4">
          <a
            href="/"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={18} />
            <span className="text-xs font-medium sm:text-sm">{t('recruiter.backToPortfolio')}</span>
          </a>

          <span className="col-span-2 row-start-2 text-center font-display text-xl font-bold gradient-text sm:text-2xl md:col-span-1 md:col-start-2 md:row-start-1">
            {t('recruiter.area')}
          </span>

          <div className="justify-self-end">
            <div
              role="group"
              aria-label={t('recruiter.languageLabel')}
              className="inline-flex rounded-full border border-border/60 bg-background/70 p-1 shadow-sm"
            >
              {([
                { code: 'en', label: 'English', flag: '🇺🇸', shortLabel: 'EN' },
                { code: 'pt-BR', label: 'Português', flag: '🇧🇷', shortLabel: 'PT' },
              ] as const).map((language) => {
                const isActive = currentLanguage === language.code;
                return (
                  <button
                    key={language.code}
                    type="button"
                    aria-pressed={isActive}
                    aria-label={language.label}
                    title={language.label}
                    onClick={() => void i18n.changeLanguage(language.code)}
                    className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-all sm:px-3 sm:text-sm ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <span aria-hidden="true" className="text-base leading-none">{language.flag}</span>
                    <span className="hidden sm:inline">{language.label}</span>
                    <span className="sm:hidden">{language.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-6 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl">
            {t('recruiter.title.prefix')} <span className="gradient-text">{t('recruiter.title.highlight')}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('recruiter.description')}
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const content = t(`recruiter.categories.${category.id}`, { returnObjects: true }) as unknown as CategoryContent;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-primary/50 bg-primary/10 text-primary'
                    : 'border-border/50 text-muted-foreground hover:border-border hover:text-foreground'
                }`}
              >
                <Icon size={14} />
                {content.label}
              </button>
            );
          })}
        </div>

        {categories.map((category) => {
          if (activeCategory !== category.id) return null;

          const content = t(`recruiter.categories.${category.id}`, { returnObjects: true }) as unknown as CategoryContent;
          return (
            <div key={category.id}>
              <Accordion type="single" collapsible defaultValue={`${category.id}-0`} className="space-y-3">
                {content.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.id}-${index}`}
                    className="glass-card overflow-hidden rounded-2xl border-border/30 px-6"
                  >
                    <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline md:text-lg">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="whitespace-pre-line pb-5 text-[15px] leading-relaxed text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          );
        })}

        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>{t('recruiter.footer.reference')}</p>
          <p className="mt-1">{t('recruiter.footer.contact')}</p>
        </div>
      </main>
    </div>
  );
};

export default Recruiter;

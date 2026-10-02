import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English', abbreviation: 'EN' },
  { code: 'pt-BR', label: 'Português', abbreviation: 'PT-BR' },
] as const;

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage?.startsWith('pt') ? 'pt-BR' : 'en';

  return (
    <div
      role="group"
      aria-label={t('recruiter.languageLabel')}
      className="inline-flex shrink-0 items-center rounded-full border border-border/60 bg-background/75 p-1 shadow-sm backdrop-blur-sm"
    >
      {languages.map((language) => {
        const isActive = currentLanguage === language.code;

        return (
          <button
            key={language.code}
            type="button"
            aria-pressed={isActive}
            aria-label={language.label}
            title={language.label}
            onClick={() => void i18n.changeLanguage(language.code)}
            className={`grid size-9 place-items-center rounded-full border transition-colors ${
              isActive
                ? 'border-primary/30 bg-primary/10'
                : 'border-transparent opacity-75 hover:bg-muted hover:opacity-100'
            }`}
          >
            <span aria-hidden="true" className="text-[10px] font-semibold leading-none">{language.abbreviation}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
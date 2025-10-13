import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useLanguage, Language } from '../contexts/LanguageContext';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languageOptions: { code: Language; label: string; name: string }[] = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'es', label: 'ES', name: 'Español' },
    { code: 'ca', label: 'CA', name: 'Català' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                CF
              </div>
              <span className="font-semibold">ClimaFarma</span>
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {t('nav.features')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {t('nav.pricing')}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
              <SelectTrigger className="w-[140px]">
                <Globe className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-foreground/60"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => {
                scrollToSection('features');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-foreground/60"
            >
              {t('nav.features')}
            </button>
            <button
              onClick={() => {
                scrollToSection('pricing');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-foreground/60"
            >
              {t('nav.pricing')}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

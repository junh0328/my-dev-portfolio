'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const t = useTranslations('nav');
  const tTheme = useTranslations('theme');
  const locale = useLocale();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: '#about', label: t('about') },
    { href: '#experience', label: t('experience') },
    { href: '#projects', label: t('projects') },
    { href: '#skills', label: t('skills') },
    { href: '#education', label: t('education') },
    { href: '#blog', label: t('blog') },
    { href: '#contact', label: t('contact') },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === 'ko' ? 'en' : 'ko';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 glass'>
      <div className='container mx-auto px-4'>
        <nav className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='text-xl font-bold gradient-text'>
            JunHee Lee
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-1'>
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant='ghost'
                size='sm'
                asChild
                className='text-muted-foreground hover:text-foreground'
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>

          {/* Actions */}
          <div className='flex items-center gap-2'>
            {/* Language Toggle */}
            <Button
              variant='ghost'
              size='sm'
              onClick={toggleLanguage}
              className='text-muted-foreground hover:text-foreground gap-1.5 px-2'
            >
              <Globe className='h-4 w-4' />
            </Button>

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className='text-muted-foreground hover:text-foreground'
              >
                {theme === 'dark' ? (
                  <Sun className='h-4 w-4' />
                ) : (
                  <Moon className='h-4 w-4' />
                )}
                <span className='sr-only'>
                  {theme === 'dark' ? tTheme('light') : tTheme('dark')}
                </span>
              </Button>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden text-muted-foreground hover:text-foreground'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <div className='flex flex-col gap-1'>
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant='ghost'
                size='sm'
                asChild
                className='justify-start text-muted-foreground hover:text-foreground'
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

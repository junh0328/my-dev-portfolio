'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, BookOpen } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/junh0328',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/%EC%A4%80%ED%9D%AC-%EC%9D%B4-23176a214/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:junh0328@naver.com',
      label: 'Email',
    },
    {
      icon: BookOpen,
      href: 'https://junheedot.tistory.com',
      label: 'Tech blog',
    },
  ];

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16'>
      {/* Background gradient */}
      <div className='absolute inset-0 -z-10'>
        <div
          className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl'
          style={{
            background:
              'radial-gradient(circle, rgba(66, 49, 200, 0.25) 0%, rgba(123, 106, 232, 0.15) 50%, transparent 100%)',
          }}
        />
        <div
          className='absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl'
          style={{
            background:
              'radial-gradient(circle, rgba(124, 181, 247, 0.25) 0%, rgba(168, 212, 255, 0.15) 50%, transparent 100%)',
          }}
        />
      </div>

      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Name - Large Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight'
          >
            {t('name')}
          </motion.h1>

          {/* Role - Gradient Text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6'
          >
            {t('role')}
          </motion.h2>

          {/* Company Badge */}
          <motion.a
            href='https://www.probit.com/en-us/'
            target='_blank'
            rel='noopener noreferrer'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6 hover:bg-secondary hover:border-primary/50 transition-all cursor-pointer'
          >
            <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
            <span className='text-sm'>
              {t('company')} · {t('companyDesc')}
            </span>
          </motion.a>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance'
          >
            {t('description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-12'
          >
            <Button size='lg' asChild>
              <a href='/resume/이준희_이력서.pdf' download>
                <Download className='mr-2 h-4 w-4' />
                {t('downloadResume')}
              </a>
            </Button>
            <Button size='lg' variant='outline' asChild>
              <a
                href='https://github.com/junh0328'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='mr-2 h-4 w-4' />
                {t('viewGithub')}
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='flex items-center justify-center gap-4'
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className='relative group p-3 rounded-full bg-secondary/50 border border-border hover:bg-secondary hover:scale-110 transition-all'
                aria-label={link.label}
              >
                <link.icon className='h-5 w-5' />
                <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-foreground text-background opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2'
        >
          <div className='flex flex-col items-center gap-2'>
            <span className='text-xs text-muted-foreground'>Scroll</span>
            <div className='w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2'>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className='w-1.5 h-1.5 rounded-full bg-muted-foreground'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

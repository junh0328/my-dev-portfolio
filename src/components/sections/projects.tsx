'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal } from './project-modal';
import * as gtag from '@/lib/gtag';

export function Projects() {
  const t = useTranslations('projects');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      key: 'spot',
      logo: '/images/logos/dns_ever_logo.png',
      logoAlt: 'D&S Ever',
    },
    {
      key: 'p2p',
      logo: '/images/logos/dns_ever_logo.png',
      logoAlt: 'D&S Ever',
    },
    {
      key: 'kyc',
      logo: '/images/logos/dns_ever_logo.png',
      logoAlt: 'D&S Ever',
    },
    {
      key: 'eazel',
      logo: '/images/logos/eazel.jpeg',
      logoAlt: 'Eazel',
    },
  ];

  return (
    <section id='projects' className='py-20 md:py-32'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>{t('title')}</h2>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={index === 0 || index === 3 ? 'md:col-span-1' : ''}
            >
              <Card
                className='h-full group bento-item overflow-hidden cursor-pointer'
                onClick={() => {
                  setSelectedProject(project.key);
                  gtag.event({
                    action: 'open',
                    category: 'modal',
                    label: `project_${project.key}`,
                  });
                }}
              >
                {/* Point Color Top Bar */}
                <div
                  className='h-1 bg-point opacity-50 group-hover:opacity-100 transition-opacity'
                />

                <CardHeader>
                  <div className='flex items-start justify-between'>
                    <div className='flex items-center gap-3'>
                      <div className='relative w-9 h-9 rounded-lg overflow-hidden bg-white'>
                        <Image
                          src={project.logo}
                          alt={project.logoAlt}
                          fill
                          sizes="36px"
                          className='object-contain'
                        />
                      </div>
                      <div>
                        <CardTitle className='text-lg group-hover:text-primary transition-colors'>
                          {t(`items.${project.key}.title`)}
                        </CardTitle>
                        <p className='text-sm text-muted-foreground'>
                          {t(`items.${project.key}.role`)}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className='h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all' />
                  </div>
                </CardHeader>

                <CardContent className='space-y-4'>
                  <p className='text-sm text-muted-foreground'>
                    {t(`items.${project.key}.description`)}
                  </p>

                  {/* Tech Stack */}
                  <div className='flex flex-wrap gap-2'>
                    {(t.raw(`items.${project.key}.tech`) as string[]).map(
                      (tech: string) => (
                        <Badge
                          key={tech}
                          variant='secondary'
                          className='text-xs'
                        >
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>

                  {/* Achievements */}
                  <ul className='space-y-1'>
                    {(
                      t.raw(`items.${project.key}.achievements`) as string[]
                    ).map((achievement: string, i: number) => (
                      <li
                        key={i}
                        className='flex items-start gap-2 text-xs text-muted-foreground'
                      >
                        <span className='mt-1 w-1 h-1 rounded-full bg-primary shrink-0' />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        projectKey={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </section>
  );
}

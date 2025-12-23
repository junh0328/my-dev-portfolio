'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';
import { PersonalProjectModal } from './personal-project-modal';
import * as gtag from '@/lib/gtag';

export function PersonalProjects() {
  const t = useTranslations('personalProjects');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    { key: 'my-agentic-ai' },
    { key: 'my-liveness' },
    { key: 'my-tanstack-query-strategy' },
    { key: 'my-monorepo' },
  ];

  return (
    <section id='personal-projects' className='py-20 md:py-32'>
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
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            {t('subtitle')}
          </p>
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
            >
              <Card
                className='h-full group bento-item overflow-hidden cursor-pointer'
                onClick={() => {
                  setSelectedProject(project.key);
                  gtag.event({
                    action: 'open',
                    category: 'modal',
                    label: `personal_project_${project.key}`,
                  });
                }}
              >
                {/* Point Color Top Bar */}
                <div className='h-1 bg-point opacity-50 group-hover:opacity-100 transition-opacity' />

                <CardHeader>
                  <div className='flex items-start justify-between'>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center w-9 h-9 rounded-lg bg-muted'>
                        <Github className='h-5 w-5 text-muted-foreground' />
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
                    {(t.raw(`items.${project.key}.tech`) as string[])
                      .slice(0, 4)
                      .map((tech: string) => (
                        <Badge
                          key={tech}
                          variant='secondary'
                          className='text-xs'
                        >
                          {tech}
                        </Badge>
                      ))}
                    {(t.raw(`items.${project.key}.tech`) as string[]).length >
                      4 && (
                      <Badge variant='outline' className='text-xs'>
                        +
                        {(t.raw(`items.${project.key}.tech`) as string[])
                          .length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Features */}
                  <ul className='space-y-1'>
                    {(
                      t.raw(`items.${project.key}.features`) as string[]
                    ).map((feature: string, i: number) => (
                      <li
                        key={i}
                        className='flex items-start gap-2 text-xs text-muted-foreground'
                      >
                        <span className='mt-1 w-1 h-1 rounded-full bg-primary shrink-0' />
                        <span>{feature}</span>
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
      <PersonalProjectModal
        projectKey={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </section>
  );
}

'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, BarChart3, Zap, ArrowUpRight } from 'lucide-react';
import { BusinessImpactModal } from './business-impact-modal';

interface ApproachItem {
  key: string;
  title: string;
  description: string;
  examples: string[];
  images: string[];
}

export function About() {
  const t = useTranslations('about');
  const [selectedApproach, setSelectedApproach] = useState<string | null>(null);

  const highlights = [
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
      key: 'seo',
      logo: '/images/logos/eazel.jpeg',
      logoAlt: 'Eazel',
    },
  ];

  return (
    <section id='about' className='py-20 md:py-32'>
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
          <p className='text-xl text-muted-foreground'>{t('subtitle')}</p>
        </motion.div>

        {/* Highlight Cards - Bento Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className='h-full bento-item hover:border-primary/50'>
                <CardHeader>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center'>
                      <img
                        src={highlight.logo}
                        alt={highlight.logoAlt}
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <Badge variant='secondary'>
                      {t(`highlights.${highlight.key}.company`)}
                    </Badge>
                  </div>
                  <CardTitle className='text-xl'>
                    {t(`highlights.${highlight.key}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground mb-4'>
                    {t(`highlights.${highlight.key}.description`)}
                  </p>
                  <ul className='space-y-2'>
                    {(
                      t.raw(`highlights.${highlight.key}.metrics`) as string[]
                    ).map((metric: string, i: number) => (
                      <li
                        key={i}
                        className='flex items-start gap-2 text-sm text-muted-foreground'
                      >
                        <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0' />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Development Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className='mt-12'
        >
          <Card>
            <CardHeader>
              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-lg bg-point-10'>
                  <Zap className='h-5 w-5 text-point' />
                </div>
                <CardTitle className='text-xl'>{t('approach.title')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {(t.raw('approach.items') as ApproachItem[]).map(
                  (item, index) => (
                    <div
                      key={item.key}
                      className='p-4 rounded-lg bg-muted/50 border border-border cursor-pointer hover:border-primary/50 transition-colors group'
                      onClick={() => setSelectedApproach(item.key)}
                    >
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                          <div className='p-1.5 rounded-md bg-point-10'>
                            {index === 0 ? (
                              <TrendingUp className='h-4 w-4 text-point' />
                            ) : (
                              <BarChart3 className='h-4 w-4 text-point' />
                            )}
                          </div>
                          <h4 className='font-semibold group-hover:text-primary transition-colors'>
                            {item.title}
                          </h4>
                        </div>
                        <ArrowUpRight className='h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all' />
                      </div>
                      <p className='text-sm text-muted-foreground mb-3'>
                        {item.description}
                      </p>
                      <ul className='space-y-1.5'>
                        {item.examples.map((example: string, i: number) => (
                          <li
                            key={i}
                            className='flex items-start gap-2 text-sm text-muted-foreground'
                          >
                            <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-point shrink-0' />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Business Impact Modal */}
      <BusinessImpactModal
        itemKey={selectedApproach}
        open={!!selectedApproach}
        onOpenChange={(open) => !open && setSelectedApproach(null)}
      />
    </section>
  );
}

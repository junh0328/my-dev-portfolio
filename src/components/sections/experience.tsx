"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase } from "lucide-react";

export function Experience() {
  const t = useTranslations("experience");

  const companies = [
    {
      key: "dnsever",
      logo: "/images/logos/dns_ever_logo.png",
      logoAlt: "D&S Ever",
      positions: ["dev", "p2p", "spot"],
    },
    {
      key: "eazel",
      logo: "/images/logos/eazel.jpeg",
      logoAlt: "Eazel",
      positions: ["web2", "renewal", "web1"],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{t("years")}</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {companies.map((company, companyIndex) => (
            <motion.div
              key={company.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: companyIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                {/* Company Header */}
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={company.logoAlt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {t(`companies.${company.key}.name`)}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {t(`companies.${company.key}.type`)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{t(`companies.${company.key}.period`)}</span>
                      <Badge variant="secondary">
                        {t(`companies.${company.key}.duration`)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                {/* Positions */}
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {company.positions.map((position, posIndex) => (
                      <div
                        key={position}
                        className="relative pl-6 border-l-2 border-border"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                        <div className="mb-2">
                          <h4 className="font-semibold">
                            {t(
                              `companies.${company.key}.positions.${position}.team`
                            )}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t(
                              `companies.${company.key}.positions.${position}.period`
                            )}
                          </p>
                        </div>

                        <ul className="space-y-2">
                          {(
                            t.raw(
                              `companies.${company.key}.positions.${position}.projects`
                            ) as string[]
                          ).map((project: string, i: number) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

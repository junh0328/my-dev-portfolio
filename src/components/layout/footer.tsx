"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";
import * as gtag from "@/lib/gtag";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/junh0328",
      label: "GitHub",
      gtagLabel: "github",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/%EC%A4%80%ED%9D%AC-%EC%9D%B4-23176a214/",
      label: "LinkedIn",
      gtagLabel: "linkedin",
    },
    {
      icon: Mail,
      href: "mailto:junh0328@naver.com",
      label: "Email",
      gtagLabel: "email",
    },
  ];

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {t("copyright")}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
                onClick={() =>
                  gtag.event({
                    action: "click",
                    category: "link",
                    label: link.gtagLabel,
                  })
                }
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Built With */}
          <p className="text-sm text-muted-foreground">{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/diyorbek-baxtiyorovich", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/diyorbek-ilxomiddinov", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://t.me/I_Dior", label: "Telegram" },
  { icon: Mail, href: "mailto:ilxomiddinovdiyorbek1@gmail.com", label: "Email" },
];

const footerLinks = [
  { href: "#home", label: "Bosh sahifa" },
  { href: "#about", label: "Men haqimda" },
  { href: "#skills", label: "Ko‘nikmalar" },
  { href: "#projects", label: "Loyihalar" },
  { href: "#experience", label: "Tajriba" },
  { href: "#contact", label: "Bog‘lanish" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold">
              <span className="gradient-text">Ilxomiddinov Diyorbek</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} Ilxomiddinov Diyorbek.  <br />
              Ishonchli va sifatli web-yechimlar.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full bg-transparent"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

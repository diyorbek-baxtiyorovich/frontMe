"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Img from "@/assets/img.jpg";

const roles = [
  "Frontend dasturchi",
  "Zamonaviy web-interfeyslar mutaxassisi",
  "Yuqori unumdor UI tizimlari ishlab chiquvchi",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(
            currentRole.slice(0, displayText.length + 1)
          );
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Orqa fon animatsiyasi */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Matn qismi */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Assalomu alaykum, xush kelibsiz!
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Salom, men
                <span className="gradient-text">
                  {" "}
                  Ilxomiddinov Diyorbek
                </span>
              </h1>

              <div className="h-12 flex items-center">
                <span className="text-xl sm:text-2xl text-muted-foreground">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Men zamonaviy frontend texnologiyalar asosida tezkor,
                xavfsiz va barqaror web-ilovalar hamda CRM tizimlarini
                ishlab chiqaman. Har bir loyihada sifat, aniqlik va
                foydalanuvchi tajribasini ustuvor deb bilaman.
              </p>
            </div>

            {/* Tugmalar */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Bog‘lanish</a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="#projects">Loyihalarni ko‘rish</a>
              </Button>
            </div>

            {/* Ijtimoiy tarmoqlar */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/diyorbek-baxtiyorovich"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="https://linkedin.com/in/diyorbek-ilxomiddinov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a
                href="mailto:ilxomiddinovdiyorbek1@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Rasm qismi */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 to-cyan-500/30 blur-2xl absolute -inset-4" />

              <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-primary to-cyan-500 p-1">
                <div className="relative w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <Image
                    src={Img}
                    alt="Diyorbek"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pastga o‘tish belgisi */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
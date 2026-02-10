"use client";

import { useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import adminkaImg from "@/assets/adminka.png";
import appImg from "@/assets/app.png";
import hospitalImg from "@/assets/hospital.png";
import infoDocImg from "@/assets/infoDoc.png";

const projects = [
  {
    title: "CRM Web Ilova",
    description:
      "Agentlar va xodimlar uchun mo‘ljallangan, ma’lumotlarni boshqarish va nazorat qilish imkonini beruvchi zamonaviy CRM web-ilova.",
    image: appImg,
    technologies: ["Vue 3", "Vuetify", "TypeScript", "Axios", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "CRM Boshqaruv Tizimi",
    description:
      "Xodimlar, agentlar va mijozlar bilan ishlash uchun yaratilgan to‘liq CRM tizimi. KPI, hisobotlar, statistika va rollar orqali samarali boshqaruvni ta’minlaydi.",
    image: adminkaImg,
    technologies: ["Vue.js", "Vuetify", "REST API", "JWT", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Shifoxona Boshqaruv Tizimi",
    description:
      "Shifoxona faoliyatini avtomatlashtirish uchun ishlab chiqilgan tizim. Bemorlar, qabul vaqtlari, shifokorlar va xodimlar ma’lumotlarini boshqaradi.",
    image: hospitalImg,
    technologies: ["Vue 3", "Vuetify", "REST API", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Ichki CRM va Admin Panel",
    description:
      "Kompaniya ichki tizimi uchun yaratilgan admin panel. Ma’lumotlarni tahlil qilish, hisobotlar va monitoring imkoniyatlarini taqdim etadi.",
    image: infoDocImg,
    technologies: ["Vue.js", "Tailwind CSS", "REST API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projects
    : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Sarlavha */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Mening loyihalarim
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Tanlangan ishlarim
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quyida men ishtirok etgan va ishlab chiqqan muhim loyihalarim
            keltirilgan. Har bir loyiha orqali tajribamni oshirib,
            professional darajamni rivojlantirdim.
          </p>
        </div>

        {/* Loyihalar */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, idx) => (
            <Card
              key={idx}
              className="glass overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* Rasm */}
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={idx < 2}
                />

                {/* Hover tugmalar */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>

                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Kod
                    </a>
                  </Button>
                </div>
              </div>

              {/* Kontent */}
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <Badge
                      key={techIdx}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Barchasini ko‘rish */}
        {!showAll && projects.length > 3 && (
          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => setShowAll(true)}>
              Barcha loyihalarni ko‘rish
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
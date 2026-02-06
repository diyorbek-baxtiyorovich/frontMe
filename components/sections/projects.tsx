"use client";

import { useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import adminkaImg from "@/assets/adminka.png"
import appImg from "@/assets/app.png"
import hospitalImg from "@/assets/hospital.png"
import infoDocImg from "@/assets/infoDoc.png"


const projects = [
  // {
  //   title: "E-Commerce Web Platform",
  //   description:
  //       "Online savdo platformasi bo‘lib, mahsulotlarni boshqarish, savatcha tizimi, buyurtmalar va foydalanuvchilar bilan ishlash funksiyalarini o‘z ichiga oladi.",
  //   image: "/projects/ecommerce.jpg",
  //   technologies: ["Vue.js", "Nuxt.js", "Pinia", "Tailwind CSS", "REST API"],
  //   liveUrl: "https://telegram-vue-app.vercel.app/",
  //   githubUrl: "#",
  //   featured: true,
  // },
  {
    title: "CRM web app",
    description:
        "CRM tomonidan bajarailadigan agentlar foydalanish uchun web interfaceli web app qurilgan",
    image: appImg,
    technologies: ["Vue 3", "vuetify", 'typescript', "Axios", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "CRM Management System",
    description:
        "Xodimlar, agentlar va mijozlar bilan ishlash uchun mo‘ljallangan CRM tizimi. KPI, hisobotlar, statistika va rollar orqali boshqaruvni ta’minlaydi.",
    image: adminkaImg,
    technologies: ["Vue.js", "Vuetify", "REST API", "JWT", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Hospital Management System",
    description:
        "Shifoxona uchun ishlab chiqilgan boshqaruv tizimi. Bemorlar ro‘yxati, qabul vaqtlari, shifokorlar va xodimlar ma’lumotlarini boshqaradi.",
    image: hospitalImg,
    technologies: ["Vue 3", "Vuetify", "REST API", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Internal CRM & Admin Dashboard",
    description:
        "Kompaniya ichki tizimi uchun yaratilgan admin panel. Ma’lumotlarni tahlil qilish, hisobotlar bilan ishlash imkonini beradi.",
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
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            My big work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Tanlangan loyihala
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bu yerda men ishlagan ayrim loyihalarim keltirilgan. Har biri menga yangi tajriba va bilimlar berdi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, idx) => (
            <Card
              key={idx}
              className="glass overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden rounded-t-lg">

                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={idx < 2}
                />

                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="sm" asChild>
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>

                  <Button size="sm" variant="outline" asChild>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>

              </div>
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

        {!showAll && projects.length > 3 && (
          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => setShowAll(true)}>
              View All Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

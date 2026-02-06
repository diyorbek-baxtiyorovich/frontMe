"use client";

import { useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with product management, cart functionality, and secure payment integration.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Telegram Web App",
    description:
      "Mini app built for Telegram with real-time messaging, notifications, and seamless mobile experience.",
    image: "/projects/telegram.jpg",
    technologies: ["Vue 3", "Telegram API", "Node.js", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "CRM System",
    description:
      "Customer relationship management system with lead tracking, analytics dashboard, and team collaboration features.",
    image: "/projects/crm.jpg",
    technologies: ["React", "Redux", "Express", "MongoDB", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Hospital Management System",
    description:
      "Healthcare management solution for patient records, appointments, and medical staff coordination.",
    image: "/projects/hospital.jpg",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Admin Dashboard",
    description:
      "Modern admin panel with data visualization, user management, and real-time analytics.",
    image: "/projects/dashboard.jpg",
    technologies: ["React", "Recharts", "Tailwind", "REST API"],
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
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I{"'"}ve worked on. Each one presented
            unique challenges and learning opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, idx) => (
            <Card
              key={idx}
              className="glass overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-cyan-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/30">
                    {project.title.charAt(0)}
                  </span>
                </div>
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

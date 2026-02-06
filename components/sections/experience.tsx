"use client";

import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    type: "work",
    title: "Senior Frontend Developer",
    company: "Tech Company Inc.",
    period: "2023 - Present",
    description:
      "Leading frontend development for enterprise web applications. Implementing modern React patterns and improving team productivity through code reviews and mentorship.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    company: "Startup Labs",
    period: "2021 - 2023",
    description:
      "Built and maintained multiple web applications from scratch. Collaborated with designers and product managers to deliver user-focused solutions.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    type: "work",
    title: "Junior Web Developer",
    company: "Digital Agency",
    period: "2020 - 2021",
    description:
      "Developed responsive websites and web applications for various clients. Gained experience in Agile methodologies and client communication.",
    technologies: ["JavaScript", "React", "CSS", "REST APIs"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "State University",
    period: "2016 - 2020",
    description:
      "Focused on Software Engineering and Web Development. Graduated with honors and completed thesis on modern web application architecture.",
    technologies: ["Algorithms", "Data Structures", "Software Design"],
  },
  {
    type: "freelance",
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2019 - 2020",
    description:
      "Provided web development services to small businesses and startups. Built custom solutions tailored to client needs.",
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey, from education to my current
            role.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 translate-y-2" />

                {/* Content */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-xl hover:border-primary/50 transition-colors">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <Badge
                          key={techIdx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

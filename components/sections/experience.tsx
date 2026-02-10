"use client";

import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    type: "course",
    title: "Frontend dasturlash (onlayn kurs)",
    company: "PDP Academy",
    period: "04/2021 – 11/2021",
    description:
      "HTML, CSS, JavaScript, moslashuvchan dizayn va API bilan ishlashni o‘rgandim. Amaliy loyihalar orqali tajribamni oshirdim.",
    technologies: ["HTML", "CSS", "JavaScript", "API", "Moslashuvchan dizayn"],
  },
  {
    type: "course",
    title: "Frontend dasturchi (kurs)",
    company: "ITEG IT Academy",
    period: "02/2022 – 05/2022",
    description:
      "Zamonaviy web-texnologiyalar, frameworklar va foydalanuvchi interfeyslarini samarali optimallashtirishni o‘rgandim.",
    technologies: ["Vue.js", "Frontend", "UI/UX", "Web dasturlash"],
  },
  {
    type: "work",
    title: "Frontend dasturchi (stajyor)",
    company: "IT Academy",
    period: "12/2022 – 2024",
    description:
      "HTML, CSS, JavaScript va React.js yordamida web-interfeyslar yaratdim. Moslashuvchan va interaktiv dizaynlar ustida ishladim.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    type: "education",
    title: "Kompyuter fanlari bakalavri (Dasturiy injiniring)",
    company: "Sharof Rashidov nomidagi Samarqand davlat universiteti",
    period: "2020 – 2024",
    description:
      "Dasturiy ta’minot arxitekturasi, dasturlash asoslari va zamonaviy IT texnologiyalarini o‘rgandim. Web dasturlash va ma’lumotlar bazalari bilan ishlash bo‘yicha amaliy tajriba orttirdim.",
    technologies: [
      "Dasturlash",
      "Web dasturlash",
      "Ma’lumotlar bazasi",
      "IT asoslari",
    ],
  },
  {
  type: "work",
  title: "Frontend dasturchi",
  company: "Mikrokreditbank",
  period: "06/2025 – hozirgi vaqtgacha",
  description:
    "Bankning ichki CRM tizimlari va web-ilovalarini ishlab chiqish, rivojlantirish hamda optimallashtirish bilan shug‘ullanaman. Foydalanuvchilar uchun qulay, xavfsiz va barqaror interfeyslar yarataman, mavjud funksionalliklarni takomillashtiraman. Backend jamoa bilan hamkorlikda REST API orqali ma’lumotlar almashinuvi ustida ishlayman hamda ichki tizimlar bo‘yicha texnik qo‘llab-quvvatlash ko‘rsataman.",
  technologies: [
    "Vue.js",
    "CRM",
    "REST API",
    "Tailwind CSS",
    "Git",
    "GitLab",
  ],
},
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Mening faoliyat yo‘lim
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Tajriba va ta’lim
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ta’lim olish davrimdan boshlab hozirgi faoliyatimgacha bo‘lgan kasbiy yo‘lim.
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

                    <h3 className="text-xl font-semibold mt-2">
                      {exp.title}
                    </h3>

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

                {/* Empty space */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
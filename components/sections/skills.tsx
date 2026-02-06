"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js", level: 90 },
      { name: "Vue.js", level: 90 },
      { name: "Nuxt.js", level: 85 },
      { name: "Vuetify", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    title: "API Integration",
    skills: [
      { name: "REST API Integration", level: 90 },
      { name: "Axios / Fetch", level: 90 },
      { name: "API Documentation (Swagger)", level: 80 },
      { name: "Authentication (JWT / Token)", level: 80 },
      { name: "Working with Backend Team", level: 85 },
      { name: "Error Handling & Debugging", level: 85 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Vite / Webpack", level: 80 },
      { name: "Figma (UI to Code)", level: 80 },
      { name: "Linux / Windows", level: 85 },
    ],
  },
];

function SkillBar({
  name,
  level,
  isVisible,
}: {
  name: string;
  level: number;
  isVisible: boolean;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-cyan-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ishlaydigan Texnologiyalarim
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Men zamonaviy, qulay va sifatli foydalanuvchi interfeyslarini yaratish,
            dizaynni mukammal kodga aylantirish hamda web-ilovalarni optimallashtirish
            bo‘yicha tajribaga egaman.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="glass hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skillIdx}
                    name={skill.name}
                    level={skill.level}
                    isVisible={isVisible}
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

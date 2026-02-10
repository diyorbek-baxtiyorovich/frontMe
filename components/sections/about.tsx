"use client";

import { Download, GraduationCap, Briefcase, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: GraduationCap,
    title: "Ta’lim",
    description: "Dasturiy injiniring yo‘nalishida kompyuter fanlari bo‘yicha tahsil olganman",
  },
  {
    icon: Briefcase,
    title: "Tajriba",
    description: "2 yildan ortiq web-ilovalar va raqamli mahsulotlar yaratish tajribasiga egaman",
  },
  {
    icon: Target,
    title: "Maqsadlarim",
    description: "Foydalanuvchilar uchun qulay, tezkor va sifatli web-ilovalar yaratish",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Men haqimda
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
                Zamonaviy va qulay web-ilovalar yaratishga ixtisoslashgan frontend dasturchiman
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Men zamonaviy va qulay web-interfeyslar yaratishga ixtisoslashgan frontend
                dasturchiman. CRM tizimlari, ichki platformalar va web-ilovalar uchun
                foydalanuvchiga qulay, tezkor va sifatli interfeyslar ishlab chiqaman.
              </p>

              <p>
                Hozirda moliyaviy tashkilotning IT bo‘limida faoliyat yuritaman. Ushbu
                tashkilotda web-interfeyslarni yaratish, rivojlantirish va
                optimallashtirish bilan shug‘ullanaman. Loyihalarda zamonaviy frontend
                texnologiyalaridan samarali foydalanaman.
              </p>

              <p>
                Toza va tushunarli kod yozishga, yangi texnologiyalarni o‘rganishga hamda
                bilimlarimni doimiy ravishda oshirib borishga katta e’tibor beraman.
                Bo‘sh vaqtimda yangi frameworklarni o‘rganib, tajribamni boyitaman.
              </p>
            </div>

            <a href="/CVme.pdf" download>
              <Button size="lg" className="mt-4">
                <Download className="mr-2 h-4 w-4" />
                Rezyumeni yuklab olish
              </Button>
            </a>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass hover:border-primary/50 transition-colors group"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
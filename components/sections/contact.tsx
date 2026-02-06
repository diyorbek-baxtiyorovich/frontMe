"use client";

import React from "react"

import { useState } from "react";
import { Mail, Send, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ilxomiddinovdiyorbek1@gmail.com",
    href: "mailto:ilxomiddinovdiyorbek1@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@ilxomiddinov-diyorbek",
    href: "https://github.com/diyorbek-baxtiyorovich",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Ilxomiddinov Diyorbek",
    href: "https://linkedin.com/in/diyorbek-ilxomiddinov",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@I_Dior",
    href: "https://t.me/I_Dior",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
      <section id="contact" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Bog‘lanish
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Keling, Birgalikda Ishlaymiz
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Agar loyihangiz bo‘lsa yoki hamkorlik haqida gaplashmoqchi bo‘lsangiz,
              menga yozing. Sizdan xabar olishdan mamnun bo‘laman.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass">
              <CardContent className="p-8">
                {submitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                        <Send className="h-8 w-8" />
                      </div>

                      <h3 className="text-xl font-semibold">Xabar Yuborildi!</h3>

                      <p className="text-muted-foreground">
                        Murojaatingiz uchun rahmat. Tez orada siz bilan bog‘lanaman.
                      </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Ism</Label>
                          <Input
                              id="name"
                              placeholder="Ismingiz"
                              value={formData.name}
                              onChange={(e) =>
                                  setFormData({ ...formData, name: e.target.value })
                              }
                              className={errors.name ? "border-destructive" : ""}
                          />
                          {errors.name && (
                              <p className="text-sm text-destructive">{errors.name}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                              id="email"
                              type="email"
                              placeholder="email@example.com"
                              value={formData.email}
                              onChange={(e) =>
                                  setFormData({ ...formData, email: e.target.value })
                              }
                              className={errors.email ? "border-destructive" : ""}
                          />
                          {errors.email && (
                              <p className="text-sm text-destructive">
                                {errors.email}
                              </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Mavzu</Label>
                        <Input
                            id="subject"
                            placeholder="Loyiha haqida"
                            value={formData.subject}
                            onChange={(e) =>
                                setFormData({ ...formData, subject: e.target.value })
                            }
                            className={errors.subject ? "border-destructive" : ""}
                        />
                        {errors.subject && (
                            <p className="text-sm text-destructive">
                              {errors.subject}
                            </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Xabar</Label>
                        <Textarea
                            id="message"
                            placeholder="Loyihangiz haqida yozing..."
                            rows={5}
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                            }
                            className={errors.message ? "border-destructive" : ""}
                        />
                        {errors.message && (
                            <p className="text-sm text-destructive">
                              {errors.message}
                            </p>
                        )}
                      </div>

                      <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                            "Yuborilmoqda..."
                        ) : (
                            <>
                              Xabar Yuborish
                              <Send className="ml-2 h-4 w-4" />
                            </>
                        )}
                      </Button>
                    </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Aloqa Ma’lumotlari</h3>
                <p className="text-muted-foreground">
                  Quyidagi kanallar orqali bemalol bog‘lanishingiz mumkin.
                  Odatda 24–48 soat ichida javob beraman.
                </p>
              </div>

              <div className="space-y-4">
                {socialLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl glass hover:border-primary/50 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <link.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{link.label}</p>
                        <p className="text-sm text-muted-foreground">{link.value}</p>
                      </div>
                    </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

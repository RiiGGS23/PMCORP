"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Heart, Users, Award, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("About Us", "Sobre Nosotros")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-warm-white/70">
            {t(
              "Dedicated to compassionate, bilingual healthcare for the Coachella Valley community.",
              "Dedicados a la atencion medica bilingue y compasiva para la comunidad del Valle de Coachella."
            )}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20Banner-LIxmb6nzHRtV7xX7ztmNNUjfEDBeNy.jpg"
              alt={t("Paredes Medical team", "Equipo de Paredes Medical")}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
              {t("Our Mission", "Nuestra Mision")}
            </p>
            <h2 className="text-balance text-3xl font-bold text-brand-navy md:text-4xl">
              {t(
                "Healthcare That Feels Like Family",
                "Atencion Medica Que Se Siente Como Familia"
              )}
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "At Paredes Medical Corporation, our mission is simple: to provide the highest quality healthcare in a warm, welcoming, and bilingual environment. We believe every patient deserves to be heard, respected, and treated with genuine compassion.",
                "En Paredes Medical Corporation, nuestra mision es simple: brindar la mas alta calidad de atencion medica en un ambiente calido, acogedor y bilingue. Creemos que cada paciente merece ser escuchado, respetado y tratado con compasion genuina."
              )}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Founded by Dr. Gustavo A. Paredes, MD, our practice was built to serve the diverse families of the Coachella Valley. Many of our team members are from the local community, and we take pride in offering care that is culturally sensitive and language-accessible.",
                "Fundada por el Dr. Gustavo A. Paredes, MD, nuestra practica fue construida para servir a las diversas familias del Valle de Coachella. Muchos de nuestros miembros del equipo son de la comunidad local, y nos enorgullecemos de ofrecer atencion que es culturalmente sensible y accesible en idioma."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">
              {t("Our Core Values", "Nuestros Valores")}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Heart,
                enTitle: "Compassion First",
                esTitle: "Compasion Primero",
                enDesc:
                  "We treat every patient with the kindness and respect they deserve, because healthcare is personal.",
                esDesc:
                  "Tratamos a cada paciente con la amabilidad y el respeto que merece, porque la atencion medica es personal.",
              },
              {
                icon: Users,
                enTitle: "Community-Rooted",
                esTitle: "Arraigados en la Comunidad",
                enDesc:
                  "We are proud to serve the community that raised us. Our doors are open to families of all backgrounds.",
                esDesc:
                  "Estamos orgullosos de servir a la comunidad que nos crio. Nuestras puertas estan abiertas para familias de todos los origenes.",
              },
              {
                icon: Award,
                enTitle: "Excellence in Care",
                esTitle: "Excelencia en la Atencion",
                enDesc:
                  "Board-certified and continuously advancing, we bring the latest in medicine to your neighborhood.",
                esDesc:
                  "Certificado por la junta y avanzando continuamente, traemos lo ultimo en medicina a su vecindario.",
              },
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center gap-4 rounded-xl bg-card p-8 text-center shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal/10">
                  <value.icon className="h-7 w-7 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">{t(value.enTitle, value.esTitle)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(value.enDesc, value.esDesc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center text-accent-foreground">
          <h2 className="text-3xl font-bold">{t("Ready to Join Our Family?", "Listo para Unirse a Nuestra Familia?")}</h2>
          <p className="max-w-xl text-accent-foreground/80">
            {t(
              "We are accepting new patients. Call us today to schedule your first visit.",
              "Estamos aceptando nuevos pacientes. Llamenos hoy para agendar su primera visita."
            )}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
              <a href="tel:7609724704">
                <Phone className="mr-2 h-5 w-5" />
                (760) 972-4704
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
              <Link href="/staff">
                {t("Meet Our Staff", "Conozca a Nuestro Equipo")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

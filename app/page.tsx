"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Heart,
  Stethoscope,
  ShieldCheck,
  Users,
  Award,
  Activity,
  ClipboardList,
  ArrowRight,
  MapPin,
  Clock,
  Instagram,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,168,150,0.15),transparent_60%)]" />
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:py-20 lg:py-24">
          <div className="relative z-10 flex flex-1 flex-col gap-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 self-center rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-1.5 text-sm text-brand-teal md:self-start">
              <Award className="h-4 w-4" />
              {t("2025 Coachella Valley New Business of the Year", "Negocio Nuevo del Ano 2025 del Valle de Coachella")}
            </div>
            <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-brand-warm-white md:text-6xl lg:text-7xl">
              {t("PAREDES MEDICAL CORPORATION", "PAREDES MEDICAL CORPORATION")}
            </h1>
            <h2 className="text-balance text-2xl font-semibold text-brand-teal md:text-3xl">
              {t("Care and Compassion You Deserve", "Cuidado y Compasion Que Usted Merece")}
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-brand-warm-white/70">
              {t(
                "Bilingual family medicine for the Coachella Valley. Dr. Gustavo Paredes and our caring team are here for your whole family.",
                "Medicina familiar bilingue para el Valle de Coachella. El Dr. Gustavo Paredes y nuestro equipo estan aqui para toda su familia."
              )}
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <Button
                asChild
                size="lg"
                className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90"
              >
                <a href={SITE.phoneHref}>
                  <Phone className="mr-2 h-5 w-5" />
                  {t("Call to Schedule Appointment", "Llamar para Agendar Cita")}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-brand-warm-white/30 bg-transparent text-brand-warm-white hover:bg-brand-warm-white/10"
              >
                <Link href="/about">
                  {t("Learn More", "Conocer Mas")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <a
              href={SITE.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 text-2xl font-bold text-brand-warm-white md:justify-start"
            >
              <Phone className="h-6 w-6 text-brand-teal" />
              (760) 972-4704
            </a>
          </div>
          <div className="relative flex-1">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20Banner-LIxmb6nzHRtV7xX7ztmNNUjfEDBeNy.jpg"
                alt="Dr. Gustavo Paredes and the Paredes Medical team"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-around gap-6 px-4 py-8 text-center text-accent-foreground sm:flex-row sm:gap-4">
          {[
            { icon: ShieldCheck, en: "30+ Years Experience", es: "30+ Anos de Experiencia" },
            { icon: Stethoscope, en: "Board-Certified", es: "Certificado por la Junta" },
            { icon: Users, en: "Bilingual English / Spanish", es: "Bilingue Ingles / Espanol" },
            { icon: Heart, en: "Family-Centered Care", es: "Atencion Centrada en la Familia" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <stat.icon className="h-7 w-7 shrink-0" />
              <span className="text-sm font-bold uppercase tracking-wide">{t(stat.en, stat.es)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20">
          <div className="flex flex-1 gap-4">
            <div className="relative aspect-[3/4] w-1/2 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doctor%20with%20elderly%20female.png-mcdYejRgHD8meVgnbGPNCkvW6GOlzm.jpeg"
                alt={t(
                  "Dr. Paredes examining a patient",
                  "Dr. Paredes examinando a una paciente"
                )}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] w-1/2 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doctor%20with%20elderly%20male.png-yIKvdhQAleua8etVQDeqtgaE6tUqQy.jpeg"
                alt={t(
                  "Dr. Paredes with a patient",
                  "Dr. Paredes con un paciente"
                )}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
              {t("About Our Practice", "Sobre Nuestra Practica")}
            </p>
            <h2 className="text-balance text-3xl font-bold text-brand-navy md:text-4xl">
              {t(
                "Your Family's Health Is Our Mission",
                "La Salud de Su Familia Es Nuestra Mision"
              )}
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Welcome to Paredes Medical, the medical office of Dr. Gustavo Paredes, where we believe that every patient deserves exceptional healthcare. Our mission is to provide comprehensive medical services with the genuine care and compassion every patient deserves, as though they were members of our own family.",
                "Bienvenido a Paredes Medical, el consultorio medico del Dr. Gustavo Paredes, donde creemos que cada paciente merece una atencion medica excepcional. Nuestra mision es brindar servicios medicos integrales con el cuidado y la compasion genuinos que cada paciente merece, como si fueran miembros de nuestra propia familia."
              )}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "We are proud to offer our services in both English and Spanish, ensuring clear communication and understanding for all our patients. Dr. Paredes has over 30 years of experience in the medical field and is a board-certified Family Medicine physician.",
                "Nos enorgullece ofrecer nuestros servicios en ingles y espanol, asegurando una comunicacion clara y comprension para todos nuestros pacientes. El Dr. Paredes tiene mas de 30 anos de experiencia en el campo de la medicina y es medico certificado en Medicina Familiar."
              )}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-brand-navy text-primary-foreground hover:bg-brand-navy/90">
                <Link href="/about">
                  {t("More About Us", "Mas Sobre Nosotros")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy/5">
                <Link href="/doctor">
                  {t("Meet Dr. Paredes", "Conozca al Dr. Paredes")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-teal">
              {t("What We Offer", "Lo Que Ofrecemos")}
            </p>
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">
              {t("Our Services", "Nuestros Servicios")}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Activity, en: "Routine Check-Ups & Preventive Care", es: "Chequeos de Rutina y Atencion Preventiva" },
              { icon: Stethoscope, en: "Specialized Treatments", es: "Tratamientos Especializados" },
              { icon: Heart, en: "Chronic Disease Management", es: "Manejo de Enfermedades Cronicas" },
              { icon: ClipboardList, en: "Diabetes & High Blood Pressure", es: "Diabetes y Presion Arterial Alta" },
              { icon: Activity, en: "Asthma & Weight Management", es: "Asma y Control de Peso" },
              { icon: ShieldCheck, en: "Kidney Issues & Cholesterol Problems", es: "Problemas de los Rinones y del Colesterol" },
            ].map((service, i) => (
              <Card key={i} className="border-0 bg-card shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10">
                    <service.icon className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">{t(service.en, service.es)}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild className="bg-brand-navy text-primary-foreground hover:bg-brand-navy/90">
              <Link href="/services">
                {t("View All Services", "Ver Todos los Servicios")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Award Section */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="flex flex-col items-center gap-8 rounded-2xl bg-brand-navy p-8 text-center md:p-12">
            <Award className="h-16 w-16 text-brand-teal" />
            <h2 className="text-3xl font-bold text-brand-warm-white md:text-4xl">
              {t(
                "2025 Coachella Valley New Business of the Year",
                "Negocio Nuevo del Ano 2025 del Valle de Coachella"
              )}
            </h2>
            <p className="max-w-2xl leading-relaxed text-brand-warm-white/70">
              {t(
                "We are honored to be recognized by the Greater Coachella Valley Chamber of Commerce as the 2025 New Business of the Year. This award reflects our deep commitment to providing excellent, compassionate healthcare to the community we call home.",
                "Nos sentimos honrados de ser reconocidos por la Camara de Comercio del Gran Valle de Coachella como el Negocio Nuevo del Ano 2025. Este premio refleja nuestro profundo compromiso de brindar atencion medica excelente y compasiva a la comunidad que llamamos hogar."
              )}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90"
            >
              <a href={SITE.phoneHref}>
                <Phone className="mr-2 h-5 w-5" />
                {t("Call to Schedule Your Visit", "Llame para Agendar Su Visita")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials: intentionally removed. The previous quotes were invented.
          TODO(clinic): add real, consented patient reviews here (e.g., from Yelp) before publishing. */}

      {/* Instagram Feed Teaser */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <Instagram className="h-8 w-8 text-brand-red" />
            <h2 className="text-3xl font-bold text-brand-navy">
              {t("Follow Us on Instagram", "Siguenos en Instagram")}
            </h2>
            <p className="text-muted-foreground">
              @paredesmedical
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <a
                key={i}
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl bg-secondary"
              >
                <div className="flex h-full items-center justify-center text-muted-foreground transition-colors group-hover:text-brand-red">
                  <Instagram className="h-10 w-10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-brand-navy/70 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm font-semibold text-brand-warm-white">{t("View on Instagram", "Ver en Instagram")}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="border-brand-red text-brand-red hover:bg-brand-red/5"
            >
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-4 w-4" />
                {t("Follow @paredesmedical", "Seguir @paredesmedical")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Map + Info */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl shadow-md">
              <iframe
                src={SITE.mapsEmbed}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Paredes Medical Corporation location"
              />
            </div>
            <div className="flex flex-col justify-center gap-6">
              <h2 className="text-3xl font-bold text-brand-navy">
                {t("Visit Our Office", "Visite Nuestra Oficina")}
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
                  <div>
                    <p className="font-semibold text-brand-navy">
                      49201 Grapefruit Boulevard, Suite #3
                    </p>
                    <p className="text-muted-foreground">Coachella, CA 92236</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
                  <div>
                    <p className="font-semibold text-brand-navy">
                      {t("Monday - Friday", "Lunes - Viernes")}
                    </p>
                    <p className="text-muted-foreground">8:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
                  <div>
                    <a href={SITE.phoneHref} className="text-lg font-bold text-brand-navy hover:text-brand-teal">
                      (760) 972-4704
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90"
                >
                  <a href={SITE.phoneHref}>
                    <Phone className="mr-2 h-4 w-4" />
                    {t("Call to Schedule", "Llamar para Agendar")}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-brand-navy text-brand-navy hover:bg-brand-navy/5"
                >
                  <a
                    href={SITE.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    {t("Get Directions", "Obtener Direcciones")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

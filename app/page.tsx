"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Heart,
  Stethoscope,
  ShieldCheck,
  Users,
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
      {/* Hero Section: mobile-first. Photo stacks above text on phones/tablets so nothing
          overlaps Dr. Paredes' face; on large screens text sits left, photo right. */}
      <section className="bg-brand-navy">
        <div className="mx-auto grid max-w-7xl lg:min-h-[560px] lg:grid-cols-2">
          {/* Photo */}
          <div className="relative order-1 lg:order-2">
            <picture>
              <source
                type="image/webp"
                srcSet="/images/dr-paredes-hero-800.webp 800w, /images/dr-paredes-hero-1600.webp 1600w"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <img
                src="/images/dr-paredes-hero-800.webp"
                alt={t(
                  "Dr. Gustavo Paredes, MD, family medicine physician at Paredes Medical Corporation in Coachella, California",
                  "Dr. Gustavo Paredes, MD, medico de medicina familiar en Paredes Medical Corporation en Coachella, California"
                )}
                width={1600}
                height={1067}
                fetchPriority="high"
                className="block aspect-[3/2] h-auto w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:object-[62%_35%]"
              />
            </picture>
            {/* Desktop only: soft fade on the empty left edge of the photo (face is right of center) */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-brand-navy to-transparent lg:block"
              aria-hidden="true"
            />
          </div>

          {/* Text */}
          <div className="order-2 flex flex-col items-center gap-4 px-5 py-8 text-center sm:py-10 lg:order-1 lg:items-start lg:justify-center lg:px-10 lg:py-16 lg:text-left">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-brand-warm-white sm:text-5xl lg:text-6xl">
              Paredes Medical Corporation
            </h1>
            <p className="font-script text-3xl leading-snug text-brand-teal sm:text-4xl lg:text-5xl">
              {t("Care and Compassion You Deserve", "El Cuidado y la Compasion Que Usted Merece")}
            </p>
            <a
              id="hero-call"
              href={SITE.phoneHref}
              className="mt-2 inline-flex min-h-14 w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-brand-red px-6 text-xl font-bold text-white shadow-lg transition-colors hover:bg-brand-red/90 sm:w-auto"
            >
              <Phone className="h-6 w-6" />
              {t("Call", "Llame al")} {SITE.phoneDisplay}
            </a>
            {/* Homepage blurb: text from Diana's Nov 3 copy markup (webpage1 pp. 1-2). */}
            <div className="flex max-w-lg flex-col gap-3 text-base leading-relaxed text-brand-warm-white/80 sm:text-lg">
              <p>
                {t(
                  "At Paredes Medical Corporation, we believe good care begins with listening. Dr. Gustavo Paredes and our bilingual team take time to understand your concerns, explain your care, and help you make informed decisions about your health.",
                  "En Paredes Medical Corporation, creemos que una buena atención comienza por escuchar. El Dr. Gustavo Paredes y nuestro equipo bilingüe se toman el tiempo para conocer sus inquietudes, explicarle su atención y ayudarle a tomar decisiones informadas sobre su salud."
                )}
              </p>
              <p>
                {t(
                  "From preventive visits to managing ongoing conditions, we are here to build a lasting relationship with you - one grounded in trust, respect, and compassion.",
                  "Desde las visitas preventivas hasta el control de enfermedades crónicas, queremos establecer una relación duradera con usted, basada en la confianza, el respeto y la compasión."
                )}
              </p>
            </div>
            <a
              href="#award"
              className="inline-flex min-h-11 items-center gap-3 rounded-full border border-brand-warm-white/25 bg-brand-warm-white/5 py-1 pl-1 pr-4 text-sm font-semibold text-brand-warm-white transition-colors hover:bg-brand-warm-white/10"
            >
              <img
                src="/images/businessrate-best-of-2026-320.webp"
                alt=""
                width={28}
                height={35}
                className="h-9 w-auto rounded"
              />
              {t("Best of 2026 Award Winner · BusinessRate", "Premio: Best of 2026 Award Winner · BusinessRate")}
            </a>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <nav aria-label={t("Quick links", "Enlaces rapidos")} className="border-b border-border bg-card">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-5 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { icon: Phone, en: "Call Us", es: "Llamenos", href: SITE.phoneHref, external: false },
            { icon: Stethoscope, en: "Meet Our Doctor", es: "Nuestro Doctor", href: "/doctor", external: false },
            { icon: Users, en: "Our Staff", es: "Nuestro Equipo", href: "/staff", external: false },
            { icon: Heart, en: "Services", es: "Servicios", href: "/services", external: false },
            { icon: ShieldCheck, en: "Insurances", es: "Seguros", href: "/insurances", external: false },
            { icon: MapPin, en: "Directions", es: "Como Llegar", href: SITE.directionsHref, external: true },
          ].map((q) => (
            <li key={q.en}>
              <a
                href={q.href}
                {...(q.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-2 py-3 text-center text-base font-semibold text-brand-navy transition-colors hover:border-brand-teal hover:bg-brand-teal/10"
              >
                <q.icon className="h-6 w-6 text-brand-red" aria-hidden="true" />
                {t(q.en, q.es)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Stats Bar */}
      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-around gap-6 px-4 py-8 text-center text-accent-foreground sm:flex-row sm:gap-4">
          {[
            { icon: ShieldCheck, en: "30+ Years Experience", es: "30+ Anos de Experiencia" },
            { icon: Stethoscope, en: "Board-Certified", es: "Certificado por la Junta" },
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
                "Welcome to Paredes Medical Corporation, the medical office of Dr. Gustavo Paredes, where we believe that every patient deserves exceptional healthcare. Our mission is to provide comprehensive medical services with the genuine care and compassion every patient deserves, as though they were members of our own family.",
                "Bienvenido a Paredes Medical Corporation, el consultorio medico del Dr. Gustavo Paredes, donde creemos que cada paciente merece una atencion medica excepcional. Nuestra mision es brindar servicios medicos integrales con el cuidado y la compasion genuinos que cada paciente merece, como si fueran miembros de nuestra propia familia."
              )}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Dr. Paredes has over 30 years of experience in the medical field and is a board-certified Family Medicine physician.",
                "El Dr. Paredes tiene mas de 30 anos de experiencia en el campo de la medicina y es medico certificado en Medicina Familiar."
              )}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-brand-navy text-primary-foreground hover:bg-brand-navy/90">
                <Link href="/about">
                  {t("More About Us", "Mas Sobre Nosotros")}
                  <ArrowRight className="ml-2 h-4 w-4" />
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
              { icon: Activity, en: "Routine Visits & Preventive Care", es: "Consultas de Rutina y Atencion Preventiva" },
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

      {/* Award Section: wording limited to what is printed on the plaque */}
      <section id="award" className="scroll-mt-24 bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div className="flex flex-col items-center gap-8 rounded-2xl bg-brand-navy p-6 text-center sm:p-10 md:flex-row md:text-left">
            <picture className="shrink-0">
              <source type="image/webp" srcSet="/images/businessrate-best-of-2026-320.webp 320w, /images/businessrate-best-of-2026-640.webp 640w" sizes="(min-width: 768px) 280px, 240px" />
              <img
                src="/images/businessrate-best-of-2026-640.webp"
                alt={t(
                  "BusinessRate Best of 2026 Award Winner plaque (Benchmark) for Dr. Gustavo Paredes, MD, Family Practice Physician, Coachella, California, powered by Google Reviews",
                  "Placa del premio BusinessRate Best of 2026 Award Winner (Benchmark) para Dr. Gustavo Paredes, MD, Family Practice Physician, Coachella, California, Powered by Google Reviews"
                )}
                width={640}
                height={801}
                loading="lazy"
                className="h-auto w-60 rounded-lg shadow-2xl md:w-72"
              />
            </picture>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
                {t("Award", "Reconocimiento")}
              </p>
              <h2 className="text-3xl font-bold text-brand-warm-white md:text-4xl">
                Best of 2026 Award Winner
              </h2>
              <p className="text-lg text-brand-warm-white/80">BusinessRate (Benchmark)</p>
              <p className="leading-relaxed text-brand-warm-white/80">
                Dr. Gustavo Paredes, MD
                <br />
                Family Practice Physician
                <br />
                Coachella, California
              </p>
              <p className="text-sm text-brand-warm-white/60">Powered by Google Reviews</p>
              <a
                href={SITE.phoneHref}
                className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 self-center rounded-xl bg-brand-red px-6 text-lg font-bold text-white hover:bg-brand-red/90 md:self-start"
              >
                <Phone className="h-5 w-5" />
                {t("Call", "Llame al")} {SITE.phoneDisplay}
              </a>
            </div>
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
                    <a href={SITE.phoneHref} className="inline-flex min-h-11 items-center text-lg font-bold text-brand-navy hover:text-brand-teal">
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

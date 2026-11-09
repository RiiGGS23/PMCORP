"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Heart,
  Stethoscope,
  ShieldCheck,
  ClipboardList,
  ArrowRight,
  MapPin,
  Clock,
  Instagram,
  CheckCircle2,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { DohcAssistance } from "@/components/dohc-assistance"
import { InstagramCurated } from "@/components/instagram-curated"

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
                  "Dr. Gustavo Paredes, MD, médico de medicina familiar en Paredes Medical Corporation en Coachella, California"
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
            {/* Heading with the BusinessRate badge as a "sticker" beside it (Gustavo, Nov 9).
                Sizes chosen so the heading never collides with the badge at 390px or at lg. */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              <h1 className="min-w-0 text-balance text-[2rem] font-bold leading-tight tracking-tight text-brand-warm-white sm:text-5xl xl:text-6xl">
                Paredes Medical Corporation
              </h1>
              <a
                href="#award"
                className="shrink-0 rotate-6 rounded-md transition-transform hover:rotate-3 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal motion-reduce:transition-none"
              >
                <img
                  src="/images/businessrate-badge-260.webp"
                  srcSet="/images/businessrate-badge-160.webp 160w, /images/businessrate-badge-260.webp 260w"
                  sizes="(min-width: 1280px) 128px, (min-width: 1024px) 110px, (min-width: 640px) 96px, 76px"
                  alt={t("BusinessRate Best of 2026 Award Winner", "Ganador del premio Best of 2026 de BusinessRate")}
                  width={260}
                  height={231}
                  className="h-auto w-[76px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)] sm:w-24 lg:w-[110px] xl:w-32"
                />
              </a>
            </div>
            <p className="font-script text-3xl leading-snug text-brand-teal sm:text-4xl lg:text-5xl">
              {t("Care and Compassion You Deserve", "El Cuidado y la Compasión Que Usted Merece")}
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
          </div>
        </div>
      </section>

      {/* Quick links */}
      <nav aria-label={t("Quick links", "Enlaces rápidos")} className="border-b border-border bg-card">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-5 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { icon: Phone, en: "Call Us", es: "Llámenos", href: SITE.phoneHref, external: false },
            { icon: Stethoscope, en: "Meet Our Doctor", es: "Nuestro Doctor", href: "/doctor", external: false },
            { icon: ClipboardList, en: "Why Have a PCP?", es: "¿Por qué un PCP?", href: "/why-have-a-pcp", external: false },
            { icon: Heart, en: "Services", es: "Servicios", href: "/services", external: false },
            { icon: ShieldCheck, en: "Insurances", es: "Seguros", href: "/insurances", external: false },
            { icon: MapPin, en: "Directions", es: "Cómo llegar", href: SITE.directionsHref, external: true },
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
            { icon: ShieldCheck, en: "30+ Years Experience", es: "30+ Años de Experiencia" },
            { icon: Stethoscope, en: "Board-Certified", es: "Certificado por la Junta" },
            { icon: Heart, en: "Family-Centered Care", es: "Atención Centrada en la Familia" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <stat.icon className="h-7 w-7 shrink-0" />
              <span className="text-sm font-bold uppercase tracking-wide">{t(stat.en, stat.es)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Care for Today: homepage short blurb from Diana's draft (webpage1 pp. 1-2) */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
          <h2 className="text-balance text-3xl font-bold text-brand-navy md:text-4xl">
            {t("Care for Today. Support for the Years Ahead.", "Cuidamos su salud hoy y le acompañamos con el paso de los años")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("We help patients care for their health through:", "Le ayudamos a cuidar su salud mediante:")}
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {[
              { en: "Routine visits and preventive care.", es: "Consultas de rutina y atención preventiva." },
              {
                en: "Chronic disease management, such as diabetes, high blood pressure, and other ongoing conditions.",
                es: "Control de enfermedades crónicas, como la diabetes, la presión arterial alta y otras afecciones continuas.",
              },
              { en: "Care for common illnesses and health concerns.", es: "Atención de enfermedades comunes y otras inquietudes de salud." },
              { en: "Personalized care for older adults.", es: "Atención personalizada para adultos mayores." },
              {
                en: "Coordination with specialists and other healthcare professionals.",
                es: "Coordinación con especialistas y otros profesionales de la salud.",
              },
            ].map((item) => (
              <li key={item.en} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" aria-hidden="true" />
                <span className="text-foreground">{t(item.en, item.es)}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8 min-h-12 w-full bg-brand-navy text-primary-foreground hover:bg-brand-navy/90 sm:w-auto">
            <Link href="/services">
              {t("Explore Our Services", "Conozca nuestros servicios")}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Meet Dr. Paredes: short blurb. Homepage doctor CTA button intentionally NOT shown
          (Gustavo's explicit Nov 6 removal; Diana's highlighted "Get to Know Dr. Paredes"
          is an open conflict awaiting his decision). */}
      <section className="bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-14 md:flex-row md:py-20">
          <div className="flex w-full flex-1 gap-4">
            <div className="relative aspect-[3/4] w-1/2 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doctor%20with%20elderly%20female.png-mcdYejRgHD8meVgnbGPNCkvW6GOlzm.jpeg"
                alt={t("Dr. Paredes examining a patient", "El Dr. Paredes examinando a una paciente")}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] w-1/2 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doctor%20with%20elderly%20male.png-yIKvdhQAleua8etVQDeqtgaE6tUqQy.jpeg"
                alt={t("Dr. Paredes with a patient", "El Dr. Paredes con un paciente")}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">
              {t("Meet Dr. Paredes", "Conozca al Dr. Paredes")}
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Gustavo Paredes, M.D., is a family medicine physician with additional fellowship training in geriatrics. He values getting to know his patients, helping them understand their health, and caring for them with the kindness and respect he would want for his own family.",
                "El Dr. Gustavo Paredes es médico de medicina familiar con formación adicional en geriatría, el cuidado de la salud de los adultos mayores. Para él, es fundamental conocer a sus pacientes, ayudarles a comprender su salud y brindarles la amabilidad y el respeto que desearía para su propia familia."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Short blurbs linking to the full pages */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/about",
                titleEn: "About Us",
                titleEs: "Conózcanos",
                en: "At Paredes Medical Corporation, we want you to feel heard, respected, and comfortable asking questions.",
                es: "En Paredes Medical Corporation, queremos que usted se sienta escuchado, respetado y con la confianza de hacer preguntas.",
              },
              {
                href: "/why-have-a-pcp",
                titleEn: "Why Have a PCP?",
                titleEs: "¿Por qué tener un médico de cabecera?",
                en: "Having a primary care physician, or PCP, gives you a consistent place to turn for routine care, new concerns, and support with ongoing health conditions.",
                es: "Contar con un médico de atención primaria, también llamado PCP o médico de cabecera, le brinda un lugar de confianza al cual acudir para sus consultas de rutina, nuevas inquietudes y el control de enfermedades crónicas.",
              },
              {
                href: "/resources",
                titleEn: "Patient Resources",
                titleEs: "Recursos para pacientes",
                en: "We want you to feel informed and ready for your visit.",
                es: "Queremos que usted se sienta informado y preparado para su consulta.",
              },
              {
                href: "/contact",
                titleEn: "Contact & Location",
                titleEs: "Contacto y ubicación",
                en: "For appointments and questions about our office, please call.",
                es: "Para programar una cita o hacer preguntas sobre nuestra oficina, llámenos.",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-brand-teal"
              >
                <h3 className="text-lg font-bold text-brand-navy">{t(card.titleEn, card.titleEs)}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{t(card.en, card.es)}</p>
                <span className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-red">
                  {t(card.titleEn, card.titleEs)}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance blurb */}
      <section className="bg-brand-navy">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="text-balance text-3xl font-bold text-brand-warm-white">
            {t("Have Questions About Your Insurance?", "¿Tiene preguntas sobre su seguro médico?")}
          </h2>
          <p className="max-w-2xl text-brand-warm-white/80">
            {t(
              "Call our office for help checking whether we participate in your specific health plan and medical group.",
              "Llame a nuestra oficina para que le ayudemos a verificar si participamos en su plan de seguro y grupo médico específicos."
            )}
          </p>
          <Button asChild size="lg" className="mt-2 min-h-12 w-full bg-brand-red text-white hover:bg-brand-red/90 sm:w-auto">
            <Link href="/insurances">
              {t("View Insurance Information", "Consulte la información sobre seguros médicos")}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      {/* DOHC after-hours assistance (DOHC lines, clinic is not 24/7) */}
      <DohcAssistance id="after-hours" />

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

      {/* Instagram: office-approved posts only, official embed, curated (not an auto feed) */}
      <InstagramCurated />

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
                title={t("Paredes Medical Corporation location", "Ubicación de Paredes Medical Corporation")}
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
                    {t("Call to Schedule", "Llame para agendar")}
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
                    {t("Get Directions", "Cómo llegar")}
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

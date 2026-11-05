"use client"

import { Phone, Activity, Stethoscope, Heart, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Services as listed on paredesmedicalcorp.com (About Us and home page "Why have a PCP?").
const services = [
  {
    icon: Activity,
    enTitle: "Routine Visits & Preventive Care",
    esTitle: "Consultas de Rutina y Atencion Preventiva",
    enDesc: "Regular visits and annual wellness and prevention exams to assess your overall health and catch potential issues early.",
    esDesc: "Consultas regulares y examenes anuales de bienestar y prevencion para evaluar su salud general y detectar problemas a tiempo.",
  },
  {
    icon: Stethoscope,
    enTitle: "Specialized Treatments",
    esTitle: "Tratamientos Especializados",
    enDesc: "We have access to one of the largest networks of specialists in the Coachella Valley, and we work closely with them to manage your specific healthcare needs.",
    esDesc: "Tenemos acceso a una de las redes de especialistas mas grandes del Valle de Coachella, y trabajamos de cerca con ellos para atender sus necesidades de salud especificas.",
  },
  {
    icon: Heart,
    enTitle: "Chronic Disease Management",
    esTitle: "Manejo de Enfermedades Cronicas",
    enDesc: "Ongoing care for chronic conditions, with a personalized treatment plan developed with you.",
    esDesc: "Atencion continua para condiciones cronicas, con un plan de tratamiento personalizado desarrollado junto con usted.",
  },
]

const chronicConditions = [
  { en: "Diabetes", es: "Diabetes" },
  { en: "High blood pressure", es: "Presion arterial alta" },
  { en: "Asthma", es: "Asma" },
  { en: "Weight management", es: "Control de peso" },
  { en: "Kidney issues", es: "Problemas de los rinones" },
  { en: "Cholesterol problems", es: "Problemas de colesterol" },
]

const pcpRoles = [
  { en: "Advocating for your needs and providing guidance.", es: "Abogar por sus necesidades y brindarle orientacion." },
  { en: "Diagnosing and managing chronic conditions like diabetes and high blood pressure.", es: "Diagnosticar y manejar condiciones cronicas como la diabetes y la presion arterial alta." },
  { en: "Monitoring your health through regular visits.", es: "Vigilar su salud mediante consultas regulares." },
  { en: "Conducting annual wellness and prevention exams to assess your overall health and catch potential issues early.", es: "Realizar examenes anuales de bienestar y prevencion para evaluar su salud general y detectar problemas a tiempo." },
  { en: "Educating you on healthy lifestyle choices to prevent health issues.", es: "Educarle sobre habitos de vida saludables para prevenir problemas de salud." },
  { en: "Coordinating care with specialists, pharmacists and other healthcare providers.", es: "Coordinar su atencion con especialistas, farmaceuticos y otros proveedores de salud." },
]

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("Our Services", "Nuestros Servicios")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-warm-white/70">
            {t(
              "From routine visits and preventive care to specialized treatments and chronic disease management.",
              "Desde consultas de rutina y atencion preventiva hasta tratamientos especializados y manejo de enfermedades cronicas."
            )}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <Card key={i} className="border-0 shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-teal/10">
                    <service.icon className="h-6 w-6 text-brand-teal" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">{t(service.enTitle, service.esTitle)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t(service.enDesc, service.esDesc)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chronic conditions */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
          <h2 className="mb-8 text-center text-3xl font-bold text-brand-navy">
            {t("Chronic Conditions We Manage", "Condiciones Cronicas Que Manejamos")}
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chronicConditions.map((c) => (
              <li key={c.en} className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-teal" />
                <span className="font-semibold text-brand-navy">{t(c.en, c.es)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why have a PCP? */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand-teal">
            {t("Why Choose Us", "Por Que Elegirnos")}
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-brand-navy">
            {t("Why Have a PCP?", "Por Que Tener un Medico de Cabecera (PCP)?")}
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {t(
              "Having a Primary Care Provider (PCP) ensures you have a consistent point of contact for all your healthcare needs. Your PCP is your go-to for medical care and your entry point into the healthcare system. He plays a crucial role in managing your overall health by:",
              "Tener un Proveedor de Atencion Primaria (PCP) le asegura un punto de contacto constante para todas sus necesidades de salud. Su PCP es su referencia para la atencion medica y su punto de entrada al sistema de salud. Su PCP tiene un papel fundamental en el manejo de su salud general al:"
            )}
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {pcpRoles.map((r) => (
              <li key={r.en} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                <span className="text-muted-foreground">{t(r.en, r.es)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-semibold text-brand-navy">
            {t(
              "Don't forget to call your health insurance plan and select your PCP today and begin your journey to a healthier, happier you!",
              "No olvide llamar a su plan de seguro medico y seleccionar a su PCP hoy mismo para comenzar su camino hacia una vida mas sana y feliz!"
            )}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center text-accent-foreground">
          <h2 className="text-3xl font-bold">
            {t("Have a Question About Our Services?", "Tiene Alguna Pregunta Sobre Nuestros Servicios?")}
          </h2>
          <p className="max-w-xl text-accent-foreground/80">
            {t(
              "Call our office. We are happy to answer your questions and help you schedule an appointment.",
              "Llame a nuestra oficina. Con gusto respondemos sus preguntas y le ayudamos a agendar una cita."
            )}
          </p>
          <Button asChild size="lg" className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
            <a href={SITE.phoneHref}>
              <Phone className="mr-2 h-5 w-5" />
              (760) 972-4704
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

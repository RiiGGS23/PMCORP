"use client"

import { Phone, ShieldCheck, Heart, Stethoscope, Users, Network } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Copy from Diana's draft: Our Services EN (webpage2 p.6) / Nuestros servicios ES (webpage1 p.4),
// with "Corporation" added per her markup. The Spanish headline is Diana's draft text and still
// needs final confirmation (a different wording was relayed from the Nov 7 call).
const services = [
  {
    icon: ShieldCheck,
    enTitle: "Preventive Care",
    esTitle: "Atención preventiva",
    enDesc:
      "Routine visits give us an opportunity to review your health, discuss recommended screenings and vaccines, and identify steps that may help reduce future health risks.",
    esDesc:
      "Las consultas de rutina nos permiten revisar su salud, conversar sobre las pruebas de detección y vacunas recomendadas, e identificar medidas que pueden ayudar a reducir riesgos futuros.",
  },
  {
    icon: Heart,
    enTitle: "Management of Ongoing Conditions",
    esTitle: "Control de enfermedades crónicas",
    enDesc:
      "We help patients manage conditions such as diabetes, high blood pressure, high cholesterol, and asthma. Your care may include reviewing medications, monitoring your progress, and discussing practical changes to support your health.",
    esDesc:
      "Ayudamos a los pacientes a controlar enfermedades como la diabetes, la presión arterial alta, el colesterol alto y el asma. Su atención puede incluir la revisión de medicamentos, el seguimiento de su progreso y recomendaciones prácticas para cuidar su salud.",
  },
  {
    icon: Stethoscope,
    enTitle: "Common Illnesses and New Concerns",
    esTitle: "Enfermedades comunes y nuevas inquietudes",
    enDesc:
      "When a new health concern arises, our office can help you determine the next step. Call to discuss appointment availability.",
    esDesc:
      "Si presenta una nueva inquietud de salud, nuestra oficina puede ayudarle a determinar el siguiente paso. Llame para consultar la disponibilidad de citas.",
  },
  {
    icon: Users,
    enTitle: "Care for Older Adults",
    esTitle: "Atención para adultos mayores",
    enDesc:
      "We consider the needs that can come with aging, including medication management, changes in memory or mobility, and maintaining independence. When appropriate and with your permission, we involve family members or caregivers in your care.",
    esDesc:
      "Tomamos en cuenta las necesidades que pueden surgir con la edad, como el manejo de medicamentos, los cambios en la memoria o movilidad y la conservación de la independencia. Cuando corresponde y con su autorización, involucramos a familiares o cuidadores en su atención.",
  },
  {
    icon: Network,
    enTitle: "Coordination of Care",
    esTitle: "Coordinación de su atención",
    enDesc:
      "We work with specialists and other healthcare professionals to help coordinate your care. We also review recommendations and records from outside visits to better understand your overall health.",
    esDesc:
      "Colaboramos con especialistas y otros profesionales de la salud para ayudar a coordinar su atención. También revisamos recomendaciones y registros de consultas externas para comprender mejor su salud en general.",
  },
]

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
            {t("Our Services", "Nuestros servicios")}
          </p>
          <h1 className="mt-2 text-balance text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("Care That Starts with You", "Atención que comienza con usted")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-warm-white/80">
            {t(
              "Your health needs can change over time. At Paredes Medical Corporation, we provide primary care that supports prevention, addresses current concerns, and helps you manage ongoing conditions.",
              "Sus necesidades de salud pueden cambiar con el tiempo. En Paredes Medical Corporation, ofrecemos atención primaria enfocada en la prevención, la evaluación de sus inquietudes y el control de enfermedades crónicas."
            )}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.enTitle} className="border-0 shadow-sm">
                <CardContent className="flex flex-col gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-teal/10">
                    <service.icon className="h-6 w-6 text-brand-teal" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-bold text-brand-navy">{t(service.enTitle, service.esTitle)}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t(service.enDesc, service.esDesc)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center text-accent-foreground">
          <h2 className="text-3xl font-bold">{t("Questions About a Service?", "¿Tiene preguntas sobre algún servicio?")}</h2>
          <p className="max-w-xl text-accent-foreground/90">
            {t(
              `Call ${SITE.phoneDisplay}. Our team can help you determine whether our office provides the care you need.`,
              `Llame al ${SITE.phoneDisplay}. Nuestro equipo puede ayudarle a determinar si ofrecemos la atención que necesita.`
            )}
          </p>
          <Button asChild size="lg" className="min-h-12 bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
            <a href={SITE.phoneHref}>
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              {t("Call", "Llame al")} {SITE.phoneDisplay}
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

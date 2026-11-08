"use client"

import { Phone, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"

// Copy from Diana's draft: Why Have a PCP? EN (webpage2 p.4) / ¿Por qué tener un médico de
// cabecera? ES (webpage1 p.6). Both pages had no handwritten marks.
const helps = [
  {
    en: "Prevention: Reviews recommended screenings, vaccines, and habits that support your health.",
    es: "Prevención: Revisa las pruebas de detección, vacunas y hábitos recomendados para cuidar su salud.",
  },
  {
    en: "Ongoing care: Helps manage conditions such as diabetes and high blood pressure.",
    es: "Seguimiento: Le ayuda a controlar enfermedades como la diabetes y la presión arterial alta.",
  },
  {
    en: "New concerns: Evaluates symptoms and helps determine the next step.",
    es: "Nuevas inquietudes: Evalúa sus síntomas y le orienta sobre el siguiente paso.",
  },
  {
    en: "Medication review: Discusses how your medicines fit into your care.",
    es: "Revisión de medicamentos: Conversa con usted sobre cómo sus medicamentos forman parte de su atención.",
  },
  {
    en: "Coordination: Works with specialists and helps you understand their recommendations.",
    es: "Coordinación: Colabora con especialistas y le ayuda a comprender sus recomendaciones.",
  },
  {
    en: "Guidance: Answers questions and helps you make informed decisions.",
    es: "Orientación: Responde sus preguntas y le ayuda a tomar decisiones informadas.",
  },
]

export default function WhyHaveAPcpPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
            {t("Why Have a PCP?", "¿Por qué tener un médico de cabecera?")}
          </p>
          <h1 className="mt-2 text-balance text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("A Doctor Who Gets to Know You", "Un médico que le conoce")}
          </h1>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-16">
          <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              {t(
                "Having a primary care physician, or PCP, gives you a consistent place to turn for routine care, new concerns, and support with ongoing health conditions.",
                "Contar con un médico de atención primaria, también llamado PCP o médico de cabecera, le brinda un lugar de confianza al cual acudir para sus consultas de rutina, nuevas inquietudes y el control de enfermedades crónicas."
              )}
            </p>
            <p>
              {t(
                "Over time, your doctor gets to know your health history, medications, priorities, and concerns. That relationship helps guide care that considers you as a whole person.",
                "Con el tiempo, su médico conoce su historial de salud, medicamentos, prioridades e inquietudes. Esa relación ayuda a orientar una atención que toma en cuenta a la persona en su totalidad."
              )}
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-brand-navy md:text-3xl">
            {t("How Your PCP Helps", "¿Cómo le ayuda su médico de cabecera?")}
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {helps.map((h) => (
              <li key={h.en} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" aria-hidden="true" />
                <span className="text-foreground">{t(h.en, h.es)}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-brand-navy md:text-3xl">
            {t("Why Come In When You Feel Well?", "¿Por qué acudir al médico si se siente bien?")}
          </h2>
          <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              {t(
                "Feeling well is a good time to talk about prevention. Routine visits give you and your doctor an opportunity to review changes in your health, discuss screenings, and address concerns before they become more difficult to manage.",
                "Sentirse bien es un buen momento para hablar de prevención. Las consultas de rutina permiten revisar cambios en su salud, conversar sobre las pruebas de detección y atender inquietudes antes de que sean más difíciles de controlar."
              )}
            </p>
            <p>
              {t(
                "The type and timing of preventive visits depend on your health needs and insurance benefits.",
                "El tipo de visita preventiva y su frecuencia dependen de sus necesidades de salud y de los beneficios de su seguro."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center text-accent-foreground">
          <h2 className="text-balance text-3xl font-bold">
            {t("Build a Relationship with Your Health in Mind.", "Establezca una relación de confianza para cuidar su salud.")}
          </h2>
          <p className="max-w-xl text-accent-foreground/90">
            {t(
              `Call ${SITE.phoneDisplay} to ask about establishing care with Dr. Paredes.`,
              `Llame al ${SITE.phoneDisplay} para preguntar cómo comenzar su atención con el Dr. Paredes.`
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

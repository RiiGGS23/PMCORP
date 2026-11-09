"use client"

import { Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { ReviewPlaceholder } from "@/components/review-placeholder"

// Copy from Diana's draft: Insurance EN (webpage2 p.5) / Seguros médicos ES (webpage1 p.5).
// The old hardcoded HMO plan list was removed: Diana says it is stale and an official list
// (or a link to DOHC's current accepted-plans page) is coming. Her note "mydohc.com/accepted
// insurance" is not an exact URL, so no link is added until the exact URL is supplied.
export default function InsurancesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h1 className="text-balance text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("Insurance Information", "Información sobre seguros médicos")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-warm-white/80">
            {t(
              "Understanding your insurance should not stand in the way of getting care. Our team can help you check whether Paredes Medical Corporation participates in your specific health plan and medical group.",
              "Comprender su seguro médico no debería ser un obstáculo para recibir atención. Nuestro equipo puede ayudarle a verificar si Paredes Medical Corporation participa en su plan de seguro y grupo médico específicos."
            )}
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-16">
          <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">{t("Plans We Accept", "Seguros que aceptamos")}</h2>
          <ReviewPlaceholder
            className="mt-4"
            en="Accepted plans: waiting for Diana's official list or the exact URL of DOHC's current accepted-insurance page. The previous plan list was removed because it is out of date."
            es="Seguros aceptados: en espera de la lista oficial de Diana o de la dirección exacta de la página de seguros aceptados de DOHC. La lista anterior se eliminó porque está desactualizada."
          />
          <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              {t(
                "Participation can vary by the specific plan or network, even when the insurance company's name is the same. Please call our office before your first visit or whenever your coverage changes.",
                "La participación puede variar según el plan o la red, aunque el nombre de la compañía de seguros sea el mismo. Llame a nuestra oficina antes de su primera visita o cuando cambie su cobertura."
              )}
            </p>
            <p>
              {t(
                "When you call, have your insurance card available so we can review the details with you. Your health plan can confirm your benefits, coverage, and any costs you may owe.",
                "Al llamar, tenga a la mano su tarjeta de seguro para que podamos revisar los detalles con usted. Su plan de salud puede confirmar sus beneficios, cobertura y cualquier cantidad que le corresponda pagar."
              )}
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-brand-navy md:text-3xl">
            {t("Selecting Dr. Paredes as Your Primary Care Physician", "Cómo elegir al Dr. Paredes como su médico de cabecera")}
          </h2>
          <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              {t(
                "Some health plans require you to select an assigned primary care physician, also called a PCP.",
                "Algunos planes requieren que usted tenga un médico de atención primaria asignado, también conocido como PCP o médico de cabecera."
              )}
            </p>
            <p>
              {t(
                "To select Dr. Paredes, contact your health plan's member services department using the number on your insurance card. Ask whether he is available through your specific plan and medical group and when the assignment will take effect.",
                "Para elegir al Dr. Paredes, llame al departamento de servicios para miembros de su seguro, al número que aparece en su tarjeta. Pregunte si puede seleccionarlo a través de su plan y grupo médico específicos y a partir de qué fecha entraría en vigor la asignación."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center text-accent-foreground">
          <h2 className="text-3xl font-bold">{t("Need Help Getting Started?", "¿Necesita ayuda para comenzar?")}</h2>
          <p className="max-w-xl text-accent-foreground/90">
            {t(
              `Call ${SITE.phoneDisplay}. Our team is happy to help.`,
              `Llame al ${SITE.phoneDisplay}. Nuestro equipo con gusto le ayudará.`
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

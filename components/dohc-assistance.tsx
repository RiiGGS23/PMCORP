"use client"

import { Phone, Headphones, ExternalLink, AlertTriangle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { DOHC } from "@/lib/site"
import { ReviewPlaceholder } from "@/components/review-placeholder"

// After-hours assistance block (Diana's markup: "24/7 Assistance", "Immediate Care",
// "Out of Area"). Phone numbers and descriptions come only from DOHC's contact page.
export function DohcAssistance({ id }: { id?: string }) {
  const { t } = useLanguage()
  return (
    <section id={id} className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-balance text-3xl font-bold text-brand-navy">
            {t("When Our Office Is Closed", "Cuando nuestra oficina está cerrada")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            {t(
              "The phone lines below are operated by Desert Oasis Healthcare (DOHC), not by Paredes Medical Corporation. Our office is not open 24 hours.",
              "Las siguientes líneas telefónicas son de Desert Oasis Healthcare (DOHC), no de Paredes Medical Corporation. Nuestra oficina no está abierta las 24 horas."
            )}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-teal">DOHC</p>
            <h3 className="text-xl font-bold text-brand-navy">
              {t("DOHC 24/7 Patient Helpline", "Línea de ayuda para pacientes de DOHC, 24/7")}
            </h3>
            <a
              href={DOHC.helplineHref}
              className="inline-flex min-h-12 items-center gap-2 self-start rounded-lg bg-brand-navy px-5 text-lg font-bold text-white hover:bg-brand-navy/90"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {DOHC.helplineDisplay}
            </a>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(
                "If our office is closed, you can call the DOHC 24/7 Patient Helpline to get help with questions about your health and determining appointments, 24 hours a day, 7 days a week.",
                "Si nuestra oficina está cerrada, puede llamar a la línea de ayuda para pacientes de DOHC para recibir ayuda con preguntas sobre su salud y para determinar citas, las 24 horas del día, los 7 días de la semana."
              )}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(
                "If you have questions after discharge from a hospital or a skilled nursing facility, call the helpline to reach a DOHC case management representative.",
                "Si tiene preguntas después de salir de un hospital o de un centro de enfermería especializada, llame a la línea de ayuda para comunicarse con un representante de administración de casos de DOHC."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-teal">DOHC</p>
            <h3 className="flex items-center gap-2 text-xl font-bold text-brand-navy">
              <Headphones className="h-5 w-5 text-brand-teal" aria-hidden="true" />
              {t("DOHC Immediate Care: Call Us First", "Atención inmediata de DOHC: Call Us First")}
            </h3>
            <a
              href={DOHC.mainLineHref}
              className="inline-flex min-h-12 items-center gap-2 self-start rounded-lg bg-brand-navy px-5 text-lg font-bold text-white hover:bg-brand-navy/90"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {DOHC.mainLineDisplay}
            </a>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(
                "Call the DOHC main line (\u201cCall Us First\u201d) to find out DOHC Immediate Care hours or locations.",
                "Llame a la línea principal de DOHC (\u201cCall Us First\u201d) para conocer los horarios o las ubicaciones de atención inmediata (Immediate Care) de DOHC."
              )}
            </p>
            <a
              href={DOHC.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-navy underline underline-offset-4 hover:text-brand-teal"
            >
              {t("DOHC contact page", "Página de contacto de DOHC")}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <ReviewPlaceholder
          className="mt-6"
          en="Out of Area: instructions and wording are pending from Diana."
          es="Fuera del área: las instrucciones y el texto están pendientes de Diana."
        />

        <p className="mt-6 flex items-center justify-center gap-2 text-center font-semibold text-brand-navy">
          <AlertTriangle className="h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
          {t(
            "If you are experiencing a medical emergency, call 911.",
            "Si tiene una emergencia médica, llame al 911."
          )}
        </p>
      </div>
    </section>
  )
}

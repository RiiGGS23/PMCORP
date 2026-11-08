"use client"

import { Phone, CheckCircle2, ExternalLink, Instagram, FileText } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE, DOHC } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { ReviewPlaceholder } from "@/components/review-placeholder"

// Copy from Diana's draft: Patient Resources EN (webpage2 p.3) / Recursos para pacientes ES
// (webpage1 p.7). Her markup: "Forms and Health Education" -> "Additional Resources" (ES
// "recursos adicionales"), link forms and DOHC resources, and "Call me for wording here" on
// Prescription Refills / Test Results. Nothing below links to a file or URL we don't have.
const additionalResources = [
  {
    en: "New-patient forms",
    es: "Formularios para nuevos pacientes",
    pendingEn: "form file or link not supplied yet",
    pendingEs: "aún no se ha recibido el archivo o enlace del formulario",
  },
  {
    en: "Records request forms",
    es: "Formularios para solicitar registros médicos",
    pendingEn: "form file or link not supplied yet",
    pendingEs: "aún no se ha recibido el archivo o enlace del formulario",
  },
  {
    en: "Health education (DOHC)",
    es: "Información educativa (DOHC)",
    pendingEn: "exact DOHC link pending from Diana",
    pendingEs: "enlace exacto de DOHC pendiente de Diana",
  },
  {
    en: "DOHC patient resources page",
    es: "Página de recursos para pacientes de DOHC",
    pendingEn: "exact DOHC link pending from Diana",
    pendingEs: "enlace exacto de DOHC pendiente de Diana",
  },
  {
    en: "Educational videos featuring Dr. Paredes",
    es: "Videos educativos con el Dr. Paredes",
    pendingEn: "video links not supplied yet",
    pendingEs: "aún no se han recibido los enlaces de los videos",
  },
  {
    en: "Health-plan classes and community resources",
    es: "Clases del plan de salud y recursos comunitarios",
    pendingEn: "approved links not supplied yet",
    pendingEs: "aún no se han recibido los enlaces aprobados",
  },
]

export default function ResourcesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
            {t("Patient Resources", "Recursos para pacientes")}
          </p>
          <h1 className="mt-2 text-balance text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("Information to Help You Prepare", "Información para prepararse para su visita")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-warm-white/80">
            {t(
              "We want you to feel informed and ready for your visit. Here you will find practical information, patient forms, and educational resources.",
              "Queremos que usted se sienta informado y preparado para su consulta. Aquí encontrará información práctica, formularios y recursos educativos."
            )}
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-16">
          <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">
            {t("Preparing for Your First Visit", "Cómo prepararse para su primera visita")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("Please bring:", "Por favor, traiga:")}</p>
          <ul className="mt-3 flex flex-col gap-3">
            {[
              { en: "Your photo identification and current insurance card.", es: "Su identificación con fotografía y tarjeta de seguro vigente." },
              { en: "A current list of medications, including vitamins and supplements.", es: "Una lista actualizada de sus medicamentos, incluyendo vitaminas y suplementos." },
              { en: "Your medication bottles if you are unsure what you take.", es: "Los envases de sus medicamentos si no está seguro de cuáles toma." },
              {
                en: "Any relevant medical records or information about recent hospital, emergency room, or specialist visits.",
                es: "Registros médicos relevantes o información sobre visitas recientes al hospital, a la sala de emergencias o con especialistas.",
              },
              { en: "A list of questions or concerns you would like to discuss.", es: "Una lista de las preguntas o inquietudes que desea conversar con el médico." },
            ].map((item) => (
              <li key={item.en} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" aria-hidden="true" />
                <span className="text-foreground">{t(item.en, item.es)}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-brand-navy md:text-3xl">{t("Prescription Refills", "Renovación de recetas")}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t(
              "Please contact our office before you run out of medication. Have the medication name, dose, and pharmacy information available. Our team will review your request and let you know whether a follow-up visit or additional information is needed.",
              "Comuníquese con nuestra oficina antes de que se le termine su medicamento. Tenga a la mano el nombre del medicamento, la dosis y la información de su farmacia. Nuestro equipo revisará su solicitud y le informará si necesita una consulta de seguimiento o información adicional."
            )}
          </p>

          <h2 className="mt-10 text-2xl font-bold text-brand-navy md:text-3xl">
            {t("Test Results and Referrals", "Resultados y referencias a especialistas")}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t(
              "If you have questions about a test result or pending referral, call our office. Please let us know when and where the test was completed or which specialist you were referred to so we can assist you.",
              "Si tiene preguntas sobre un resultado o una referencia pendiente, llame a nuestra oficina. Indíquenos cuándo y dónde se realizó el estudio o a qué especialista fue referido para que podamos ayudarle."
            )}
          </p>
          <ReviewPlaceholder
            className="mt-4"
            en="Prescription Refills and Test Results wording is draft text. Diana asked to give the final wording by phone (“Call me for wording here”)."
            es="El texto de Renovación de recetas y Resultados es un borrador. Diana pidió dar el texto final por teléfono."
          />

          <h2 id="additional-resources" className="mt-10 scroll-mt-24 text-2xl font-bold text-brand-navy md:text-3xl">
            {t("Additional Resources", "Recursos adicionales")}
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {additionalResources.map((r) => (
              <li key={r.en} className="flex flex-col gap-1 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="flex items-center gap-2 font-semibold text-brand-navy">
                  <FileText className="h-4 w-4 shrink-0 text-brand-teal" aria-hidden="true" />
                  {t(r.en, r.es)}
                </span>
                <span data-review-placeholder="true" className="text-xs font-semibold text-amber-800">
                  {t("Pending: ", "Pendiente: ")}
                  {t(r.pendingEn, r.pendingEs)}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-lg border border-border bg-secondary p-5">
            <h3 className="font-bold text-brand-navy">{t("Desert Oasis Healthcare (DOHC) contact information", "Información de contacto de Desert Oasis Healthcare (DOHC)")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t(
                "These are DOHC phone lines, not Paredes Medical Corporation's office line.",
                "Estas son líneas telefónicas de DOHC, no la línea de la oficina de Paredes Medical Corporation."
              )}
            </p>
            <ul className="mt-3 flex flex-col gap-1 text-sm">
              <li>
                {t("DOHC 24/7 Patient Helpline: ", "Línea de ayuda para pacientes de DOHC, 24/7: ")}
                <a href={DOHC.helplineHref} className="inline-flex min-h-11 items-center font-bold text-brand-navy underline underline-offset-4">
                  {DOHC.helplineDisplay}
                </a>
              </li>
              <li>
                {t("DOHC main line (Call Us First), for DOHC Immediate Care hours or locations: ", "Línea principal de DOHC (Call Us First), para horarios o ubicaciones de atención inmediata de DOHC: ")}
                <a href={DOHC.mainLineHref} className="inline-flex min-h-11 items-center font-bold text-brand-navy underline underline-offset-4">
                  {DOHC.mainLineDisplay}
                </a>
              </li>
            </ul>
            <a
              href={DOHC.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-navy underline underline-offset-4 hover:text-brand-teal"
            >
              {t("DOHC contact page", "Página de contacto de DOHC")}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-brand-navy md:text-3xl">{t("Stay Connected", "Manténgase en contacto")}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t(
              "Follow us on Instagram for office news, health education, and community updates.",
              "Síganos en Instagram para conocer las novedades de nuestra oficina, información de salud y actividades en la comunidad."
            )}
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="outline" className="min-h-11 border-brand-navy text-brand-navy hover:bg-brand-navy/5">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" aria-hidden="true" />
                {SITE.instagramHandle}
              </a>
            </Button>
          </div>
          <ReviewPlaceholder
            className="mt-4"
            en="Facebook: Diana's draft mentions Facebook, but no verified page URL has been supplied."
            es="Facebook: el borrador de Diana menciona Facebook, pero no se ha recibido una dirección verificada."
          />
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t(
              "For appointments, medication requests, or questions about your care, please call our office. Social media messages are not a channel for medical care.",
              "Para citas, solicitudes de medicamentos o preguntas sobre su atención, llame a nuestra oficina. Los mensajes en redes sociales no son un medio para recibir atención médica."
            )}
          </p>
        </div>
      </section>

      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center text-accent-foreground">
          <Button asChild size="lg" className="min-h-12 bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
            <a href={SITE.phoneHref}>
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              {t("Call", "Llame al")} {SITE.phoneDisplay}
            </a>
          </Button>
          <p className="text-sm text-accent-foreground/90">
            {t("If you are experiencing a medical emergency, call 911.", "Si tiene una emergencia médica, llame al 911.")}
          </p>
        </div>
      </section>
    </div>
  )
}

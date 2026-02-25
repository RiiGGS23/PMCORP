"use client"

import { Phone, ShieldCheck, HelpCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const insurances = [
  "Aetna",
  "Blue Shield of California",
  "Cigna",
  "Health Net",
  "Molina Healthcare",
  "Medicare",
  "Medi-Cal",
  "IEHP (Inland Empire Health Plan)",
  "United Healthcare",
  "Tricare",
  "Anthem Blue Cross",
  "Oscar Health",
]

export default function InsurancesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("Accepted Insurances", "Seguros Aceptados")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-warm-white/70">
            {t(
              "We accept most major insurance plans. Our bilingual staff is happy to help verify your coverage.",
              "Aceptamos la mayoria de los planes de seguro principales. Nuestro personal bilingue esta feliz de ayudarle a verificar su cobertura."
            )}
          </p>
        </div>
      </section>

      {/* Insurance Grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
              {t("Plans We Accept", "Planes Que Aceptamos")}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-navy">
              {t("Insurance Partners", "Socios de Seguros")}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {insurances.map((name, i) => (
              <Card key={i} className="border-0 shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10">
                    <ShieldCheck className="h-5 w-5 text-brand-teal" />
                  </div>
                  <span className="text-sm font-semibold text-brand-navy">{name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Not seeing your plan */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-card p-8 text-center shadow-sm md:p-12">
            <HelpCircle className="h-12 w-12 text-brand-teal" />
            <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">
              {t("Don't See Your Insurance?", "No Ve Su Seguro?")}
            </h2>
            <p className="max-w-xl leading-relaxed text-muted-foreground">
              {t(
                "We are always adding new plans. Please call our office and our friendly staff will be happy to check if we accept your insurance. We also assist patients without insurance and can discuss payment options.",
                "Siempre estamos agregando nuevos planes. Por favor llame a nuestra oficina y nuestro amable personal estara feliz de verificar si aceptamos su seguro. Tambien asistimos a pacientes sin seguro y podemos discutir opciones de pago."
              )}
            </p>
            <Button asChild size="lg" className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
              <a href="tel:7609724704">
                <Phone className="mr-2 h-5 w-5" />
                {t("Call to Verify Coverage", "Llame para Verificar Cobertura")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Self-Pay */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-brand-navy">
                {t("Self-Pay & Uninsured Patients", "Pacientes Sin Seguro")}
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {t(
                  "We believe everyone deserves quality healthcare. If you do not have insurance, please don't hesitate to contact us. We offer affordable self-pay rates and our staff can help connect you with resources for health coverage enrollment.",
                  "Creemos que todos merecen atencion medica de calidad. Si no tiene seguro, no dude en contactarnos. Ofrecemos tarifas de pago propio accesibles y nuestro personal puede ayudarle a conectarse con recursos para la inscripcion de cobertura de salud."
                )}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-brand-navy">
                {t("Insurance Questions?", "Preguntas Sobre Seguros?")}
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {t(
                  "Our bilingual office staff is experienced in navigating insurance questions. We can help with prior authorizations, referrals, and understanding your benefits. Just give us a call!",
                  "Nuestro personal bilingue tiene experiencia en navegar preguntas sobre seguros. Podemos ayudar con autorizaciones previas, referencias y entender sus beneficios. Solo llamenos!"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

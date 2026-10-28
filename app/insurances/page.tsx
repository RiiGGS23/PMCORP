"use client"

import { Phone, ShieldCheck, AlertCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Lists copied exactly from paredesmedicalcorp.com/what-insurance-we-accept
const commercialHmo = [
  "Aetna",
  "Blue Shield of California",
  "Cigna",
  "Covered California",
  "Health Net",
  "Molina Healthcare",
  "UnitedHealthcare",
]

const medicareAdvantageHmo = [
  "Aetna Medicare",
  "Alignment Health Plan",
  "Anthem Blue Cross",
  "Astiva",
  "Blue Shield",
  "Health Net",
  "Humana",
  "Molina Healthcare",
  "SCAN Health Plan",
  "UnitedHealthcare",
  "Wellcare",
]

function PlanGrid({ plans }: { plans: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {plans.map((name) => (
        <Card key={name} className="border-0 shadow-sm">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10">
              <ShieldCheck className="h-5 w-5 text-brand-teal" />
            </div>
            <span className="text-sm font-semibold text-brand-navy">{name}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function InsurancesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("What Insurance We Accept", "Seguros Que Aceptamos")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-warm-white/70">
            {t("We accept the following HMO plans.", "Aceptamos los siguientes planes HMO.")}
          </p>
        </div>
      </section>

      {/* HMO-only notice */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 pt-12">
          <div className="flex items-start gap-4 rounded-xl border-2 border-brand-red/30 bg-brand-red/5 p-6">
            <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-brand-red" />
            <p className="font-semibold text-brand-navy">
              {t(
                "HMO plans only. At this time we are not accepting any PPO insurance plans.",
                "Solo planes HMO. En este momento no estamos aceptando ningun plan de seguro PPO."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Commercial HMO */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="mb-6 text-2xl font-bold text-brand-navy md:text-3xl">
            {t("Commercial HMO Plans", "Planes HMO Comerciales")}
          </h2>
          <PlanGrid plans={commercialHmo} />
        </div>
      </section>

      {/* Medicare Advantage HMO */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-16 md:pb-20">
          <h2 className="mb-6 text-2xl font-bold text-brand-navy md:text-3xl">
            {t("Medicare Advantage HMO Plans", "Planes HMO de Medicare Advantage")}
          </h2>
          <PlanGrid plans={medicareAdvantageHmo} />
        </div>
      </section>

      {/* Call to verify */}
      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center text-accent-foreground">
          <h2 className="text-3xl font-bold">{t("Questions About Your Plan?", "Preguntas Sobre Su Plan?")}</h2>
          <p className="max-w-xl text-accent-foreground/80">
            {t(
              "Call our office to confirm whether we accept your insurance.",
              "Llame a nuestra oficina para confirmar si aceptamos su seguro."
            )}
          </p>
          <Button asChild size="lg" className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
            <a href={SITE.phoneHref}>
              <Phone className="mr-2 h-5 w-5" />
              {t("Call to Verify Coverage", "Llame para Verificar Cobertura")} {SITE.phoneDisplay}
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

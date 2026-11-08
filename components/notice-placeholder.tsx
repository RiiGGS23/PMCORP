"use client"

import { Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"

// Placeholder until the clinic provides its official notice text.
export function NoticePlaceholder({ titleEn, titleEs }: { titleEn: string; titleEs: string }) {
  const { t } = useLanguage()
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center">
        <h1 className="text-4xl font-bold text-brand-navy">{t(titleEn, titleEs)}</h1>
        <p className="text-lg text-muted-foreground">
          {t(
            "Notice coming soon. In the meantime, please call the office.",
            "Aviso próximamente. Mientras tanto, por favor llame a la oficina."
          )}
        </p>
        <Button asChild size="lg" className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
          <a href={SITE.phoneHref}>
            <Phone className="mr-2 h-5 w-5" />
            {t("Call", "Llame al")} {SITE.phoneDisplay}
          </a>
        </Button>
      </div>
    </section>
  )
}

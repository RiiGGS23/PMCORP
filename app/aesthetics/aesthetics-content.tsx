"use client"

import { useLanguage } from "@/lib/language-context"
import { ReviewPlaceholder } from "@/components/review-placeholder"

export function AestheticsContent() {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col">
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold text-brand-warm-white md:text-5xl">{t("Aesthetics", "Estética")}</h1>
        </div>
      </section>
      <section className="bg-background">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-14 md:py-16">
          <ReviewPlaceholder
            en="Aesthetics page content is pending: approved text, the link to the separate aesthetics website, and which services may be listed (no services are listed until licensing and approval are complete)."
            es="El contenido de la página de estética está pendiente: texto aprobado, el enlace al sitio web de estética (entidad separada) y qué servicios se pueden mencionar (no se mencionan servicios hasta completar la licencia y la aprobación)."
          />
        </div>
      </section>
    </div>
  )
}

"use client"

import { Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FloatingCallButton() {
  const { t } = useLanguage()

  return (
    <a
      href="tel:7609724704"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-bold text-destructive-foreground shadow-lg transition-transform hover:scale-105 md:hidden"
      aria-label={t("Call Now", "Llamar Ahora")}
    >
      <Phone className="h-5 w-5" />
      {t("Call Now", "Llamar Ahora")}
    </a>
  )
}

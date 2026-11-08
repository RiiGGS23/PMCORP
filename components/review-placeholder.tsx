"use client"

import { Clock3 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// Local-review placeholder: marks content that is blocked on input from the clinic
// (files, URLs, wording). Must be replaced or removed before anything is published.
export function ReviewPlaceholder({ en, es, className = "" }: { en: string; es: string; className?: string }) {
  const { t } = useLanguage()
  return (
    <div
      role="note"
      data-review-placeholder="true"
      className={`flex items-start gap-3 rounded-lg border-2 border-dashed border-amber-500/70 bg-amber-50 p-4 text-sm text-amber-900 ${className}`}
    >
      <Clock3 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <p>
        <span className="font-bold">{t("Pending (local review): ", "Pendiente (revisión local): ")}</span>
        {t(en, es)}
      </p>
    </div>
  )
}

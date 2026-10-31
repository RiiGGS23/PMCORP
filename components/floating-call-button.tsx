"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"

// Mobile-only floating call button. On the home page it stays hidden while the big
// hero "Call" button is on screen, so it never covers the hero content.
export function FloatingCallButton() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const target = document.getElementById("hero-call")
    if (!target) {
      setVisible(true)
      return
    }
    setVisible(false)
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0 })
    io.observe(target)
    return () => io.disconnect()
  }, [pathname])

  return (
    <a
      href={SITE.phoneHref}
      className={`fixed bottom-4 right-4 z-40 flex min-h-14 items-center gap-2 rounded-full bg-brand-red px-6 text-base font-bold text-destructive-foreground shadow-lg transition-all hover:scale-105 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      }`}
      aria-label={t("Call Now", "Llamar Ahora")}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <Phone className="h-5 w-5" />
      {t("Call Now", "Llamar Ahora")}
    </a>
  )
}

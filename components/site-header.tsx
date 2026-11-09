"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"

const navItems = [
  { en: "Home", es: "Inicio", href: "/" },
  { en: "About Us", es: "Conózcanos", href: "/about" },
  { en: "Our Doctor", es: "Nuestro doctor", href: "/doctor" },
  { en: "Services", es: "Servicios", href: "/services" },
  { en: "Why Have a PCP?", es: "¿Por qué un PCP?", href: "/why-have-a-pcp" },
  { en: "Insurance", es: "Seguros", href: "/insurances" },
  { en: "Resources", es: "Recursos", href: "/resources" },
  { en: "Contact", es: "Contacto", href: "/contact" },
]

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-navy text-brand-warm-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0.5 text-sm">
          <div className="hidden items-center gap-4 md:flex">
            <span>{t("Mon - Fri: 8:00 AM - 5:00 PM", "Lun - Vie: 8:00 AM - 5:00 PM")}</span>
            <span className="text-brand-warm-white/40">|</span>
            <span>{SITE.addressFull}</span>
          </div>
          <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
            <a
              href={SITE.phoneHref}
              className="flex min-h-11 items-center gap-1.5 font-semibold text-brand-warm-white transition-colors hover:text-brand-teal"
            >
              <Phone className="h-3.5 w-3.5" />
              (760) 972-4704
            </a>
            {/* Language toggle */}
            <div className="flex items-center overflow-hidden rounded-full border border-brand-warm-white/30">
              <button
                onClick={() => setLang("en")}
                className={`min-h-11 min-w-11 px-3 text-xs font-bold uppercase tracking-wide transition-colors ${
                  lang === "en"
                    ? "bg-brand-warm-white text-brand-navy"
                    : "text-brand-warm-white/70 hover:text-brand-warm-white"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`min-h-11 min-w-11 px-3 text-xs font-bold uppercase tracking-wide transition-colors ${
                  lang === "es"
                    ? "bg-brand-warm-white text-brand-navy"
                    : "text-brand-warm-white/70 hover:text-brand-warm-white"
                }`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-2-ibSP0N49cxu8BCwkukgSHX4euXwsrn.jpeg"
              alt={t("Paredes Medical Corporation logo", "Logotipo de Paredes Medical Corporation")}
              width={60}
              height={60}
              className="h-12 w-auto md:h-14"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label={t("Main navigation", "Navegación principal")}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-brand-navy"
              >
                {lang === "en" ? item.en : item.es}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden h-11 bg-brand-red text-destructive-foreground hover:bg-brand-red/90 sm:inline-flex"
            >
              <a href={SITE.phoneHref}>
                <Phone className="mr-2 h-4 w-4" />
                {t("Call to Schedule", "Llame para agendar")}
              </a>
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-12 w-12 items-center justify-center rounded-md text-foreground hover:bg-secondary lg:hidden"
              aria-label={mobileOpen ? t("Close menu", "Cerrar menú") : t("Open menu", "Abrir menú")}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav id="mobile-nav" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-card px-4 pb-4 lg:hidden" aria-label={t("Mobile navigation", "Navegación móvil")}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-12 items-center rounded-md border-b border-border/60 px-3 text-lg font-medium text-foreground transition-colors last:border-b-0 hover:bg-secondary"
              >
                {lang === "en" ? item.en : item.es}
              </Link>
            ))}
            <div className="mt-3 border-t border-border pt-3">
              <Button asChild className="h-14 w-full bg-brand-red text-lg text-destructive-foreground hover:bg-brand-red/90">
                <a href={SITE.phoneHref}>
                  <Phone className="mr-2 h-5 w-5" />
                  {t("Call", "Llame al")} {SITE.phoneDisplay}
                </a>
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}

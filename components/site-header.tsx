"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

const navItems = [
  { en: "Home", es: "Inicio", href: "/" },
  { en: "About Us", es: "Sobre Nosotros", href: "/about" },
  { en: "Our Doctor", es: "Nuestro Doctor", href: "/doctor" },
  { en: "Meet Our Staff", es: "Nuestro Equipo", href: "/staff" },
  { en: "Services", es: "Servicios", href: "/services" },
  { en: "Insurances", es: "Seguros", href: "/insurances" },
  { en: "Patient Resources", es: "Recursos", href: "/resources" },
  { en: "Contact", es: "Contacto", href: "/contact" },
]

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-navy text-brand-warm-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="hidden items-center gap-4 md:flex">
            <span>{t("Mon - Fri: 8:00 AM - 5:00 PM", "Lun - Vie: 8:00 AM - 5:00 PM")}</span>
            <span className="text-brand-warm-white/40">|</span>
            <span>49201 Grapefruit Blvd, Suite #3, Coachella, CA 92236</span>
          </div>
          <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
            <a
              href="tel:7609724704"
              className="flex items-center gap-1.5 font-semibold text-brand-warm-white transition-colors hover:text-brand-teal"
            >
              <Phone className="h-3.5 w-3.5" />
              (760) 972-4704
            </a>
            {/* Language toggle */}
            <div className="flex items-center overflow-hidden rounded-full border border-brand-warm-white/30">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
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
                className={`px-3 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-cWbg1C1VE2QyToXr7Gw7aY7C3ZC6X1.png"
              alt="Paredes Medical Corporation logo"
              width={220}
              height={60}
              className="h-12 w-auto md:h-14"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-brand-navy"
              >
                {lang === "en" ? item.en : item.es}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden bg-brand-red text-destructive-foreground hover:bg-brand-red/90 sm:inline-flex"
            >
              <a href="tel:7609724704">
                <Phone className="mr-2 h-4 w-4" />
                {t("Call to Schedule", "Llamar para Agendar")}
              </a>
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-md p-2 text-foreground hover:bg-secondary lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="border-t border-border bg-card px-4 pb-4 lg:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {lang === "en" ? item.en : item.es}
              </Link>
            ))}
            <div className="mt-3 border-t border-border pt-3">
              <Button asChild className="w-full bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
                <a href="tel:7609724704">
                  <Phone className="mr-2 h-4 w-4" />
                  {t("Call to Schedule", "Llamar para Agendar")}
                </a>
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}

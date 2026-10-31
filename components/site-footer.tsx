"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Instagram, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-brand-navy pb-24 text-brand-warm-white md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-cWbg1C1VE2QyToXr7Gw7aY7C3ZC6X1.png"
              alt="Paredes Medical Corporation logo"
              width={200}
              height={55}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="max-w-xs text-sm leading-relaxed text-brand-warm-white/70">
              {t(
                "Providing compassionate, bilingual family medicine to the Coachella Valley community.",
                "Brindando medicina familiar bilingue y compasiva a la comunidad del Valle de Coachella."
              )}
            </p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 text-base text-brand-warm-white/70 transition-colors hover:text-brand-teal md:text-sm"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
              {SITE.instagramHandle}
            </a>
            <a
              href={SITE.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 text-base text-brand-warm-white/70 transition-colors hover:text-brand-teal md:text-sm"
              aria-label="Yelp"
            >
              <Star className="h-5 w-5" />
              {t("Find us on Yelp", "Encuentrenos en Yelp")}
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-teal">
              {t("Quick Links", "Enlaces")}
            </h3>
            <ul className="flex flex-col">
              {[
                { en: "About Us", es: "Sobre Nosotros", href: "/about" },
                { en: "Our Doctor", es: "Nuestro Doctor", href: "/doctor" },
                { en: "Meet Our Staff", es: "Nuestro Equipo", href: "/staff" },
                { en: "Services", es: "Servicios", href: "/services" },
                { en: "Accepted Insurances", es: "Seguros Aceptados", href: "/insurances" },
                { en: "Patient Resources", es: "Recursos", href: "/resources" },
                { en: "Contact", es: "Contacto", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-11 items-center text-base text-brand-warm-white/70 transition-colors hover:text-brand-warm-white md:text-sm"
                  >
                    {t(item.en, item.es)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-teal">
              {t("Contact", "Contacto")}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex min-h-11 items-start gap-2.5 py-1 text-base text-brand-warm-white/70 transition-colors hover:text-brand-warm-white md:text-sm"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  (760) 972-4704
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm text-brand-warm-white/70">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  {SITE.email}
                </span>
              </li>
              <li>
                <a
                  href={SITE.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-start gap-2.5 py-1 text-base text-brand-warm-white/70 transition-colors hover:text-brand-warm-white md:text-sm"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  {SITE.addressFull}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-teal">
              {t("Office Hours", "Horario")}
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-brand-warm-white/70">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              <div>
                <p>{t("Monday - Friday", "Lunes - Viernes")}</p>
                <p className="font-semibold text-brand-warm-white">8:00 AM - 5:00 PM</p>
                <p className="mt-1">{t("Saturday - Sunday", "Sabado - Domingo")}</p>
                <p className="font-semibold text-brand-warm-white">{t("Closed", "Cerrado")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-brand-warm-white/10 pt-8 md:flex-row">
          <p className="text-xs text-brand-warm-white/50">
            &copy; 2026 Paredes Medical Corporation. {t("All rights reserved.", "Todos los derechos reservados.")}
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 text-sm text-brand-warm-white/60">
            <Link href="/privacy" className="inline-flex min-h-11 items-center transition-colors hover:text-brand-warm-white">
              {t("Privacy Policy", "Politica de Privacidad")}
            </Link>
            <Link href="/hipaa" className="inline-flex min-h-11 items-center transition-colors hover:text-brand-warm-white">
              {t("HIPAA Notice", "Aviso HIPAA")}
            </Link>
            <a
              href="https://abysstech.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center transition-colors hover:text-brand-warm-white"
            >
              {t("Powered by Abyss Tech", "Powered by Abyss Tech")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

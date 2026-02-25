"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-brand-navy text-brand-warm-white">
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
              href="https://www.instagram.com/paredesmedical?igsh=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-brand-warm-white/70 transition-colors hover:text-brand-teal"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
              @paredesmedical
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-teal">
              {t("Quick Links", "Enlaces")}
            </h3>
            <ul className="flex flex-col gap-2.5">
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
                    className="text-sm text-brand-warm-white/70 transition-colors hover:text-brand-warm-white"
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
                  href="tel:7609724704"
                  className="flex items-start gap-2.5 text-sm text-brand-warm-white/70 transition-colors hover:text-brand-warm-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  (760) 972-4704
                </a>
              </li>
              <li>
                <a
                  href="mailto:customerservice@pmcorp.org"
                  className="flex items-start gap-2.5 text-sm text-brand-warm-white/70 transition-colors hover:text-brand-warm-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  customerservice@pmcorp.org
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=49201+Grapefruit+Blvd+Suite+3+Coachella+CA+92236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-brand-warm-white/70 transition-colors hover:text-brand-warm-white"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  49201 Grapefruit Blvd, Suite #3, Coachella, CA 92236
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
          <div className="flex gap-6 text-xs text-brand-warm-white/50">
            <Link href="/privacy" className="transition-colors hover:text-brand-warm-white">
              {t("Privacy Policy", "Politica de Privacidad")}
            </Link>
            <Link href="/hipaa" className="transition-colors hover:text-brand-warm-white">
              {t("HIPAA Notice", "Aviso HIPAA")}
            </Link>
            <a
              href="https://abysstech.io"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-warm-white"
            >
              {t("Powered by Abyss Tech", "Powered by Abyss Tech")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

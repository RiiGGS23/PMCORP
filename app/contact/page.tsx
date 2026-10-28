"use client"

import { Phone, Mail, MapPin, Clock, ExternalLink, Instagram, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// No contact form by design: patients call the office so no health details are
// collected through the website.
export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("Contact Us", "Contactenos")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-warm-white/70">
            {t(
              "The best way to reach us or schedule an appointment is to call our office.",
              "La mejor manera de comunicarse con nosotros o agendar una cita es llamar a nuestra oficina."
            )}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Button asChild size="lg" className="bg-brand-red px-8 py-6 text-lg text-destructive-foreground hover:bg-brand-red/90">
              <a href={SITE.phoneHref}>
                <Phone className="mr-2 h-6 w-6" />
                {t("Call", "Llame al")} {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-sm">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10">
                  <Phone className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="font-bold text-brand-navy">{t("Phone", "Telefono")}</h3>
                <a href={SITE.phoneHref} className="text-lg font-bold text-brand-navy hover:text-brand-teal">
                  {SITE.phoneDisplay}
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal/10">
                  <Mail className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="font-bold text-brand-navy">{t("Email", "Correo")}</h3>
                <p className="text-sm text-muted-foreground">{SITE.email}</p>
                <p className="text-xs text-muted-foreground">
                  {t(
                    "For general questions only. Please do not send medical information by email.",
                    "Solo para preguntas generales. Por favor no envie informacion medica por correo electronico."
                  )}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy/10">
                  <MapPin className="h-6 w-6 text-brand-navy" />
                </div>
                <h3 className="font-bold text-brand-navy">{t("Address", "Direccion")}</h3>
                <p className="text-sm text-muted-foreground">
                  {SITE.addressLine1}
                  <br />
                  {SITE.addressLine2}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal/10">
                  <Clock className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="font-bold text-brand-navy">{t("Hours", "Horario")}</h3>
                <div className="text-sm text-muted-foreground">
                  <p>{t("Mon - Fri", "Lun - Vie")}</p>
                  <p className="font-semibold text-brand-navy">8:00 AM - 5:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-xl shadow-md">
              <iframe
                src={SITE.mapsEmbed}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("Office location map", "Mapa de la ubicacion de la oficina")}
              />
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy/5">
                <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t("Get Directions", "Obtener Direcciones")}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy/5">
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  {SITE.instagramHandle}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy/5">
                <a href={SITE.yelp} target="_blank" rel="noopener noreferrer">
                  <Star className="mr-2 h-4 w-4" />
                  {t("Find us on Yelp", "Encuentrenos en Yelp")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center text-accent-foreground">
          <h2 className="text-3xl font-bold">{t("Ready to Schedule?", "Listo para Agendar?")}</h2>
          <p className="max-w-xl text-accent-foreground/80">
            {t(
              "Call our office and our bilingual team will help you schedule your appointment.",
              "Llame a nuestra oficina y nuestro equipo bilingue le ayudara a agendar su cita."
            )}
          </p>
          <Button asChild size="lg" className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
            <a href={SITE.phoneHref}>
              <Phone className="mr-2 h-5 w-5" />
              {t("Call to Schedule", "Llamar para Agendar")} {SITE.phoneDisplay}
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Send,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
              "We would love to hear from you. Call us to schedule an appointment or send us a message below.",
              "Nos encantaria saber de usted. Llamenos para agendar una cita o envienos un mensaje a continuacion."
            )}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone */}
            <Card className="border-0 shadow-sm">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10">
                  <Phone className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="font-bold text-brand-navy">{t("Phone", "Telefono")}</h3>
                <a
                  href="tel:7609724704"
                  className="text-lg font-bold text-brand-navy hover:text-brand-teal"
                >
                  (760) 972-4704
                </a>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-0 shadow-sm">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal/10">
                  <Mail className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="font-bold text-brand-navy">{t("Email", "Correo")}</h3>
                <a
                  href="mailto:customerservice@pmcorp.org"
                  className="text-sm text-muted-foreground hover:text-brand-teal"
                >
                  customerservice@pmcorp.org
                </a>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="border-0 shadow-sm">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy/10">
                  <MapPin className="h-6 w-6 text-brand-navy" />
                </div>
                <h3 className="font-bold text-brand-navy">{t("Address", "Direccion")}</h3>
                <p className="text-sm text-muted-foreground">
                  49201 Grapefruit Blvd, Suite #3<br />
                  Coachella, CA 92236
                </p>
              </CardContent>
            </Card>

            {/* Hours */}
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

          {/* Map + Form */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Map */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-xl shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d-116.174!3d33.6804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db0d1234567890%3A0x1234567890!2s49201+Grapefruit+Blvd+%233%2C+Coachella%2C+CA+92236!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("Office location map", "Mapa de la ubicacion de la oficina")}
                />
              </div>
              <Button
                asChild
                variant="outline"
                className="border-brand-navy text-brand-navy hover:bg-brand-navy/5"
              >
                <a
                  href="https://maps.google.com/?q=49201+Grapefruit+Blvd+Suite+3+Coachella+CA+92236"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t("Get Directions", "Obtener Direcciones")}
                </a>
              </Button>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl bg-secondary p-6 md:p-8">
              <h2 className="mb-2 text-2xl font-bold text-brand-navy">
                {t("Send Us a Message", "Envienos un Mensaje")}
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                {t(
                  "For appointments, please call us directly. This form is for general inquiries.",
                  "Para citas, por favor llamenos directamente. Este formulario es para consultas generales."
                )}
              </p>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal/10">
                    <Send className="h-8 w-8 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">
                    {t("Message Sent!", "Mensaje Enviado!")}
                  </h3>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    {t(
                      "Thank you for reaching out. Our team will get back to you as soon as possible.",
                      "Gracias por contactarnos. Nuestro equipo se comunicara con usted lo antes posible."
                    )}
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-brand-navy text-brand-navy hover:bg-brand-navy/5"
                  >
                    {t("Send Another Message", "Enviar Otro Mensaje")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="firstName" className="text-brand-navy">
                        {t("First Name", "Nombre")}
                      </Label>
                      <Input
                        id="firstName"
                        required
                        placeholder={t("John", "Juan")}
                        className="bg-card"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="lastName" className="text-brand-navy">
                        {t("Last Name", "Apellido")}
                      </Label>
                      <Input
                        id="lastName"
                        required
                        placeholder={t("Doe", "Garcia")}
                        className="bg-card"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-brand-navy">
                        {t("Email", "Correo Electronico")}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="email@example.com"
                        className="bg-card"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone" className="text-brand-navy">
                        {t("Phone", "Telefono")}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(760) 000-0000"
                        className="bg-card"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="language" className="text-brand-navy">
                      {t("Preferred Language", "Idioma Preferido")}
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-card">
                        <SelectValue placeholder={t("Select language", "Seleccione idioma")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Espanol</SelectItem>
                        <SelectItem value="both">{t("Both / Either", "Ambos / Cualquiera")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-brand-navy">
                      {t("Message", "Mensaje")}
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      placeholder={t(
                        "How can we help you?",
                        "Como podemos ayudarle?"
                      )}
                      className="bg-card"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="bg-brand-navy text-primary-foreground hover:bg-brand-navy/90"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {t("Send Message", "Enviar Mensaje")}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center text-accent-foreground">
          <h2 className="text-3xl font-bold">
            {t("Ready to Schedule?", "Listo para Agendar?")}
          </h2>
          <p className="max-w-xl text-accent-foreground/80">
            {t(
              "The fastest way to schedule your appointment is to give us a call. Our team is here to help.",
              "La forma mas rapida de agendar su cita es llamarnos. Nuestro equipo esta aqui para ayudar."
            )}
          </p>
          <Button asChild size="lg" className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
            <a href="tel:7609724704">
              <Phone className="mr-2 h-5 w-5" />
              {t("Call to Schedule", "Llamar para Agendar")}
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

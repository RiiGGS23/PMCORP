"use client"

import { Phone, Heart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const staffMembers = [
  {
    name: "Dr. Gustavo A. Paredes, MD",
    roleEn: "Physician / Founder",
    roleEs: "Medico / Fundador",
    bioEn:
      "Board-certified family medicine physician with over 30 years of experience. Dr. Paredes leads our practice with compassion and dedication to the community.",
    bioEs:
      "Medico de medicina familiar certificado con mas de 30 anos de experiencia. El Dr. Paredes dirige nuestra practica con compasion y dedicacion a la comunidad.",
  },
  {
    name: "Jessica",
    roleEn: "Office Manager",
    roleEs: "Gerente de Oficina",
    bioEn:
      "Jessica keeps our office running smoothly every day. She ensures that every patient visit is well-coordinated and that our team has the support they need.",
    bioEs:
      "Jessica mantiene nuestra oficina funcionando sin problemas todos los dias. Se asegura de que cada visita de paciente este bien coordinada.",
  },
  {
    name: "Brenda",
    roleEn: "Medical Assistant",
    roleEs: "Asistente Medica",
    bioEn:
      "Brenda is a dedicated medical assistant who is passionate about patient care. A Coachella Valley native, she brings warmth and professionalism to every interaction.",
    bioEs:
      "Brenda es una asistente medica dedicada y apasionada por el cuidado del paciente. Nacida en el Valle de Coachella, aporta calidez y profesionalismo a cada interaccion.",
  },
  {
    name: "Marlene",
    roleEn: "Medical Assistant",
    roleEs: "Asistente Medica",
    bioEn:
      "Marlene brings her caring nature and attention to detail to every appointment. She makes patients feel comfortable and cared for from the moment they arrive.",
    bioEs:
      "Marlene aporta su naturaleza cariñosa y atencion al detalle a cada cita. Hace que los pacientes se sientan comodos y cuidados desde el momento en que llegan.",
  },
  {
    name: "Vanessa",
    roleEn: "Receptionist",
    roleEs: "Recepcionista",
    bioEn:
      "Vanessa is the friendly face that greets you when you walk through our door. She is fluent in English and Spanish and helps patients navigate scheduling and paperwork.",
    bioEs:
      "Vanessa es la cara amigable que te recibe cuando entras por nuestra puerta. Es bilingue y ayuda a los pacientes con citas y documentacion.",
  },
  {
    name: "Sandra",
    roleEn: "Medical Assistant",
    roleEs: "Asistente Medica",
    bioEn:
      "Sandra is committed to delivering quality care with a gentle touch. Her experience and empathy make her an invaluable member of our medical team.",
    bioEs:
      "Sandra esta comprometida a brindar atencion de calidad con un toque gentil. Su experiencia y empatia la convierten en un miembro invaluable de nuestro equipo.",
  },
  {
    name: "Diana",
    roleEn: "Receptionist / Billing",
    roleEs: "Recepcionista / Facturacion",
    bioEn:
      "Diana handles front desk operations and billing with a friendly smile. She helps patients understand their insurance and payment options with patience and care.",
    bioEs:
      "Diana maneja las operaciones de recepcion y facturacion con una sonrisa amigable. Ayuda a los pacientes a entender su seguro y opciones de pago con paciencia.",
  },
]

export default function StaffPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("Meet Our Staff", "Conozca a Nuestro Equipo")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-warm-white/70">
            {t(
              "A caring, bilingual team dedicated to making every visit a positive experience.",
              "Un equipo bilingue y dedicado a hacer de cada visita una experiencia positiva."
            )}
          </p>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staffMembers.map((member, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-48 items-center justify-center bg-secondary">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-teal/10">
                    <Heart className="h-8 w-8 text-brand-teal" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-brand-navy">{member.name}</h3>
                  <p className="mb-3 text-sm font-semibold text-brand-teal">
                    {t(member.roleEn, member.roleEs)}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(member.bioEn, member.bioEs)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center text-accent-foreground">
          <h2 className="text-3xl font-bold">
            {t("We Are Here for You", "Estamos Aqui Para Usted")}
          </h2>
          <p className="max-w-xl text-accent-foreground/80">
            {t(
              "Our team is ready to welcome you. Call today to schedule your appointment.",
              "Nuestro equipo esta listo para recibirlo. Llame hoy para agendar su cita."
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

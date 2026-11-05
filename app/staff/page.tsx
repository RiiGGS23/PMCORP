"use client"

import { Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Staff names, titles, and bios come from paredesmedicalcorp.com/meet-our-staff.
// No real photos are available yet, so each card shows an initials avatar.
const staffMembers = [
  {
    name: "Dr. Gustavo Paredes",
    initials: "GP",
    roleEn: "President / CEO",
    roleEs: "Presidente / Director General",
    bioEn:
      "Dr. Paredes has over 30 years of experience in the medical field. He is a board-certified Family Medicine physician. Patient satisfaction is at the heart of his practice, and he treats everyone with the same level of care and respect that he would extend to his own family.",
    bioEs:
      "El Dr. Paredes tiene mas de 30 anos de experiencia en el campo de la medicina. Es medico certificado en Medicina Familiar. La satisfaccion del paciente es el centro de su practica, y trata a todos con el mismo nivel de cuidado y respeto que le daria a su propia familia.",
  },
  {
    name: "Diana Fuentes",
    initials: "DF",
    roleEn: "Receptionist / Scheduler",
    roleEs: "Recepcionista / Programadora de Citas",
    bioEn:
      "Hi, my name is Diana. I am originally from Mexicali, B.C., Mexico. I have 14 years of experience in customer service. I will be happy to receive you and schedule your appointments.",
    bioEs:
      "Hola, mi nombre es Diana. Soy originaria de Mexicali, B.C., Mexico. Tengo 14 anos de experiencia en servicio al cliente. Con gusto le recibire y programare sus citas.",
  },
  {
    name: "Idalia Corral",
    initials: "IC",
    roleEn: "Office Manager",
    roleEs: "Gerente de Oficina",
    bioEn:
      "Hi, my name is Idalia. I was born in Mexico but grew up in Indio, CA. I've spent the last 36 years working in the medical field, and what I enjoy most is helping our patients. In my free time, I love being with my grandchildren, which brings me immense joy!",
    bioEs:
      "Hola, mi nombre es Idalia. Naci en Mexico pero creci en Indio, CA. He pasado los ultimos 36 anos trabajando en el campo de la medicina, y lo que mas disfruto es ayudar a nuestros pacientes. En mi tiempo libre, me encanta estar con mis nietos, lo cual me trae una inmensa alegria!",
  },
  {
    name: "Leticia Arrellano",
    initials: "LA",
    roleEn: "Certified Medical Assistant",
    roleEs: "Asistente Medica Certificada",
    bioEn:
      "Hi, my name is Leticia. I was raised in Zacatecas, Mexico and have been working in the medical field for 22 years. I love my job because it is incredibly rewarding, and I enjoy helping others. I also have a passion for animals and love horseback riding.",
    bioEs:
      "Hola, mi nombre es Leticia. Creci en Zacatecas, Mexico y he trabajado en el campo de la medicina por 22 anos. Me encanta mi trabajo porque es increiblemente gratificante, y disfruto ayudar a los demas. Tambien me apasionan los animales y me encanta montar a caballo.",
  },
  {
    name: "Carolina Arriaga",
    initials: "CA",
    roleEn: "Certified Medical Assistant",
    roleEs: "Asistente Medica Certificada",
    bioEn:
      "Hi, my name is Carolina and I'm originally from Mexicali, Baja California, Mexico. I have three years of experience in the medical field and what I enjoy most about my job is patient care—getting to know our patients and building relationships with them. I also love our work environment. In my spare time, I cherish quality moments with my kids. We enjoy going to the park, watching movies, and dining out together.",
    bioEs:
      "Hola, mi nombre es Carolina y soy originaria de Mexicali, Baja California, Mexico. Tengo tres anos de experiencia en el campo de la medicina y lo que mas disfruto de mi trabajo es la atencion al paciente: conocer a nuestros pacientes y construir relaciones con ellos. Tambien me encanta nuestro ambiente de trabajo. En mi tiempo libre, valoro los momentos de calidad con mis hijos. Disfrutamos ir al parque, ver peliculas y salir a comer juntos.",
  },
  {
    name: "Elizabeth Vargas",
    initials: "EV",
    roleEn: "Certified Medical Assistant",
    roleEs: "Asistente Medica Certificada",
    bioEn:
      "Hi, my name is Elizabeth. I was born and raised in the Coachella Valley, and I have been in the medical field as a Medical Assistant for 26 years. My passion for working in healthcare has allowed me to make a difference in people's lives every day by being on the front lines of patient care and contributing to their well-being. In my spare time, I enjoy assisting with my 7-year-old daughter's soccer club as a team mom. I enjoy cooking and spending time with my family.",
    bioEs:
      "Hola, mi nombre es Elizabeth. Naci y creci en el Valle de Coachella, y he trabajado en el campo de la medicina como Asistente Medica por 26 anos. Mi pasion por trabajar en el cuidado de la salud me ha permitido hacer una diferencia en la vida de las personas cada dia, estando en la primera linea de la atencion al paciente y contribuyendo a su bienestar. En mi tiempo libre, disfruto ayudar en el club de futbol de mi hija de 7 anos como mama del equipo. Disfruto cocinar y pasar tiempo con mi familia.",
  },
  {
    name: "Diana Paredes",
    initials: "DP",
    roleEn: "Administrator",
    roleEs: "Administradora",
    bioEn:
      "Hi, my name is Diana. I was born and raised in the San Gabriel Valley and moved to the Coachella Valley nearly 10 years ago. As the Administrator, I'm the newest member of the Paredes Medical Corporation team, and I couldn't be happier to be part of such a dedicated group of professionals committed to providing exceptional healthcare to our local community. We are passionate about our patients' health and strive to treat everyone with the same love and compassion we would offer our own families. In my spare time, my family and I volunteer at our local church, and I love listening to music, reading, traveling, and enjoying nature!",
    bioEs:
      "Hola, mi nombre es Diana. Naci y creci en el Valle de San Gabriel y me mude al Valle de Coachella hace casi 10 anos. Como Administradora, soy el miembro mas reciente del equipo de Paredes Medical Corporation, y no podria estar mas feliz de ser parte de un grupo de profesionales tan dedicados y comprometidos a brindar una atencion medica excepcional a nuestra comunidad local. Nos apasiona la salud de nuestros pacientes y nos esforzamos por tratar a todos con el mismo amor y compasion que le ofreceriamos a nuestras propias familias. En mi tiempo libre, mi familia y yo somos voluntarios en nuestra iglesia local, y me encanta escuchar musica, leer, viajar y disfrutar de la naturaleza!",
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
            {staffMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden border-0 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-40 items-center justify-center bg-secondary">
                  <div
                    className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-teal/15 text-2xl font-bold tracking-wide text-brand-navy"
                    aria-hidden="true"
                  >
                    {member.initials}
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
              "Call our office to schedule your appointment.",
              "Llame a nuestra oficina para agendar su cita."
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

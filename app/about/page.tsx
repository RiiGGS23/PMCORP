"use client"

import Image from "next/image"
import { Phone, GraduationCap, ImageOff } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { ReviewPlaceholder } from "@/components/review-placeholder"

// Copy from Diana's draft: About Us EN (webpage2 p.7) / Conózcanos ES (webpage1 p.3),
// with her markup applied (Corporation, no "A.", English/Spanish line struck).
// Per the Nov 7 relayed decision, About shows only the doctor bio; staff mini-bios are
// removed and staff appear as photos only. No staff names or NP details until supplied.
const STAFF_PHOTO_SLOTS = 8 // Diana drew 8 "PIC" boxes on webpage2 p.7

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h1 className="text-balance text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("Get to Know Paredes Medical Corporation", "Conozca Paredes Medical Corporation")}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-16">
          <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">
            {t("Personal Care. Lasting Relationships.", "Atención personal. Relaciones duraderas.")}
          </h2>
          <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              {t(
                "At Paredes Medical Corporation, we want you to feel heard, respected, and comfortable asking questions. We believe that understanding your health is an important part of caring for it.",
                "En Paredes Medical Corporation, queremos que usted se sienta escuchado, respetado y con la confianza de hacer preguntas. Creemos que comprender su salud es una parte importante de cuidarla."
              )}
            </p>
            <p>
              {t(
                "Our approach combines preventive care, management of ongoing conditions, and guidance that considers your individual needs. We explain recommendations clearly and work with you to develop a care plan you understand.",
                "Nuestro enfoque combina la prevención, el control de enfermedades crónicas y la orientación de acuerdo con sus necesidades. Le explicamos nuestras recomendaciones con claridad y trabajamos con usted para desarrollar un plan de atención que comprenda."
              )}
            </p>
            <p>
              {t(
                "Our team helps patients and families feel more confident navigating their healthcare.",
                "Nuestro equipo ayuda a los pacientes y sus familias a sentirse más seguros al atender sus necesidades de salud."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Doctor bio */}
      <section className="bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:py-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm shrink-0 overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doctor%20with%20elderly%20male.png-yIKvdhQAleua8etVQDeqtgaE6tUqQy.jpeg"
              alt={t("Dr. Gustavo Paredes, M.D.", "Dr. Gustavo Paredes")}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-3xl font-bold text-brand-navy">
              {t("Meet Gustavo Paredes, M.D.", "Conozca al Dr. Gustavo Paredes")}
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Dr. Gustavo Paredes is a family medicine physician with additional fellowship training in geriatrics. Originally from Guatemala, he brings a personal commitment to serving the community and building meaningful relationships with his patients.",
                "El Dr. Gustavo Paredes es médico de medicina familiar con formación adicional en geriatría, el cuidado de la salud de los adultos mayores. Originario de Guatemala, tiene un compromiso personal con el servicio a la comunidad y con establecer relaciones de confianza con sus pacientes."
              )}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "He believes prevention and patient education are central to good care. Whether discussing a new concern, managing an ongoing condition, or helping a patient navigate changes that come with aging, he takes time to listen and explain the next steps.",
                "Considera que la prevención y la educación del paciente son fundamentales para una buena atención. Ya sea al evaluar una nueva inquietud, controlar una enfermedad crónica o acompañar a un paciente en los cambios propios de la edad, se toma el tiempo para escuchar y explicar los siguientes pasos."
              )}
            </p>

            <h3 className="mt-2 flex items-center gap-2 text-xl font-bold text-brand-navy">
              <GraduationCap className="h-5 w-5 text-brand-teal" aria-hidden="true" />
              {t("Education and Training", "Formación médica")}
            </h3>
            <ul className="flex list-disc flex-col gap-2 pl-5 text-muted-foreground">
              <li>
                {t(
                  "Medical degree: Universidad de San Carlos de Guatemala, Guatemala City, Guatemala.",
                  "Título de Médico y Cirujano: Universidad de San Carlos de Guatemala, Ciudad de Guatemala, Guatemala."
                )}
              </li>
              <li>
                {t(
                  "Family Medicine residency: Hospital Bella Vista, Mayagüez, Puerto Rico.",
                  "Residencia en Medicina Familiar: Hospital Bella Vista, Mayagüez, Puerto Rico."
                )}
              </li>
              <li>
                {t(
                  "Geriatrics fellowship: University of Puerto Rico / Veterans Affairs Caribbean Healthcare System, San Juan, Puerto Rico.",
                  "Formación adicional mediante un fellowship en Geriatría: Universidad de Puerto Rico / Veterans Affairs Caribbean Healthcare System, San Juan, Puerto Rico."
                )}
              </li>
            </ul>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Earlier in his career, Dr. Paredes worked at the University of Southern California's General Clinical Research Center, supporting research related to the genetics and prevention of diabetes in the Hispanic community.",
                "Al inicio de su carrera, el Dr. Paredes trabajó en el Centro de Investigación Clínica General de la Universidad del Sur de California, colaborando en investigaciones relacionadas con la genética y la prevención de la diabetes en la comunidad hispana."
              )}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Outside the office, he enjoys spending time with his family and pets and volunteering at his local church.",
                "Fuera del consultorio, disfruta pasar tiempo con su familia y sus mascotas y servir como voluntario en su iglesia local."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Team: photos only */}
      <section id="team" className="scroll-mt-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <h2 className="text-3xl font-bold text-brand-navy">{t("Meet Our Team", "Conozca a nuestro equipo")}</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
            {t(
              "From your first phone call to the end of your visit, our team is here to welcome you, answer questions, and help coordinate your care.",
              "Desde su primera llamada hasta el final de su visita, nuestro equipo está aquí para darle la bienvenida, responder sus preguntas y ayudar a coordinar su atención."
            )}
          </p>
          <ReviewPlaceholder
            className="mt-6"
            en="Staff photos have not been supplied yet. Slots below are empty placeholders; no names or captions until Diana sends the photos. Nurse practitioner bio deferred until the doctor decides."
            es="Aún no se han recibido las fotos del personal. Los espacios son marcadores vacíos; sin nombres ni descripciones hasta que Diana envíe las fotos. La biografía de la enfermera practicante queda pendiente de la decisión del doctor."
          />
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: STAFF_PHOTO_SLOTS }).map((_, i) => (
              <li
                key={i}
                className="flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-secondary text-muted-foreground"
              >
                <ImageOff className="h-8 w-8" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  {t("Photo pending", "Foto pendiente")}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-script text-3xl text-brand-teal">
            {t("Care and Compassion You Deserve.", "El cuidado y la compasión que usted merece.")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center text-accent-foreground">
          <Button asChild size="lg" className="min-h-12 bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
            <a href={SITE.phoneHref}>
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              {t("Call", "Llame al")} {SITE.phoneDisplay}
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

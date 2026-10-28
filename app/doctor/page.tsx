"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, GraduationCap, Award, Stethoscope, Globe, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"

export default function DoctorPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("Our Doctor", "Nuestro Doctor")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-warm-white/70">
            {t(
              "Meet the physician leading our practice with over 30 years of experience.",
              "Conozca al medico que lidera nuestra practica con mas de 30 anos de experiencia."
            )}
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20">
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doctor%20with%20elderly%20male.png-yIKvdhQAleua8etVQDeqtgaE6tUqQy.jpeg"
              alt="Dr. Gustavo A. Paredes, MD"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">
                Gustavo A. Paredes, MD
              </h2>
              <p className="mt-1 text-lg text-brand-teal font-semibold">
                {t("Board-Certified Family Medicine Physician", "Medico de Medicina Familiar Certificado")}
              </p>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Patient satisfaction is at the heart of Dr. Gustavo Paredes' practice. He takes immense pride in his ability to connect with people from a wide range of backgrounds and often finds himself working with some of the most vulnerable members of the community. He finds joy in getting to know his patients and is dedicated to developing a strong patient-doctor partnership. Dr. Paredes treats everyone with the same level of care and respect that he would extend to his own family.",
                "La satisfaccion del paciente es el centro de la practica del Dr. Gustavo Paredes. Se enorgullece de su capacidad para conectar con personas de una gran variedad de origenes y con frecuencia trabaja con algunos de los miembros mas vulnerables de la comunidad. Disfruta conocer a sus pacientes y esta dedicado a desarrollar una relacion solida entre paciente y medico. El Dr. Paredes trata a todos con el mismo nivel de cuidado y respeto que le daria a su propia familia."
              )}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Dr. Paredes has over 30 years of experience in the medical field. He is a board-certified Family Medicine physician. He earned his medical degree from San Carlos University in Guatemala City, Guatemala. His Family Medicine specialty was completed at Bella Vista Hospital in Mayagüez, Puerto Rico. In addition, he completed a fellowship in Geriatrics from the University of Puerto Rico (UPR) / Veterans Affairs Caribbean Healthcare System (VACHS) in San Juan, Puerto Rico.",
                "El Dr. Paredes tiene mas de 30 anos de experiencia en el campo de la medicina. Es medico certificado en Medicina Familiar. Obtuvo su titulo de medico en la Universidad de San Carlos en la Ciudad de Guatemala, Guatemala. Completo su especialidad en Medicina Familiar en el Hospital Bella Vista en Mayagüez, Puerto Rico. Ademas, completo una subespecialidad (fellowship) en Geriatria en la Universidad de Puerto Rico (UPR) / Sistema de Salud del Caribe de Asuntos de Veteranos (VACHS) en San Juan, Puerto Rico."
              )}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Early in his career, he worked for the USC General Clinical Research Center (GCRC), which conducted research into the genetics and prevention of diabetes in the Hispanic American community. He moved to the Coachella Valley over 7 years ago and has happily served our community since then.",
                "Al inicio de su carrera, trabajo en el Centro General de Investigacion Clinica de USC (GCRC), que investigaba la genetica y la prevencion de la diabetes en la comunidad hispanoamericana. Se mudo al Valle de Coachella hace mas de 7 anos y desde entonces ha servido con gusto a nuestra comunidad."
              )}
            </p>

            {/* Credentials */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: GraduationCap,
                  en: "Medical Degree: San Carlos University, Guatemala City, Guatemala",
                  es: "Titulo de Medico: Universidad de San Carlos, Ciudad de Guatemala, Guatemala",
                },
                {
                  icon: Stethoscope,
                  en: "Family Medicine Residency: Bella Vista Hospital, Mayagüez, Puerto Rico",
                  es: "Residencia en Medicina Familiar: Hospital Bella Vista, Mayagüez, Puerto Rico",
                },
                {
                  icon: Award,
                  en: "Geriatrics Fellowship: University of Puerto Rico (UPR) / VA Caribbean Healthcare System (VACHS), San Juan",
                  es: "Fellowship en Geriatria: Universidad de Puerto Rico (UPR) / VA Caribbean Healthcare System (VACHS), San Juan",
                },
                {
                  icon: Award,
                  en: "Board-Certified in Family Medicine",
                  es: "Certificado en Medicina Familiar",
                },
                {
                  icon: Globe,
                  en: "Languages: English & Spanish",
                  es: "Idiomas: Ingles y Espanol",
                },
              ].map((cred, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-secondary p-4">
                  <cred.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  <p className="text-sm font-medium text-brand-navy">{t(cred.en, cred.es)}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button
                asChild
                className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90"
              >
                <a href={SITE.phoneHref}>
                  <Phone className="mr-2 h-4 w-4" />
                  {t("Call to Schedule with Dr. Paredes", "Llame para Agendar con el Dr. Paredes")}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy/5">
                <Link href="/staff">
                  {t("Meet Our Staff", "Conozca a Nuestro Equipo")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy (from paredesmedicalcorp.com) */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
          <h2 className="mb-6 text-3xl font-bold text-brand-navy">
            {t("Prevention Is the Best Medicine", "La Prevencion Es la Mejor Medicina")}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t(
              "Dr. Paredes is a firm believer in the idea that \"prevention is the best medicine,\" and he makes it a point to share this important message with all his patients. For Dr. Paredes, the real reward comes from seeing the positive changes in his patients' lives. His goal is to always support them on their health journey, ensuring they feel cared for every step of the way.",
              "El Dr. Paredes cree firmemente que \"la prevencion es la mejor medicina\", y se asegura de compartir este importante mensaje con todos sus pacientes. Para el Dr. Paredes, la verdadera recompensa es ver los cambios positivos en la vida de sus pacientes. Su meta es siempre apoyarlos en su camino hacia la salud, asegurando que se sientan atendidos en cada paso."
            )}
          </p>
        </div>
      </section>
    </div>
  )
}

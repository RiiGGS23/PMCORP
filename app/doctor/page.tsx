"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, GraduationCap, Award, Stethoscope, Globe, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
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
                "Dr. Gustavo A. Paredes is a board-certified family medicine physician with over 30 years of clinical experience. He has dedicated his career to serving underserved communities, with a special focus on the families of the Coachella Valley.",
                "El Dr. Gustavo A. Paredes es un medico de medicina familiar certificado por la junta con mas de 30 anos de experiencia clinica. Ha dedicado su carrera a servir a comunidades desatendidas, con un enfoque especial en las familias del Valle de Coachella."
              )}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Fluent in both English and Spanish, Dr. Paredes believes in building lasting relationships with his patients. He takes the time to listen, educate, and create personalized treatment plans that respect each patient's unique needs and cultural background.",
                "Fluido en ingles y espanol, el Dr. Paredes cree en construir relaciones duraderas con sus pacientes. Se toma el tiempo para escuchar, educar y crear planes de tratamiento personalizados que respetan las necesidades unicas y el trasfondo cultural de cada paciente."
              )}
            </p>

            {/* Credentials */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: GraduationCap,
                  en: "Medical Degree: Universidad Autonoma de Guadalajara",
                  es: "Titulo Medico: Universidad Autonoma de Guadalajara",
                },
                {
                  icon: Stethoscope,
                  en: "Residency: Family Medicine",
                  es: "Residencia: Medicina Familiar",
                },
                {
                  icon: Award,
                  en: "Board Certified: American Board of Family Medicine",
                  es: "Certificacion: Junta Americana de Medicina Familiar",
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
                <a href="tel:7609724704">
                  <Phone className="mr-2 h-4 w-4" />
                  {t("Schedule with Dr. Paredes", "Agendar con el Dr. Paredes")}
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

      {/* Philosophy */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
          <h2 className="mb-6 text-3xl font-bold text-brand-navy">
            {t("Care Philosophy", "Filosofia de Atencion")}
          </h2>
          <blockquote className="text-xl leading-relaxed text-muted-foreground italic">
            {`"${t(
              "I believe that good medicine starts with truly knowing your patient. When we take the time to listen and understand, we can provide care that not only heals the body, but also nurtures the spirit. Every patient who walks through our doors is family.",
              "Creo que la buena medicina comienza con conocer verdaderamente a tu paciente. Cuando nos tomamos el tiempo para escuchar y entender, podemos brindar atencion que no solo sana el cuerpo, sino que tambien nutre el espiritu. Cada paciente que cruza nuestras puertas es familia."
            )}"`}
          </blockquote>
          <p className="mt-6 font-semibold text-brand-navy">-- Dr. Gustavo A. Paredes, MD</p>
        </div>
      </section>
    </div>
  )
}

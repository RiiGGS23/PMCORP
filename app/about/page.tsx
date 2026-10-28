"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("About Us", "Sobre Nosotros")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-warm-white/70">
            {t(
              "The medical office of Dr. Gustavo Paredes in Coachella, CA.",
              "El consultorio medico del Dr. Gustavo Paredes en Coachella, CA."
            )}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20Banner-LIxmb6nzHRtV7xX7ztmNNUjfEDBeNy.jpg"
              alt={t("Paredes Medical team", "Equipo de Paredes Medical")}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
              {t("Our Mission", "Nuestra Mision")}
            </p>
            <h2 className="text-balance text-3xl font-bold text-brand-navy md:text-4xl">
              {t(
                "Professional Care You Can Trust",
                "Atencion Profesional en la Que Puede Confiar"
              )}
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Welcome to Paredes Medical, the medical office of Dr. Gustavo Paredes, where we believe that every patient deserves exceptional healthcare. Our mission is to provide comprehensive medical services with the genuine care and compassion every patient deserves, as though they were members of our own family.",
                "Bienvenido a Paredes Medical, el consultorio medico del Dr. Gustavo Paredes, donde creemos que cada paciente merece una atencion medica excepcional. Nuestra mision es brindar servicios medicos integrales con el cuidado y la compasion genuinos que cada paciente merece, como si fueran miembros de nuestra propia familia."
              )}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "We understand that navigating the healthcare system can be challenging, especially when language barriers exist. That is why we are proud to offer our services in both English and Spanish, ensuring clear communication and understanding for all our patients. Our bilingual team of experienced healthcare professionals is committed to making your visit as comfortable and efficient as possible.",
                "Entendemos que navegar el sistema de salud puede ser dificil, especialmente cuando existen barreras de idioma. Por eso nos enorgullece ofrecer nuestros servicios en ingles y espanol, asegurando una comunicacion clara y comprension para todos nuestros pacientes. Nuestro equipo bilingue de profesionales de la salud con experiencia esta comprometido a hacer que su visita sea lo mas comoda y eficiente posible."
              )}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Our office offers a wide range of services, from routine check-ups and preventive care to specialized treatments and chronic disease management, including diabetes, high blood pressure, asthma, weight management, kidney issues, and cholesterol problems. We have access to one of the largest networks of specialists in the Coachella Valley, and we work closely with them to manage your specific healthcare needs. Patient-centered care is our priority, and we take the time to listen to your concerns and work with you to develop a personalized treatment plan.",
                "Nuestra oficina ofrece una amplia gama de servicios, desde chequeos de rutina y atencion preventiva hasta tratamientos especializados y manejo de enfermedades cronicas, incluyendo diabetes, presion arterial alta, asma, control de peso, problemas de los rinones y problemas de colesterol. Tenemos acceso a una de las redes de especialistas mas grandes del Valle de Coachella, y trabajamos de cerca con ellos para atender sus necesidades de salud especificas. La atencion centrada en el paciente es nuestra prioridad; nos tomamos el tiempo de escuchar sus inquietudes y trabajamos con usted para desarrollar un plan de tratamiento personalizado."
              )}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Here at Paredes Medical, your health and well-being are our top priorities. We strive to create a welcoming and supportive environment where you can feel confident that you are receiving the highest quality care. We are here to support you every step of the way on your health journey.",
                "Aqui en Paredes Medical, su salud y bienestar son nuestras principales prioridades. Nos esforzamos por crear un ambiente acogedor y de apoyo donde pueda sentirse seguro de que esta recibiendo la atencion de mas alta calidad. Estamos aqui para apoyarle en cada paso de su camino hacia la salud."
              )}
            </p>
            <p className="font-semibold text-brand-navy">
              Dr. Gustavo Paredes, {t("President / CEO", "Presidente / Director General")}
              <br />
              Paredes Medical Corporation
            </p>
            <p className="font-serif text-xl italic text-brand-teal">
              {t("Care and Compassion You Deserve!", "El Cuidado y la Compasion Que Usted Merece!")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center text-accent-foreground">
          <h2 className="text-3xl font-bold">{t("Ready to Join Our Family?", "Listo para Unirse a Nuestra Familia?")}</h2>
          <p className="max-w-xl text-accent-foreground/80">
            {t(
              "Call our office today to schedule your visit.",
              "Llame a nuestra oficina hoy para agendar su visita."
            )}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
              <a href={SITE.phoneHref}>
                <Phone className="mr-2 h-5 w-5" />
                (760) 972-4704
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
              <Link href="/staff">
                {t("Meet Our Staff", "Conozca a Nuestro Equipo")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

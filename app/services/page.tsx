"use client"

import {
  Phone,
  Activity,
  Heart,
  Stethoscope,
  Baby,
  Brain,
  Syringe,
  Pill,
  ClipboardList,
  ShieldCheck,
  Thermometer,
  Eye,
  Droplets,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Activity,
    enTitle: "Annual Physicals & Wellness Exams",
    esTitle: "Examenes Anuales y de Bienestar",
    enDesc: "Comprehensive yearly exams to keep you healthy and catch potential issues early.",
    esDesc: "Examenes anuales completos para mantenerte saludable y detectar problemas potenciales temprano.",
  },
  {
    icon: Heart,
    enTitle: "Chronic Disease Management",
    esTitle: "Manejo de Enfermedades Cronicas",
    enDesc: "Ongoing care for diabetes, hypertension, high cholesterol, asthma, and other chronic conditions.",
    esDesc: "Atencion continua para diabetes, hipertension, colesterol alto, asma y otras condiciones cronicas.",
  },
  {
    icon: Stethoscope,
    enTitle: "Preventive Medicine",
    esTitle: "Medicina Preventiva",
    enDesc: "Screenings, health education, and lifestyle guidance to prevent illness before it starts.",
    esDesc: "Evaluaciones, educacion de salud y guia de estilo de vida para prevenir enfermedades.",
  },
  {
    icon: Baby,
    enTitle: "Pediatric Care",
    esTitle: "Atencion Pediatrica",
    enDesc: "Well-child visits, vaccinations, growth monitoring, and illness treatment for children.",
    esDesc: "Visitas de nino sano, vacunas, monitoreo de crecimiento y tratamiento de enfermedades para ninos.",
  },
  {
    icon: Brain,
    enTitle: "Mental Health Screening",
    esTitle: "Evaluacion de Salud Mental",
    enDesc: "Depression, anxiety, and behavioral health screenings with compassionate follow-up care.",
    esDesc: "Evaluaciones de depresion, ansiedad y salud conductual con atencion de seguimiento compasiva.",
  },
  {
    icon: Syringe,
    enTitle: "Immunizations & Vaccinations",
    esTitle: "Inmunizaciones y Vacunas",
    enDesc: "Childhood and adult vaccinations including flu shots and COVID-19 boosters.",
    esDesc: "Vacunas para ninos y adultos, incluyendo vacunas contra la gripe y refuerzos de COVID-19.",
  },
  {
    icon: Pill,
    enTitle: "Medication Management",
    esTitle: "Manejo de Medicamentos",
    enDesc: "Review and optimization of your medications to ensure the best results with minimal side effects.",
    esDesc: "Revision y optimizacion de sus medicamentos para asegurar los mejores resultados con minimos efectos secundarios.",
  },
  {
    icon: ClipboardList,
    enTitle: "Lab & Diagnostic Orders",
    esTitle: "Ordenes de Laboratorio y Diagnostico",
    enDesc: "Blood work, imaging, and other diagnostic tests ordered and interpreted right from our office.",
    esDesc: "Analisis de sangre, imagenes y otras pruebas diagnosticas ordenadas e interpretadas desde nuestra oficina.",
  },
  {
    icon: ShieldCheck,
    enTitle: "Insurance Navigation",
    esTitle: "Ayuda con Seguros Medicos",
    enDesc: "Our bilingual staff helps you understand and navigate your insurance coverage and benefits.",
    esDesc: "Nuestro personal bilingue le ayuda a entender y navegar su cobertura y beneficios de seguro.",
  },
  {
    icon: Thermometer,
    enTitle: "Acute Illness Treatment",
    esTitle: "Tratamiento de Enfermedades Agudas",
    enDesc: "Same-day care for common illnesses like colds, flu, infections, and minor injuries.",
    esDesc: "Atencion el mismo dia para enfermedades comunes como resfriados, gripe, infecciones y lesiones menores.",
  },
  {
    icon: Eye,
    enTitle: "Vision & Hearing Screenings",
    esTitle: "Evaluaciones de Vision y Audicion",
    enDesc: "Basic screenings to detect vision and hearing issues, especially for children and seniors.",
    esDesc: "Evaluaciones basicas para detectar problemas de vision y audicion, especialmente para ninos y mayores.",
  },
  {
    icon: Droplets,
    enTitle: "Women's & Men's Health",
    esTitle: "Salud de la Mujer y del Hombre",
    enDesc: "Specialized preventive care and screenings for both women and men at every stage of life.",
    esDesc: "Atencion preventiva especializada y evaluaciones para mujeres y hombres en cada etapa de la vida.",
  },
]

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("Our Services", "Nuestros Servicios")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-warm-white/70">
            {t(
              "Comprehensive family medicine for patients of all ages.",
              "Medicina familiar completa para pacientes de todas las edades."
            )}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Card key={i} className="border-0 shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-teal/10">
                    <service.icon className="h-6 w-6 text-brand-teal" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">{t(service.enTitle, service.esTitle)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t(service.enDesc, service.esDesc)}</p>
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
            {t("Have a Question About Our Services?", "Tiene Alguna Pregunta Sobre Nuestros Servicios?")}
          </h2>
          <p className="max-w-xl text-accent-foreground/80">
            {t(
              "Call us today. We are happy to answer your questions and help you schedule an appointment.",
              "Llamenos hoy. Estamos felices de responder sus preguntas y ayudarle a agendar una cita."
            )}
          </p>
          <Button asChild size="lg" className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
            <a href="tel:7609724704">
              <Phone className="mr-2 h-5 w-5" />
              (760) 972-4704
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

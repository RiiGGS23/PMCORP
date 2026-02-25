"use client"

import {
  Phone,
  FileText,
  ClipboardList,
  Heart,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ResourcesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold text-brand-warm-white md:text-5xl">
            {t("Patient Resources", "Recursos para Pacientes")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-warm-white/70">
            {t(
              "Helpful information to prepare for your visit and manage your health.",
              "Informacion util para prepararse para su visita y manejar su salud."
            )}
          </p>
        </div>
      </section>

      {/* New Patient Section */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
              {t("Getting Started", "Para Comenzar")}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-navy">
              {t("New Patient Information", "Informacion para Nuevos Pacientes")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FileText,
                enTitle: "What to Bring",
                esTitle: "Que Traer",
                enDesc:
                  "Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records or referral forms.",
                esDesc:
                  "Por favor traiga una identificacion con foto valida, su tarjeta de seguro, una lista de medicamentos actuales y cualquier registro medico relevante o formularios de referencia.",
              },
              {
                icon: ClipboardList,
                enTitle: "Patient Forms",
                esTitle: "Formularios del Paciente",
                enDesc:
                  "New patient registration forms are available at our office. You can also request them in advance by calling us. Forms are available in English and Spanish.",
                esDesc:
                  "Los formularios de registro de nuevos pacientes estan disponibles en nuestra oficina. Tambien puede solicitarlos con anticipacion llamandonos. Los formularios estan disponibles en ingles y espanol.",
              },
              {
                icon: Heart,
                enTitle: "Your First Visit",
                esTitle: "Su Primera Visita",
                enDesc:
                  "Please arrive 15 minutes early to complete paperwork. Dr. Paredes will take the time to get to know you and discuss your health history and goals.",
                esDesc:
                  "Por favor llegue 15 minutos antes para completar la documentacion. El Dr. Paredes se tomara el tiempo para conocerle y hablar sobre su historial de salud y metas.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-0 shadow-sm">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-teal/10">
                    <item.icon className="h-6 w-6 text-brand-teal" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">{t(item.enTitle, item.esTitle)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t(item.enDesc, item.esDesc)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="mb-10 text-center">
            <Lightbulb className="mx-auto mb-3 h-8 w-8 text-brand-teal" />
            <h2 className="text-3xl font-bold text-brand-navy">
              {t("Health Tips", "Consejos de Salud")}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                enTitle: "Stay Hydrated in the Desert",
                esTitle: "Mantengase Hidratado en el Desierto",
                enDesc:
                  "Living in the Coachella Valley means extra heat exposure. Drink at least 8 glasses of water daily, and more during outdoor activity. Look out for signs of heat exhaustion.",
                esDesc:
                  "Vivir en el Valle de Coachella significa exposicion extra al calor. Beba al menos 8 vasos de agua al dia, y mas durante actividad al aire libre. Este atento a los signos de agotamiento por calor.",
              },
              {
                enTitle: "Know Your Numbers",
                esTitle: "Conozca Sus Numeros",
                enDesc:
                  "Keep track of your blood pressure, blood sugar, and cholesterol levels. Regular screenings help catch issues early and keep chronic conditions under control.",
                esDesc:
                  "Lleve un registro de su presion arterial, azucar en la sangre y niveles de colesterol. Las evaluaciones regulares ayudan a detectar problemas temprano.",
              },
              {
                enTitle: "Schedule Annual Check-Ups",
                esTitle: "Agende Chequeos Anuales",
                enDesc:
                  "Even if you feel healthy, annual wellness visits are essential for preventive care. They help us build a complete picture of your health over time.",
                esDesc:
                  "Aun si se siente saludable, las visitas anuales de bienestar son esenciales para la atencion preventiva. Nos ayudan a construir una imagen completa de su salud.",
              },
              {
                enTitle: "Manage Stress",
                esTitle: "Maneje el Estres",
                enDesc:
                  "Mental health is just as important as physical health. If you are feeling overwhelmed, talk to Dr. Paredes about strategies and resources that can help.",
                esDesc:
                  "La salud mental es tan importante como la salud fisica. Si se siente abrumado, hable con el Dr. Paredes sobre estrategias y recursos que pueden ayudar.",
              },
            ].map((tip, i) => (
              <Card key={i} className="border-0 bg-card shadow-sm">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-brand-navy">{t(tip.enTitle, tip.esTitle)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t(tip.enDesc, tip.esDesc)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <div className="flex flex-col items-center gap-6 rounded-2xl border-2 border-brand-red/20 bg-brand-red/5 p-8 text-center md:p-12">
            <AlertTriangle className="h-12 w-12 text-brand-red" />
            <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">
              {t("In Case of Emergency", "En Caso de Emergencia")}
            </h2>
            <p className="max-w-xl leading-relaxed text-muted-foreground">
              {t(
                "If you are experiencing a medical emergency, please call 911 immediately or go to your nearest emergency room. For non-emergency after-hours questions, please call our office and leave a message.",
                "Si esta experimentando una emergencia medica, por favor llame al 911 inmediatamente o vaya a la sala de emergencias mas cercana. Para preguntas fuera de horario que no sean de emergencia, llame a nuestra oficina y deje un mensaje."
              )}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-brand-red text-destructive-foreground hover:bg-brand-red/90">
                <a href="tel:911">
                  {t("Call 911", "Llamar al 911")}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy/5">
                <a href="tel:7609724704">
                  <Phone className="mr-2 h-4 w-4" />
                  {t("Call Our Office", "Llamar a Nuestra Oficina")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-teal">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center text-accent-foreground">
          <h2 className="text-3xl font-bold">
            {t("Questions? We Are Here to Help", "Preguntas? Estamos Aqui Para Ayudar")}
          </h2>
          <p className="max-w-xl text-accent-foreground/80">
            {t(
              "Our bilingual team is available Monday through Friday to assist you with any questions or concerns.",
              "Nuestro equipo bilingue esta disponible de lunes a viernes para asistirle con cualquier pregunta o inquietud."
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

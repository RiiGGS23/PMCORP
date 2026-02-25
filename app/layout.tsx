import type { Metadata, Viewport } from "next"
import { Inter, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingCallButton } from "@/components/floating-call-button"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const _merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: {
    default: "Paredes Medical Corporation | Bilingual Family Doctor Coachella Valley",
    template: "%s | Paredes Medical Corporation",
  },
  description:
    "Compassionate bilingual family medicine in Coachella, CA. Dr. Gustavo Paredes offers primary care, preventive medicine, and chronic disease management for the whole family. Se habla Espanol.",
  keywords: [
    "family doctor Coachella",
    "bilingual doctor",
    "doctor Coachella Valley",
    "Paredes Medical",
    "family medicine",
    "primary care Coachella",
    "medico familiar Coachella",
  ],
}

export const viewport: Viewport = {
  themeColor: "#003366",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_merriweather.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <FloatingCallButton />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

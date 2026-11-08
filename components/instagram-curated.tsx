"use client"

import { useEffect, useRef, useState } from "react"
import { Instagram, ExternalLink, Loader2, AlertCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ReviewPlaceholder } from "@/components/review-placeholder"
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_PROFILE_URL,
  getDisplayableInstagramPosts,
} from "@/lib/instagram"

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

const EMBED_SCRIPT_SRC = "https://www.instagram.com/embed.js"
const EMBED_TIMEOUT_MS = 10000

type Status = "loading" | "ready" | "error"

function loadEmbedScript(): Promise<void> {
  if (window.instgrm) return Promise.resolve()
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_SCRIPT_SRC}"]`)
  return new Promise((resolve, reject) => {
    const script = existing ?? document.createElement("script")
    script.addEventListener("load", () => resolve(), { once: true })
    script.addEventListener("error", () => reject(new Error("instagram embed.js failed")), { once: true })
    if (!existing) {
      script.src = EMBED_SCRIPT_SRC
      script.async = true
      document.body.appendChild(script)
    }
  })
}

// Homepage Instagram section: shows ONLY office-approved posts via Instagram's official embed.
// Curated and updated manually (see lib/instagram.ts); it is not an automatic feed.
export function InstagramCurated() {
  const { t } = useLanguage()
  const posts = getDisplayableInstagramPosts()
  const [status, setStatus] = useState<Status>("loading")
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (posts.length === 0) return
    let cancelled = false
    setStatus("loading")
    const timer = window.setTimeout(() => {
      if (!cancelled && !containerRef.current?.querySelector("iframe")) setStatus("error")
    }, EMBED_TIMEOUT_MS)
    const observer = new MutationObserver(() => {
      if (containerRef.current?.querySelector("iframe")) {
        setStatus("ready")
        observer.disconnect()
      }
    })
    if (containerRef.current) observer.observe(containerRef.current, { childList: true, subtree: true })
    loadEmbedScript()
      .then(() => {
        if (!cancelled) window.instgrm?.Embeds.process()
      })
      .catch(() => {
        if (!cancelled) setStatus("error")
      })
    return () => {
      cancelled = true
      window.clearTimeout(timer)
      observer.disconnect()
    }
    // posts come from a static list; re-run only when its contents change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts.map((p) => p.shortcode).join(",")])

  return (
    <section className="bg-background" aria-labelledby="instagram-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <Instagram className="h-8 w-8 text-brand-red" aria-hidden="true" />
          <h2 id="instagram-heading" className="text-3xl font-bold text-brand-navy">
            {t("Follow Us on Instagram", "Síganos en Instagram")}
          </h2>
          <p className="text-muted-foreground">{INSTAGRAM_HANDLE}</p>
          {posts.length > 0 && (
            <p className="max-w-xl text-sm text-muted-foreground">
              {t(
                "Selected posts chosen by our office. This section is updated manually and does not show every post.",
                "Publicaciones seleccionadas por nuestra oficina. Esta sección se actualiza manualmente y no muestra todas las publicaciones."
              )}
            </p>
          )}
        </div>

        {posts.length === 0 ? (
          <ReviewPlaceholder
            className="mx-auto max-w-3xl"
            en="No Instagram posts have been approved for the website yet. Approved post links from the office are needed before this section can show posts."
            es="Aún no se han aprobado publicaciones de Instagram para el sitio web. Se necesitan los enlaces de publicaciones aprobadas por la oficina para mostrar publicaciones aquí."
          />
        ) : (
          <>
            {status === "loading" && (
              <p role="status" className="mb-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                {t("Loading Instagram posts…", "Cargando publicaciones de Instagram…")}
              </p>
            )}
            {status === "error" && (
              <div role="status" className="mx-auto mb-6 flex max-w-2xl items-start gap-3 rounded-lg border border-border bg-secondary p-4 text-sm text-muted-foreground">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                <p>
                  {t(
                    "Instagram posts could not be loaded here (they may be blocked by your browser). You can still open each post on Instagram:",
                    "No se pudieron cargar las publicaciones de Instagram aquí (es posible que su navegador las bloquee). Puede abrir cada publicación en Instagram:"
                  )}
                </p>
              </div>
            )}
            <div ref={containerRef} className="grid justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) =>
                status === "error" ? (
                  <a
                    key={post.shortcode}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-14 w-full max-w-sm items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4 font-semibold text-brand-navy shadow-sm hover:border-brand-teal"
                  >
                    {t(post.labelEn, post.labelEs)}
                    <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                ) : (
                  <div key={post.shortcode} className="w-full max-w-[400px]">
                    {/* Official Instagram embed markup; embed.js turns it into an iframe. */}
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={`${post.permalink}?utm_source=ig_embed`}
                      data-instgrm-version="14"
                      style={{ margin: 0, minWidth: 0, width: "100%", maxWidth: 540, background: "#fff", border: 0 }}
                    >
                      <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                        {t(post.labelEn, post.labelEs)}
                      </a>
                    </blockquote>
                  </div>
                )
              )}
            </div>
          </>
        )}

        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="min-h-11 border-brand-red text-brand-red hover:bg-brand-red/5">
            <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-4 w-4" aria-hidden="true" />
              {t(`Follow ${INSTAGRAM_HANDLE} on Instagram`, `Siga a ${INSTAGRAM_HANDLE} en Instagram`)}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

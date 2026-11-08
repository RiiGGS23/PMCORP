"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Instagram, ExternalLink, Loader2, AlertCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ReviewPlaceholder } from "@/components/review-placeholder"
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_PROFILE_URL,
  getDisplayableInstagramPosts,
  type DisplayableInstagramPost,
} from "@/lib/instagram"

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

// Official Instagram embed library (https://developers.facebook.com/docs/instagram-platform/oembed/:
// "To manually initialize the embed HTML, call the instgrm.Embeds.process() function after
// loading the library").
const EMBED_SCRIPT_SRC = "https://www.instagram.com/embed.js"
const EMBED_TIMEOUT_MS = 10000

type PostStatus = "loading" | "embedded" | "failed"

let scriptPromise: Promise<void> | null = null
function loadEmbedScript(): Promise<void> {
  if (window.instgrm) return Promise.resolve()
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script")
    script.src = EMBED_SCRIPT_SRC
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => {
      scriptPromise = null // allow a later retry
      script.remove()
      reject(new Error("instagram embed.js failed to load"))
    }
    document.body.appendChild(script)
  })
  return scriptPromise
}

// One embed. The embed DOM is created imperatively inside an empty container that React
// never renders children into, because embed.js replaces the <blockquote> with an <iframe>.
// This keeps React reconciliation (e.g. EN/ES toggle re-renders) from touching it.
function PostEmbed({
  post,
  onStatus,
}: {
  post: DisplayableInstagramPost
  onStatus: (shortcode: string, status: PostStatus) => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = ref.current
    if (!host) return
    let done = false
    const finish = (status: PostStatus) => {
      if (done) return
      done = true
      onStatus(post.shortcode, status)
    }
    onStatus(post.shortcode, "loading")

    // Same markup Instagram's oEmbed returns for a single post (hidecaption: no
    // data-instgrm-captioned attribute, so the caption is not shown automatically).
    const bq = document.createElement("blockquote")
    bq.className = "instagram-media"
    bq.setAttribute("data-instgrm-permalink", `${post.permalink}?utm_source=ig_embed&utm_campaign=loading`)
    bq.setAttribute("data-instgrm-version", "14")
    bq.style.cssText = "margin:0;min-width:0;width:100%;max-width:540px;background:#fff;border:0;"
    const a = document.createElement("a")
    a.href = post.permalink
    a.target = "_blank"
    a.rel = "noopener noreferrer"
    a.textContent = "Instagram"
    bq.appendChild(a)
    host.replaceChildren(bq)

    // "embedded" = embed.js created this post's iframe. Cross-origin content inside the
    // iframe (e.g. a deleted post) cannot be inspected, so this is not a content check.
    const observer = new MutationObserver(() => {
      if (host.querySelector("iframe")) finish("embedded")
    })
    observer.observe(host, { childList: true, subtree: true })
    const timer = window.setTimeout(() => {
      if (!host.querySelector("iframe")) finish("failed")
    }, EMBED_TIMEOUT_MS)

    loadEmbedScript()
      .then(() => {
        if (!done) window.instgrm?.Embeds.process()
      })
      .catch(() => finish("failed"))

    return () => {
      done = true
      observer.disconnect()
      window.clearTimeout(timer)
      host.replaceChildren()
    }
    // Re-create only when the post itself changes (not on language changes).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post.permalink])

  return <div ref={ref} className="w-full" />
}

// Homepage Instagram section: shows ONLY posts in the curated list (lib/instagram.ts), via
// Instagram's official single-post embed. Updated manually; it is not an automatic feed.
export function InstagramCurated() {
  const { t } = useLanguage()
  const posts = getDisplayableInstagramPosts()
  const [statuses, setStatuses] = useState<Record<string, PostStatus>>({})
  const onStatus = useCallback((shortcode: string, status: PostStatus) => {
    setStatuses((prev) => (prev[shortcode] === status ? prev : { ...prev, [shortcode]: status }))
  }, [])

  const statusOf = (p: DisplayableInstagramPost): PostStatus => statuses[p.shortcode] ?? "loading"
  const loadingCount = posts.filter((p) => statusOf(p) === "loading").length
  const failedCount = posts.filter((p) => statusOf(p) === "failed").length

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
            <p className="text-sm text-muted-foreground">
              {posts.length === 1
                ? t(
                    "A selected past Instagram post. Updated manually; this is not a live feed.",
                    "Una publicación anterior seleccionada de Instagram. Se actualiza manualmente; no es una sección en vivo."
                  )
                : t(
                    "Selected past Instagram posts. Updated manually; this is not a live feed.",
                    "Publicaciones anteriores seleccionadas de Instagram. Se actualiza manualmente; no es una sección en vivo."
                  )}
            </p>
          )}
        </div>

        {posts.length === 0 ? (
          <ReviewPlaceholder
            className="mx-auto max-w-3xl"
            en="No Instagram posts have been added to this section yet. It needs links to already-published posts that have passed website content review."
            es="Aún no se han agregado publicaciones de Instagram a esta sección. Se necesitan enlaces de publicaciones ya publicadas que hayan pasado la revisión de contenido del sitio web."
          />
        ) : (
          <>
            <div aria-live="polite">
              {loadingCount > 0 && (
                <p className="mb-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  {t("Loading Instagram posts…", "Cargando publicaciones de Instagram…")}
                </p>
              )}
              {failedCount > 0 && (
                <div className="mx-auto mb-6 flex max-w-2xl items-start gap-3 rounded-lg border border-border bg-secondary p-4 text-sm text-muted-foreground">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                  <p>
                    {t(
                      "Some Instagram posts could not be loaded here (your browser may block them). You can open them on Instagram instead.",
                      "Algunas publicaciones de Instagram no se pudieron cargar aquí (es posible que su navegador las bloquee). Puede abrirlas en Instagram."
                    )}
                  </p>
                </div>
              )}
            </div>
            <ul
              className={
                posts.length === 1
                  ? "flex justify-center"
                  : "grid justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3"
              }
            >
              {posts.map((post) => {
                const status = statusOf(post)
                return (
                  <li key={post.shortcode} className={posts.length === 1 ? "w-full max-w-[540px]" : "w-full max-w-[400px]"}>
                    {/* Kept mounted so a slow embed can still finish; hidden if it failed. */}
                    <div hidden={status === "failed"}>
                      <PostEmbed post={post} onStatus={onStatus} />
                    </div>
                    {status === "failed" && (
                      <a
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-14 w-full items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4 font-semibold text-brand-navy shadow-sm hover:border-brand-teal"
                      >
                        {t(post.labelEn, post.labelEs)}
                        <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                      </a>
                    )}
                    {status !== "failed" && (
                      <a
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-navy underline underline-offset-4 hover:text-brand-teal"
                      >
                        {t(post.labelEn, post.labelEs)}
                        <span className="sr-only">{t(" (opens Instagram)", " (abre Instagram)")}</span>
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
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

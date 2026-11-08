// Curated Instagram posts for the homepage "Instagram" section.
//
// How this works (no API token, no scraping):
// - Only posts listed in CURATED_INSTAGRAM_POSTS are shown, using Instagram's official
//   post embed (the <blockquote class="instagram-media"> code + https://www.instagram.com/embed.js).
// - Nothing refreshes automatically. To change what is shown, edit this list and redeploy.
// - A post must already be published on @paredesmedical and pass a website content review
//   (recorded in reviewedBy/reviewedOn). This is a content-safety review for the website,
//   NOT clinical approval and NOT a claim that the office picked the post.
//   "Public on Instagram" alone is not enough.
// - Suitable: static general-health or Doctor-only promotional graphics.
// - Never add: facial/aesthetics posts (state license pending), procedures, patient footage,
//   testimonials, unvalidated claims, scheduled/unpublished clips, or anything that could
//   contain patient health information.
// - The full profile is NOT embedded, because a profile embed would show every post,
//   including posts that are not suitable for this site.

export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/paredesmedical/"
export const INSTAGRAM_HANDLE = "@paredesmedical"

export type CuratedInstagramPost = {
  /** Public permalink, e.g. https://www.instagram.com/p/SHORTCODE/ or /reel/SHORTCODE/ */
  url: string
  /** Who did the website content review, e.g. "Website content review (Grok Bot)" */
  reviewedBy: string
  /** Date of that review, YYYY-MM-DD */
  reviewedOn: string
  /** Short accessible label for the post link (EN / ES) */
  labelEn: string
  labelEs: string
}

// Hard block list: these must never be displayed, even if added to the curated list by mistake.
// Facial content (license pending): Berry Mask reel + archived facial posts.
export const BLOCKED_INSTAGRAM_SHORTCODES: readonly string[] = [
  "DbZwTBFs9Y6",
  "DVhdhj-D54b",
  "DVhcn_7gd3t",
  "DXXSUYdD6sX",
  "DajS5xqGbbp",
  // Procedure/Botox-type content, not suitable for the medical site.
  "DAk78spJXdU",
  // Patient-related content (explicit patient / patient-identifying raffle winner). Never display.
  "DbzCujzvvWU",
  "DYN0eToP8yh",
  // Diabetes advice graphic: not clinically reviewed for the website.
  "DLP84MOud1O",
]

// EMPTY until vetted, already-published post URLs are supplied. Do not fill with guesses.
export const CURATED_INSTAGRAM_POSTS: readonly CuratedInstagramPost[] = []

// Accepts /p/{code}/, /reel/{code}/ and the profile-scoped /{username}/p/{code}/ form;
// always normalized to the canonical /p|reel/{code}/ permalink documented for embeds.
const PERMALINK = /^https:\/\/(?:www\.)?instagram\.com\/(?:[A-Za-z0-9._]{1,30}\/)?(p|reel)\/([A-Za-z0-9_-]{5,20})\/?(?:\?.*)?$/

export type DisplayableInstagramPost = CuratedInstagramPost & { shortcode: string; permalink: string }

/** Validates, normalizes, de-duplicates and filters the curated list against the block list. */
export function getDisplayableInstagramPosts(
  posts: readonly CuratedInstagramPost[] = CURATED_INSTAGRAM_POSTS,
  blocked: readonly string[] = BLOCKED_INSTAGRAM_SHORTCODES,
): DisplayableInstagramPost[] {
  const seen = new Set<string>()
  const out: DisplayableInstagramPost[] = []
  for (const post of posts) {
    const m = PERMALINK.exec(post.url.trim())
    if (!m) continue
    const [, kind, shortcode] = m
    if (blocked.includes(shortcode) || seen.has(shortcode)) continue
    if (!post.reviewedBy.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(post.reviewedOn)) continue
    seen.add(shortcode)
    out.push({ ...post, shortcode, permalink: `https://www.instagram.com/${kind}/${shortcode}/` })
  }
  return out
}

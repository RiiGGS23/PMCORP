// Curated Instagram posts for the homepage "Instagram" section.
//
// How this works (no API token, no scraping):
// - Only posts listed in APPROVED_INSTAGRAM_POSTS are shown, using Instagram's official
//   post embed (the <blockquote class="instagram-media"> code + https://www.instagram.com/embed.js).
// - Nothing refreshes automatically. To change what is shown, edit this list and redeploy.
// - A post must be already published on @paredesmedical AND approved by the office
//   for the website. "Public on Instagram" does not mean approved.
// - Never add facial/aesthetics posts (state license pending), unreviewed patient footage,
//   or anything that could contain patient health information.
// - The full profile is NOT embedded, because a profile embed would show every post,
//   including posts that are not approved for this site.

export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/paredesmedical/"
export const INSTAGRAM_HANDLE = "@paredesmedical"

export type ApprovedInstagramPost = {
  /** Public permalink, e.g. https://www.instagram.com/p/SHORTCODE/ or /reel/SHORTCODE/ */
  url: string
  /** Who approved this post for the website (name/role) */
  approvedBy: string
  /** YYYY-MM-DD */
  approvedOn: string
  /** Short accessible label for the post link (EN / ES) */
  labelEn: string
  labelEs: string
}

// Hard block list: these must never be displayed, even if added to the approved list by mistake.
// Facial content (license pending): Berry Mask reel + archived facial posts.
export const BLOCKED_INSTAGRAM_SHORTCODES: readonly string[] = [
  "DbZwTBFs9Y6",
  "DVhdhj-D54b",
  "DVhcn_7gd3t",
  "DXXSUYdD6sX",
  "DajS5xqGbbp",
  // Procedure/Botox-type content, not approved for the medical site.
  "DAk78spJXdU",
]

// EMPTY until the office sends validated post URLs. Do not fill with guesses.
export const APPROVED_INSTAGRAM_POSTS: readonly ApprovedInstagramPost[] = []

const PERMALINK = /^https:\/\/(?:www\.)?instagram\.com\/(p|reel)\/([A-Za-z0-9_-]{5,20})\/?(?:\?.*)?$/

export type DisplayableInstagramPost = ApprovedInstagramPost & { shortcode: string; permalink: string }

/** Validates, normalizes, de-duplicates and filters the approved list against the block list. */
export function getDisplayableInstagramPosts(
  posts: readonly ApprovedInstagramPost[] = APPROVED_INSTAGRAM_POSTS,
  blocked: readonly string[] = BLOCKED_INSTAGRAM_SHORTCODES,
): DisplayableInstagramPost[] {
  const seen = new Set<string>()
  const out: DisplayableInstagramPost[] = []
  for (const post of posts) {
    const m = PERMALINK.exec(post.url.trim())
    if (!m) continue
    const [, kind, shortcode] = m
    if (blocked.includes(shortcode) || seen.has(shortcode)) continue
    if (!post.approvedBy.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(post.approvedOn)) continue
    seen.add(shortcode)
    out.push({ ...post, shortcode, permalink: `https://www.instagram.com/${kind}/${shortcode}/` })
  }
  return out
}

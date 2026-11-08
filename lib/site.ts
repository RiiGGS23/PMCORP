// Single source of truth for clinic contact details (from paredesmedicalcorp.com).
export const SITE = {
  name: "Paredes Medical Corporation",
  phoneDisplay: "(760) 972-4704",
  phoneHref: "tel:+17609724704",
  email: "customerservice@pmcorp.org",
  addressLine1: "49201 Grapefruit Boulevard, Suite #3",
  addressLine2: "Coachella, CA 92236",
  addressFull: "49201 Grapefruit Boulevard, Suite #3, Coachella, CA 92236",
  mapsHref: "https://maps.google.com/?q=49201+Grapefruit+Blvd+Suite+3+Coachella+CA+92236",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=49201+Grapefruit+Blvd+Suite+3,+Coachella,+CA+92236",
  mapsEmbed:
    "https://www.google.com/maps?q=49201+Grapefruit+Blvd+Suite+3,+Coachella,+CA+92236&output=embed",
  instagram: "https://www.instagram.com/paredesmedical",
  instagramHandle: "@paredesmedical",
  yelp: "https://yelp.to/k2DVUqmYws",
} as const

// Desert Oasis Healthcare (DOHC) lines. These are DOHC's numbers, NOT Paredes Medical
// Corporation's office line, and the clinic itself is not open 24/7.
// Source (supplied by Diana via Overseer, Nov 8 2026): https://www.mydohc.com/contact/
// plus DOHC screenshots of the "24/7 Patient Helpline" and "Main Line: Call Us First" cards.
export const DOHC = {
  name: "Desert Oasis Healthcare (DOHC)",
  contactUrl: "https://www.mydohc.com/contact/",
  helplineDisplay: "760-969-6555",
  helplineHref: "tel:+17609696555",
  mainLineDisplay: "760-325-DOHC (3642)",
  mainLineHref: "tel:+17603253642",
} as const

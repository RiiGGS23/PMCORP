import type { Metadata } from "next"
import { AestheticsContent } from "./aesthetics-content"

// Shell page only (Nov 7 relayed decision: add an aesthetics PAGE on the medical site).
// Aesthetics is a separate entity with its own site; no services are listed and nothing
// facial is promoted until the state license is issued. Kept out of search indexes until
// approved content exists.
export const metadata: Metadata = {
  title: "Aesthetics",
  robots: { index: false, follow: false },
}

export default function AestheticsPage() {
  return <AestheticsContent />
}

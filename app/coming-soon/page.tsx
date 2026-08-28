import type { Metadata } from "next"

import { ComingSoon } from "@/components/coming-soon"

export const metadata: Metadata = {
  title: "Koshima Mall — Opening Soon",
  robots: { index: false, follow: false, nocache: true },
}

// Time-sensitive gate: never prerender or cache this route.
export const dynamic = "force-dynamic"

export default function ComingSoonPage() {
  return <ComingSoon />
}

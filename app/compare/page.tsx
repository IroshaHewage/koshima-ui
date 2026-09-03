import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import {
  COMPARE_COLS,
  COMPARE_ROWS,
  storefrontImg,
} from "@/lib/storefront/data"

export default function ComparePage() {
  return (
    <div className="min-w-[1400px] bg-white text-[#101725]">
      <Header />

      <div className="mx-auto max-w-[1360px] px-7 pt-[22px]">
        <h1 className="mb-1.5 text-2xl font-bold tracking-[-0.02em]">
          Compare products
        </h1>
        <div className="mb-[22px] text-[13.5px] text-[#8A93A3]">
          Rows are built from the shared and category attributes on Skincare →
          Serums (FR-CAT-004, FR-PRD-010).
        </div>
      </div>

      <Footer />
    </div>
  )
}

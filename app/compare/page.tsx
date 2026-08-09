import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { COMPARE_COLS, COMPARE_ROWS, storefrontImg } from "@/lib/storefront/data"

export default function ComparePage() {
  return (
    <div className="min-w-[1400px] bg-white text-[#101725]">
      <Header />

      <div className="mx-auto max-w-[1360px] px-7 pt-[22px]">
        <h1 className="mb-1.5 text-2xl font-bold tracking-[-0.02em]">Compare products</h1>
        <div className="mb-[22px] text-[13.5px] text-[#8A93A3]">
          Rows are built from the shared and category attributes on Skincare → Serums
          (FR-CAT-004, FR-PRD-010).
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#E5E8EE] bg-white">
          <div className="grid grid-cols-[200px_repeat(3,1fr)]">
            <div className="border-r border-[#EEF0F4] p-[22px]" />
            {COMPARE_COLS.map((c) => (
              <div key={c.name} className="relative border-r border-[#EEF0F4] p-[22px] last:border-r-0">
                <div className="absolute top-3 right-3 cursor-pointer text-xs text-[#C9CFDA]">✕</div>
                <div className="relative mb-3.5 aspect-square overflow-hidden rounded-[10px]">
                  <Image src={storefrontImg(c.img)} alt={c.name} fill className="object-cover" />
                </div>
                <div className="mb-1.5 font-mono text-[10.5px] text-[#98A1AF]">{c.seller}</div>
                <div className="mb-2.5 min-h-[38px] text-[13.5px] leading-[1.4] font-semibold">{c.name}</div>
                <div className="mb-3 font-extrabold text-lg">Rs {c.price}</div>
                <Link
                  href="/cart"
                  className="block w-full cursor-pointer rounded-lg border-none bg-[#2563EB] py-2.5 text-center font-semibold text-[12.5px] text-white no-underline"
                >
                  Add to cart
                </Link>
              </div>
            ))}
          </div>
          {COMPARE_ROWS.map((r) => (
            <div key={r.label} className="grid grid-cols-[200px_repeat(3,1fr)] border-t border-[#EEF0F4]">
              <div className="border-r border-[#EEF0F4] bg-[#FAFBFC] px-[22px] py-3.5 font-semibold text-[12.5px] text-[#48505E]">
                {r.label}
              </div>
              <div className="border-r border-[#EEF0F4] px-[22px] py-3.5 text-[12.5px] font-medium">{r.a}</div>
              <div className="border-r border-[#EEF0F4] px-[22px] py-3.5 text-[12.5px] font-medium">{r.b}</div>
              <div className="px-[22px] py-3.5 text-[12.5px] font-medium">{r.c}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

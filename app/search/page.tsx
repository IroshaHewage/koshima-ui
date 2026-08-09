import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { ProductCard } from "@/components/storefront/product-card"
import { FACETS, PRODUCTS, SORT_OPTS } from "@/lib/storefront/data"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const query = q || "vitamin c serum"
  const gridProducts = [...PRODUCTS, ...PRODUCTS.slice(0, 8 - (PRODUCTS.length % 8 || 8))].slice(0, 8)

  return (
    <div className="min-w-[1400px] bg-white text-[#101725]">
      <Header />

      <div className="mx-auto max-w-[1360px] px-7 pt-[22px]">
        <div className="mb-1.5 flex items-baseline gap-3">
          <h1 className="text-2xl font-bold tracking-[-0.02em]">
            Results for &ldquo;{query}&rdquo;
          </h1>
          <span className="text-[13.5px] text-[#8A93A3]">148 products · 0.21s</span>
        </div>
        <div className="mb-5 text-[13px] text-[#8A93A3]">
          Also searched for <span className="cursor-pointer text-[#2563EB]">vitamin c සෙරම්</span> —
          Sinhala and English content are indexed together, and misspellings are tolerated
          (FR-SRCH-004).
        </div>

        <div className="grid grid-cols-[250px_1fr] items-start gap-6">
          <div className="overflow-hidden rounded-xl border border-[#E5E8EE] bg-white">
            <div className="border-b border-[#EEF0F4] px-[18px] py-[15px] font-bold text-[13px]">
              Refine
            </div>
            <div className="border-b border-[#EEF0F4] px-[18px] py-3.5">
              <div className="mb-3 font-semibold text-xs">Applied</div>
              <div className="flex flex-wrap gap-1.5">
                {["Skincare ✕", "4★ & up ✕", "In stock ✕"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-[#EEF3FE] px-2.5 py-1.5 text-[11.5px] font-medium text-[#2563EB]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {FACETS.map((f) => (
              <div key={f.name} className="border-b border-[#EEF0F4] px-[18px] py-4">
                <div className="mb-3.5 font-semibold text-xs">{f.name}</div>
                {f.options.map((o) => (
                  <div key={o.label} className="mb-2.5 flex cursor-pointer items-center gap-2.5">
                    <div
                      className={`flex h-4 w-4 flex-none items-center justify-center rounded text-[10px] text-white ${o.on ? "border-[1.5px] border-[#2563EB] bg-[#2563EB]" : "border-[1.5px] border-[#C9CFDA]"}`}
                    >
                      {o.on ? "✓" : ""}
                    </div>
                    <span className="flex-1 text-[12.5px] text-[#48505E]">{o.label}</span>
                    <span className="font-mono text-[11px] text-[#B3BAC6]">{o.n}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between rounded-[11px] border border-[#E5E8EE] bg-white px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-[#8A93A3]">Sort</span>
                {SORT_OPTS.map((label, i) => (
                  <span
                    key={label}
                    className={`cursor-pointer rounded-[7px] px-3 py-2 text-xs font-semibold whitespace-nowrap ${i === 0 ? "bg-[#101725] text-white" : "bg-[#F6F7F9] text-[#48505E]"}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex gap-1.5">
                <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[7px] bg-[#101725] text-[13px] text-white">▦</span>
                <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[7px] border border-[#E5E8EE] text-[13px] text-[#8A93A3]">☰</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {gridProducts.map((p, i) => (
                <ProductCard key={`${p.id}-${i}`} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-[76px] left-1/2 z-[60] flex -translate-x-1/2 items-center gap-3.5 rounded-xl bg-[#101725] px-4 py-3 shadow-[0_16px_40px_rgba(11,18,32,.32)]">
        <span className="text-xs font-semibold text-white/60">Comparing 2 of 4</span>
        <div className="flex gap-1.5">
          <div className="h-[38px] w-[38px] rounded-lg bg-white/[0.14]" />
          <div className="h-[38px] w-[38px] rounded-lg bg-white/[0.14]" />
        </div>
        <Link
          href="/compare"
          className="cursor-pointer rounded-lg border-none bg-[#2563EB] px-4 py-2.5 font-bold text-[12.5px] text-white no-underline"
        >
          Compare now
        </Link>
      </div>

      <Footer />
    </div>
  )
}

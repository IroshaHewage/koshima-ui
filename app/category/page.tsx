import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { ProductCard } from "@/components/storefront/product-card"
import { FACETS, PRODUCTS, SORT_OPTS, SUB_CATS, storefrontImg } from "@/lib/storefront/data"

export default function CategoryPage() {
  const gridProducts = [...PRODUCTS, ...PRODUCTS.slice(0, 8 - (PRODUCTS.length % 8 || 8))].slice(0, 8)

  return (
    <div className="min-w-[1400px] bg-white text-[#101725]">
      <Header />

      <div className="mx-auto max-w-[1360px] px-7 pt-[18px]">
        <div className="mb-4 text-[12.5px] text-[#8A93A3]">
          <Link href="/" className="text-inherit no-underline">Home</Link>{" "}
          <span className="text-[#C9CFDA]">/</span> Health &amp; Beauty{" "}
          <span className="text-[#C9CFDA]">/</span>{" "}
          <span className="font-semibold text-[#101725]">Skincare</span>
        </div>

        <div className="mb-[22px] flex items-center justify-between gap-[30px] rounded-2xl bg-[#FDF3F0] p-[30px_34px]">
          <div>
            <h1 className="mb-2.5 font-heading text-4xl">Skincare</h1>
            <div className="max-w-[520px] text-sm leading-relaxed text-[#8A6258]">
              3,240 products from 412 verified sellers. Serums, cleansers, sunscreen and
              Ayurvedic preparations formulated for tropical humidity.
            </div>
          </div>
          <div className="relative aspect-video w-[220px] flex-none overflow-hidden rounded-[10px]">
            <Image src={storefrontImg("cat-1")} alt="Skincare" fill className="object-cover" />
          </div>
        </div>

        <div className="mb-[22px] flex flex-wrap gap-2">
          {SUB_CATS.map((c) => (
            <span
              key={c}
              className="cursor-pointer rounded-full border border-[#E5E8EE] bg-white px-4 py-2.5 font-semibold text-[12.5px] hover:border-[#101725]"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-[250px_1fr] items-start gap-6">
          <div className="overflow-hidden rounded-xl border border-[#E5E8EE] bg-white">
            <div className="flex items-center justify-between border-b border-[#EEF0F4] px-[18px] py-[15px]">
              <span className="font-bold text-[13px]">Filters</span>
              <span className="cursor-pointer font-semibold text-[11.5px] text-[#2563EB]">Clear all</span>
            </div>
            <div className="border-b border-[#EEF0F4] px-[18px] py-4">
              <div className="mb-3.5 font-semibold text-xs">Price (LKR)</div>
              <div className="relative mx-1 mb-3.5 h-[3px] rounded-full bg-[#EEF0F4]">
                <div className="absolute top-0 bottom-0 left-[12%] right-[38%] rounded-full bg-[#2563EB]" />
                <div className="absolute top-[-5px] left-[12%] h-[13px] w-[13px] -translate-x-1/2 rounded-full border-2 border-[#2563EB] bg-white" />
                <div className="absolute top-[-5px] left-[62%] h-[13px] w-[13px] -translate-x-1/2 rounded-full border-2 border-[#2563EB] bg-white" />
              </div>
              <div className="flex gap-2">
                <div className="flex-1 rounded-[7px] border border-[#E5E8EE] px-2.5 py-2 font-mono text-xs font-medium text-[#48505E]">500</div>
                <div className="flex-1 rounded-[7px] border border-[#E5E8EE] px-2.5 py-2 font-mono text-xs font-medium text-[#48505E]">8,000</div>
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
            <div className="px-[18px] py-[15px] font-mono text-[11.5px] leading-relaxed text-[#98A1AF]">
              Facets are generated from category attributes marked filterable (FR-CAT-006).
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between rounded-[11px] border border-[#E5E8EE] bg-white px-4 py-3">
              <div className="text-[13px] font-medium text-[#48505E]">
                Showing <strong className="text-[#101725]">1–20</strong> of{" "}
                <strong className="text-[#101725]">3,240</strong>
              </div>
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
            </div>
            <div className="grid grid-cols-4 gap-4">
              {gridProducts.map((p, i) => (
                <ProductCard key={`${p.id}-${i}`} product={p} />
              ))}
            </div>
            <div className="mt-[26px] flex items-center justify-center gap-[7px]">
              <span className="rounded-lg bg-[#2563EB] px-[15px] py-[11px] font-semibold text-[12.5px] text-white">1</span>
              <span className="cursor-pointer rounded-lg border border-[#E5E8EE] bg-white px-[15px] py-[11px] font-semibold text-[12.5px]">2</span>
              <span className="cursor-pointer rounded-lg border border-[#E5E8EE] bg-white px-[15px] py-[11px] font-semibold text-[12.5px]">3</span>
              <span className="px-1.5 text-[12.5px] text-[#98A1AF]">…</span>
              <span className="cursor-pointer rounded-lg border border-[#E5E8EE] bg-white px-[15px] py-[11px] font-semibold text-[12.5px]">162</span>
              <span className="cursor-pointer rounded-lg border border-[#E5E8EE] bg-white px-[15px] py-[11px] font-semibold text-[12.5px]">Next ›</span>
              <span className="ml-3.5 font-mono text-[11.5px] text-[#98A1AF]">server-side pagination · NFR-PERF-003</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"

import { CategorySidebar, Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { ProductCard } from "@/components/storefront/product-card"
import {
  FLASH_ITEMS,
  PRODUCTS,
  RECENT,
  GATEWAYS,
  TILES,
  TRUST,
  storefrontImg,
} from "@/lib/storefront/data"

export default function Page() {
  return (
    <div className="min-w-[1400px] bg-white text-[#101725]">
      <Header />

      {/* Hero row */}
      <div className="mx-auto grid max-w-[1360px] grid-cols-[236px_1fr_268px] items-start gap-[18px] px-7 pt-6">
        <CategorySidebar />

        <div className="relative flex aspect-[3/1] items-center overflow-hidden rounded-2xl bg-[#0B1220]">
          <Image
            src={storefrontImg("hero")}
            alt="New season skincare"
            fill
            priority
            className="object-cover opacity-45"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(700px 300px at 78% 40%, rgba(37,99,235,.5), transparent 68%), linear-gradient(90deg, rgba(11,18,32,.92) 0%, rgba(11,18,32,.55) 55%, rgba(11,18,32,.1) 100%)",
            }}
          />
          <div className="relative max-w-[560px] px-[52px]">
            <div className="mb-4 font-mono text-[11.5px] tracking-[0.1em] text-[#7FA6F5]">
              NEW SEASON · SKINCARE
            </div>
            <div className="mb-3.5 font-heading text-[46px] leading-[1.06] tracking-[-0.01em] text-white">
              Ceylon botanicals,
              <br />
              <i>clinically dosed</i>
            </div>
            <div className="mb-6 text-[14.5px] leading-relaxed text-white/[0.62]">
              Up to 40% off across 1,240 verified sellers
            </div>
            <Link
              href="/category"
              className="inline-block cursor-pointer rounded-[9px] border-none bg-white px-[26px] py-3.5 text-[13.5px] font-bold text-[#0B1220] no-underline hover:bg-[#EEF3FE]"
            >
              Shop skincare
            </Link>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="rounded-xl border border-[#F6DED7] bg-[#FDF3F0] p-5">
            <div className="mb-1.5 text-sm font-bold">
              Rs 500 off your first order
            </div>
            <div className="mb-3.5 text-[12.5px] text-[#8A6258]">
              Code{" "}
              <span className="font-mono font-semibold text-[#C2352B]">
                KOSHIMA500
              </span>{" "}
              · min Rs 3,500
            </div>
            <Link
              href="/vouchers"
              className="block w-full cursor-pointer rounded-[7px] border-none bg-[#101725] px-3.5 py-2.5 text-center text-xs font-semibold text-white no-underline"
            >
              Claim voucher
            </Link>
          </div>
          <div className="rounded-xl border border-[#E5E8EE] p-5">
            <div className="mb-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-[#98A1AF]">
              PAY YOUR WAY
            </div>
            <div className="flex flex-wrap gap-1.5">
              {GATEWAYS.map((g) => (
                <span
                  key={g}
                  className="rounded-[5px] border border-[#E5E8EE] px-2 py-1.5 text-[10.5px] font-semibold text-[#48505E]"
                >
                  {g}
                </span>
              ))}
            </div>
            <div className="mt-3 text-[11.5px] text-[#8A93A3]">
              3 &amp; 6-month installments available
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="mx-auto max-w-[1360px] px-7 py-7">
        <div className="grid grid-cols-4 gap-3.5">
          {TRUST.map((t) => (
            <div
              key={t.title}
              className="flex items-center gap-[13px] rounded-[11px] bg-[#F6F7F9] px-[18px] py-4"
            >
              <div className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[9px] bg-white text-base">
                {t.icon}
              </div>
              <div>
                <div className="text-[13px] font-bold">{t.title}</div>
                <div className="mt-[3px] text-xs text-[#8A93A3]">{t.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

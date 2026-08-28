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

      {/* Flash sale */}
      <div className="mx-auto max-w-[1360px] px-7 pb-2">
        <div className="flex items-center gap-7 rounded-2xl bg-[#101725] p-6">
          <div className="flex-none">
            <div className="mb-1.5 text-xl font-bold text-white">
              Avurudu Flash Sale
            </div>
            <div className="flex items-center gap-1.5">
              {["08", "42", "19"].map((u, i) => (
                <div
                  key={i}
                  className="min-w-[34px] rounded-md bg-[#E4614C] px-[9px] py-1.5 text-center font-mono text-sm font-bold text-white"
                >
                  {u}
                </div>
              ))}
              <span className="ml-1.5 text-[11px] font-medium text-white/45">
                left
              </span>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-5 gap-3">
            {FLASH_ITEMS.map((p) => (
              <Link
                href="/product"
                key={p.name}
                className="cursor-pointer rounded-[10px] bg-white p-2.5 text-inherit no-underline"
              >
                <div className="relative mb-2 aspect-square overflow-hidden rounded-[7px]">
                  <Image
                    src={storefrontImg(p.img)}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="h-[31px] overflow-hidden text-[11.5px] leading-[1.35] font-medium">
                  {p.name}
                </div>
                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <span className="text-[13px] font-extrabold text-[#E4614C]">
                    Rs {p.price}
                  </span>
                  <span className="text-[10.5px] text-[#B3BAC6] line-through">
                    {p.was}
                  </span>
                </div>
                <div className="mt-[7px] h-1 overflow-hidden rounded-full bg-[#F1F3F6]">
                  <div
                    className="h-full bg-[#E4614C]"
                    style={{ width: p.sold }}
                  />
                </div>
                <div className="mt-[5px] text-[9.5px] font-medium text-[#8A93A3]">
                  {p.left} left
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Shop by category */}
      <div className="mx-auto max-w-[1360px] px-7 pt-8 pb-2">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-[22px] font-bold tracking-[-0.02em]">
            Shop by category
          </h2>
          <Link
            href="/category"
            className="cursor-pointer text-[13px] font-semibold text-[#2563EB] no-underline"
          >
            All categories →
          </Link>
        </div>
        <div className="grid grid-cols-8 gap-3">
          {TILES.map((t) => (
            <Link
              href="/category"
              key={t.name}
              className="cursor-pointer rounded-xl border border-[#E5E8EE] bg-white p-3.5 text-center text-inherit no-underline hover:border-[#2563EB] hover:shadow-[0_6px_18px_rgba(37,99,235,.08)]"
            >
              <div className="relative mb-[11px] aspect-square overflow-hidden rounded-full">
                <Image
                  src={storefrontImg(t.img)}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs font-semibold">{t.name}</div>
              <div className="mt-[5px] font-mono text-[10.5px] text-[#98A1AF]">
                {t.n}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Best sellers */}
      <div className="mx-auto max-w-[1360px] px-7 pt-8 pb-2">
        <div className="mb-4 flex items-baseline justify-between">
          <div>
            <h2 className="mb-1 text-[22px] font-bold tracking-[-0.02em]">
              Best sellers this week
            </h2>
            <div className="text-[13px] text-[#8A93A3]">
              Across health &amp; beauty · updated hourly
            </div>
          </div>
          <div className="flex gap-[7px]">
            <span className="cursor-pointer rounded-full bg-[#101725] px-3.5 py-2 text-xs font-semibold text-white">
              Best sellers
            </span>
            <span className="cursor-pointer rounded-full border border-[#E5E8EE] bg-white px-3.5 py-2 text-xs font-semibold text-[#48505E]">
              New arrivals
            </span>
            <span className="cursor-pointer rounded-full border border-[#E5E8EE] bg-white px-3.5 py-2 text-xs font-semibold text-[#48505E]">
              Top rated
            </span>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* Journal + seller spotlight */}
      <div className="mx-auto max-w-[1360px] px-7 pt-9 pb-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-[26px] rounded-2xl bg-[#FDF3F0] p-8">
            <div className="flex-1">
              <div className="mb-3 font-mono text-[11px] tracking-[0.09em] text-[#B07A6C]">
                FROM THE JOURNAL
              </div>
              <div className="mb-[11px] font-heading text-[27px] leading-[1.15]">
                Building a monsoon-season skin routine
              </div>
              <div className="mb-[18px] text-[13.5px] leading-relaxed text-[#8A6258]">
                Humidity changes everything. Four dermatologist-backed swaps.
              </div>
              <span className="cursor-pointer text-[13px] font-bold text-[#C2352B]">
                Read the guide →
              </span>
            </div>
            <div className="relative aspect-[4/5] w-[150px] flex-none overflow-hidden rounded-[10px]">
              <Image
                src={storefrontImg("journal")}
                alt="Monsoon skin routine"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-[26px] rounded-2xl bg-[#EEF3FE] p-8">
            <div className="flex-1">
              <div className="mb-3 font-mono text-[11px] tracking-[0.09em] text-[#5B85E0]">
                SELLER SPOTLIGHT
              </div>
              <div className="mb-[11px] font-heading text-[27px] leading-[1.15]">
                Ayurma Herbals, Kurunegala
              </div>
              <div className="mb-[18px] text-[13.5px] leading-relaxed text-[#5A6B8C]">
                ★ 4.8 from 2,140 reviews · 96 listings · ships same day
              </div>
              <Link
                href="/product"
                className="cursor-pointer text-[13px] font-bold text-[#2563EB] no-underline"
              >
                Visit store →
              </Link>
            </div>
            <div className="relative aspect-[4/5] w-[150px] flex-none overflow-hidden rounded-[10px]">
              <Image
                src={storefrontImg("seller")}
                alt="Ayurma Herbals storefront"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recently viewed */}
      <div className="mx-auto max-w-[1360px] px-7 pt-9 pb-3">
        <h2 className="mb-4 text-[22px] font-bold tracking-[-0.02em]">
          Recently viewed
        </h2>
        <div className="grid grid-cols-6 gap-3.5">
          {RECENT.map((p) => (
            <Link
              href="/product"
              key={p.name}
              className="cursor-pointer rounded-[11px] border border-[#E5E8EE] bg-white p-[11px] text-inherit no-underline hover:border-[#101725]"
            >
              <div className="relative mb-2.5 aspect-square overflow-hidden rounded-lg">
                <Image
                  src={storefrontImg(p.img)}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-h-8 text-xs leading-[1.35] font-medium">
                {p.name}
              </div>
              <div className="mt-[7px] text-[13px] font-extrabold">
                Rs {p.price}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

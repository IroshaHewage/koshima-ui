import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { PDP_PRODUCT, RECENT, SPECS, storefrontImg } from "@/lib/storefront/data"

export default function ProductPage() {
  const p = PDP_PRODUCT

  return (
    <div className="min-w-[1400px] bg-white text-[#101725]">
      <Header />

      <div className="mx-auto max-w-[1360px] px-7 pt-[18px]">
        <div className="mb-5 text-[12.5px] text-[#8A93A3]">
          <Link href="/" className="text-inherit no-underline">Home</Link>{" "}
          <span className="text-[#C9CFDA]">/</span> Skincare{" "}
          <span className="text-[#C9CFDA]">/</span> Serums &amp; essences{" "}
          <span className="text-[#C9CFDA]">/</span>{" "}
          <span className="font-semibold text-[#101725]">Vitamin C Brightening Serum</span>
        </div>

        <div className="grid grid-cols-[520px_1fr_320px] items-start gap-7">
          {/* Gallery */}
          <div>
            <div className="relative mb-3 aspect-square overflow-hidden rounded-2xl bg-[#F6F7F9]">
              <Image src={storefrontImg(p.img)} alt={p.name} fill className="object-cover" />
              <div className="absolute top-3.5 left-3.5 rounded-md bg-[#E4614C] px-2.5 py-1.5 font-bold text-[10.5px] text-white">
                -22% TODAY
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2.5">
              <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-[#2563EB]">
                <Image src={storefrontImg(p.img)} alt="" fill className="object-cover" />
              </div>
              {[0, 1, 2].map((i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-lg border border-[#E5E8EE] bg-[#F6F7F9]" />
              ))}
              <div className="flex aspect-square items-center justify-center rounded-lg border border-[#E5E8EE] bg-[#101725] text-sm text-white">
                ▶
              </div>
              <div className="flex aspect-square items-center justify-center rounded-lg border border-[#E5E8EE] bg-[#F6F7F9] font-semibold text-[11px] text-[#8A93A3]">
                +4
              </div>
            </div>
            <div className="mt-[22px] flex gap-3.5 border-t border-[#EEF0F4] pt-[18px]">
              <Link href="/product/reviews" className="cursor-pointer font-semibold text-[12.5px] text-[#48505E] no-underline">↗ Share</Link>
              <Link href="/compare" className="cursor-pointer font-semibold text-[12.5px] text-[#48505E] no-underline">⇄ Add to compare</Link>
              <Link href="/wishlist" className="cursor-pointer font-semibold text-[12.5px] text-[#48505E] no-underline">♡ Save</Link>
            </div>
          </div>

          {/* Main info */}
          <div>
            <div className="mb-3 inline-flex items-center gap-2">
              <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#EEF3FE] font-bold text-[9px] text-[#2563EB]">AH</div>
              <span className="font-semibold text-[12.5px] text-[#2563EB]">Ayurma Herbals</span>
              <span className="rounded bg-[#E7F5EF] px-1.5 py-1 font-medium text-[10px] text-[#12805C]">VERIFIED SELLER</span>
            </div>
            <h1 className="mb-3 text-[27px] leading-[1.28] font-bold tracking-[-0.02em] text-pretty">
              10% Vitamin C Brightening Serum with Ceylon Kumkumadi — 30ml
            </h1>
            <div className="mb-[18px] flex items-center gap-3.5">
              <Link href="/product/reviews" className="cursor-pointer font-semibold text-[13px] text-[#B45309] no-underline">★★★★★ 4.8</Link>
              <Link href="/product/reviews" className="cursor-pointer text-[13px] text-[#2563EB] no-underline">1,204 reviews</Link>
              <span className="text-[13px] text-[#8A93A3]">2,860 sold</span>
            </div>
            <div className="mb-5 rounded-xl bg-[#FDF3F0] p-5">
              <div className="flex items-baseline gap-3">
                <span className="font-extrabold text-[32px] text-[#C2352B]">Rs {p.price}.00</span>
                <span className="text-base text-[#B08880] line-through">Rs {p.was}.00</span>
                <span className="rounded-md bg-[#E4614C] px-2 py-1.5 font-bold text-[11.5px] text-white">SAVE Rs 1,350</span>
              </div>
              <div className="mt-2.5 text-[12.5px] leading-relaxed text-[#8A6258]">
                Price excludes VAT. Tax is calculated and shown separately at checkout
                (FR-TAX-003). Or 3 × Rs 1,617 with Koko.
              </div>
            </div>

            <div className="mb-[18px]">
              <div className="mb-2.5 font-semibold text-xs">
                Size <span className="font-normal text-[#8A93A3]">· 30ml selected</span>
              </div>
              <div className="flex gap-2.5">
                <span className="cursor-pointer rounded-lg border-2 border-[#101725] px-4 py-2.5 font-semibold text-[12.5px]">30ml</span>
                <span className="cursor-pointer rounded-lg border border-[#E5E8EE] px-4 py-2.5 font-semibold text-[12.5px] text-[#48505E]">50ml · Rs 7,400</span>
                <span className="rounded-lg border border-[#E5E8EE] px-4 py-2.5 font-semibold text-[12.5px] text-[#C9CFDA] line-through">100ml</span>
              </div>
            </div>
            <div className="mb-5">
              <div className="mb-2.5 font-semibold text-xs">Strength</div>
              <div className="flex gap-2.5">
                <span className="cursor-pointer rounded-lg border-2 border-[#101725] px-4 py-2.5 font-semibold text-[12.5px]">10% — beginner</span>
                <span className="cursor-pointer rounded-lg border border-[#E5E8EE] px-4 py-2.5 font-semibold text-[12.5px] text-[#48505E]">20% — advanced</span>
              </div>
            </div>

            <div className="mb-[22px] flex gap-3">
              <div className="flex items-center overflow-hidden rounded-[9px] border border-[#D6DAE2]">
                <span className="flex h-12 w-[42px] cursor-pointer items-center justify-center text-[15px] text-[#48505E]">−</span>
                <span className="w-11 text-center font-semibold text-sm">1</span>
                <span className="flex h-12 w-[42px] cursor-pointer items-center justify-center text-[15px] text-[#48505E]">+</span>
              </div>
              <Link
                href="/cart"
                className="flex flex-1 items-center justify-center rounded-[9px] border-none bg-[#2563EB] font-bold text-sm text-white no-underline hover:bg-[#1D4ED8]"
              >
                Add to cart
              </Link>
              <Link
                href="/checkout/address"
                className="flex flex-1 items-center justify-center rounded-[9px] border-none bg-[#101725] font-bold text-sm text-white no-underline hover:bg-black"
              >
                Buy now
              </Link>
            </div>

            <div className="mb-6 overflow-hidden rounded-xl border border-[#E5E8EE]">
              <div className="flex border-b border-[#EEF0F4]">
                <span className="border-b-2 border-[#101725] px-[18px] py-3.5 font-bold text-[12.5px]">Description</span>
                <span className="cursor-pointer px-[18px] py-3.5 text-[12.5px] text-[#8A93A3]">Specifications</span>
                <span className="cursor-pointer px-[18px] py-3.5 text-[12.5px] text-[#8A93A3]">How to use</span>
                <span className="cursor-pointer px-[18px] py-3.5 text-[12.5px] text-[#8A93A3]">Warranty</span>
                <span className="cursor-pointer px-[18px] py-3.5 text-[12.5px] text-[#8A93A3]">Packaging</span>
                <Link href="/product/reviews" className="cursor-pointer px-[18px] py-3.5 text-[12.5px] text-[#8A93A3] no-underline">
                  Reviews (1,204)
                </Link>
              </div>
              <div className="px-[22px] py-5">
                <p className="mb-4 text-sm leading-relaxed text-[#48505E] text-pretty">
                  A stabilised 10% L-ascorbic acid serum blended with cold-pressed Ceylon
                  kumkumadi and Sri Lankan sandalwood extract. Formulated for humid climates —
                  absorbs without tack, layers under sunscreen, and is fragrance-free.
                </p>
                <div className="grid grid-cols-2 gap-x-8">
                  {SPECS.map((s) => (
                    <div key={s.k} className="flex justify-between gap-4 border-b border-[#F3F5F8] py-2.5">
                      <span className="text-[12.5px] font-medium text-[#8A93A3]">{s.k}</span>
                      <span className="text-right text-[12.5px] font-medium">{s.v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-[9px] bg-[#F6F7F9] px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-[#6B7280]">
                  Package weight 0.18 kg · dimensions 4 × 4 × 11 cm — these feed both domestic
                  courier pricing and Sri Lanka Post rating (FR-PRD-014 → FR-SHP-003, FR-INTL-005).
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3.5 text-[17px] font-bold tracking-[-0.01em]">Frequently bought together</div>
              <div className="grid grid-cols-4 gap-3.5">
                {RECENT.slice(0, 4).map((r) => (
                  <Link
                    href="/product"
                    key={r.name}
                    className="rounded-[11px] border border-[#E5E8EE] bg-white p-2.5 text-inherit no-underline hover:border-[#101725]"
                  >
                    <div className="relative mb-2.5 aspect-square overflow-hidden rounded-lg">
                      <Image src={storefrontImg(r.img)} alt={r.name} fill className="object-cover" />
                    </div>
                    <div className="min-h-8 text-xs leading-[1.35] font-medium">{r.name}</div>
                    <div className="mt-1.5 font-extrabold text-[13px]">Rs {r.price}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Side panel */}
          <div className="sticky top-[140px] grid gap-3.5">
            <div className="rounded-xl border border-[#E5E8EE] p-5">
              <div className="mb-3.5 font-mono text-[11px] font-semibold tracking-[0.06em] text-[#98A1AF]">
                DELIVERY
              </div>
              <div className="mb-3.5 flex gap-2.5">
                <span className="text-[15px]">⚡</span>
                <div>
                  <div className="font-semibold text-[12.5px]">Kurunegala · Rs 300</div>
                  <div className="mt-[3px] text-xs text-[#8A93A3]">Fardar Express · arrives Wed 30 Jul</div>
                </div>
              </div>
              <div className="mb-3.5 flex gap-2.5">
                <span className="text-[15px]">✈</span>
                <div>
                  <div className="font-semibold text-[12.5px]">International from Rs 1,240</div>
                  <div className="mt-[3px] text-xs text-[#8A93A3]">Sri Lanka Post · rate by destination group</div>
                </div>
              </div>
              <div className="flex gap-2.5 border-t border-[#EEF0F4] pt-3.5">
                <span className="text-[15px]">↩</span>
                <div>
                  <div className="font-semibold text-[12.5px]">7-day returns</div>
                  <Link href="/returns" className="mt-[3px] block text-xs text-[#8A93A3] no-underline hover:text-[#2563EB]">
                    Unopened, seller-paid pickup
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-[#E5E8EE] p-5">
              <div className="mb-3.5 flex items-center gap-2.5">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-[#EEF3FE] font-bold text-[13px] text-[#2563EB]">AH</div>
                <div>
                  <div className="font-bold text-[13px]">Ayurma Herbals</div>
                  <div className="mt-1 text-[11.5px] text-[#8A93A3]">Kurunegala · since 2019</div>
                </div>
              </div>
              <div className="mb-3.5 grid grid-cols-3 gap-2">
                {[["4.8", "RATING"], ["96", "ITEMS"], ["98%", "ON TIME"]].map(([v, k]) => (
                  <div key={k} className="rounded-lg bg-[#F6F7F9] p-2.5 text-center">
                    <div className="font-bold text-sm">{v}</div>
                    <div className="mt-1 font-mono text-[9.5px] text-[#98A1AF]">{k}</div>
                  </div>
                ))}
              </div>
              <button className="w-full cursor-pointer rounded-lg border border-[#D6DAE2] bg-white py-2.5 font-semibold text-[12.5px] hover:border-[#101725]">
                Visit store
              </button>
            </div>
            <div className="rounded-xl bg-[#F6F7F9] px-[18px] py-4 text-xs leading-relaxed text-[#6B7280]">
              <div className="mb-2.5 font-semibold text-xs text-[#101725]">Seller contact</div>
              Ayurma Herbals (PVT) Ltd<br />No. 118, Negombo Road, Kurunegala<br />+94 37 494 2210
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

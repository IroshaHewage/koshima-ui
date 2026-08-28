import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { CART_GROUPS, CART_SUMMARY, storefrontImg } from "@/lib/storefront/data"

export default function CartPage() {
  return (
    <div className="min-w-[1400px] bg-white text-[#101725]">
      <Header />

      <div className="mx-auto max-w-[1360px] px-7 pt-[22px]">
        <h1 className="mb-1.5 text-2xl font-bold tracking-[-0.02em]">
          Shopping cart
        </h1>
        <div className="mb-[22px] text-[13.5px] text-[#8A93A3]">
          3 items from 2 sellers. Your order will be split into one sub-order
          per seller, each shipped and tracked separately (FR-CART-002,
          FR-ORD-010).
        </div>

        <div className="grid grid-cols-[1fr_372px] items-start gap-6">
          <div className="grid gap-3.5">
            {CART_GROUPS.map((g) => (
              <div
                key={g.seller}
                className="overflow-hidden rounded-xl border border-[#E5E8EE] bg-white"
              >
                <div className="flex items-center gap-2.5 border-b border-[#EEF0F4] bg-[#FAFBFC] px-5 py-3.5">
                  <div className="flex h-[15px] w-[15px] items-center justify-center rounded bg-[#2563EB] text-[9px] text-white">
                    ✓
                  </div>
                  <span className="text-[13px] font-bold">{g.seller}</span>
                  <span className="font-mono text-[11.5px] text-[#98A1AF]">
                    {g.location}
                  </span>
                  <span
                    className={`rounded px-1.5 py-1 text-[11px] font-semibold ${g.shipOk ? "bg-[#E7F5EF] text-[#12805C]" : "bg-[#FDF3E4] text-[#B45309]"}`}
                  >
                    {g.ship}
                  </span>
                  <span className="ml-auto cursor-pointer text-xs font-semibold text-[#2563EB]">
                    Visit store
                  </span>
                </div>
                {g.items.map((i) => (
                  <div
                    key={i.sku}
                    className="grid grid-cols-[20px_92px_1fr_130px_120px_30px] items-center gap-[18px] border-b border-[#F3F5F8] px-5 py-[18px]"
                  >
                    <div className="flex h-[15px] w-[15px] items-center justify-center rounded bg-[#2563EB] text-[9px] text-white">
                      ✓
                    </div>
                    <Link
                      href="/product"
                      className="relative block h-[92px] w-[92px] overflow-hidden rounded-[10px]"
                    >
                      <Image
                        src={storefrontImg(i.img)}
                        alt={i.name}
                        fill
                        className="object-cover"
                      />
                    </Link>
                    <div>
                      <Link
                        href="/product"
                        className="mb-2 block text-sm font-semibold text-inherit no-underline"
                      >
                        {i.name}
                      </Link>
                      <div className="mb-2 text-xs text-[#8A93A3]">
                        {i.variant}
                      </div>
                      <div className="font-mono text-[11.5px] text-[#B3BAC6]">
                        {i.sku} · {i.weight}
                      </div>
                    </div>
                    <div className="flex w-fit items-center overflow-hidden rounded-lg border border-[#D6DAE2]">
                      <span className="flex h-9 w-8 cursor-pointer items-center justify-center text-[#48505E]">
                        −
                      </span>
                      <span className="w-8 text-center text-[13px] font-semibold">
                        {i.qty}
                      </span>
                      <span className="flex h-9 w-8 cursor-pointer items-center justify-center text-[#48505E]">
                        +
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-extrabold">
                        Rs {i.total}
                      </div>
                      <div className="mt-1.5 text-[11.5px] text-[#B3BAC6] line-through">
                        Rs {i.was}
                      </div>
                    </div>
                    <div className="cursor-pointer text-center text-sm text-[#C9CFDA]">
                      ✕
                    </div>
                  </div>
                ))}
                <div className="px-5 py-3.5 text-[12.5px] text-[#48505E]">
                  {g.note}
                </div>
              </div>
            ))}
          </div>

          <div className="sticky top-[140px] grid gap-3.5">
            <div className="rounded-xl border border-[#E5E8EE] bg-white p-[20px_22px]">
              <div className="mb-[18px] text-[15px] font-bold">
                Order summary
              </div>
              {CART_SUMMARY.map((r) => (
                <div key={r.k} className="mb-3 flex justify-between">
                  <span className="text-[13px] text-[#48505E]">{r.k}</span>
                  <span
                    className={`text-[13px] font-semibold ${r.positive ? "text-[#12805C]" : ""}`}
                  >
                    {r.v}
                  </span>
                </div>
              ))}
              <div className="my-4 border-t border-[#EEF0F4]" />
              <div className="mb-1.5 flex items-baseline justify-between">
                <span className="text-[15px] font-bold">Estimated total</span>
                <span className="text-[22px] font-extrabold">Rs 21,320</span>
              </div>
              <div className="mb-4 text-[11.5px] leading-relaxed text-[#8A93A3]">
                Shipping and tax are finalised at checkout once a delivery
                address is chosen.
              </div>
              <Link
                href="/checkout/address"
                className="block w-full cursor-pointer rounded-[9px] border-none bg-[#2563EB] py-[15px] text-center text-sm font-bold text-white no-underline hover:bg-[#1D4ED8]"
              >
                Proceed to checkout
              </Link>
              <Link
                href="/"
                className="mt-3.5 block text-center text-[12.5px] font-semibold text-[#48505E] no-underline"
              >
                Continue shopping
              </Link>
            </div>
            <div className="rounded-xl border border-[#E5E8EE] bg-white p-[20px_22px]">
              <div className="mb-3 text-[12.5px] font-semibold">
                Voucher or gift card
              </div>
              <div className="mb-3 flex gap-2">
                <input
                  placeholder="Enter code"
                  className="flex-1 rounded-lg border border-[#D6DAE2] px-3 py-2.5 text-[13px] outline-none"
                />
                <button className="cursor-pointer rounded-lg border-none bg-[#101725] px-4 text-[12.5px] font-semibold text-white">
                  Apply
                </button>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-[#E7F5EF] px-3.5 py-2.5">
                <span className="font-mono text-[11.5px] font-semibold text-[#0E6B4E]">
                  KOSHIMA500
                </span>
                <span className="text-xs text-[#0E6B4E]">
                  applied · −Rs 500
                </span>
                <span className="ml-auto cursor-pointer text-xs text-[#0E6B4E]">
                  ✕
                </span>
              </div>
            </div>
            <div className="rounded-xl bg-[#F6F7F9] px-[18px] py-4 text-xs leading-relaxed text-[#6B7280]">
              Items are held for 20 minutes at checkout so stock cannot be
              oversold (FR-INV-003). If you leave, we will email a recovery link
              (FR-CART-010).
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

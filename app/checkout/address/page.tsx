import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { CheckoutSteps } from "@/components/storefront/checkout-steps"
import { ADDRESSES, ADDRESS_FIELDS, CART_SUMMARY, MINI_CART, storefrontImg } from "@/lib/storefront/data"

const TAG_TONE: Record<string, string> = {
  blue: "bg-[#EEF3FE] text-[#2563EB]",
  gray: "bg-[#F1F3F6] text-[#8A93A3]",
  amber: "bg-[#FDF3E4] text-[#B45309]",
}

export default function CheckoutAddressPage() {
  return (
    <div className="min-w-[1160px] bg-[#F6F7F9] pb-16 text-[#101725]">
      <Header variant="slim" />
      <CheckoutSteps current="address" />

      <div className="mx-auto max-w-[1160px] px-7">
        <div className="grid grid-cols-[1fr_348px] items-start gap-6">
          <div className="grid gap-3.5">
            <div className="rounded-xl border border-[#E5E8EE] bg-white p-[22px_24px]">
              <div className="mb-[18px] flex items-center justify-between">
                <div className="font-bold text-base">Delivery address</div>
                <span className="cursor-pointer font-semibold text-[12.5px] text-[#2563EB]">+ Add new address</span>
              </div>
              {ADDRESSES.map((a) => (
                <div
                  key={a.name}
                  className={`mb-2.5 flex items-start gap-3.5 rounded-[10px] p-[16px_18px] last:mb-0 ${a.selected ? "border-2 border-[#101725]" : "border border-[#E5E8EE]"}`}
                >
                  <div
                    className={`mt-0.5 h-[17px] w-[17px] flex-none rounded-full ${a.selected ? "border-[5px] border-[#2563EB]" : "border-[1.5px] border-[#C9CFDA]"}`}
                  />
                  <div className="flex-1">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="font-bold text-[13.5px]">{a.name}</span>
                      <span className={`rounded px-1.5 py-1 text-[9.5px] font-semibold ${TAG_TONE[a.tagTone]}`}>
                        {a.tag}
                      </span>
                    </div>
                    <div className="text-[13px] leading-relaxed text-[#48505E]">{a.line}</div>
                    <div className="mt-2 font-mono text-[12.5px] text-[#8A93A3]">{a.phone}</div>
                  </div>
                  <span className="cursor-pointer font-semibold text-xs text-[#8A93A3]">Edit</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-[#E5E8EE] bg-white p-[22px_24px]">
              <div className="mb-1.5 font-bold text-base">Or enter a new address</div>
              <div className="mb-5 text-[12.5px] leading-relaxed text-[#8A93A3]">
                Country, province, district, city and town come from the managed location
                hierarchy — dropdowns cascade (FR-LOC-001, FR-LOC-002).
              </div>
              <div className="grid grid-cols-2 gap-3.5">
                {ADDRESS_FIELDS.map((f) => (
                  <div key={f.label} className={f.wide ? "col-span-2" : ""}>
                    <div className="mb-2 font-semibold text-[11.5px] text-[#48505E]">{f.label}</div>
                    <div className="flex items-center justify-between rounded-lg border border-[#D6DAE2] px-3.5 py-3 text-[13px]">
                      {f.value}
                      {f.select ? <span className="text-[10px] text-[#98A1AF]">▾</span> : null}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-[18px] flex items-center gap-2.5">
                <div className="flex h-[15px] w-[15px] items-center justify-center rounded bg-[#2563EB] text-[9px] text-white">✓</div>
                <span className="text-[13px] text-[#48505E]">Save to my address book and make it the default</span>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl bg-[#EEF3FE] p-[18px_22px]">
              <div className="flex-1 text-[13px] leading-relaxed text-[#2B4C8C]">
                Checking out as a guest? You can place this order without an account and convert
                it afterwards from the confirmation email (FR-AUTH-011).
              </div>
              <button className="cursor-pointer rounded-lg border border-[#C7D8FA] bg-white px-4 py-3 font-semibold text-[12.5px] whitespace-nowrap text-[#2563EB]">
                Continue as guest
              </button>
            </div>

            <div className="flex items-center justify-between">
              <Link href="/cart" className="text-[13px] font-semibold text-[#48505E] no-underline">
                ← Back to cart
              </Link>
              <Link
                href="/checkout/shipping"
                className="cursor-pointer rounded-[9px] border-none bg-[#2563EB] px-[30px] py-[15px] font-bold text-sm text-white no-underline hover:bg-[#1D4ED8]"
              >
                Continue to shipping
              </Link>
            </div>
          </div>

          <div className="sticky top-6 rounded-xl border border-[#E5E8EE] bg-white p-[20px_22px]">
            <div className="mb-4 font-bold text-[14.5px]">Your order</div>
            {MINI_CART.map((i) => (
              <div key={i.name} className="mb-3.5 flex gap-3">
                <div className="relative h-[50px] w-[50px] flex-none overflow-hidden rounded-lg">
                  <Image src={storefrontImg(i.img)} alt={i.name} fill className="object-cover" />
                  <div className="absolute -top-1.5 -right-1.5 rounded-full bg-[#101725] px-1.5 py-1 font-bold text-[9.5px] text-white">
                    {i.qty}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[12.5px] font-medium">{i.name}</div>
                  <div className="mt-1 font-mono text-[11px] text-[#98A1AF]">{i.seller}</div>
                </div>
                <div className="font-semibold text-[12.5px] whitespace-nowrap">Rs {i.total}</div>
              </div>
            ))}
            <div className="mt-1 border-t border-[#EEF0F4] pt-3.5">
              {CART_SUMMARY.map((r) => (
                <div key={r.k} className="mb-2.5 flex justify-between">
                  <span className="text-[13px] text-[#48505E]">{r.k}</span>
                  <span className={`text-[13px] font-semibold ${r.positive ? "text-[#12805C]" : ""}`}>{r.v}</span>
                </div>
              ))}
              <div className="mt-1 flex items-baseline justify-between border-t border-[#EEF0F4] pt-3.5">
                <span className="font-bold text-sm">Total</span>
                <span className="font-extrabold text-xl">Rs 21,320</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

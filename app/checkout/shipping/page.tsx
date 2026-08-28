import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { CheckoutSteps } from "@/components/storefront/checkout-steps"
import {
  CART_SUMMARY,
  SHIP_OPTIONS,
  SHIP_SUBORDER_2,
} from "@/lib/storefront/data"

export default function CheckoutShippingPage() {
  return (
    <div className="min-w-[1160px] bg-[#F6F7F9] pb-16 text-[#101725]">
      <Header variant="slim" />
      <CheckoutSteps current="shipping" />

      <div className="mx-auto max-w-[1160px] px-7">
        <div className="grid grid-cols-[1fr_348px] items-start gap-6">
          <div className="grid gap-3.5">
            <div className="flex items-center gap-3.5 rounded-xl border border-[#E5E8EE] bg-white p-[18px_22px]">
              <span className="font-mono text-[11px] font-semibold text-[#98A1AF]">
                SHIP TO
              </span>
              <span className="text-[13px] font-medium">
                Nimasha Perera · No. 42/3, Kandy Road, Kurunegala 60000, Sri
                Lanka
              </span>
              <Link
                href="/checkout/address"
                className="ml-auto cursor-pointer text-[12.5px] font-semibold text-[#2563EB] no-underline"
              >
                Change
              </Link>
            </div>

            <div className="rounded-xl border border-[#E5E8EE] bg-white p-[22px_24px]">
              <div className="mb-1.5 text-base font-bold">
                Delivery — sub-order 1 of 2
              </div>
              <div className="mb-[18px] text-[12.5px] text-[#8A93A3]">
                Ayurma Herbals, Kurunegala · 3 items · chargeable weight 0.60 kg
                · courier: Fardar Express only
              </div>
              {SHIP_OPTIONS.map((o) => (
                <div
                  key={o.name}
                  className={`mb-2.5 flex items-start gap-3.5 rounded-[10px] p-[16px_18px] last:mb-0 ${o.selected ? "border-2 border-[#101725]" : "border border-[#E5E8EE]"}`}
                >
                  <div
                    className={`mt-0.5 h-[17px] w-[17px] flex-none rounded-full ${o.selected ? "border-[5px] border-[#2563EB]" : "border-[1.5px] border-[#C9CFDA]"}`}
                  />
                  <div className="flex-1">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="text-[13.5px] font-bold">{o.name}</span>
                      {o.tag ? (
                        <span className="rounded bg-[#EEF3FE] px-1.5 py-1 text-[9.5px] font-semibold text-[#2563EB]">
                          {o.tag}
                        </span>
                      ) : null}
                    </div>
                    <div className="text-[12.5px] text-[#8A93A3]">
                      {o.detail}
                    </div>
                  </div>
                  <div
                    className={`text-[15px] font-extrabold ${o.free ? "text-[#12805C]" : ""}`}
                  >
                    {o.price}
                  </div>
                </div>
              ))}
              <div className="mt-4 rounded-[9px] bg-[#F6F7F9] p-[14px_16px]">
                <div className="mb-2.5 font-mono text-[11px] font-semibold tracking-[0.05em] text-[#8A93A3]">
                  HOW THIS RATE WAS CALCULATED
                </div>
                <div className="grid grid-cols-4 gap-3.5">
                  {[
                    ["CHARGEABLE WT", "0.60 kg"],
                    ["FIRST 1 KG", "Rs 300.00"],
                    ["ADDITIONAL KG", "Rs 0.00"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div className="mb-1.5 font-mono text-[11px] text-[#98A1AF]">
                        {k}
                      </div>
                      <div className="text-[13px] font-semibold">{v}</div>
                    </div>
                  ))}
                  <div>
                    <div className="mb-1.5 font-mono text-[11px] text-[#98A1AF]">
                      FREE-SHIP RULE
                    </div>
                    <div className="text-[13px] font-semibold text-[#12805C]">
                      Applied &gt; Rs 10,000
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#E5E8EE] bg-white p-[22px_24px]">
              <div className="mb-1.5 text-base font-bold">
                Delivery — sub-order 2 of 2
              </div>
              <div className="mb-[18px] text-[12.5px] text-[#8A93A3]">
                Ceylon Glow, Colombo 05 · 1 item · chargeable weight 0.22 kg
              </div>
              <div className="flex items-center gap-3.5 rounded-[10px] border-2 border-[#101725] p-[16px_18px]">
                <div className="h-[17px] w-[17px] flex-none rounded-full border-[5px] border-[#2563EB]" />
                <div className="flex-1">
                  <div className="mb-1.5 text-[13.5px] font-bold">
                    {SHIP_SUBORDER_2.name}
                  </div>
                  <div className="text-[12.5px] text-[#8A93A3]">
                    {SHIP_SUBORDER_2.detail}
                  </div>
                </div>
                <div className="text-base font-extrabold">
                  {SHIP_SUBORDER_2.price}
                </div>
              </div>
            </div>

            <Link
              href="/checkout/international"
              className="flex cursor-pointer items-center gap-4 rounded-xl bg-[#0B1220] p-[18px_22px] text-inherit no-underline"
            >
              <span className="text-[19px]">✈</span>
              <div className="flex-1">
                <div className="mb-1.5 text-[13.5px] font-bold text-white">
                  Shipping outside Sri Lanka?
                </div>
                <div className="text-[12.5px] text-white/55">
                  Switch the destination country to rate against Sri Lanka Post
                  services
                </div>
              </div>
              <span className="text-[12.5px] font-semibold text-[#7FA6F5]">
                See international rating →
              </span>
            </Link>

            <div className="flex items-center justify-between">
              <Link
                href="/checkout/address"
                className="text-[13px] font-semibold text-[#48505E] no-underline"
              >
                ← Back to address
              </Link>
              <Link
                href="/checkout/payment"
                className="cursor-pointer rounded-[9px] border-none bg-[#2563EB] px-[30px] py-[15px] text-sm font-bold text-white no-underline hover:bg-[#1D4ED8]"
              >
                Continue to payment
              </Link>
            </div>
          </div>

          <div className="sticky top-6 rounded-xl border border-[#E5E8EE] bg-white p-[20px_22px]">
            <div className="mb-4 text-[14.5px] font-bold">Your order</div>
            {CART_SUMMARY.map((r) => (
              <div key={r.k} className="mb-2.5 flex justify-between">
                <span className="text-[13px] text-[#48505E]">{r.k}</span>
                <span
                  className={`text-[13px] font-semibold ${r.positive ? "text-[#12805C]" : ""}`}
                >
                  {r.v}
                </span>
              </div>
            ))}
            <div className="mt-1 flex items-baseline justify-between border-t border-[#EEF0F4] pt-3.5">
              <span className="text-sm font-bold">Total</span>
              <span className="text-xl font-extrabold">Rs 21,320</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { CheckoutSteps } from "@/components/storefront/checkout-steps"
import { CART_SUMMARY, PAY_GROUPS } from "@/lib/storefront/data"

export default function CheckoutPaymentPage() {
  return (
    <div className="min-w-[1160px] bg-[#F6F7F9] pb-16 text-[#101725]">
      <Header variant="slim" />
      <CheckoutSteps current="payment" />

      <div className="mx-auto max-w-[1160px] px-7">
        <div className="grid grid-cols-[1fr_348px] items-start gap-6">
          <div className="grid gap-3.5">
            <div className="rounded-xl border border-[#E5E8EE] bg-white p-[22px_24px]">
              <div className="mb-[18px] text-base font-bold">
                Pay with your wallet
              </div>
              <div className="flex items-center gap-3.5 rounded-[10px] border border-[#E5E8EE] p-[16px_18px]">
                <div className="flex h-[17px] w-[17px] flex-none items-center justify-center rounded-md bg-[#2563EB] text-[10px] text-white">
                  ✓
                </div>
                <div className="flex-1">
                  <div className="mb-1.5 text-[13.5px] font-bold">
                    Koshima Wallet
                  </div>
                  <div className="text-[12.5px] text-[#8A93A3]">
                    Balance Rs 1,820 · applied in full to this order
                  </div>
                </div>
                <div className="text-[15px] font-extrabold text-[#12805C]">
                  − Rs 1,820
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#E5E8EE] bg-white">
              <div className="border-b border-[#EEF0F4] p-[18px_24px] text-base font-bold">
                Payment method
              </div>
              {PAY_GROUPS.map((g, gi) => (
                <div
                  key={g.label}
                  className={`p-[18px_24px] ${gi !== PAY_GROUPS.length - 1 ? "border-b border-[#F3F5F8]" : ""}`}
                >
                  <div className="mb-3.5 font-mono text-[10.5px] font-semibold tracking-[0.06em] text-[#98A1AF]">
                    {g.label}
                  </div>
                  <div className="grid grid-cols-4 gap-2.5">
                    {g.methods.map((m) => (
                      <div
                        key={m.name}
                        className={`flex items-center gap-2.5 rounded-[9px] p-[13px_14px] ${m.selected ? "border-2 border-[#101725]" : "border border-[#E5E8EE]"} ${m.muted ? "border-dashed opacity-60" : ""}`}
                      >
                        <div
                          className={`h-[15px] w-[15px] flex-none rounded-full ${m.selected ? "border-[4.5px] border-[#2563EB]" : "border-[1.5px] border-[#C9CFDA]"}`}
                        />
                        <div>
                          <div className="text-[12.5px] font-semibold">
                            {m.name}
                          </div>
                          <div className="mt-1 text-[10.5px] text-[#98A1AF]">
                            {m.sub}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="bg-[#F8FAFF] p-[20px_24px]">
                <div className="mb-3.5 text-[12.5px] font-semibold">
                  Koko — 3 instalments
                </div>
                <div className="mb-3.5 grid grid-cols-3 gap-2.5">
                  {[
                    ["Rs 6,500", "Today", true],
                    ["Rs 6,500", "28 Aug", false],
                    ["Rs 6,500", "28 Sep", false],
                  ].map(([amt, when, on], i) => (
                    <div
                      key={i}
                      className={`rounded-[9px] bg-white p-[13px_15px] ${on ? "border border-[#D6E2FD]" : "border border-[#E5E8EE]"}`}
                    >
                      <div className="text-[15px] font-bold">{amt}</div>
                      <div className="mt-1.5 text-[11px] text-[#8A93A3]">
                        {when}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-[11.5px] text-[#8A93A3]">
                  0% interest · approval by Koko · instalment provider is
                  Appendix B #2, pending client confirmation.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#F6F7F9] p-[16px_20px]">
              <span className="text-[15px]">🔒</span>
              <div className="flex-1 text-[12.5px] leading-relaxed text-[#6B7280]">
                Card details are captured on the gateway and tokenised. Koshima
                never stores raw card data, keeping PCI-DSS scope minimal
                (FR-PAY-009, NFR-SEC-005).
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link
                href="/checkout/shipping"
                className="text-[13px] font-semibold text-[#48505E] no-underline"
              >
                ← Back to shipping
              </Link>
              <Link
                href="/checkout/review"
                className="cursor-pointer rounded-[9px] border-none bg-[#2563EB] px-[30px] py-[15px] text-sm font-bold text-white no-underline hover:bg-[#1D4ED8]"
              >
                Review order
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
            <div className="mb-2.5 flex justify-between">
              <span className="text-[13px] text-[#48505E]">Wallet applied</span>
              <span className="text-[13px] font-semibold text-[#12805C]">
                − Rs 1,820
              </span>
            </div>
            <div className="mt-1 flex items-baseline justify-between border-t border-[#EEF0F4] pt-3.5">
              <span className="text-sm font-bold">Due now</span>
              <span className="text-xl font-extrabold">Rs 19,500</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

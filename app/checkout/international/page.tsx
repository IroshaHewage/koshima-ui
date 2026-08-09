import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { CheckoutSteps } from "@/components/storefront/checkout-steps"
import { INTL_SERVICES, INTL_SUMMARY, SPECIAL_FEES } from "@/lib/storefront/data"

const TAG_TONE: Record<string, string> = {
  blue: "bg-[#EEF3FE] text-[#2563EB]",
  gray: "bg-[#F1F3F6] text-[#8A93A3] font-mono",
  green: "bg-[#E7F5EF] text-[#12805C]",
}

const SUMMARY_TONE: Record<string, string> = {
  "": "",
  green: "text-[#12805C]",
  amber: "text-[#B45309]",
}

export default function CheckoutInternationalPage() {
  return (
    <div className="min-w-[1160px] bg-[#F6F7F9] pb-16 text-[#101725]">
      <Header variant="slim" />
      <CheckoutSteps current="international" />

      <div className="mx-auto max-w-[1160px] px-7">
        <div className="grid grid-cols-[1fr_348px] items-start gap-6">
          <div className="grid gap-3.5">
            <div className="rounded-xl border border-[#E5E8EE] bg-white p-[22px_24px]">
              <div className="mb-4 font-bold text-base">International destination</div>
              <div className="mb-[18px] grid grid-cols-[1.4fr_1fr_1fr] gap-3.5">
                <div>
                  <div className="mb-2 font-semibold text-[11.5px] text-[#48505E]">Destination country</div>
                  <div className="flex items-center justify-between rounded-lg border-2 border-[#101725] px-3.5 py-3 font-semibold text-[13px]">
                    United Kingdom<span className="text-[10px] text-[#98A1AF]">▾</span>
                  </div>
                </div>
                <div>
                  <div className="mb-2 font-semibold text-[11.5px] text-[#48505E]">Postage group</div>
                  <div className="rounded-lg border border-[#E5E8EE] bg-[#F6F7F9] px-3.5 py-3 font-mono text-[13px] font-semibold text-[#48505E]">
                    Group E
                  </div>
                </div>
                <div>
                  <div className="mb-2 font-semibold text-[11.5px] text-[#48505E]">Chargeable weight</div>
                  <div className="rounded-lg border border-[#E5E8EE] bg-[#F6F7F9] px-3.5 py-3 font-mono text-[13px] font-semibold text-[#48505E]">
                    0.82 kg
                  </div>
                </div>
              </div>
              <div className="rounded-[9px] bg-[#EEF3FE] px-[15px] py-3.5 text-[12.5px] leading-relaxed text-[#2B4C8C]">
                Rates come from the Sri Lanka Post Foreign Postage schedule effective 01 Aug 2022,
                version <span className="font-mono">v2022.08</span>. Volumetric weight is compared
                against actual and the greater is charged.
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#E5E8EE] bg-white">
              <div className="flex items-center justify-between border-b border-[#EEF0F4] p-[18px_24px]">
                <div className="font-bold text-base">Available services to United Kingdom</div>
                <span className="font-mono text-[11.5px] text-[#98A1AF]">2 services hidden — over weight limit</span>
              </div>
              {INTL_SERVICES.map((s, i) => (
                <div
                  key={s.name}
                  className={`flex items-start gap-3.5 p-[18px_24px] ${i !== INTL_SERVICES.length - 1 ? "border-b border-[#F3F5F8]" : ""} ${s.selected ? "bg-[#F8FAFF]" : ""}`}
                >
                  <div
                    className={`mt-0.5 h-[17px] w-[17px] flex-none rounded-full ${s.selected ? "border-[5px] border-[#2563EB]" : "border-[1.5px] border-[#C9CFDA]"}`}
                  />
                  <div className="flex-1">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="font-bold text-[13.5px]">{s.name}</span>
                      {s.tag ? (
                        <span className={`rounded px-1.5 py-1 text-[9.5px] font-semibold ${TAG_TONE[s.tagTone]}`}>
                          {s.tag}
                        </span>
                      ) : null}
                    </div>
                    <div className="mb-1.5 text-[12.5px] text-[#8A93A3]">{s.detail}</div>
                    <div className="font-mono text-[11.5px] text-[#B3BAC6]">{s.basis}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-[16px]">{s.price}</div>
                    <div className="mt-1.5 font-mono text-[11px] text-[#B3BAC6]">{s.days}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-[#E5E8EE] bg-white p-[22px_24px]">
              <div className="mb-1.5 font-bold text-base">Special services</div>
              <div className="mb-[18px] text-[12.5px] text-[#8A93A3]">
                Optional surcharges configured by the platform (FR-INTL-006).
              </div>
              <div className="grid grid-cols-2 gap-3">
                {SPECIAL_FEES.map((f) => (
                  <div key={f.name} className="flex items-center gap-2.5 rounded-[9px] border border-[#E5E8EE] p-[13px_15px]">
                    <div
                      className={`flex h-4 w-4 flex-none items-center justify-center rounded text-[10px] text-white ${f.on ? "border-[1.5px] border-[#2563EB] bg-[#2563EB]" : "border-[1.5px] border-[#C9CFDA]"}`}
                    >
                      {f.on ? "✓" : ""}
                    </div>
                    <span className="flex-1 text-[12.5px] font-medium">{f.name}</span>
                    <span className="font-mono text-[12.5px] font-semibold">Rs {f.fee}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#F5E0BC] bg-[#FDF3E4] p-[18px_22px]">
              <div className="mb-2 flex items-center gap-2.5">
                <span className="text-[15px]">⚠</span>
                <span className="font-bold text-[13.5px] text-[#8A5A0B]">Customs duties and import taxes</span>
              </div>
              <div className="text-[12.5px] leading-relaxed text-[#8A5A0B]">
                Duties for the United Kingdom are payable by the recipient on delivery (DDU). A
                commercial invoice with declared value Rs 21,320 and HS codes 3304.99 / 3401.30
                will travel with the parcel.{" "}
                <span className="opacity-75">
                  Appendix B #4 — switch to DDP and this panel becomes an itemised estimate at
                  checkout instead.
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link href="/checkout/shipping" className="text-[13px] font-semibold text-[#48505E] no-underline">
                ← Domestic options
              </Link>
              <Link
                href="/checkout/payment"
                className="cursor-pointer rounded-[9px] border-none bg-[#2563EB] px-[30px] py-[15px] font-bold text-sm text-white no-underline hover:bg-[#1D4ED8]"
              >
                Continue to payment
              </Link>
            </div>
          </div>

          <div className="sticky top-6 grid gap-3.5">
            <div className="rounded-xl border border-[#E5E8EE] bg-white p-[20px_22px]">
              <div className="mb-4 font-bold text-[14.5px]">Your order</div>
              {INTL_SUMMARY.map((r) => (
                <div key={r.k} className="mb-2.5 flex justify-between">
                  <span className="text-[13px] text-[#48505E]">{r.k}</span>
                  <span className={`text-[13px] font-semibold ${SUMMARY_TONE[r.tone]}`}>{r.v}</span>
                </div>
              ))}
              <div className="mt-1 flex items-baseline justify-between border-t border-[#EEF0F4] pt-3.5">
                <span className="font-bold text-sm">Total</span>
                <span className="font-extrabold text-xl">Rs 25,110</span>
              </div>
              <div className="mt-2.5 text-[11.5px] text-[#8A93A3]">
                ≈ USD 83.70 at 300.0 LKR/USD · charged in LKR
              </div>
            </div>
            <div className="rounded-xl bg-[#F6F7F9] p-[16px_18px] font-mono text-[11.5px] leading-relaxed text-[#6B7280]">
              Rate lookup returned in 340 ms
              <br />
              NFR-PERF-004 target &lt; 1 s
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

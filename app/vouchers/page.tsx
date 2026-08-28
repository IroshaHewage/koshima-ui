import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { VOUCHER_AMOUNTS, VOUCHER_DESIGNS } from "@/lib/storefront/data"

export default function VouchersPage() {
  return (
    <div className="min-w-[1400px] bg-white text-[#101725]">
      <Header />

      <div className="mx-auto max-w-[1160px] px-7 pt-[30px]">
        <div className="grid grid-cols-[1fr_400px] items-start gap-9">
          <div>
            <h1 className="mb-3 font-heading text-[40px] leading-[1.14]">
              Give the whole marketplace
            </h1>
            <p className="mb-[30px] max-w-[520px] text-[15px] leading-relaxed text-pretty text-[#6B7280]">
              A Koshima gift voucher works across every seller and category,
              never expires within 12 months of purchase, and arrives by email
              the moment you choose.
            </p>

            <div className="mb-3.5 text-xs font-semibold">Choose a design</div>
            <div className="mb-7 grid grid-cols-3 gap-3.5">
              {VOUCHER_DESIGNS.map((d) => (
                <div
                  key={d.name}
                  className={`overflow-hidden rounded-xl ${d.selected ? "border-2 border-[#101725]" : "border border-[#E5E8EE]"}`}
                >
                  <div
                    className="flex aspect-video items-center justify-center"
                    style={{ background: d.bg }}
                  >
                    <span
                      className="font-heading text-[26px]"
                      style={{ color: d.ink }}
                    >
                      {d.label}
                    </span>
                  </div>
                  <div className="p-[11px_12px] text-center text-xs font-semibold">
                    {d.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-3.5 text-xs font-semibold">Amount</div>
            <div className="mb-7 flex flex-wrap gap-2.5">
              {VOUCHER_AMOUNTS.map((a, i) => (
                <span
                  key={a}
                  className={`cursor-pointer rounded-lg px-[18px] py-3.5 text-[13px] font-semibold ${i === 2 ? "bg-[#101725] text-white" : "border border-[#E5E8EE] bg-white text-[#48505E]"}`}
                >
                  {a}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-2 text-[11.5px] font-semibold text-[#48505E]">
                  Recipient name
                </div>
                <div className="rounded-lg border border-[#D6DAE2] px-3.5 py-3 text-[13px]">
                  Sanduni Perera
                </div>
              </div>
              <div>
                <div className="mb-2 text-[11.5px] font-semibold text-[#48505E]">
                  Recipient email
                </div>
                <div className="rounded-lg border border-[#D6DAE2] px-3.5 py-3 text-[13px]">
                  sanduni.p@gmail.com
                </div>
              </div>
              <div className="col-span-2">
                <div className="mb-2 text-[11.5px] font-semibold text-[#48505E]">
                  Message (optional)
                </div>
                <div className="min-h-16 rounded-lg border border-[#D6DAE2] px-3.5 py-3 text-[13px] leading-relaxed text-[#48505E]">
                  Happy birthday akki — pick something lovely. Love, Nimasha
                </div>
              </div>
              <div>
                <div className="mb-2 text-[11.5px] font-semibold text-[#48505E]">
                  Send on
                </div>
                <div className="flex items-center justify-between rounded-lg border border-[#D6DAE2] px-3.5 py-3 text-[13px]">
                  14 August 2026
                  <span className="text-[10px] text-[#98A1AF]">▾</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky top-[140px] grid gap-3.5">
            <div className="relative overflow-hidden rounded-2xl bg-[#0B1220] p-[26px_28px] text-white">
              <div className="relative">
                <Image
                  src="/images/koshima-mall-logo.png"
                  alt="Koshima Mall"
                  width={121}
                  height={194}
                  className="mb-5 h-[26px] w-auto brightness-0 invert"
                />
                <div className="mb-2.5 font-mono text-[11px] tracking-[0.1em] text-white/45">
                  GIFT VOUCHER
                </div>
                <div className="mb-[18px] text-[34px] font-extrabold">
                  Rs 10,000
                </div>
                <div className="font-mono text-[13px] tracking-[0.08em] text-[#7FA6F5]">
                  KMGV-••••-••••-4471
                </div>
                <div className="mt-[18px] text-[11.5px] leading-relaxed text-white/45">
                  Valid until 14 Aug 2027 · redeemable at checkout against any
                  seller
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-[#E5E8EE] bg-white p-[20px_22px]">
              <div className="mb-2.5 flex justify-between">
                <span className="text-[13px] text-[#48505E]">
                  Voucher value
                </span>
                <span className="text-[13px] font-semibold">Rs 10,000</span>
              </div>
              <div className="mb-2.5 flex justify-between">
                <span className="text-[13px] text-[#48505E]">Processing</span>
                <span className="text-[13px] font-semibold">Rs 0</span>
              </div>
              <div className="mt-1 flex items-baseline justify-between border-t border-[#EEF0F4] pt-3.5">
                <span className="text-sm font-bold">Total</span>
                <span className="text-xl font-extrabold">Rs 10,000</span>
              </div>
              <Link
                href="/checkout/payment"
                className="mt-4 block w-full cursor-pointer rounded-[9px] border-none bg-[#2563EB] py-[15px] text-center text-sm font-bold text-white no-underline"
              >
                Buy voucher
              </Link>
            </div>
            <div className="rounded-xl bg-[#F6F7F9] p-[16px_18px] text-xs leading-relaxed text-[#6B7280]">
              Vouchers are issued against a purchased-voucher ledger, redeemed
              at checkout, and settle against platform rather than seller
              balances (FR-PROMO-004, FR-PROMO-006).
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

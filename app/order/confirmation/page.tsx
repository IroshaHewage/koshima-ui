import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { CONFIRM_ORDERS } from "@/lib/storefront/data"

export default function OrderConfirmationPage() {
  return (
    <div className="min-w-[1400px] bg-white text-[#101725]">
      <Header />

      <div className="mx-auto max-w-[900px] px-7 pt-11">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#E7F5EF] text-[26px] text-[#12805C]">
            ✓
          </div>
          <h1 className="mb-3 font-heading text-[38px] leading-[1.15]">Thank you, Nimasha</h1>
          <div className="text-[15px] leading-relaxed text-[#6B7280]">
            Your payment of <strong className="text-[#101725]">Rs 19,500</strong> was authorised.
            A branded confirmation email is on its way to n.perera@gmail.com, and an SMS to
            +94 77 412 8890.
          </div>
        </div>

        <div className="mb-4 overflow-hidden rounded-2xl border border-[#E5E8EE] bg-white">
          <div className="grid grid-cols-4 border-b border-[#EEF0F4]">
            {[
              ["ORDER NUMBER", "KM-26-108447", ""],
              ["PLACED", "28 Jul 2026, 14:22", ""],
              ["PAYMENT", "Authorised", "text-[#12805C]"],
              ["SUB-ORDERS", "2", ""],
            ].map(([label, val, tone], i) => (
              <div key={label} className={`p-[18px_22px] ${i !== 3 ? "border-r border-[#EEF0F4]" : ""}`}>
                <div className="mb-2.5 font-mono text-[10.5px] text-[#98A1AF]">{label}</div>
                <div className={`text-[13.5px] font-semibold ${tone} ${label === "ORDER NUMBER" ? "font-mono" : ""}`}>
                  {val}
                </div>
              </div>
            ))}
          </div>
          {CONFIRM_ORDERS.map((o) => (
            <div key={o.id} className="flex items-center gap-[18px] border-b border-[#F3F5F8] p-[20px_22px]">
              <div className="h-12 w-12 flex-none rounded-lg bg-[#F1F3F6]" />
              <div className="flex-1">
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="font-mono text-[13.5px] font-bold">{o.id}</span>
                  <span className="rounded bg-[#FDF3E4] px-1.5 py-1 font-semibold text-[10px] text-[#B45309]">
                    AWAITING APPROVAL
                  </span>
                </div>
                <div className="text-[12.5px] text-[#8A93A3]">{o.detail}</div>
              </div>
              <div className="font-bold text-[15px]">Rs {o.total}</div>
            </div>
          ))}
          <div className="flex gap-2.5 p-[18px_22px]">
            <Link
              href="/order/track"
              className="cursor-pointer rounded-lg border-none bg-[#2563EB] px-[18px] py-3 font-semibold text-[12.5px] text-white no-underline"
            >
              Track this order
            </Link>
            <button className="cursor-pointer rounded-lg border border-[#D6DAE2] bg-white px-[18px] py-3 font-semibold text-[12.5px]">
              Download invoice (PDF)
            </button>
            <Link
              href="/"
              className="cursor-pointer rounded-lg border border-[#D6DAE2] bg-white px-[18px] py-3 font-semibold text-[12.5px] no-underline"
            >
              Continue shopping
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-5 rounded-xl bg-[#EEF3FE] p-[20px_24px]">
          <div className="flex-1">
            <div className="mb-1.5 font-bold text-sm">
              Create an account and keep everything in one place
            </div>
            <div className="text-[13px] leading-relaxed text-[#2B4C8C]">
              You checked out as a guest. Set a password and this order, its tracking and its
              invoice move into your account (FR-AUTH-011).
            </div>
          </div>
          <button className="cursor-pointer rounded-lg border-none bg-[#2563EB] px-5 py-3.5 font-semibold text-[12.5px] whitespace-nowrap text-white">
            Create account
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

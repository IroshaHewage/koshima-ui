import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { CheckoutSteps } from "@/components/storefront/checkout-steps"
import { CART_GROUPS, CART_SUMMARY, storefrontImg } from "@/lib/storefront/data"

export default function CheckoutReviewPage() {
  return (
    <div className="min-w-[1160px] bg-[#F6F7F9] pb-16 text-[#101725]">
      <Header variant="slim" />
      <CheckoutSteps current="review" />

      <div className="mx-auto max-w-[1160px] px-7">
        <div className="grid grid-cols-[1fr_348px] items-start gap-6">
          <div className="grid gap-3.5">
            <div className="grid grid-cols-3 gap-6 rounded-xl border border-[#E5E8EE] bg-white p-[20px_24px]">
              <div>
                <div className="mb-2.5 font-mono text-[10.5px] font-semibold tracking-[0.06em] text-[#98A1AF]">
                  DELIVER TO
                </div>
                <div className="text-[13px] leading-relaxed font-semibold">
                  Nimasha Perera
                  <br />
                  <span className="font-normal text-[#48505E]">
                    No. 42/3, Kandy Road, Wehera, Kurunegala 60000
                  </span>
                </div>
                <Link
                  href="/checkout/address"
                  className="mt-2.5 inline-block text-xs font-semibold text-[#2563EB] no-underline"
                >
                  Change
                </Link>
              </div>
              <div>
                <div className="mb-2.5 font-mono text-[10.5px] font-semibold tracking-[0.06em] text-[#98A1AF]">
                  SHIPPING
                </div>
                <div className="text-[13px] leading-relaxed font-semibold">
                  Fardar Express standard
                  <br />
                  <span className="font-normal text-[#48505E]">
                    2 sub-orders · arrives Wed 30 Jul
                  </span>
                </div>
                <Link
                  href="/checkout/shipping"
                  className="mt-2.5 inline-block text-xs font-semibold text-[#2563EB] no-underline"
                >
                  Change
                </Link>
              </div>
              <div>
                <div className="mb-2.5 font-mono text-[10.5px] font-semibold tracking-[0.06em] text-[#98A1AF]">
                  PAYMENT
                </div>
                <div className="text-[13px] leading-relaxed font-semibold">
                  PayHere · Visa •••• 4291
                  <br />
                  <span className="font-normal text-[#48505E]">
                    + Rs 1,820 wallet
                  </span>
                </div>
                <Link
                  href="/checkout/payment"
                  className="mt-2.5 inline-block text-xs font-semibold text-[#2563EB] no-underline"
                >
                  Change
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-3 rounded-[11px] bg-[#E7F5EF] p-[15px_20px]">
              <span className="text-[15px]">✓</span>
              <div className="text-[12.5px] leading-relaxed text-[#0E6B4E]">
                Stock and prices were re-validated 8 seconds ago. Nothing
                changed since you added these items (FR-CART-005).
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

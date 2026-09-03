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
      </div>

      <Footer />
    </div>
  )
}

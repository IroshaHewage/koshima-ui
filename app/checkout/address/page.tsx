import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { CheckoutSteps } from "@/components/storefront/checkout-steps"
import {
  ADDRESSES,
  ADDRESS_FIELDS,
  CART_SUMMARY,
  MINI_CART,
  storefrontImg,
} from "@/lib/storefront/data"

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

      <Footer />
    </div>
  )
}

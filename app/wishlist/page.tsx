import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { WISH_ITEMS, storefrontImg } from "@/lib/storefront/data"

export default function WishlistPage() {
  return (
    <div className="min-w-[1400px] bg-white text-[#101725]">
      <Header />

      <div className="mx-auto max-w-[1360px] px-7 pt-[22px]">
        <div className="mb-5 flex items-baseline justify-between">
          <div>
            <h1 className="mb-1.5 text-2xl font-bold tracking-[-0.02em]">
              My wishlist
            </h1>
            <div className="text-[13.5px] text-[#8A93A3]">
              {WISH_ITEMS.length} saved items · 2 have dropped in price since
              you saved them
            </div>
          </div>
          <div className="flex gap-2.5">
            <button className="cursor-pointer rounded-lg border border-[#D6DAE2] bg-white px-4 py-3 text-[12.5px] font-semibold">
              Share list
            </button>
            <Link
              href="/cart"
              className="cursor-pointer rounded-lg border-none bg-[#2563EB] px-[18px] py-3 text-[12.5px] font-semibold text-white no-underline"
            >
              Move all in stock to cart
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

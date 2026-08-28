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

        <div className="grid gap-3">
          {WISH_ITEMS.map((w) => (
            <div
              key={w.name}
              className="grid grid-cols-[88px_1fr_180px_160px] items-center gap-5 rounded-xl border border-[#E5E8EE] bg-white p-[16px_18px]"
            >
              <Link
                href="/product"
                className="relative block h-[88px] w-[88px] overflow-hidden rounded-[10px]"
              >
                <Image
                  src={storefrontImg(w.img)}
                  alt={w.name}
                  fill
                  className="object-cover"
                />
              </Link>
              <div>
                <div className="mb-1.5 font-mono text-[10.5px] text-[#98A1AF]">
                  {w.seller}
                </div>
                <Link
                  href="/product"
                  className="mb-2 block text-[14.5px] font-semibold text-inherit no-underline"
                >
                  {w.name}
                </Link>
                <div className="text-xs text-[#8A93A3]">Saved {w.saved}</div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[17px] font-extrabold">
                    Rs {w.price}
                  </span>
                  {w.delta ? (
                    <span className="rounded-md bg-[#E7F5EF] px-1.5 py-1 text-[11.5px] font-semibold text-[#12805C]">
                      {w.delta}
                    </span>
                  ) : null}
                </div>
                <div
                  className={`mt-2 text-xs font-medium ${w.stockOk ? "text-[#12805C]" : w.stock.startsWith("Low") ? "text-[#B45309]" : "text-[#C2352B]"}`}
                >
                  {w.stock}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/cart"
                  className="cursor-pointer rounded-lg border-none bg-[#2563EB] py-2.5 text-center text-[12.5px] font-semibold text-white no-underline"
                >
                  {w.btn}
                </Link>
                <span className="cursor-pointer text-center text-xs font-medium text-[#8A93A3]">
                  Remove
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

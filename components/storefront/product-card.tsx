import Image from "next/image"
import Link from "next/link"

import type { Product } from "@/lib/storefront/data"
import { storefrontImg } from "@/lib/storefront/data"

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-[#E5E8EE] bg-white hover:border-[#101725] hover:shadow-[0_10px_26px_rgba(11,18,32,.09)]">
      <Link href="/product" className="relative block aspect-square">
        <Image src={storefrontImg(product.img)} alt={product.name} fill className="object-cover" />
        <div className="absolute top-2.5 left-2.5 rounded-[5px] bg-[#E4614C] px-[7px] py-[5px] font-bold text-[10px] text-white">
          {product.badge}
        </div>
        <div className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[13px] text-[#8A93A3]">
          ♡
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-3.5 pb-4">
        <div className="mb-[7px] font-mono text-[10.5px] text-[#98A1AF]">{product.seller}</div>
        <Link
          href="/product"
          className="mb-2.5 min-h-9 text-[13px] leading-[1.4] font-medium text-inherit no-underline"
        >
          {product.name}
        </Link>
        <div className="mb-2.5 flex items-center gap-1.5">
          <span className="font-semibold text-[11px] text-[#B45309]">★ {product.rating}</span>
          <span className="text-[11px] text-[#98A1AF]">({product.reviews})</span>
          <span className="ml-auto text-[11px] text-[#12805C]">In stock</span>
        </div>
        <div className="mt-auto flex items-baseline gap-[7px]">
          <span className="font-extrabold text-base">Rs {product.price}</span>
          <span className="text-xs text-[#B3BAC6] line-through">{product.was}</span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <Link
            href="/cart"
            className="flex-1 cursor-pointer rounded-lg border-none bg-[#EEF3FE] py-2.5 text-center font-semibold text-[12.5px] text-[#2563EB] no-underline hover:bg-[#2563EB] hover:text-white"
          >
            Add to cart
          </Link>
          <Link
            href="/compare"
            className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-[#E5E8EE] text-[#8A93A3] no-underline hover:border-[#101725] hover:text-[#101725]"
          >
            ⇄
          </Link>
        </div>
      </div>
    </div>
  )
}

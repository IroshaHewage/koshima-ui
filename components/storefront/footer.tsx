import Image from "next/image"
import Link from "next/link"

import { FOOTER_COLS, GATEWAYS } from "@/lib/storefront/data"

const LINK_TARGETS: Record<string, string> = {
  "All categories": "/category",
  "Flash sale": "/category",
  "New arrivals": "/category",
  "Best sellers": "/category",
  "Gift vouchers": "/vouchers",
  "Help centre": "/returns",
  "Track your order": "/order/track",
  "Returns & refunds": "/returns",
  "Shipping & delivery": "/returns",
  "Contact us": "/returns",
  "About Koshima": "/returns",
  "Sell on Koshima": "/returns",
  "Blog & news": "/returns",
  "Terms of service": "/returns",
  "Privacy policy": "/returns",
}

export function Footer() {
  return (
    <div className="mt-14 bg-[#0B1220] text-white/60">
      <div className="mx-auto grid max-w-[1360px] grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] gap-9 px-7 pt-[52px] pb-7">
        <div>
          <Link
            href="/"
            className="mb-4 flex items-center gap-[11px] no-underline"
          >
            <Image
              src="/images/koshima-mall-logo.png"
              alt="Koshima Mall"
              width={121}
              height={194}
              className="h-[30px] w-auto brightness-0 invert"
            />
            <div className="text-base font-extrabold text-white">
              Koshima Mall
            </div>
          </Link>
          <p className="mb-[18px] max-w-[270px] text-[13px] leading-relaxed">
            Sri Lanka&apos;s multi-vendor marketplace for health, beauty and
            everything else. Operated by Niko Holdings (PVT) Ltd, Kurunegala.
          </p>
          <div className="font-mono text-[12.5px] leading-loose text-white/[0.42]">
            0372 041 201
            <br />
            hello@koshimamall.com
          </div>
        </div>
        {FOOTER_COLS.map((col) => (
          <div key={col.title}>
            <div className="mb-[15px] text-xs font-bold text-white">
              {col.title}
            </div>
            {col.links.map((l) => (
              <Link
                key={l}
                href={LINK_TARGETS[l] ?? "/"}
                className="mb-[11px] block cursor-pointer text-[13px] no-underline hover:text-white"
              >
                {l}
              </Link>
            ))}
          </div>
        ))}
        <div>
          <div className="mb-[15px] text-xs font-bold text-white">
            Stay in the loop
          </div>
          <div className="mb-3.5 flex overflow-hidden rounded-[9px] border border-white/[0.16]">
            <input
              placeholder="Your email"
              className="flex-1 border-none bg-transparent px-3.5 py-2.5 text-[12.5px] text-white outline-none"
            />
            <button className="cursor-pointer border-none bg-[#2563EB] px-[15px] text-xs font-semibold text-white">
              Join
            </button>
          </div>
          <div className="text-[11.5px] leading-relaxed text-white/[0.35]">
            By joining you accept our Privacy Policy. Unsubscribe anytime (PDPA
            No. 9 of 2022).
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-5 border-t border-white/[0.09] px-7 pt-5 pb-10">
        <div className="text-xs text-white/40">
          © 2026 Niko Holdings (PVT) Ltd · All rights reserved
        </div>
        <div className="flex flex-wrap gap-1.5">
          {GATEWAYS.map((g) => (
            <span
              key={g}
              className="rounded border border-white/[0.14] px-2 py-1.5 text-[10px] font-semibold text-white/[0.55]"
            >
              {g}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

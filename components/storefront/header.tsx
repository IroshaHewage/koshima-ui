"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import * as React from "react"

import {
  NAV_CATS,
  SIDE_CATS,
  SUGGESTIONS,
  SUGGEST_PRODUCTS,
  storefrontImg,
} from "@/lib/storefront/data"

function Logo({
  dark = false,
  size = "md",
}: {
  dark?: boolean
  size?: "md" | "sm"
}) {
  return (
    <Link
      href="/"
      className="flex flex-none cursor-pointer items-center gap-[11px]"
    >
      <Image
        src="/images/koshima-mall-logo.png"
        alt="Koshima Mall"
        width={121}
        height={194}
        className={size === "md" ? "h-[34px] w-auto" : "h-[30px] w-auto"}
        priority
      />
      <div>
        <div
          className={`text-lg font-extrabold tracking-[-0.02em] ${dark ? "text-white" : ""}`}
        >
          Koshima Mall
        </div>
        {size === "md" ? (
          <div className="mt-[3px] font-mono text-[9.5px] font-medium tracking-[0.09em] text-[#98A1AF]">
            SHOP EVERYTHING
          </div>
        ) : null}
      </div>
    </Link>
  )
}

function SearchBox() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const wrapRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  function submit(q: string) {
    setOpen(false)
    router.push(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <div ref={wrapRef} className="relative max-w-[720px] flex-1">
      <div className="flex h-[46px] items-center overflow-hidden rounded-[10px] border-2 border-[#101725]">
        <div className="flex h-full cursor-pointer items-center gap-[7px] border-r border-[#E5E8EE] px-3.5 text-[13px] font-semibold whitespace-nowrap text-[#48505E]">
          All categories <span className="text-[9px] text-[#98A1AF]">▾</span>
        </div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit(value || "vitamin c serum")
          }}
          placeholder="Search for vitamin C serum, hair oil, sunscreen…"
          className="h-full flex-1 border-none px-3.5 text-sm text-[#101725] outline-none"
        />
        <button
          onClick={() => submit(value || "vitamin c serum")}
          className="h-full cursor-pointer border-none bg-[#2563EB] px-6 text-[13.5px] font-semibold text-white hover:bg-[#1D4ED8]"
        >
          Search
        </button>
      </div>

      {open ? (
        <div className="absolute top-[calc(100%+6px)] left-0 z-50 w-[560px] overflow-hidden rounded-xl border border-[#E5E8EE] bg-white shadow-[0_18px_44px_rgba(11,18,32,.16)]">
          <div className="border-b border-[#EEF0F4] px-4 py-3 font-mono text-[10.5px] font-semibold tracking-[0.06em] text-[#98A1AF]">
            SUGGESTIONS
          </div>
          {SUGGESTIONS.map((s) => (
            <div
              key={s.q}
              onClick={() => submit(s.q)}
              className="flex cursor-pointer items-center gap-3 px-4 py-2.5 hover:bg-[#F6F7F9]"
            >
              <span className="text-[13px] text-[#98A1AF]">⌕</span>
              <span className="flex-1 text-[13.5px]">{s.q}</span>
              <span className="font-mono text-[11.5px] text-[#B3BAC6]">
                {s.n}
              </span>
            </div>
          ))}
          <div className="border-t border-b border-[#EEF0F4] px-4 py-3 font-mono text-[10.5px] font-semibold tracking-[0.06em] text-[#98A1AF]">
            TOP PRODUCTS
          </div>
          {SUGGEST_PRODUCTS.map((p) => (
            <Link
              key={p.name}
              href="/product"
              className="flex items-center gap-3 px-4 py-2.5 text-inherit no-underline hover:bg-[#F6F7F9]"
            >
              <div className="relative h-[42px] w-[42px] flex-none overflow-hidden rounded-md">
                <Image
                  src={storefrontImg(p.img)}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-[13px] leading-[1.3]">{p.name}</div>
                <div className="mt-1 font-mono text-[11px] text-[#98A1AF]">
                  {p.seller}
                </div>
              </div>
              <div className="text-[13px] font-bold">Rs {p.price}</div>
            </Link>
          ))}
          <div className="bg-[#F6F7F9] px-4 py-2.5 font-mono text-[11.5px] text-[#98A1AF]">
            ↑↓ to navigate · enter to search
          </div>
        </div>
      ) : null}
    </div>
  )
}

export function Header({ variant = "full" }: { variant?: "full" | "slim" }) {
  if (variant === "slim") {
    return (
      <div className="border-b border-[#EEF0F4] bg-white">
        <div className="mx-auto flex h-[74px] max-w-[1160px] items-center justify-between px-7">
          <Logo size="sm" />
          <div className="flex items-center gap-2.5 text-[12.5px] font-medium text-[#12805C]">
            <span className="text-sm">🔒</span> Secure checkout · TLS 1.2+ ·
            gateway tokenized
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-[#0B1220] text-xs font-medium text-white/[0.72]">
        <div className="mx-auto flex h-[38px] max-w-[1360px] items-center justify-between px-7">
          <div className="flex items-center gap-[22px]">
            <span>Free delivery islandwide over Rs 10,000</span>
            <span className="text-white/[0.28]">·</span>
            <span>We ship worldwide via Sri Lanka Post</span>
          </div>
          <div className="flex items-center gap-[18px]">
            <Link
              href="/order/track"
              className="text-inherit no-underline hover:text-white"
            >
              Track order
            </Link>
            <span className="cursor-pointer hover:text-white">Help</span>
            <span className="cursor-pointer hover:text-white">
              Sell on Koshima
            </span>
            <div className="h-4 w-px bg-white/[0.18]" />
            <div className="flex items-center gap-0.5 rounded-md bg-white/[0.07] p-[3px]">
              <span className="rounded bg-[#2563EB] px-2 py-1 text-[11px] font-semibold text-white">
                EN
              </span>
              <span className="rounded px-2 py-1 text-[11px] font-semibold text-white/60">
                සිං
              </span>
            </div>
            <span className="flex cursor-pointer items-center gap-1 hover:text-white">
              LKR&nbsp;Rs <span className="text-[9px]">▾</span>
            </span>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b border-[#EEF0F4] bg-white">
        <div className="mx-auto flex h-[76px] max-w-[1360px] items-center gap-7 px-7">
          <Logo />
          <SearchBox />
          <div className="ml-auto flex flex-none items-center gap-5">
            <Link
              href="/compare"
              className="flex flex-col items-center gap-1 text-[#48505E] no-underline hover:text-[#2563EB]"
            >
              <div className="text-[17px] leading-none">⇄</div>
              <div className="text-[11px] font-medium">Compare</div>
            </Link>
            <Link
              href="/wishlist"
              className="relative flex flex-col items-center gap-1 text-[#48505E] no-underline hover:text-[#2563EB]"
            >
              <div className="text-[17px] leading-none">♡</div>
              <div className="text-[11px] font-medium">Wishlist</div>
              <div className="absolute -top-[5px] right-[2px] rounded-full bg-[#E4614C] px-[5px] py-[3px] text-[9.5px] font-bold text-white">
                6
              </div>
            </Link>
            <Link
              href="/cart"
              className="relative flex flex-col items-center gap-1 text-[#48505E] no-underline hover:text-[#2563EB]"
            >
              <div className="text-[17px] leading-none">⌂</div>
              <div className="text-[11px] font-medium">Cart</div>
              <div className="absolute -top-[5px] -right-[2px] rounded-full bg-[#2563EB] px-[5px] py-[3px] text-[9.5px] font-bold text-white">
                3
              </div>
            </Link>
          </div>
        </div>
        <div className="mx-auto flex h-11 max-w-[1360px] items-center gap-[26px] border-t border-[#F3F5F8] px-7">
          <Link
            href="/category"
            className="flex items-center gap-[7px] text-[13px] font-bold text-[#2563EB] no-underline"
          >
            ☰ Shop by category
          </Link>
          {NAV_CATS.map((c) => (
            <Link
              key={c}
              href="/category"
              className="cursor-pointer text-[13px] font-medium whitespace-nowrap text-[#48505E] no-underline hover:text-[#101725]"
            >
              {c}
            </Link>
          ))}
          <span className="ml-auto flex cursor-pointer items-center gap-1.5 text-[12.5px] font-bold whitespace-nowrap text-[#E4614C]">
            ● Avurudu Flash Sale
          </span>
        </div>
      </div>
    </>
  )
}

export function CategorySidebar() {
  return (
    <div className="rounded-xl border border-[#E5E8EE] bg-white py-2.5">
      {SIDE_CATS.map((c) => (
        <Link
          key={c}
          href="/category"
          className="flex cursor-pointer items-center justify-between px-4 py-2.5 text-[13px] font-medium text-[#48505E] no-underline hover:bg-[#F6F7F9] hover:text-[#2563EB]"
        >
          {c}
          <span className="text-[11px] text-[#C9CFDA]">›</span>
        </Link>
      ))}
    </div>
  )
}

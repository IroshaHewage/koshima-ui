import Link from "next/link"

import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { RATING_BARS, REVIEW_LIST } from "@/lib/storefront/data"

const FILTERS = ["All", "Verified only", "With photos", "5 ★", "Critical"]

export default function ReviewsPage() {
  return (
    <div className="min-w-[1400px] bg-white text-[#101725]">
      <Header />

      <div className="mx-auto max-w-[1360px] px-7 pt-[22px]">
        <h1 className="mb-1 text-2xl font-bold tracking-[-0.02em]">
          Reviews · Vitamin C Brightening Serum 30ml
        </h1>
        <Link
          href="/product"
          className="mb-[22px] block text-[13px] font-semibold text-[#2563EB] no-underline"
        >
          ← Back to product
        </Link>

        <div className="grid grid-cols-[300px_1fr] items-start gap-7">
          <div className="grid gap-3.5">
            <div className="rounded-xl border border-[#E5E8EE] bg-white p-[22px]">
              <div className="mb-1.5 flex items-baseline gap-2.5">
                <span className="text-[40px] font-extrabold">4.8</span>
                <span className="text-[13px] font-medium text-[#8A93A3]">
                  / 5
                </span>
              </div>
              <div className="mb-1.5 text-[13px] font-semibold text-[#B45309]">
                ★★★★★
              </div>
              <div className="mb-[18px] text-[12.5px] text-[#8A93A3]">
                1,204 reviews · 1,166 verified
              </div>
              {RATING_BARS.map((r) => (
                <div key={r.star} className="mb-2.5 flex items-center gap-2.5">
                  <span className="w-3.5 font-mono text-[11.5px] text-[#8A93A3]">
                    {r.star}
                  </span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#F1F3F6]">
                    <div
                      className="h-full bg-[#B45309]"
                      style={{ width: r.pct }}
                    />
                  </div>
                  <span className="w-[38px] text-right font-mono text-[11px] text-[#B3BAC6]">
                    {r.n}
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-[#E5E8EE] bg-white p-5">
              <div className="mb-3.5 text-xs font-semibold">Filter</div>
              <div className="flex flex-wrap gap-1.5">
                {FILTERS.map((f, i) => (
                  <span
                    key={f}
                    className={`cursor-pointer rounded-full px-3 py-2 text-[11.5px] font-semibold ${i === 0 ? "bg-[#101725] text-white" : "bg-[#F6F7F9] text-[#48505E]"}`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-[#EEF3FE] p-5">
              <div className="mb-2 text-[12.5px] font-semibold">
                Bought this? Write a review
              </div>
              <div className="mb-3.5 text-xs leading-relaxed text-[#5A6B8C]">
                Only confirmed purchasers can review, and their review is badged
                as verified.
              </div>
              <button className="w-full cursor-pointer rounded-lg border-none bg-[#2563EB] py-2.5 text-[12.5px] font-semibold text-white">
                Write a review
              </button>
            </div>
          </div>

          <div className="grid gap-3">
            {REVIEW_LIST.map((r) => (
              <div
                key={r.name}
                className="rounded-xl border border-[#E5E8EE] bg-white p-5"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#F1F3F6] text-xs font-bold text-[#8A93A3]">
                    {r.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-bold">{r.name}</span>
                      <span
                        className={`rounded px-1.5 py-1 text-[9.5px] font-semibold ${r.verified ? "bg-[#E7F5EF] text-[#12805C]" : "bg-[#F1F3F6] text-[#8A93A3]"}`}
                      >
                        {r.verified ? "VERIFIED PURCHASE" : "UNVERIFIED"}
                      </span>
                    </div>
                    <div className="mt-1 text-[11.5px] text-[#98A1AF]">
                      {r.meta}
                    </div>
                  </div>
                  <span className="text-[12.5px] font-semibold text-[#B45309]">
                    {r.stars}
                  </span>
                </div>
                <p className="mb-3 text-[13.5px] leading-relaxed text-pretty text-[#48505E]">
                  {r.body}
                </p>
                {r.hasPhotos ? (
                  <div className="mb-3 flex gap-2">
                    <div className="h-[58px] w-[58px] rounded-lg bg-[#F1F3F6]" />
                    <div className="h-[58px] w-[58px] rounded-lg bg-[#F1F3F6]" />
                  </div>
                ) : null}
                <div className="flex items-center gap-4 text-xs font-medium text-[#8A93A3]">
                  <span className="cursor-pointer">
                    👍 Helpful ({r.helpful})
                  </span>
                  <span className="cursor-pointer">⚑ Report</span>
                </div>
                {r.hasReply ? (
                  <div className="mt-3.5 rounded-r-lg border-l-2 border-[#2563EB] bg-[#F6F7F9] px-4 py-3.5">
                    <div className="mb-1.5 text-xs font-bold text-[#2563EB]">
                      Ayurma Herbals replied
                    </div>
                    <div className="text-[12.5px] leading-relaxed text-[#48505E]">
                      Thank you Dilini. The 20% strength is in stock now if you
                      would like to step up — message us for a
                      returning-customer code.
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

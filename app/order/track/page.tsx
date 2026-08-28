import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { TRACK_STEPS } from "@/lib/storefront/data"

const DOT_TONE: Record<string, string> = {
  blue: "bg-[#2563EB]",
  green: "bg-[#12805C]",
}

export default function OrderTrackPage() {
  return (
    <div className="min-w-[1400px] bg-white text-[#101725]">
      <Header />

      <div className="mx-auto max-w-[1000px] px-7 pt-[26px]">
        <h1 className="mb-1.5 text-2xl font-bold tracking-[-0.02em]">
          Track your order
        </h1>
        <div className="mb-6 text-[13.5px] text-[#8A93A3]">
          Enter an order number or tracking number — no sign-in needed.
        </div>
        <div className="mb-6 flex gap-2.5">
          <input
            defaultValue="KM-26-108447"
            className="flex-1 rounded-[9px] border-2 border-[#101725] px-4 py-3.5 font-mono text-sm font-medium outline-none"
          />
          <button className="cursor-pointer rounded-[9px] border-none bg-[#2563EB] px-[26px] text-[13.5px] font-bold text-white">
            Track
          </button>
        </div>

        <div className="mb-4 overflow-hidden rounded-2xl border border-[#E5E8EE] bg-white">
          <div className="flex items-center gap-4 border-b border-[#EEF0F4] p-[20px_24px]">
            <div>
              <div className="mb-2 font-mono text-[15px] font-bold">
                KM-26-108447-A
              </div>
              <div className="text-[12.5px] text-[#8A93A3]">
                Ayurma Herbals · 3 items · Fardar Express
              </div>
            </div>
            <span className="rounded-full bg-[#EEF3FE] px-3.5 py-2 text-[11.5px] font-semibold text-[#1D4ED8]">
              Out for delivery
            </span>
            <div className="ml-auto text-right">
              <div className="mb-1.5 font-mono text-[10.5px] text-[#98A1AF]">
                TRACKING
              </div>
              <div className="font-mono text-[13px] font-semibold">
                FDX-LK-7742019
              </div>
            </div>
          </div>
          <div className="p-[26px_24px]">
            {TRACK_STEPS.map((t) => (
              <div key={t.title} className="flex gap-4">
                <div className="flex flex-none flex-col items-center">
                  <div
                    className={`h-[11px] w-[11px] flex-none rounded-full ${DOT_TONE[t.tone]}`}
                  />
                  {!t.last ? (
                    <div className="w-[1.5px] flex-1 bg-[#E5E8EE]" />
                  ) : null}
                </div>
                <div className="flex-1 pb-[22px]">
                  <div className="flex items-baseline gap-3">
                    <span
                      className={
                        t.done
                          ? "text-[13.5px] font-semibold text-[#48505E]"
                          : "text-[13.5px] font-bold"
                      }
                    >
                      {t.title}
                    </span>
                    <span className="font-mono text-[11.5px] text-[#B3BAC6]">
                      {t.time}
                    </span>
                  </div>
                  <div className="mt-1.5 text-[12.5px] leading-relaxed text-[#8A93A3]">
                    {t.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#E5E8EE] bg-white p-[20px_24px]">
          <div className="mb-4 flex items-center gap-4">
            <div>
              <div className="mb-2 font-mono text-[15px] font-bold">
                KM-26-108447-B
              </div>
              <div className="text-[12.5px] text-[#8A93A3]">
                Ceylon Glow · 1 item · EMS to United Kingdom
              </div>
            </div>
            <span className="rounded-full bg-[#FDF3E4] px-3.5 py-2 text-[11.5px] font-semibold text-[#B45309]">
              In transit — international
            </span>
            <div className="ml-auto text-right">
              <div className="mb-1.5 font-mono text-[10.5px] text-[#98A1AF]">
                EMS NUMBER
              </div>
              <div className="font-mono text-[13px] font-semibold">
                EE472019338LK
              </div>
            </div>
          </div>
          <div className="rounded-[9px] bg-[#F6F7F9] p-[14px_16px] text-[12.5px] leading-relaxed text-[#6B7280]">
            Departed Colombo exchange office 26 Jul · arrived Heathrow Worldwide
            Distribution Centre 28 Jul 04:12 · awaiting customs clearance.
            International scans are pulled from Sri Lanka Post and surfaced here
            (FR-INTL-011).
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

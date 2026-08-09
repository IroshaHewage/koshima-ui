import { Header } from "@/components/storefront/header"
import { Footer } from "@/components/storefront/footer"
import { POLICY_ROWS, POLICY_SECTIONS, STATIC_NAV } from "@/lib/storefront/data"

export default function ReturnsPage() {
  return (
    <div className="min-w-[1400px] bg-white text-[#101725]">
      <Header />

      <div className="mx-auto max-w-[1000px] px-7 pt-[30px]">
        <div className="grid grid-cols-[230px_1fr] items-start gap-10">
          <div className="sticky top-[140px]">
            <div className="mb-4 font-mono text-[10.5px] font-semibold tracking-[0.07em] text-[#98A1AF]">
              POLICIES &amp; INFORMATION
            </div>
            {STATIC_NAV.map((label) => {
              const active = label === "Returns & refunds"
              return (
                <div
                  key={label}
                  className={`mb-1 rounded-lg px-3.5 py-2.5 text-[13px] ${active ? "bg-[#EEF3FE] font-bold text-[#2563EB]" : "font-medium text-[#48505E]"}`}
                >
                  {label}
                </div>
              )
            })}
            <div className="mt-5 border-t border-[#EEF0F4] pt-[18px] font-mono text-[11.5px] leading-relaxed text-[#B3BAC6]">
              Version 3.1
              <br />
              Effective 01 Jun 2026
              <br />
              Available in EN · සිං
            </div>
          </div>

          <div>
            <h1 className="mb-2.5 text-[32px] font-bold tracking-[-0.02em]">Returns &amp; refunds policy</h1>
            <div className="mb-7 text-[13px] text-[#8A93A3]">
              Last updated 01 June 2026 · governs all orders placed on koshimamall.lk
            </div>
            <div className="mb-7 rounded-xl border border-[#F5E0BC] bg-[#FDF3E4] p-[16px_20px] text-[12.5px] leading-relaxed text-[#8A5A0B]">
              The return window and who pays return shipping are configurable per category and
              remain open for client confirmation (Appendix B #9). The values shown are the
              platform defaults.
            </div>
            {POLICY_SECTIONS.map((p) => (
              <div key={p.h} className="mb-7">
                <h2 className="mb-3 text-[18px] font-bold tracking-[-0.01em]">{p.h}</h2>
                <p className="text-[14.5px] leading-relaxed text-[#48505E] text-pretty">{p.b}</p>
              </div>
            ))}
            <div className="mt-8 overflow-hidden rounded-xl border border-[#E5E8EE]">
              <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-[#F6F7F9] p-[13px_18px] font-mono text-[11px] font-semibold tracking-[0.04em] text-[#8A93A3]">
                <span>CATEGORY</span>
                <span>WINDOW</span>
                <span>RETURN SHIPPING</span>
              </div>
              {POLICY_ROWS.map((r) => (
                <div
                  key={r.cat}
                  className="grid grid-cols-[1.4fr_1fr_1fr] border-t border-[#EEF0F4] p-[14px_18px] text-[13px] font-medium"
                >
                  <span>{r.cat}</span>
                  <span>{r.win}</span>
                  <span className="text-[#48505E]">{r.ship}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

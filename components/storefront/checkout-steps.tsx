import Link from "next/link"

const STEPS = [
  { key: "address", title: "Address", href: "/checkout/address" },
  { key: "shipping", title: "Shipping", href: "/checkout/shipping" },
  { key: "international", title: "International", href: "/checkout/international" },
  { key: "payment", title: "Payment", href: "/checkout/payment" },
  { key: "review", title: "Review", href: "/checkout/review" },
] as const

type StepKey = (typeof STEPS)[number]["key"]

export function CheckoutSteps({ current }: { current: StepKey }) {
  const curIdx = STEPS.findIndex((s) => s.key === current)

  return (
    <div className="mx-auto max-w-[1160px] px-7 pt-[26px] pb-0">
      <div className="mb-[26px] flex items-center">
        {STEPS.map((s, i) => {
          const done = i < curIdx
          const on = i === curIdx
          return (
            <div key={s.key} className="flex flex-1 items-center">
              <Link
                href={s.href}
                className="flex items-center gap-2.5 text-inherit no-underline"
              >
                <div
                  className={`flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full font-bold text-[11.5px] ${
                    on
                      ? "bg-[#2563EB] text-white"
                      : done
                        ? "bg-[#12805C] text-white"
                        : "bg-[#EEF0F4] text-[#98A1AF]"
                  }`}
                >
                  {done ? "✓" : i + 1}
                </div>
                <span
                  className={`text-[12.5px] whitespace-nowrap ${on ? "font-bold text-[#101725]" : done ? "font-medium text-[#48505E]" : "font-medium text-[#98A1AF]"}`}
                >
                  {s.title}
                </span>
              </Link>
              {i !== STEPS.length - 1 ? (
                <div
                  className={`mx-3.5 h-[1.5px] flex-1 ${done ? "bg-[#12805C]" : "bg-[#EEF0F4]"}`}
                />
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

"use client"

import * as React from "react"

import { CAMPAIGN_START_TS, LAUNCH_ISO, LAUNCH_TS } from "@/lib/launch"
import { cn } from "@/lib/utils"

type Snapshot = {
  days: number
  hours: number
  minutes: number
  seconds: number
  progress: number
  done: boolean
}

function computeSnapshot(): Snapshot {
  const diff = LAUNCH_TS - Date.now()
  const span = LAUNCH_TS - CAMPAIGN_START_TS
  const progress =
    span <= 0
      ? 1
      : Math.min(1, Math.max(0, (Date.now() - CAMPAIGN_START_TS) / span))

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      progress: 1,
      done: true,
    }
  }

  const total = Math.floor(diff / 1000)

  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    progress,
    done: false,
  }
}

// A tiny external store so the ticking clock plays nicely with SSR hydration
// (no setState-in-effect, no hydration mismatch).
const SERVER_SNAPSHOT: Snapshot = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  progress: 0,
  done: false,
}

let clientSnapshot: Snapshot = SERVER_SNAPSHOT
const listeners = new Set<() => void>()
let intervalId: ReturnType<typeof setInterval> | null = null

function emit() {
  clientSnapshot = computeSnapshot()
  for (const listener of listeners) listener()
}

function subscribe(onChange: () => void) {
  if (clientSnapshot === SERVER_SNAPSHOT) clientSnapshot = computeSnapshot()
  listeners.add(onChange)
  if (intervalId === null) intervalId = setInterval(emit, 1000)

  return () => {
    listeners.delete(onChange)
    if (listeners.size === 0 && intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
  }
}

const LAUNCH_LABEL = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "long",
  timeStyle: "short",
  timeZone: "Asia/Colombo",
}).format(new Date(LAUNCH_ISO))

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const

export function ComingSoon() {
  const snapshot = React.useSyncExternalStore(
    subscribe,
    () => clientSnapshot,
    () => SERVER_SNAPSHOT
  )
  const pending = snapshot === SERVER_SNAPSHOT

  React.useEffect(() => {
    if (!snapshot.done) return
    // Launch has passed — reload so the proxy lets the storefront through.
    const id = setTimeout(() => window.location.reload(), 1200)
    return () => clearTimeout(id)
  }, [snapshot.done])

  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-[#08080b] text-white">
      <BackdropGlow />

      <div className="relative mx-auto flex w-full max-w-[980px] flex-1 flex-col justify-between px-6 py-10 sm:px-10 sm:py-14">
        <header className="flex items-center justify-between">
          <span className="font-heading text-xl tracking-[0.02em] text-white sm:text-2xl">
            Koshima
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] tracking-[0.24em] text-white/55 uppercase">
            Opening Soon
          </span>
        </header>

        <div className="py-14">
          <p className="mb-5 font-mono text-[11px] tracking-[0.3em] text-[#7FA6F5] uppercase">
            The mall is almost open
          </p>
          <h1 className="max-w-[16ch] text-[clamp(2.6rem,7vw,5.25rem)] leading-[0.95] font-extrabold tracking-[-0.03em] text-white">
            Something big is{" "}
            <span className="font-heading font-normal text-[#8FB0F7] italic">
              landing
            </span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-white/55 sm:text-base">
            Hundreds of verified Ceylon sellers, one storefront. We go live on{" "}
            <span className="text-white/80">{LAUNCH_LABEL}</span>.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {UNITS.map((unit) => (
              <TimeCell
                key={unit.key}
                label={unit.label}
                value={snapshot[unit.key]}
                pending={pending}
                flash={unit.key === "seconds"}
              />
            ))}
          </div>

          <div className="mt-10 max-w-[520px]">
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#8FB0F7] transition-[width] duration-700 ease-out"
                style={{ width: `${snapshot.progress * 100}%` }}
              />
            </div>
            <p className="mt-3 font-mono text-[10px] tracking-[0.22em] text-white/35 uppercase">
              {snapshot.done ? "Doors are open" : "Countdown in progress"}
            </p>
          </div>
        </div>

        <footer className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 font-mono text-[11px] tracking-[0.14em] text-white/40 uppercase">
          <span>Koshima Mall</span>
          <span className="text-white/25">·</span>
          <span>{LAUNCH_LABEL} (GMT+5:30)</span>
        </footer>
      </div>
    </main>
  )
}

function TimeCell({
  label,
  value,
  pending,
  flash,
}: {
  label: string
  value: number
  pending: boolean
  flash?: boolean
}) {
  const text = pending ? "--" : String(value).padStart(2, "0")

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center backdrop-blur-sm sm:py-8">
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden
      />
      <span
        key={flash ? text : undefined}
        className={cn(
          "block font-mono text-[clamp(2.4rem,9vw,3.75rem)] leading-none font-bold text-white tabular-nums",
          flash &&
            !pending &&
            "animate-in duration-300 fade-in slide-in-from-bottom-1"
        )}
      >
        {text}
      </span>
      <span className="mt-3 block font-mono text-[10px] tracking-[0.28em] text-white/40 uppercase">
        {label}
      </span>
    </div>
  )
}

function BackdropGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="koshima-drift absolute -top-1/3 left-1/2 h-[70vmax] w-[70vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.28),transparent_60%)] blur-3xl" />
      <div className="koshima-drift absolute -bottom-1/3 -left-1/4 h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(228,97,76,0.14),transparent_60%)] blur-3xl [animation-delay:-6s]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,8,11,0.7))]" />
    </div>
  )
}

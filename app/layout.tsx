import type { Metadata } from "next"
import {
  IBM_Plex_Mono,
  Instrument_Serif,
  Noto_Sans_Sinhala,
  Plus_Jakarta_Sans,
} from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Koshima Mall",
  description: "Koshima Mall is opening soon.",
  // Pre-launch: keep every page out of search indexes.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-heading",
})

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
})

const notoSansSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "600"],
  variable: "--font-sinhala",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        fontMono.variable,
        jakartaSans.variable,
        instrumentSerif.variable,
        notoSansSinhala.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

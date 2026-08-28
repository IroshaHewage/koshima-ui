import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { COMING_SOON_PATH, hasLaunched } from "@/lib/launch"

/**
 * Until the launch instant passes, every page request is rewritten to the
 * countdown screen. After launch this becomes a no-op and the storefront is
 * served normally.
 */
export function proxy(request: NextRequest) {
  if (hasLaunched()) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  // Let the countdown page (and its RSC payload) render itself.
  if (
    pathname === COMING_SOON_PATH ||
    pathname.startsWith(`${COMING_SOON_PATH}/`)
  ) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = COMING_SOON_PATH
  url.search = ""

  const response = NextResponse.rewrite(url)
  response.headers.set("x-koshima-status", "coming-soon")
  // Don't let a CDN cache the gate and keep serving it after launch.
  response.headers.set("Cache-Control", "no-store, must-revalidate")
  return response
}

export const config = {
  matcher: [
    /*
     * Run on every request except:
     * - api routes
     * - Next.js internals (_next/static, _next/image, _next/data)
     * - the metadata files (favicon.ico, robots.txt, sitemap.xml)
     * - anything that looks like a static asset (has a file extension)
     */
    "/((?!api|_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|.*\\.[\\w]+$).*)",
  ],
}

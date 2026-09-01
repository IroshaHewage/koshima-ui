/**
 * Koshima Mall public launch.
 *
 * Target: September 3, 2026, 00:00 Sri Lanka time (UTC+05:30).
 * Stored as an absolute instant so server and client agree regardless of
 * the viewer's own timezone.
 */
export const LAUNCH_ISO = "2026-09-03T00:00:00+05:30";

export const LAUNCH_TS = new Date(LAUNCH_ISO).getTime()

/** When the "coming soon" campaign started — used only to draw the progress bar. */
export const CAMPAIGN_START_TS = new Date("2026-08-01T00:00:00+05:30").getTime()

/** Path the proxy rewrites every request to while we are still counting down. */
export const COMING_SOON_PATH = "/coming-soon"

export function hasLaunched(now: number = Date.now()): boolean {
  return now >= LAUNCH_TS
}

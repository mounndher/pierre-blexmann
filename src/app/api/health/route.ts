/**
 * Static, database-free health endpoint (platform monitoring only).
 * The site stores nothing: no ORM, no PostgreSQL, no server-side persistence.
 */
export const dynamic = "force-static";

export function GET() {
  return Response.json({ ok: true, mode: "static" });
}

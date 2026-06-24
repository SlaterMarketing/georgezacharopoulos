import type { KintanaPublicEvent } from "@kintana/sdk";

export function formatShowDate(date: string): string {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatEventHeroDateParts(dateInput: string) {
  const parsed = new Date(`${dateInput.trim()}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return null;
  return {
    weekday: parsed.toLocaleDateString("en-US", { weekday: "short" }),
    day: String(parsed.getDate()),
    month: parsed.toLocaleDateString("en-US", { month: "short" }),
    year: parsed.toLocaleDateString("en-US", { year: "numeric" }),
  };
}

export function splitEventDisplayTitle(name: string): { headline: string; subtitle: string | null } {
  const colon = name.match(/^([^:]+):\s*(.+)$/);
  if (colon) {
    return { headline: colon[1]!.trim(), subtitle: colon[2]!.trim() };
  }
  const parts = name.split(/\s+[–—-]\s+/);
  if (parts.length >= 2) {
    return {
      headline: parts[0]!.trim(),
      subtitle: parts.slice(1).join(" – ").trim() || null,
    };
  }
  return { headline: name.trim(), subtitle: null };
}

export function formatEventTime(time: string | null | undefined): string | null {
  if (!time?.trim()) return null;
  const [hourPart, minutePart] = time.split(":");
  const hour = Number(hourPart);
  const minute = Number(minutePart);
  if (Number.isNaN(hour)) return time;
  const period = hour >= 12 ? "pm" : "am";
  const hour12 = hour % 12 || 12;
  if (!Number.isNaN(minute) && minute > 0) {
    return `${hour12}:${String(minute).padStart(2, "0")}${period}`;
  }
  return `${hour12}${period}`;
}

export function formatEventSchedule(event: KintanaPublicEvent): string {
  const date = formatShowDate(event.date);
  const show = formatEventTime(event.showTime);
  const doors = formatEventTime(event.doorsOpen);

  if (doors && show) return `${date} · doors ${doors}, show ${show}`;
  if (show) return `${date} · show ${show}`;
  if (doors) return `${date} · doors ${doors}`;
  return date;
}

export function formatGigDateBlock(event: KintanaPublicEvent): { date: string; time: string | null } {
  const show = formatEventTime(event.showTime);
  const doors = formatEventTime(event.doorsOpen);

  return {
    date: formatShowDate(event.date),
    time: show ?? doors,
  };
}

export function formatGigLocation(event: KintanaPublicEvent): string {
  const venue = event.venue?.name?.trim() || "";
  const city = event.city?.trim() || event.venue?.city?.trim() || "";

  if (venue && city && venue.toLowerCase() !== city.toLowerCase()) {
    return `${venue} · ${city}`;
  }
  if (venue) return venue;
  if (city) return city;
  return "—";
}

export function eventVenueMapsUrl(event: Pick<KintanaPublicEvent, "venue" | "city">): string | null {
  const venue = event.venue;
  if (venue?.lat != null && venue?.lng != null) {
    return `https://www.google.com/maps/search/?api=1&query=${venue.lat},${venue.lng}`;
  }
  const query = [venue?.address, venue?.name, event.city].filter(Boolean).join(", ");
  return query ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}` : null;
}

export function eventVenueMapEmbedUrl(event: Pick<KintanaPublicEvent, "venue" | "city">): string | null {
  const venue = event.venue;
  if (venue?.lat != null && venue?.lng != null) {
    return `https://maps.google.com/maps?q=${venue.lat},${venue.lng}&z=15&output=embed`;
  }
  const query = venue?.address?.trim()
    ? `${venue.name?.trim() ? `${venue.name.trim()}, ` : ""}${venue.address.trim()}`
    : [venue?.name, event.city].filter(Boolean).join(", ");
  return query
    ? `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
    : null;
}

export function eventShowPath(slug: string): string {
  return `/shows/${slug}/`;
}

export function eventTicketsPath(slug: string): string {
  return `/shows/${slug}/#tickets`;
}

export function eventShowHref(event: KintanaPublicEvent): string | null {
  const slug = event.slug?.trim();
  return slug ? eventShowPath(slug) : null;
}

export function eventTicketsHref(event: KintanaPublicEvent): string {
  const slug = event.slug?.trim();
  if (slug) return eventTicketsPath(slug);
  return eventTicketHref(event);
}

export function eventCity(event: KintanaPublicEvent): string {
  return event.city?.trim() || event.venue?.city?.trim() || "—";
}

export function eventVenue(event: KintanaPublicEvent): string {
  return event.venue?.name?.trim() || "—";
}

export function eventTicketHref(event: KintanaPublicEvent): string {
  return event.ticketUrl?.trim() || event.embedUrl?.trim() || "#";
}

export function isTicketingBlocked(event: KintanaPublicEvent): boolean {
  return event.status === "sold-out" || event.status === "postponed" || event.status === "cancelled";
}

/** Embed checkout via `[data-kintana-widget]` + `/_t/k.js` (internal Stripe or external vendor). */
export function eventSupportsEmbedCheckout(event: KintanaPublicEvent): boolean {
  return Boolean(event.id?.trim()) && !isTicketingBlocked(event);
}

export function eventStatusLabel(status: KintanaPublicEvent["status"]): string | null {
  if (status === "sold-out") return "Sold out";
  if (status === "postponed") return "Postponed";
  if (status === "cancelled") return "Cancelled";
  return null;
}

export function ticketLinkLabel(event: KintanaPublicEvent): string {
  return eventStatusLabel(event.status) ?? "Tickets";
}

export function formatMinorUnitsPrice(
  event: Pick<KintanaPublicEvent, "priceFrom" | "priceCurrency">,
): string | null {
  if (event.priceFrom == null) return null;
  const currency = event.priceCurrency?.trim() || "USD";
  const major = event.priceFrom / 100;
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: major % 1 === 0 ? 0 : 2,
    }).format(major);
  } catch {
    return `${major % 1 === 0 ? major.toFixed(0) : major.toFixed(2)} ${currency}`;
  }
}

export function sortedLineup(event: KintanaPublicEvent) {
  return [...event.lineup].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function reserveTicketHref(events: KintanaPublicEvent[]): string | null {
  const next = events.find((e) => !isTicketingBlocked(e));
  if (!next) return null;

  const slug = next.slug?.trim();
  if (slug) return eventTicketsPath(slug);

  const href = eventTicketHref(next);
  return href === "#" ? null : href;
}

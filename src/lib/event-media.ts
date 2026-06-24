import type { KintanaPublicEvent } from "@kintana/sdk";

function trimUrl(url: string | null | undefined): string | null {
  const trimmed = url?.trim();
  return trimmed || null;
}

export function eventHeroDesktopUrl(
  event: Pick<KintanaPublicEvent, "imageUrl" | "imageUrlMobile">,
): string | null {
  return trimUrl(event.imageUrl) || trimUrl(event.imageUrlMobile);
}

export function eventHeroMobileUrl(
  event: Pick<KintanaPublicEvent, "imageUrl" | "imageUrlMobile">,
): string | null {
  return trimUrl(event.imageUrlMobile) || trimUrl(event.imageUrl);
}

export function eventHeroUrl(event: Pick<KintanaPublicEvent, "imageUrl" | "imageUrlMobile">): string | null {
  return eventHeroDesktopUrl(event);
}

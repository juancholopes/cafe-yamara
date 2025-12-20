export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (explicit) {
    try {
      return new URL(explicit);
    } catch {
      // If someone provides "example.com" without protocol
      return new URL(`https://${explicit}`);
    }
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return new URL(`https://${vercelUrl}`);
  }

  return new URL("http://localhost:3000");
}

export function absoluteUrl(pathname: string): string {
  const base = getSiteUrl();
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(normalized, base).toString();
}

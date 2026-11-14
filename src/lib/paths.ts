/** Prefix a local site path with Astro's configured base path. */
export function withBase(path: string): string {
  if (/^(?:https?:|data:|blob:)/i.test(path)) return path;
  const cleanPath = path.replace(/^\/+/, '');
  const basePath = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${basePath}${cleanPath}`;
}

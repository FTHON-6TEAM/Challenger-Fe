export const getCookieValue = (
  name: string,
  context?: string | { req: { headers: { cookie?: string } } },
): string | null => {
  const cookieString =
    typeof window === 'undefined' && context && typeof context !== 'string'
      ? context.req.headers.cookie
      : document.cookie;

  if (!cookieString) return null;

  const match = cookieString.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return match ? match[2] : null;
};

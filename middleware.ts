import { NextResponse, userAgent, type NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "./i18n-config";

function getLocale(req: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {};
  for (const key of Object.keys(req.headers)) {
    negotiatorHeaders[key] = req.headers.get(key) as string;
  }
  const acceptLanguages = new Negotiator({ headers: negotiatorHeaders }).languages(i18n.locales);
  return matchLocale(acceptLanguages, i18n.locales, i18n.defaultLocale);
}

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // Detect user agent
  const { device } = userAgent(req);
  const viewport =
    device.type === "mobile" ? "mobile" : device.type === "tablet" ? "tablet" : "desktop";

  // if no locale in the path → redirect
  if (!pathnameHasLocale) {
    const locale = getLocale(req);
    req.nextUrl.pathname = `/${locale}${pathname}`;
    const response = NextResponse.redirect(req.nextUrl, 302);
    response.headers.set("x-viewport", viewport);
    return response;
  }

  // if locale is present -> handle only viewport logic
  const response = NextResponse.next();
  response.headers.set("x-viewport", viewport);
  return response;
}

export const config = {
  matcher: [
    // Escludi tutte le rotte che non devono essere elaborate
    "/((?!api|_next/static|_next/image|public|assets|fonts|favicon.ico).*)",
  ],
};

import { NextRequest, NextResponse } from "next/server";

const oneYearInSeconds = 60 * 60 * 24 * 365;

function buildCsp(nonce: string, isDev: boolean) {
  const scriptSrc = isDev
    ? "'self' 'unsafe-eval' 'nonce-" + nonce + "'"
    : "'self' 'nonce-" + nonce + "'";

  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "style-src 'self' 'unsafe-inline'",
    "script-src " + scriptSrc,
    "connect-src 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; ");
}

export function proxy(request: NextRequest) {
  const nonce = crypto.randomUUID().replace(/-/g, "");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  const isDev = process.env.NODE_ENV !== "production";
  const csp = buildCsp(nonce, isDev);
  const enforceCsp = process.env.CSP_ENFORCE === "true";

  if (enforceCsp) {
    response.headers.set("Content-Security-Policy", csp);
  } else {
    response.headers.set("Content-Security-Policy-Report-Only", csp);
  }

  response.headers.set("x-nonce", nonce);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );

  if (request.nextUrl.pathname.startsWith("/_next/static/")) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=" + oneYearInSeconds + ", immutable"
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};

import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Public routes that don't require authentication
const publicRoutes = ["/", "/login"];

// Routes that should redirect to dashboard if user is logged in
const authRoutes = ["/login"];

// Protected routes that require authentication
const protectedRoutes = ["/dashboard", "/employee"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameLocale = pathname.split("/")[1];
  const pathnameWithoutLocale =
    pathname.replace(`/${pathnameLocale}`, "") || "/";

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAuthenticated = !!token;

  const isPublicRoute = publicRoutes.some(
    (route) =>
      pathnameWithoutLocale === route ||
      pathnameWithoutLocale.startsWith(route + "/")
  );

  const isAuthRoute = authRoutes.some(
    (route) =>
      pathnameWithoutLocale === route ||
      pathnameWithoutLocale.startsWith(route + "/")
  );

  const isProtectedRoute = protectedRoutes.some(
    (route) =>
      pathnameWithoutLocale === route ||
      pathnameWithoutLocale.startsWith(route + "/")
  );

  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(
      new URL(`/${pathnameLocale}/dashboard`, request.url)
    );
  }

  if (!isAuthenticated && isProtectedRoute) {
    const loginUrl = new URL(`/${pathnameLocale}/login`, request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  const intlMiddleware = createIntlMiddleware(routing);
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets|.*\\.(png|jpg|jpeg|svg|gif|webp)).*)",
  ],
};

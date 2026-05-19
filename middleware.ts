import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COMING_SOON_ROUTES = [
  '/register',
  '/account',
  '/profile',
  '/orders',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const shouldRedirect = COMING_SOON_ROUTES.some(
    (route) =>
      pathname === route || pathname.startsWith(route + '/')
  );

  if (shouldRedirect) {
    return NextResponse.redirect(
      new URL('/coming-soon', request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('user-token');
  const { pathname } = request.nextUrl;

  // If user is NOT logged in and trying to access a protected page
  // Redirect to /auth
  if (!token && pathname !== '/auth') {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // If user IS logged in and tries to access /auth
  // Redirect to /dashboard
  if (token && pathname === '/auth') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If user IS logged in and tries to access /
  // Redirect to /dashboard
  if (token && pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  /*
  Match all paths except for the following:
    - Any route starting with `/api`
    - Any route under `/_next/static` or `/_next/image`
    - Any route under `/public`
    - Any route ending with `.png` or `.jpg`
  */
  matcher: [
    '/((?!api|_next/static|_next/image|public|images|flags|.*\\.(?:png|jpg)$).*)',
  ],
};
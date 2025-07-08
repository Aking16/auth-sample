import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('user-token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.redirect(new URL('/dashboard', request.url));
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
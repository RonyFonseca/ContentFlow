import {NextRequest, NextResponse} from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  const {pathname} = request.nextUrl;

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }


  if(pathname === "/"){
    if(token){
      return NextResponse.redirect(new URL("/home", request.url));
    } else {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
  ],
};
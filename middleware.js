import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
	const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
	const url = req.nextUrl.clone();

	console.log("URL Path:", url.pathname);
	console.log("Token:", !!token);

	if (token || url.pathname.startsWith('/api/auth') || url.pathname === '/login') {
		return NextResponse.next();
	}

	if (!token && url.pathname !== '/login') {
		url.pathname = '/login';
		return NextResponse.redirect(url);
	}
}

// export function middleware(request) {
// 	console.log('Middleware was hit');
// 	return NextResponse.next();
// }


export const config = {
	matcher: ['/', '/bench-practice', '/useful-links', '/webinars', '/clients-faq', '/login']
};

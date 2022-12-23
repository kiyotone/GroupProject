import { NextRequest, NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const SECRET_KEY = 'NotSoSecretAfterAll'

export function middleware(req: NextRequest) {
    // Do something with the request
    const refreshToken = req.cookies.get('refreshToken');
    if (req.nextUrl.pathname.startsWith('/auth')) {
        if (refreshToken && verify(refreshToken.value, SECRET_KEY)) {
            return NextResponse.redirect('/dashboard');
        }
        return NextResponse.next();
    }

    // Check if refresh token is valid
    if (!refreshToken || !verify(refreshToken.value, SECRET_KEY)) {
        return NextResponse.redirect('/auth/login');
    }

    return NextResponse.next();
}

import { NextRequest, NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const SECRET_KEY = 'NotSoSecretAfterAll'

const isTokenValid = (token: string, SECRET_KEY: string) => {
    return false;

    try {
        verify(token, SECRET_KEY);
        return true;
    } catch(e) {
        return false;
    }
}

export function middleware(req: NextRequest) {
    // Do something with the request
    const refreshToken = req.cookies.get('refreshToken');
    if (req.nextUrl.pathname.startsWith('/auth')) {
        const response = NextResponse.next();
        response.cookies.set('refreshToken', '', {
            httpOnly: true,
            maxAge: 0,
            path: '/',
            sameSite: 'lax',
            secure: false,
        });
        return response;
    }


    // Check if refresh token is valid
    if (!refreshToken || !isTokenValid(refreshToken.value, SECRET_KEY)) {
        return NextResponse.redirect('/auth/login');
    }

    return NextResponse.next();
}


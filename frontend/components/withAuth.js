import { useEffect, useState } from 'react';
import Router from 'next/router';
import jwt_decode from 'jwt-decode';

const withAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            
            const token = getToken();
            if (!token) {
                Router.push('/auth/Login');
            } else {
                try {
                    const { exp } = jwt_decode(token);
                    if (exp < new Date().getTime() / 1000) {
                        Router.push('/auth/Login');
                    }
                    setIsAuthenticated(true);
                } catch (error) {
                    Router.push('/auth/Login');
                }
            }
        }, []);

        if(!isAuthenticated) {
            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Wrapper;
}

const getToken = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('access-token');
        return token;
    }

    return null;
}

export default withAuth;

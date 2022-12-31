import { axiosPrivate } from "../../components/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuthStore from "../authStore";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { setToken, accessToken } = useAuthStore();

    useEffect(() => {

        const requestInterceptor = axiosPrivate.interceptors.request.use((config) => {
            if (!config.headers.Authorization) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        })

        const responseInterceptor = axiosPrivate.interceptors.response.use(
            (response) => {
                return response;
            }, async (error) => {
                const originalRequest = error?.config;
                if (error.response.status === 401 && !originalRequest?.sent) {
                    console.log(error)
                    originalRequest.sent = true;
                    const newAccessToken = await refresh();
                    setToken(newAccessToken);
                    originalRequest.headers.Authorization = 'Bearer ' + newAccessToken;

                    return axiosPrivate(originalRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.response.eject(responseInterceptor);
            axiosPrivate.interceptors.request.eject(requestInterceptor);
        }
    }, [accessToken, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;
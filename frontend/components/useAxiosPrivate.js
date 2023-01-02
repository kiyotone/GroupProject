import { axiosPrivate } from "./axios";
import Router from "next/router";
import { useEffect } from "react";

const useAxiosPrivate = () => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
        (config) => {
            if (!config.headers.Authorization) {
                config.headers.Authorization = `Bearer ${localStorage.getItem("access-token")}`;
            }

            return config;
        }
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                console.log('redirected to login because of 401 response')
                Router.push("auth/Login");
                Promise.reject(error);
            }

            return error;
        }
    );

    return axiosPrivate;
}

export default useAxiosPrivate;
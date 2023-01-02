import axios from 'axios'
import { useRouter } from 'next/router'
import jwt_decode from 'jwt-decode'
import { useEffect } from 'react'

const baseURL = 'http://127.0.0.1:8000'

axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.headers.common['Content-Type'] = 'application/json'
if (typeof window !== 'undefined') {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access-token')
}

export const axiosPrivate = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
});

/*  --- Very Scary Code ---
axios.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {

        const refreshIt = async (config) => {
            const uninterceptedAxiosInstance = axios.create()
            const data = {
                "refresh": localStorage.getItem('refresh-token')
            }

            try {
                const response = await uninterceptedAxiosInstance.post('/auth/token/refresh', data)
                localStorage.setItem('access-token', response.data.access)
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access
                config.headers.Authorization = 'Bearer ' + response.data.access
                return config
            } catch(error) {
                console.log("Not logged in or token expired")
                throw new axios.Cancel('Not logged in or token expired')
            }
        }

        const {exp} = jwt_decode(localStorage.getItem('access-token'))
        if (Date.now() >= exp * 1000) {
            return refreshIt(config)
        }
    }

    return config
}, (error) => {
    Router.push('/auth/login')
    Promise.reject(error)
})*/
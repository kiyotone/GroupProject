import axios from 'axios'
import jwt_decode from 'jwt-decode'

axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.headers.common['Content-Type'] = 'application/json'
if (typeof window !== 'undefined') {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access-token')
}

axios.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {

        const refreshIt = async (config) => {
            const uninterceptedAxiosInstance = axios.create()

            try {
                const response = await uninterceptedAxiosInstance.post('/auth/token/refresh')
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
})
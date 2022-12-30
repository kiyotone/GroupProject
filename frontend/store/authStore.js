import create from 'zustand'
import axios from 'axios'

const authStore = (set) => ({
    user: null,
    accessToken: null,
    refreshToken: null,
    setuser: (user) => {
        set((state) => ({ user: user }))
    },
    setTokens: (accessToken, refreshToken) => {
        if (typeof window !== 'undefined') {
            console.log(accessToken, refreshToken)
            localStorage.setItem('access-token', accessToken)
            localStorage.setItem('refresh-token', refreshToken)
        }
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
        set((state) => ({ accessToken: accessToken, refreshToken: refreshToken }))
    },
    setToken: (accessToken) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('access-token', accessToken)
        }
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
        set((state) => ({ accessToken: accessToken }))
    },
    logOut: () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('access-token')
            localStorage.removeItem('refresh-token')
        }
        set((state) => ({ user: null, accessToken: null, refreshToken: null }))
    },
    getUser: () => {
        return user
    }
})

const useAuthStore = create(authStore)

export default useAuthStore
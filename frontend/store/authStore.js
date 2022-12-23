import create from 'zustand'

const authStore = (set) => ({
    user: null,
    accessToken: null,
    refreshToken: null,
    setuser: (user) => {
        set((state) => ({ user: user }))
    },
    setAccessToken: (accessToken) => {
        set((state) => ({ accessToken: accessToken }))
    },
    setRefreshToken: (refreshToken) => {
        set((state) => ({ refreshToken: refreshToken }))
    },
    logOut: () => {
        set((state) => ({ user: null, accessToken: null, refreshToken: null }))
    },
    getUser: () => {
        return user
    }
})

const useAuthStore = create(authStore)

export default useAuthStore
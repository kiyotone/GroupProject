import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
    accessToken: null,
    refreshToken: null
};

export const authSlicer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setTokens: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        setUsername: (state, action) => {
            state.username = action.payload.username;
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload.accessToken;
        }
    }
})

export const { setTokens, setUsername, setAccessToken } = authSlicer.actions;

export default authSlicer.reducer;
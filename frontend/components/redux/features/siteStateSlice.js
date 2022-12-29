import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    mode : "dark",
    logged_in : false

}

export const siteStateSlice = createSlice({
    name:'siteState',
    initialState,
    reducers : {
        toggleMode : (state) => {
            state.mode == "light" ? state.mode = "dark" :state.mode = "light"
        },
        toggleLoggedIn : (state) => {
            state.logged_in == true ? state.mode = false :state.mode = true
        }
    }
});

export const {toggleMode,toggleLoggedIn} = siteStateSlice.actions;

export default siteStateSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username : "none",
    gender : "n/a",
}

export const userSlicer = createSlice({
    name :'user',
    initialState,
    reducers : {
        changeUser : (state,action)=>{
            state.username = action.payload.username
            state.gender = action.payload.gender
        }
    }
});

export const {changeUser} = userSlicer.actions;

export default userSlicer.reducer
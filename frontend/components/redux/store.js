import {configureStore} from '@reduxjs/toolkit'
import siteStateReducer from './features/siteStateSlice'
import  userSlicer  from './features/userSlicer'


export const store = configureStore({
    reducer : {
            siteState : siteStateReducer,
            user : userSlicer,
        }
})
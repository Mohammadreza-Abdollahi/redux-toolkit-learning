import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from './theme/ThemeSlice'
import userReducer from './user/UserSlice'
const store = configureStore({
    reducer:{
        darkmode: darkmodeReducer,
        user: userReducer
    }
})
export default store;
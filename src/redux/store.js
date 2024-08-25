import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from './theme/ThemeSlice'

const store = configureStore({
    reducer:{
        darkmode: darkmodeReducer
    }
})
export default store;
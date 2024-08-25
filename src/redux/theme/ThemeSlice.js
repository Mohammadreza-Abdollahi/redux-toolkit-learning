import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkmode: "light"
};
const themeSlice = createSlice({
    name: "darkmode",
    initialState,
    reducers: {
        setTheme: (state,action)=>{
            state.darkmode = action.payload
        }
    }
})
export default themeSlice.reducer;

export const {setTheme} = themeSlice.actions;
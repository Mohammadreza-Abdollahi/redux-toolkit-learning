import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    data: [],
    error: ''
}
export const getUser = createAsyncThunk('user/getUser', async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json();
})
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getUser.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(getUser.fulfilled,(state , action)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = ''
        });
        builder.addCase(getUser.rejected,(state , action)=>{
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        })
    }
})
export default userSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    fetching: false,
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
            if(state.data.length > 0){
                state.fetching = true
            }else{
                state.loading = true;
                state.fetching = true;
            }
        });
        builder.addCase(getUser.fulfilled,(state , action)=>{
            state.loading = false;
            state.fetching = false;
            state.data = action.payload;
            state.error = ''
        });
        builder.addCase(getUser.rejected,(state , action)=>{
            state.loading = false;
            state.fetching = false;
            state.data = [];
            state.error = action.error.message;
        })
    }
})
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { login } from './service.js'

const init = {
    isLoding:false,
    error:null,
}

const authSlice = createSlice({
    initialState:init,
    name:'auth',
    reducers:{
    },
    extraReducers:builder=>{
        builder.addCase(login.pending,(state)=>{
            state.isLoding = true;
        })
        .addCase(login.fulfilled,(state,{payload})=>{
            console.log(payload,'rtwysui');
        })
        .addCase(login.rejected,(state,action)=>{
            console.log(action);
        })
    }
});

export default authSlice.reducer;

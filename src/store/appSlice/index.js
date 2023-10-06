import { createSlice } from "@reduxjs/toolkit";
const init = {
    isLoding:false,
    error:null,
}

const appSlice = createSlice({
    initialState:init,
    name:'app',
    // extraReducers:builder=>{
    //     builder.addCase(getCategory.pending,(state)=>{
    //         state.isLoding = true;
    //     })
    // }
})

export default appSlice.reducer;
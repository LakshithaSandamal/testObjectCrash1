import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/http";

export const getCategory = createAsyncThunk('app.getCategory',async(data)=>{
    try {
        const res = await http.get('other/categories');
        return res.data
    } catch (error) {
        throw error
    }
})
import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/http";

export const login = createAsyncThunk('auth.login',async(data)=>{
    try {
        const res = await http.post('/login',data);
        return res.data
    } catch (error) {
        const a = error.message
        const b = {email:["uydhje"]}
        console.log(typeof(a));
        return Promise.reject({name:'hwbd'});
    }
})
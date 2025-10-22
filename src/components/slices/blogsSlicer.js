import { createSlice } from "@reduxjs/toolkit";
import { blogs } from "../data/blogsData";

const initialState = blogs;

const blogsSlicer = createSlice({
    name: 'blogs',
    initialState,
    reducer: []
})

export default blogsSlicer.reducer;
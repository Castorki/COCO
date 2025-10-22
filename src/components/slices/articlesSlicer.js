import { createSlice } from "@reduxjs/toolkit";
import { articles } from "../data/articlesData";

const initialState = articles;

const articlesSlicer = createSlice({
    name: 'articles',
    initialState,
    reducer: []
})

export default articlesSlicer.reducer;
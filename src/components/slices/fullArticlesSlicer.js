import { createSlice } from "@reduxjs/toolkit";
import { fullArticles } from "../data/fullArticlesData";

const initialState = fullArticles;

const fullArticlesSlice = createSlice({
    name: 'fullArticles',
    initialState,
    reducer: []
})

export default fullArticlesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { news } from "../data/trendingNewsData";


const initialState = news;

const newsSlicer = createSlice(
    {
        name: 'news',
        initialState,
        reducer:{}
    }
)

export default newsSlicer.reducer
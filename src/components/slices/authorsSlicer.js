import { createSlice } from "@reduxjs/toolkit";
import { authors } from "../data/authorsData";

const initialState = authors;

const authorsSlicer = createSlice({
    name: 'authors',
    initialState,
    reducer: []
})

export default authorsSlicer.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { filters } from "../data/filtersForBlogs";

const initialState = filters;

const filtersSlicer = createSlice({
    name: 'filters',
    initialState,
    reducer: []
})

export default filtersSlicer.reducer;
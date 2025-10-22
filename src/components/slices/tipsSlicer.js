import { createSlice } from "@reduxjs/toolkit";
import { tips } from "../data/usefullTipsData";

const initialState = tips;

const tipsSlicer = createSlice({
    name: 'tips',
    initialState,
    reducer: []
})

export default tipsSlicer.reducer;
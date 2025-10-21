import { createSlice } from "@reduxjs/toolkit";
import { benefits } from "../data/benefitsData";


const initialState = benefits;

const benefitsSlicer = createSlice({
    name: 'benefits',
    initialState,
    reducers: {}
})

export default benefitsSlicer.reducer;
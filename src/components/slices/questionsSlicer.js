import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../data/frequantlyQuestions";

const initialState = questions;

const questionsSlicer = createSlice({
    name: 'questions',
    initialState,
    reducers: {}
})

export default questionsSlicer.reducer;
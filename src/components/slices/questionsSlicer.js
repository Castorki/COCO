import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../data/frequantlyQuestionsData";

const initialState = questions;

const questionsSlicer = createSlice({
    name: 'questions',
    initialState,
    reducers: {}
})

export default questionsSlicer.reducer;
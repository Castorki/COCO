import { createSlice } from "@reduxjs/toolkit";
import { rewies } from "../data/rewiesData";


const initialState = rewies;

const rewiesSlicer = createSlice(
    {
        name: 'rewies',
        initialState,
        reducer:{}
    }
)

export default rewiesSlicer.reducer
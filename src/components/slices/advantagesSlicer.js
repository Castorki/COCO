import { createSlice } from "@reduxjs/toolkit";
import { advanteges } from "../data/advantagesData";


const initialState = advanteges;

const advantegesSlicer = createSlice(
    {
        name: 'advanteges',
        initialState,
        reducer: {}
    }
)

export default advantegesSlicer.reducer
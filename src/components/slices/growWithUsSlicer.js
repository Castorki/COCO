import { createSlice } from "@reduxjs/toolkit";
import { growthWithUs } from "../data/growWhithUsData";


const initialState = growthWithUs;

const growthWithUsSlicer = createSlice(
    {
        name: 'growthWithUs',
        initialState,
        reducer:{}
    }
)

export default growthWithUsSlicer.reducer
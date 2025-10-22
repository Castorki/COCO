import { createSlice } from "@reduxjs/toolkit";
import { plans } from "../data/pricingPlansData";


const initialState = plans;

const plansSlicer = createSlice(
    {
        name: 'plans',
        initialState,
        reducer:{}
    }
)

export default plansSlicer.reducer
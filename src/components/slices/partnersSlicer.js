import { createSlice } from "@reduxjs/toolkit";
import { partners } from "../data/partnersData";


const initialState = partners;

const partnersSlicer = createSlice(
    {
        name: 'partners',
        initialState,
        reducer:{}
    }
)

export default partnersSlicer.reducer
import { createSlice } from "@reduxjs/toolkit";
import { belifs } from "../data/ourBeliefsData";


const initialState = belifs;

const belifsSlicer = createSlice(
    {
        name: 'belifs',
        initialState,
        reducer:{}
    }
)

export default belifsSlicer.reducer
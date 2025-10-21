import { createSlice } from "@reduxjs/toolkit";
import { offers } from "../data/ourOffersData";

const initialState = offers;

const offersSlicer = createSlice(
    {
        name: 'offers',
        initialState,
        reducer:{}
    }
)

export default offersSlicer.reducer
import { team } from "../data/teamData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = team;

const teamSlicer = createSlice({
    name: 'team',
    initialState,
    reducer: []
})

export default teamSlicer.reducer;
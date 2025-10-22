import { createSlice } from "@reduxjs/toolkit";
import { contacts } from "../data/contactsData";

const initialState = contacts;

const contactsSlicer = createSlice({
    name: 'contacts',
    initialState,
    reducer: []
})

export default contactsSlicer.reducer;
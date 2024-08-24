import { createSlice } from "@reduxjs/toolkit";

const resInfoSlice = createSlice({
    name: "resInfo",
    initialState: {
        items: []
    },

    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const { addItems } = resInfoSlice.actions;
export default resInfoSlice.reducer;
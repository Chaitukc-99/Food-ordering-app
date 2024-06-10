import { createSlice } from "@reduxjs/toolkit";

const resInfoSlice = createSlice({
    name: "resInfo",
    initialState: {
        items: [],
    },

    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const { addItem } = resInfoSlice.actions;
export default resInfoSlice.reducer;
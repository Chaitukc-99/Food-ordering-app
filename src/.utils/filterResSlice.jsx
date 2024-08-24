import { createSlice } from "@reduxjs/toolkit";

const filterResSlice = createSlice({
    name: "filterRes",
    initialState: {
        items: []
    },

    reducers: {
        addFilterItems: (state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const { addFilterItems } = filterResSlice.actions;
export default filterResSlice.reducer;
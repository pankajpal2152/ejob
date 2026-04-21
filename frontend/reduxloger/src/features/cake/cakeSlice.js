// src/features/cake/cakeSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCakes: 10,
};

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        cake_ordered: (state, action) => {
            state.numOfCakes -= action.payload;
        },
        cake_restocked: (state, action) => {
            state.numOfCakes += action.payload;
        },
    },
});

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;

console.log("Cake slice ready");
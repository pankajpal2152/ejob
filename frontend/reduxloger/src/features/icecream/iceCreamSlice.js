// src/features/icecream/iceCreamSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

const initialState = {
    numOfIcecreams: 20,
};

const iceCreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        icecream_sold: (state, action) => {
            state.numOfIcecreams -= action.payload;
        },
        icecream_stock: (state, action) => {
            state.numOfIcecreams += action.payload;
        },
    },

    // 🔥 reacts to cake actions
    extraReducers: (builder) => {
        builder.addCase(cakeActions.cake_ordered, (state, action) => {
            // free ice cream for each cake
            state.numOfIcecreams -= action.payload;
        });
    },
});

export default iceCreamSlice.reducer;
export const icecreamActions = iceCreamSlice.actions;

console.log("IceCream slice ready");
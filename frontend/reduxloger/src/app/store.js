// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/iceCreamSlice";
import logger from "redux-logger";

const log = logger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(log),
});

export default store;

console.log("Store is ready");
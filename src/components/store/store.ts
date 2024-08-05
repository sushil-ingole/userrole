import { configureStore } from "@reduxjs/toolkit";
import rolereducer from "./rolereducer";

const store = configureStore({
    reducer: {
        roleName: rolereducer
    }
});

export default store;

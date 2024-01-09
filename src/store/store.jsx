import { configureStore } from "@reduxjs/toolkit";
import captuerreducer from "../components/redux/Slice"

export const Store=configureStore({
    reducer:{
        mycapture:captuerreducer
    }
})
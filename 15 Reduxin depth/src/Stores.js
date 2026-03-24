import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from"./Sicer1";

const stores = configureStore({
    reducer:{
        slice1:slice1Reducer,
        // slice3:slice3Reducer,
        // slice2:slice2Reducer,
    }
})

export default stores;
//slice name:resucer
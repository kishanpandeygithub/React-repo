import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slice"
const stores = configureStore(
    {
        reducer:{
            slice: CartReducer
        }
    }
)
export default stores;
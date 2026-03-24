import { configureStore } from "@reduxjs/toolkit";
import Slicereducer from "./slicer1.js"
const stores = configureStore(
    {
        reducer:{
            slice1:Slicereducer
        }
    }
)
export default stores;
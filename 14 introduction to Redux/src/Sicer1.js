import { createSlice } from "@reduxjs/toolkit";
// we have created the slice  
const reactslicer = createSlice(
    {
        name:"slice1" ,
        initialState:{count:0},
        reducers:{
            Increment:(state)=>{
                state.count =state.count+1;
            },
            Decrement:(state)=>{
                state.count = state.count-1;
            } ,
            Reset:(state)=>{
                state.count =0;
            }
        }
    }
)

export const {Increment , Decrement , Reset} = reactslicer.actions
// let's create the store 

export default reactslicer.reducer;
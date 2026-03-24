import { createSlice } from "@reduxjs/toolkit";
// we have created the slice  
// Immer eithier create creater the new object or update the draft  the
// originam object: draft (dupplicate Object): update the draft to the original
//    {count =0}             {count:1 }
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
            },
            CostomIncreaser:(state , action)=>{state.count+=action.payload}
        }
    }
)

export const {Increment , Decrement , Reset ,CostomIncreaser} = reactslicer.actions
// let's create the store 
export {reactslicer};
export default reactslicer.reducer;
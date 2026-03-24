import { createSlice } from "@reduxjs/toolkit"

const FoodSlice = createSlice(
    {
        name:"slice" ,
        initialState:{count :0} ,
        reducers:{
            addItems:(state)=>{state.count = state.count+1} ,
            removeItems:(state)=>{state.count = state.count-1}
        }
    }
)

export const {addItems , removeItems} = FoodSlice.actions;
export default FoodSlice.reducer;
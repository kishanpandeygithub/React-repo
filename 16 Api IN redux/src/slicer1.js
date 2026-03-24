import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// createAsyncThunk()
// {type:"Coin/fetch/pending", payload:undefined}
//{type :"Coin/fetch/fillfilled", payload:data}
//{type :"Coin/fetch/rejected", payload: "error_message"}\
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}
// Fetchdata(20)//here the 20 is the argument 
const Fetchdata = createAsyncThunk(
    //Action:type:Payload
    'Coin/fetch',
    async (args, thunkAPI) => {
        try {
            const responce = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data = await responce.json();
            return data;//te data is go into the payload and it is send as the dispatch
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const slicer1 = createSlice(
    {
        name: "slice1",
        initialState: { data: [], loading: false, error: null },
        reducers: {
            Increment: (state) => { state.count++ },
            Decrement: (state) => { state.count-- }
        },
        extraReducers: (builder) => {
            builder
                .addCase(Fetchdata.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(Fetchdata.fulfilled, (state, action) => {
                    state.data = action.payload;
                    state.loading = false;
                })
                .addCase(Fetchdata.rejected, (state , action) => {
                    state.error = action.payload;
                    state.loading = false;
                })
        }
    }
)
export default slicer1.reducer;
export {Fetchdata};
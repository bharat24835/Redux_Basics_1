import { createSlice } from "@reduxjs/toolkit";

const initialState  = {value : 0};

export const MultiplySlice = createSlice({
name:"bharat2",
initialState,
reducers  :{
    multiplyByNumber : (state , action)=>{
        state.value = action.payload[0] * action.payload[1];
    },
},
});

export const {multiplyByNumber} = MultiplySlice.actions;
export default MultiplySlice.reducer;
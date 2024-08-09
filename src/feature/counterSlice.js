import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : 0};  // this is inital object

export const CounterSlice = createSlice({
    name : "bharat",
    initialState,
    reducers : {
        incrementBy1 : (state)=>{
            state.value = state.value+1;
        },
        decrementBy1 : (state)=>{
            state.value = state.value -1;
            if(state.value <= 0){
                state.value = 0;
            }
        },
        incrementByValue : (state , action)=>{
            
            state.value = state.value + parseInt(action.payload);
        },
        decrementByValue :(state , action)=>{
            state.value = state.value - action.payload;
            if(state.value <= 0){
                state.value = 0;
            }
        },
        reset : (state)=>{
            state.value = 0;
        }


    },
});

export const {incrementBy1, incrementByValue, decrementBy1 , decrementByValue, reset } = CounterSlice.actions;
export default CounterSlice.reducer;
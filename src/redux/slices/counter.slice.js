import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1:0,
    count2:0
}
let counterSlice = createSlice({
    name:'counterSlice',
    initialState,
    reducers:{
        incCount1:(state)=> {
           state.count1 += 1
        },
        decCount1:(state) =>{
            state.count1 -=1
        },
        reset:(state,action) =>{
            state.count1 = action.payload || 0
        },
        incCount2:(state)=> {
            state.count2 += 1
        },
        decCount2:(state) =>{
            state.count2 -=1
        },
        reset2:(state,action) =>{
            state.count2 = action.payload || 0
        }
    }
})

const {reducer:countReducer, actions:{incCount1,decCount1,reset, incCount2,decCount2,reset2}}= counterSlice

export default countReducer

export const counterActions = {
    incCount1,
    decCount1,
    reset,
    decCount2,
    incCount2,
    reset2

}
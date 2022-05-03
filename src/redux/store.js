import {combineReducers, configureStore} from "@reduxjs/toolkit";
import countReducer from "./slices/counter.slice";
let rootReducer = combineReducers({
    counter:countReducer

});

const store = configureStore({
    reducer:rootReducer
})
export default store
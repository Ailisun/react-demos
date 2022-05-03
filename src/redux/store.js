import {combineReducers, configureStore} from "@reduxjs/toolkit";
import countReducer from "./slices/counter.slice";
import userReducer from "./slices/user.slice";
let rootReducer = combineReducers({
    counter:countReducer,
    user:userReducer

});

const store = configureStore({
    reducer:rootReducer
})
export default store
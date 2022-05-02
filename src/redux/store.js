import {combineReducers, createStore} from "redux";
import {reducerUsers} from "./user.reducer";
import {reducerPosts} from "./posts.refucer";

let reducers = combineReducers({usersState: reducerPosts, postsState: reducerUsers})
export let store = createStore(reducers);
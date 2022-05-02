import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducerUsers} from "./user.reducer";
import {reducerPosts} from "./posts.refucer";
import thunk from "redux-thunk";

let reducers = combineReducers({usersState: reducerPosts, postsState: reducerUsers})
const loadUsers = ()=> async(dispatch) {

}
export let store = createStore(reducers, applyMiddleware(thunk));
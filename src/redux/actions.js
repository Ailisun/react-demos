import {LOAD_POSTS, LOAD_USERS} from "./action.types";
// це для загального розвитку
const loadUsers = () => async (dispatch) => {
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        dispatch({type : LOAD_USERS,payload: users})
}

const loadPosts = (payload,dispatch) => {
    dispatch({type: LOAD_POSTS, payload});
}

export {loadUsers, loadPosts};
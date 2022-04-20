import {useState} from "react";
import styles from './App.module.css';

import {Users, Posts,UserInfo } from "./components";



export const App = () => {
    const[user, setUser] = useState(null)
    const[userIdforPosts, setUseruserIdForPost] = useState(null)
    return (
        <div>
            <div className={styles.usersAndInfo}>
                <Users setUser={setUser} setUseruserIdForPost={setUseruserIdForPost}/>
                {user && <UserInfo user = {user} setUseruserIdForPost={setUseruserIdForPost} />}
            </div>
            { userIdforPosts && <Posts userId={userIdforPosts}/>}
        </div>
    );
};

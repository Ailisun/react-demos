import './App.css';

import {Users} from "./components";
import {UserInfo} from "./components/UserInfo/UserInfo";
import {Posts} from "./components/Posts/Posts";
import {useState} from "react";

export const App = () => {
    const[user, setUser] = useState(null)
    return (
        <div>
            <div>
                <Users setUser={setUser}/>
                {user && <UserInfo user = {user}/>}
            </div>
            <Posts/>
        </div>
    );
};

import {useState} from "react";
import './App.css';

import {Users, Posts,UserInfo } from "./components";



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

import './App.css';
import {Users, Posts, Comments} from "./components";

export const App = () => {
    return (
        <div>
            <div className={'user_posts'}>
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>
    );
};


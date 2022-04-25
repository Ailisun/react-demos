import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {userService} from "../../services";
import {UserDetails} from "../../components/UserDetails/UserDetails";

const SinglUserPage = () => {
    const {state} = useLocation()
    const [user, setUser] = useState(state)
    const {id} = useParams()

    useEffect(() => {
        if (!state){
            userService.getById(id).then(({data}) => setUser(data))
        }else {
            setUser(state)
        }

    }, [id, state])

    return (
        <div>
        <div>
            {user && <UserDetails user={user}/>}
        </div>
            <Outlet/>
        </div>
    );
};

export {SinglUserPage};
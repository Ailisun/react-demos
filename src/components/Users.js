import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadUsers} from "../redux/actions";

export function Users() {

    let defaultRootState = useSelector(({usersState}) => usersState);
    let dispatch = useDispatch();


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                loadUsers(value, dispatch);
            });

    }, []);

    return (
        <div>


            {
                defaultRootState.map(value => <div key={value.id}>{value.name}</div>)
            }


        </div>
    );
}
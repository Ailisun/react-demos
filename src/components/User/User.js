
export const User = ({user, setUser}) => {
    return (
        <div>
            {user.name}
            <input type="button" value="show info" onClick={()=> setUser(user)}/>
        </div>
    );
};


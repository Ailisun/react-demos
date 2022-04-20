
export const User = ({user, setUser,setUseruserIdForPost}) => {
    const click = () => {
        setUseruserIdForPost(false)
        setUser(user)
    }
    return (
        <div>
            {user.name}
            <input type="button" value="show info" onClick={click}/>
        </div>
    );
};


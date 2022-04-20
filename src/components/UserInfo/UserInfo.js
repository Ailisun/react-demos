export const UserInfo = ({user, setUseruserIdForPost}) => {

    return (
        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <input type="button" value="show posts" onClick={()=> setUseruserIdForPost(user.id)}/>


        </div>
    );
};


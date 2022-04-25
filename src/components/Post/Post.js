import {Button} from "../Button/Button";

const Post = ({post, flag}) => {
    // const navigate = useNavigate()
    const {id, title} = post
    return (
        <div>
            {id} -- {title} {
            flag && <Button to={`${id}`} state={post}> getDetails</Button>
        }
            {/*<Link to={`${id}`} state={post}> getDetails</Link>*/}
        {/*<button onClick={() => navigate(id.toString())}>go to users</button> // краще так не робити*/}
            </div>
    );
};

export {Post};
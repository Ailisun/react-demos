import {Link, useNavigate} from "react-router-dom";
import {Button} from "../Button/Button";

const Post = ({post}) => {
    // const navigate = useNavigate()
    const {id, title} = post
    return (
        <div>
            {id} -- {title}
            {/*<Link to={`${id}`} state={post}> getDetails</Link>*/}
            <Button to={`${id}`} state={post}> getDetails</Button>
            {/*<button onClick={() => navigate(id.toString())}>go to users</button> // краще так не робити*/}
        </div>
    );
};

export {Post};
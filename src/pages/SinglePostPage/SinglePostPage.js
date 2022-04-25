import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";
import {PostDetails} from "../../components";

const SinglePostPage = () => {
    const {state} = useLocation()
    const [post, setPost] = useState(state)
    const {userId} = useParams()

    useEffect(() => {
        if (!state){
            postService.getById(userId).then(({data}) => setPost(data))
        }else {
            setPost(state)
        }

    }, [userId, state])
    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {SinglePostPage}
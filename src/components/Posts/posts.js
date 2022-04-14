import {useEffect, useState} from "react";

import {postsServices} from "../../services";
import {Post} from "../Post/Post";

export const Posts = () => {
    const [posts, setPosts] = useState(null)
    useEffect(() => {
        postsServices.getAllPosts().then(value => setPosts(value))
    }, [])
    return (
        <div>
            {
                posts && posts.map((post) => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};


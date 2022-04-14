import {useEffect, useState} from "react";
import {Comment} from "../Comment/Comment";
import {commentsServices} from "../../services";

export const Comments = () => {
    const [comments, setComments] = useState(null)

    useEffect(() => {
       commentsServices.getAllComments().then(value => setComments(value))
    }, [])
    return (
        <div>
            {
                comments && comments.map((comment) => <Comment key = {comment.id} comment={comment}/>)
            }
        </div>
    );
};


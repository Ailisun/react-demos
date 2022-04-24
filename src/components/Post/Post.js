
const Post = ({post}) => {
    const {id, title} = post
    return (
        <div>
            {id} -- {title} <Link to ={`${id}`}>get Details</Link>
        </div>
    );
};

export {Post};
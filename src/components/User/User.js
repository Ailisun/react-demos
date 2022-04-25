import {Button} from "../Button/Button";

const User = ({user}) => {

    const {id, name} = user
    return (
        <div>
            {id} -- {name}
            <Button to={`${id}`} state={user}> show info</Button>

        </div>
    );
};

export {User};
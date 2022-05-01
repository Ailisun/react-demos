import { FunctionComponent} from "./components";
import {useState} from "react";

const App = () => {
    const [flag, setFlag] = useState(true)
    return (
        <div>
            {/*<div>{flag && <ClassComponent ssss={'My props'}/>}</div>*/}
            <div>{flag && <FunctionComponent ssss={'My props'}/>}</div>
            <div><button onClick={()=>
                setFlag(prev => !prev)
            }> Change</button></div>
        </div>
    );
};

export default App;
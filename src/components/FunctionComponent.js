import {useEffect, useState} from "react";

const FunctionComponent = (props) => {
    const {ssss} = props;
    console.log('constructor');
    const [state, setState]=useState({a:0, b:25})
    const inc = () => {
      setState({...state, a:state.a +1})
    }
    useEffect(() => {console.log('compomnentDidMount');},[])

    useEffect(() =>{
        console.log('componentDidUpdate');
    },[props, state])
    return (
        <div>Hello from FunctionComponent
            <div>AA: {ssss}</div>
            <div>A: {state.a}</div>
            <div>B: {state.b}</div>
            <button onClick={()=>inc()}>INC</button>
        </div>
    );
};

export {FunctionComponent};
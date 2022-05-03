import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../redux/slices/counter.slice";
import {useRef} from "react";

export const Counter = () => {
   const {count1,count2} =  useSelector(state => state.counter)
    const dispatch = useDispatch()
    const resetInput = useRef()
    return (
        <div>
            <h1>count1 : {count1}</h1>
            <button onClick={()=> dispatch(counterActions.incCount1())}>INC</button>
            <button onClick={()=> dispatch(counterActions.decCount1())}>DEC</button>
            <button onClick={()=> dispatch(counterActions.reset())}>RESET</button>


            <h1>count2 : {count2}</h1>
            <button onClick={()=> dispatch(counterActions.incCount2())}>INC</button>
            <button onClick={()=> dispatch(counterActions.decCount2())}>DEC</button>
            <input type="text" ref = {resetInput}/>
            <button onClick={()=> dispatch(counterActions.reset2(+resetInput.current.value))}>RESET</button>
        </div>
    );
};


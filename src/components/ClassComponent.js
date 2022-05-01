import {Component} from "react";

class ClassComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {a:0, b:25}
        console.log('constructor');

    }
    componentDidMount() {
        console.log('compomnentDidMount');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if(prevState.a === 5){
           return 'snapshot'
        }
        return null
    }

    componentWillUnmount() {

            console.log('componentWillUnMount');

    }

    inc() {
        this.setState(prev => ({a:prev.a+1}))
    }

    render() {
        console.log('render');
        return(
            <div>Hello from ClassComponent
                <div>AA: {this.props.ssss}</div>
                <div>A: {this.state.a}</div>
                <div>B: {this.state.b}</div>
                <button onClick={()=>this.inc()}>INC</button>
            </div>
        )
    }
}
 export {ClassComponent}
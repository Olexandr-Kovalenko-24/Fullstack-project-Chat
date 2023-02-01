import React from 'react';
import {connect} from 'react-redux';
import {incrementActionCreater, decrementActionCreater, stepActionCreater} from '../src/actions/actions'

const Component = (props) => {


    return (
        <div>
            <h1>{props.counter}</h1>
            <input type="number" name='step' value={props.step} onChange={props.changeStep} />
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </div>
    );
}

const mapStateToProps = state => state

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(incrementActionCreater()),
//         decrement: () => dispatch(decrementActionCreater()),
//         changeStep: (event) => dispatch(stepActionCreater(event))
//     }
// }

const mapDispatchToProps = {
    increment: incrementActionCreater,
    decrement: decrementActionCreater,
    changeStep: stepActionCreater
}

const HOC = connect(mapStateToProps, mapDispatchToProps)
const ComponentWithStore = HOC(Component);


export default ComponentWithStore;

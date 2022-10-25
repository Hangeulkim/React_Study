import React, {Component} from 'react';

class Counter extends Component{
    state = {
        counter: 0,
        fixed: 1
    };

    handleIncrease = () => {
        console.log('increase');
        this.setState(
            {
                counter: this.state.counter + 1
            },
            () => {
                console.log(this.state.counter);
            }
        );
    };

    handleDecrease = () => {
        console.log('decrease');//함수형 업데이트가 아닌 경우 비동기적으로 업데이트
        this.setState(state => ({//함수형 이므로 바로바로 업데이트 됨 만약 2번 진행하는 경우 2번 만큼 값이 변화
            counter: this.state.counter - 1
        }));
    }

    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        )
    }
}

export default Counter;


/*
함수형

function reducer(state, action){
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer,0);

    const onIncrease = () => {
        dispatch({type: 'INCREMENT'});
    };

    const onDecrease = () => {
        dispatch({type: 'DECREMENT'});
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
*/
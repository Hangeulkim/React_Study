import React, {useReducer} from "react";

type Action = {type: 'INCREASE'} | {type: 'DECREASE'};

function reducer(state: number, action: Action): number{
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter(){
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({type: 'INCREASE'});
    const onDecrease = () => dispatch({type: 'DECREASE'});

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}


export default Counter;

/*
usestate 사용

//null일 수도 있는 경우 타입 지정 useState<number>
function Counter() {
    const [count, setCount] = useState(0);
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count -1);

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}
*/
import React, {useReducer, useContext, createContext, Dispatch} from 'react';

type todo = {
    id: number;
    text: string;
    done: boolean;
}

type State = todo[];

type Action =
    | {type: 'CREATE'; todo: todo}
    | {type: 'TOGGLE'; id: number; done: boolean}
    | {type: 'REMOVE'; id: number};

type SampleDispatch = Dispatch<Action>;

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id: 3,
        text: 'Context 만들기',
        done: false
    },
    {
        id:4,
        text: '기능 구현하기',
        done: false
    },
    {
        id:5,
        text: '1번 과제 끝내기',
        done: false
    }
];

function todoReducer(state: State, action: Action): State{
    switch(action.type){
        case 'CREATE':
            console.log(action.todo);
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type`);
    }
}

const TodoStateContext = createContext<State | null>(null);
const TodoDispatchContext = createContext<SampleDispatch | null>(null);

export function TodoProvider({children}: {children: React.ReactNode}) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                    {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
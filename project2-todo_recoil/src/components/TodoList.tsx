import React from 'react';
import { useRecoilValue } from 'recoil';
import '../css/TodoList.scss'
import TodoItem from './TodoItem';
import { filteredTodoListState } from './TodoListFilters';

const TodoList: React.FC = () => {
    const todos = useRecoilValue(filteredTodoListState);
    
    return (
        <div className='TodoListBlock'>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}
        </div>
    );
}

export default TodoList;

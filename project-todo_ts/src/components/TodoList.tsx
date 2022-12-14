import React from 'react';
import '../css/TodoList.scss'
import { useTodoState } from './TodoContext';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const todos = useTodoState();
    
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

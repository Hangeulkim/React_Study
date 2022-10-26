import React from 'react';
import '../css/TodoList.scss'
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    return (
        <div className='TodoListBlock'>
            <TodoItem text="프로젝트 생성하기" done={true}/>
            <TodoItem text="컴포넌트 스타일링 하기" done={true}/>
            <TodoItem text="Context 만들기" done={false}/>
            <TodoItem text="기능 구현하기" done={false}/>
        </div>
    );
}

export default TodoList;

import React from 'react';
import '../css/TodoHead.scss';
import {useTodoState} from './TodoContext';

const TodoHead: React.FC = () => {
    const todos = useTodoState();
    console.log(todos);
    return (
        <div className='TodoHeadBlock'>
            <h1>2022년 10월 26일</h1>
            <div className='day'>수요일</div>
            <div className='tasks-left'>할 일 2개 남음</div>
        </div>
    );
}

export default TodoHead;
import React from 'react';
import { useRecoilValue } from 'recoil';
import '../css/TodoHead.scss';
import {todoListState} from './TodoContext';

const TodoHead: React.FC = () => {
    const todos = useRecoilValue(todoListState);
    const undoneTasks = todos.filter(todo => !todo.done);
    console.log(todos);


    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

    return (
        <div className='TodoHeadBlock'>
            <h1>{dateString}</h1>
            <div className='day'>{dayName}</div>
            <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
        </div>
    );
}

export default TodoHead;
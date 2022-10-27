import React from 'react';
import '../css/TodoItem.scss';
import {MdDone, MdDelete} from 'react-icons/md';
import classNames from 'classnames';
import { todoListState} from './TodoContext';
import { useRecoilState } from 'recoil';

type Item = {
    id: number;
    done: boolean;
    text: string;
};

const TodoItem: React.FC<Item> = ({id, done, text}) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    console.log(todoList);

    const onToggle = () => {
        const newList = todoList.map(todo =>
            todo.id === id ? {...todo, done: !todo.done} : todo
        );

        setTodoList(newList);
    };

    const onRemove = () => {
        const newList = todoList.filter(todo => todo.id !== id);

        setTodoList(newList);
    };

    return (
        <div className='TodoItemBlock'>
            <div className={classNames('CheckCircle', {done})} onClick={onToggle}>
                {done && <MdDone/>}
            </div>
            <div className={classNames('Text',{done})}>
                {text}
            </div>
            <div className='Remove' onClick={onRemove}>
                <MdDelete/>
            </div>
        </div>
    )
}

export default React.memo(TodoItem);
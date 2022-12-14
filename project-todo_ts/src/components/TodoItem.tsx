import React from 'react';
import '../css/TodoItem.scss';
import {MdDone, MdDelete} from 'react-icons/md';
import classNames from 'classnames';
import { useTodoDispatch } from './TodoContext';

type Item = {
    id: number;
    done: boolean;
    text: string;
};



const TodoItem: React.FC<Item> = ({id, done, text}) => {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type: 'TOGGLE', id, done});
    const onRemove = () => dispatch({type: 'REMOVE', id});
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
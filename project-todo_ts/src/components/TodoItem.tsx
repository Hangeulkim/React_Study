import React from 'react';
import '../css/TodoItem.scss';
import {MdDone, MdDelete} from 'react-icons/md';
import classNames from 'classnames';

type Item = {
    id?: number;
    done: boolean;
    text: string;
};

const TodoItem: React.FC<Item> = ({id, done, text}) => {
    return (
        <div className='TodoItemBlock'>
            <div className={classNames('CheckCircle', {done})}>{done && <MdDone/>}</div>
            <div className={classNames('Text',{done})}>{text}</div>
            <div className='Remove'>
                <MdDelete/>
            </div>
        </div>
    )
}

export default TodoItem;
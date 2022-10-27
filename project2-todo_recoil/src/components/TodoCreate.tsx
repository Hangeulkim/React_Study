import React, {useState} from 'react';
import '../css/TodoCreate.scss';
import {MdAdd} from 'react-icons/md';
import classNames from 'classnames';
import { todoListState} from './TodoContext';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const TodoCreate: React.FC = () =>{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const todos = useRecoilValue(todoListState);
    const nextId = Math.max(...todos.map(todo => todo.id)) + 1;
    const setTodoList = useSetRecoilState(todoListState);

    const onToggle = () => setOpen(!open);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(nextId);
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: nextId,
                text: value,
                done: false
            },
        ]);
        setValue('');
        setOpen(false);
    };

    return(
        <>
            {open && (
                <div className='InsertFormPositioner'>
                    <form className='InsertForm' onSubmit={onSubmit}>
                        <input 
                            value={value}
                            autoFocus
                            placeholder='할 일을 입력 후, Enter 를 누르세요'
                            onChange={onChange}
                        />
                    </form>
                </div>
            )}
            <div className={classNames('CircleButton', {open})} onClick={onToggle}>
                <MdAdd/>
            </div>
        </>
    );
}

export default TodoCreate;
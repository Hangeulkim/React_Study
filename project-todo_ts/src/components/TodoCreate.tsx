import React, {useState} from 'react';
import '../css/TodoCreate.scss';
import {MdAdd} from 'react-icons/md';
import classNames from 'classnames';

const TodoCreate: React.FC = () =>{
    const [open, setOpen] = useState(false);

    const onToggle = () => setOpen(!open);

    return(
        <>
            {open && (
                <div className='InsertFormPositioner'>
                    <div className='InsertForm'>
                        <input autoFocus placeholder='할 일을 입력 후, Enter 를 누르세요'/>
                    </div>
                </div>
            )}
            <div className={classNames('CircleButton', {open})} onClick={onToggle}>
                <MdAdd/>
            </div>
        </>
    );
}

export default TodoCreate;
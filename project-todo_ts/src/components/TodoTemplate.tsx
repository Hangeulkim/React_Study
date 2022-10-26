import React from 'react';
import '../css/TodoTemplate.scss';


function TodoTemplate({children}: {children: React.ReactNode}) {
    return (
    <div className='TodoTemplateBlock'>
        {children}
    </div>
    );
}

export default TodoTemplate;
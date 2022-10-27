import React from 'react';
import './css/App.scss'
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

import { RecoilRoot } from 'recoil';
import TodoListFilters from './components/TodoListFilters';

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <TodoTemplate>
          <TodoHead/>
          <TodoListFilters/>
          <TodoList/>
          <TodoCreate />
        </TodoTemplate>
      </div>
    </RecoilRoot>
  )
}

export default App;
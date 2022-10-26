import React from 'react';
import './css/App.scss'
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import {TodoProvider} from './components/TodoContext';

function App() {
  return (
    <TodoProvider>
      <div className='App'>
        <TodoTemplate>
          <TodoHead/>
          <TodoList/>
          <TodoCreate />
        </TodoTemplate>
      </div>
    </TodoProvider>
  )
}

export default App;
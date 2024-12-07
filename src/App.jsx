import { useEffect, useReducer, useState } from 'react'
import './App.css'
import TodoContext from './Context/todoContext';
import dispatchContext from './Context/dispatchContext';
import TodoReducer from './Components/Reducers/todoReducers';
import TodoList from './Components/TodoList/TodoList';
import AddTodo from './Components/AddToDo/Addtodo';
function App() {
  
  const [list, dispatch] = useReducer(TodoReducer,[],()=>{
              const savedTodos = localStorage.getItem("list");
              return savedTodos ? JSON.parse(savedTodos) : [];
              });
  
  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(list));
  },[list]);
  
  return (
      <div className='HomePage'>
          <TodoContext.Provider value = {{list}}>          
          <dispatchContext.Provider value= {{dispatch}}>
          
            <div>
              <h1 className='Header'>MyPlan</h1>
              <hr></hr>
            </div>
            <hr></hr>
            <div>
              <AddTodo/>
            </div>
            <div>
            <TodoList/>
            </div>            
            
          </dispatchContext.Provider>        
        </TodoContext.Provider>
      </div>
      
  )
}

export default App

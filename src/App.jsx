import { useReducer } from 'react'
import './App.css'
import TodoContext from './Context/todoContext';
import dispatchContext from './Context/dispatchContext';
import TodoReducer from './Components/Reducers/todoReducers';
import TodoList from './Components/TodoList/TodoList';
import AddTodo from './Components/AddToDo/Addtodo';
function App() {
  
  const [list, dispatch] = useReducer(TodoReducer,[]);
  return (
      <div className='HomePage'>
          <TodoContext.Provider value = {{list}}>
          <dispatchContext.Provider value= {{dispatch}}>
              <h1 className='Header'>MyPlan</h1>
              <hr></hr>
              <AddTodo/>
              <TodoList/>
          </dispatchContext.Provider>        
        </TodoContext.Provider>
      </div>
      
  )
}

export default App

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
      
      <TodoContext.Provider value = {{list}}>
        <dispatchContext.Provider value= {{dispatch}}>
            <h1>MyPlan | Make your day planable</h1>
            <AddTodo/>
            <TodoList/>
        </dispatchContext.Provider>        
      </TodoContext.Provider>
  )
}

export default App

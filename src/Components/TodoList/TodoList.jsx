import { useContext } from "react";
import TodoContext from "../../Context/todoContext";
import dispatchContext from "../../Context/dispatchContext";
import Todo from "../ToDo/Todo";
import './TodoList.css';

function TodoList(){
    const {list} = useContext(TodoContext);
    const {dispatch} = useContext(dispatchContext);

    function onDelete(t){
        dispatch({type: 'delete_Todo', payload: {t}});
    }

    function onEdit(t,newText){
        dispatch({type: 'edit_Todo', payload: {todo: t,editText: newText}});
    }
    return(
        <div className="ListItem">
            {list.length > 0 && list.map(t=> <Todo
                                                key={t.id}
                                                isFinished = {t.finished}
                                                name={t.name}
                                                type={t.type}
                                                onDelete = {()=>onDelete(t)}
                                                onEdit = {(newText)=>{onEdit(t,newText)}}
            />)}
        </div>
    );
}

export default TodoList;
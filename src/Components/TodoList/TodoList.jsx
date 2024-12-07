import { useContext, useEffect, useState } from "react";
import TodoContext from "../../Context/todoContext";
import dispatchContext from "../../Context/dispatchContext";
import Todo from "../ToDo/Todo";
import './TodoList.css';
 
function TodoList(){
    const {list} = useContext(TodoContext);
    const {dispatch} = useContext(dispatchContext);
    const [filtercase,setCase] = useState("All");

    function onDelete(t){
        dispatch({type: 'delete_Todo', payload: {t}});
    }

    function onEdit(t,newText){
        dispatch({type: 'edit_Todo', payload: {todo: t,editText: newText}});
    }

    function onDone(t){
        dispatch({type: 'onDone', payload: {todo: t, status: t.complete}});
    }

    function onAll(){
        dispatch({type: 'All'});
    }
    return(
        <div className="ListItem">
            {
                <div className="filterBtnsContainer">
                    <button onClick={()=>{
                        setCase("All");
                        onAll();
                    }}>All</button>
                    <button onClick={()=>{
                        setCase("Pen");
                        // onPending();
                    }}>Pending</button>
                    <button onClick={()=>{
                        setCase("Com");
                        // onComplete();
                    }}>Completed</button>
                </div>
                
            }
            {list.length == 0 && "No Tasks Added"}
            {list.length > 0 && filtercase == "All" && list.map(t=> <Todo
                                                key={t.id}
                                                complete = {t.complete}
                                                name={t.name}
                                                type={t.type}
                                                onDelete = {()=>onDelete(t)}
                                                onEdit = {(newText)=>{onEdit(t,newText)}}
                                                onDone = {()=>onDone(t)}
            />)}

            {list.length > 0 && filtercase == "Pen" && list.map((t)=>{
                let cond = t.complete;
                if(!cond) {
                    return(
                        <Todo
                            key={t.id}
                            complete = {t.complete}
                            name={t.name}
                            type={t.type}
                            onDelete = {()=>onDelete(t)}
                            onEdit = {(newText)=>{onEdit(t,newText)}}
                            onDone = {()=>onDone(t)}
                        />
                    );                    
                } 
            })}


            {list.length > 0 && filtercase == "Com" && list.map(t=>{
                let cond = t.complete;
                if(cond) {
                    return(
                        <Todo
                            key={t.id}
                            complete = {t.complete}
                            name={t.name}
                            type={t.type}
                            onDelete = {()=>onDelete(t)}
                            onEdit = {(newText)=>{onEdit(t,newText)}}
                            onDone = {()=>onDone(t)}
                        />
                    );                    
                }
            })}

        </div>
    );
}

export default TodoList;
import { useContext, useState } from "react";
import dispatchContext from "../../Context/dispatchContext";
import './Addtodo.css';
function AddTodo(){

    const [inputText,setInputText] = useState('');
    const [inputTextType,setInputTextType] = useState('');
    const {dispatch} = useContext(dispatchContext);
    return(
        <div className="AddTodoBlock">
            <input
                type="text" 
                placeholder = "Add new task here" 
                value={inputText}
                onChange={e=> setInputText(e.target.value)}         
            />
            <input
                type="text"
                placeholder = "Type of task" 
                value={inputTextType}
                onChange={e=> setInputTextType(e.target.value)}         
            />
            <button
                onClick={()=>{
                    if(inputText == ''){
                        alert("Please Enter Valid Task");
                    }
                    else{
                        dispatch({type: 'add_Todo',payload:{name: inputText, type: inputTextType}});
                        setInputText('');
                        setInputTextType('');
                    }
                    
                }}
            >
                Add Task
            </button>
        </div>
    );
}

export default AddTodo;
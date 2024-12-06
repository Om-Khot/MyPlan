import { useState } from 'react';
import './Todo.css'

function Todo({name,type,onDelete,onEdit}){

    const [isEditing,setIsEditing] = useState(false);
    const [editText,setEditText] = useState(name);


    return (
        <div className="todoBlock">

           <input type="checkbox" className='todocheckbox'/>
           <div className='todoContent'> 
                <div>
                    {(isEditing) ? <input type='text' value={editText} onChange={e=> setEditText(e.target.value)}/> : name}
                </div>
                <div> {type} </div>
           </div>
           <div className='todoBtns'>

                <button onClick={()=>{
                    setIsEditing(!isEditing);
                    onEdit(editText);
                }}> 
                    {(!isEditing) ? "Edit" : "Save"}
                </button>

                <button onClick={onDelete}>Delete</button>
           </div>          
            
        </div>
    );
}

export default Todo;
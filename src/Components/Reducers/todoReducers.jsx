function TodoReducer(state,action){
    if(action.type == 'add_Todo'){
        let todoName = action.payload.name;
        let Type = action.payload.type;
        return [
            ...state, {id: state.length + 1, name: todoName, type: Type, finished:false}
        ]
    }
    else if(action.type == 'delete_Todo'){
        let t = action.payload.t;
        const updateList = state.filter(td=> td.id != t.id);
        return updateList;
    }
    else if(action.type == 'edit_Todo'){
        let t = action.payload.todo;
        let todotext = action.payload.editText;
        const updateList = state.map(td=>{
            if(td.id == t.id){
                t.name = todotext;
            }
            return td;
        });
        return updateList;
    }
    else return state;
}

export default TodoReducer;
function TodoReducer(state,action){

    if (!Array.isArray(state)) state = [];

    if(action.type == 'add_Todo'){
        let todoName = action.payload.name;
        let Type = action.payload.type;
        return [
            ...state, {id: state.length + 1, name: todoName, type: Type, complete:false}
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
    else if(action.type == 'onDone'){
        let t = action.payload.todo;
        let s = action.payload.status;
        const updateList = state.map(td=>{
            if(td.id == t.id){
                td.complete = !(s);
            }
            return td;
        });
        return updateList;
    }
    else if(action.type == 'All'){
        return state;
    }
    else if(action.type == 'Pending'){
        let filtercase = action.payload.filtercase;
        let updateList = state.map(td=>{
            if(td.complete == filtercase) return td;
        });
        return updateList;
    }
    else if(action.type == 'Completed'){
        let filtercase = action.payload.filtercase;
        let updateList = state.map(td=>{
            if(td.complete == filtercase) return td;
        });
        return updateList;
    }
    else return state;
}

export default TodoReducer;
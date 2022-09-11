import { combineReducers } from "redux"
const is = {
    todoList:[],
}
function Reducer(state=is,action){
    console.log(action)
    switch(action.type){
        case 'ADDTOLIST':{
            return {...state,todoList:[...state.todoList,action.payload.todoList]}
        }
        default :{
            return state
        }
    }
}

export default Reducer
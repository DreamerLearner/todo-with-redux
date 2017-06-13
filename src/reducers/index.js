import { combineReducers } from 'redux';
import { CREATE_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const initialState = [
  {id: 1121, task : 'task 1',isCompleted: true},
  {id: 2545, task : 'task 2',isCompleted: false},
  {id: 3565, task : 'task 3',isCompleted: false}
];

const todoItem = (state = {}, action ) => {
  switch(action.type){
    case CREATE_TODO :
      return { ...state, id: (new Date() / 1), task : action.payload , isCompleted : false };
    case TOGGLE_TODO :
      if (state.id !== action.payload) {
        return state
      };
      return { ...state, isCompleted: !state.isCompleted };
    default:
      return state;
  }
}

const TodoList = (state = initialState , action) => {
  switch(action.type){
    case CREATE_TODO :
      return [...state, todoItem(undefined, action)];
    case TOGGLE_TODO :
      return state.map(todo => todoItem(todo, action));
    case DELETE_TODO :
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}


const reducers = combineReducers({
  TodoList,
})

export default reducers;
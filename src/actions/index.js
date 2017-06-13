export const CREATE_TODO = 'CREATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function onSubmitCall(todoName){
	return{
		type : CREATE_TODO,
		payload : todoName
	}
}

export function onToggle(todoId){
	return{
		type : TOGGLE_TODO,
		payload : todoId
	}
}
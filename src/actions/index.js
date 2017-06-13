const CREATE_TODO = 'CREATE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';

const onSubmitCall = todoName => {
	return{
		type : CREATE_TODO,
		payload : todoName
	}
}

const onToggle = todoId => {
	return{
		type : TOGGLE_TODO,
		payload : todoId
	}
}

const onDelete = todoId => {
	return {
		type : DELETE_TODO,
		payload : todoId
	}
}

export {
	CREATE_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	onSubmitCall,
	onToggle,
	onDelete
}
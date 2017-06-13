import React, { PureComponent } from 'react';
import { onToggle } from '../actions/index'
import { connect } from 'react-redux';

class TodoListItem extends PureComponent{

	constructor(props){
		super(props);
	}

	render(){
		
		const { isCompleted, task, id } = this.props.todo;
		const textClass = (isCompleted ? 'greenTask list-item' : 'redTask list-item');

		return(
			<li className={textClass}>
				<span onClick={() => this.props.onToggle(id)}>{task}</span>
				<button>Delete task </button>
			</li>
		);
	}

}

// export default TodoListItem;


const selected = (state) => {
	return { todos : state.TodoList };
}
export default connect(selected,{onToggle})(TodoListItem);
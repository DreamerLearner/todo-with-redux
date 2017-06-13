import React, { PureComponent } from 'react';
import { onToggle, onDelete } from '../actions'
import { connect } from 'react-redux';

class TodoListItem extends PureComponent{

	render(){
		
		const { isCompleted, task, id } = this.props.todo;
		const textClass = (isCompleted ? 'greenTask list-item' : 'redTask list-item');

		return(
			<li className={textClass}>
				<span onClick={() => this.props.onToggle(id)}>{task}</span>
				<button onClick={()=> this.props.onDelete(id)}>Delete task </button>
			</li>
		);
	}

}

const selected = (state) => {
	return { todos : state.TodoList };
}
export default connect(selected,{onToggle, onDelete})(TodoListItem);
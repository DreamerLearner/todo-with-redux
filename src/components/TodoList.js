import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem';

class TodoList extends PureComponent{

	render(){
		const listItems = this.props.todos.map( (todo) => <TodoListItem key={todo.id} todo={todo} /> );

		return(
			<ul>
				 {listItems}
			</ul>
		);
	}

}

// export default TodoList;


const selected = (state) => {
	return { todos : state.TodoList };
}
export default connect(selected)(TodoList);
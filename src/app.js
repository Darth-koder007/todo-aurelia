import {Todo} from './todo';

export class App {
	constructor () {
		this.heading = "Todos";
		this.todos = [];
		this.todoDescription = '';
	}

	addTodo () {
		if (this.todoDescription) {
			this.todos.push(new Todo(this.newtodoDescription));
			this.todoDescription = '';
		}
	}

	removeTodo (todo) {
		let index = this.todos.indexOf(todo);
		if (index !== -1) {
			todos.splice(index, 1);
		}
	}
} 
import React, { Component } from 'react';
import TodoItem from './Todoitem';  // Fixed the import statement
import NewTodoForm from './NewtodoFrom';  // Fixed the import statement
import './Todolist.css'
class TodoList extends Component {
  state = {
    todos: [],
  };

  create = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  remove = (id) => {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  };
  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      } else {
        return todo; // Return the original todo for todos that don't match the given id
      }
    });
    this.setState({ todos: updatedTodos });
  };
  toggle = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo; // Return the original todo for todos that don't match the given id
      }
    });
    this.setState({ todos: updatedTodos });
  };
  

  render() {
    let todos = this.state.todos.map((todo) => {
      return <TodoItem 
      id={todo.id}
      remove={this.remove} 
      key={todo.id} 
      task={todo.task}
      update={this.update}
      completed={todo.completed}
      toggleTodo={this.toggle}
      />;
    });
    return (
      <div className='TodoList'> 
       <h1> React todolist</h1> <span>A simple to do list</span>
       <ul>{todos}</ul>
        <NewTodoForm create={this.create} />
        
      </div>
    );
  }
}

export default TodoList;

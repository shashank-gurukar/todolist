import React, { Component } from 'react';
import './todoitem.css';

class TodoItem extends Component {
  state = {
    edit: false,
    task: this.props.task,
  };

  remover = () => {
    this.props.remove(this.props.id);
  };

  toggleform = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  editForm = (evt) => {
    evt.preventDefault();
    this.props.update(this.props.id, this.state.task);
    this.setState({ edit: !this.state.edit });
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleToggle = (evt) => {
    this.props.toggleTodo(this.props.id);
  };

  render() {
    let result;

    if (this.state.edit) {
      result = (
        <div className='Todo'>
          <form
          className='Todo-edit-form'
          onSubmit={this.editForm}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button> Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className='Todo'>
          
          <li
            className={this.props.completed ? 'completed Todo-task' : 'Todo-task'}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <button onClick={this.toggleform}>Edit</button>
          <button onClick={this.remover}>X</button>
        </div>
      );
    }

    return result;
  }
}

export default TodoItem;

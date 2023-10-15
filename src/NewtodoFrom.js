import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class NewTodoForm extends Component {
  state = { task: '' };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.create({ ...this.state, id: uuid() });
    this.setState({ task: '' }, () => {
      // This callback function will be called after the state is updated
      // You can add any code that relies on the updated state here
      console.log('State updated to empty string:', this.state.task);
    });
  };
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'>
          <input
            type='text'  
            name='task'
            id='task'
            placeholder='New Todoform'
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewTodoForm;

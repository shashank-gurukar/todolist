import React, { Component } from 'react';

class NewtodoForm extends Component {
  state = { task: '' };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.create(this.state);
    this.setState({ task: ""}); // Change " " to an empty string
  };
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='Todo '>
          <input
            type='Text'
            name='task'
            id='task'
            placeholder='New Todoform'
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button> {/* Added type="submit" to the button */}
      </form>
    );
  }
}

export default NewtodoForm;

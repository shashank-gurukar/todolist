import React, { Component } from 'react'

class Todoitem extends Component{
    render(){
        return(
            <div>
                <button>Edit</button>
                <button>X</button>
                <ul>
              <li>{this.props.task}</li>
              </ul>
            </div>
        )
    }
}
export default Todoitem;
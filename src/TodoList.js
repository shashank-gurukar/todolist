import React, { Component } from 'react'
import Todoitem from './Todoitem';
import NewtodoForm from './NewtodoFrom';
class TodoList extends Component{
    state={
        todos:[]
    }
    create=(newTodo)=>{
        this.setState({
            todos:[...this.state.todos,newTodo]
        })
    }
    render(){
        let todos= this.state.todos.map(todo=>{
            return <Todoitem key={todo.id} task={todo.task}/>
        })
        return(
            <div>
               {todos }
               <NewtodoForm create={this.create}/>
            </div>
        )
    }
}
export default TodoList;
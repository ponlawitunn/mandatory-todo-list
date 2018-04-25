import React, { Component } from 'react';

class Task extends Component {
    constructor(props){
        super(props);
    }
    removeTodo(value) {
        this.props.removeTodo(value);
    }

    render() {
        return(
            <div className="Task">
            <span style={{ textDecoration: this.props.todo.done ? 'line-through' : 'none' }}>
            {this.props.todo.value}
            </span> 
            <button className="btn1" onClick={() => this.props.handleClick(this.props.index)}>{this.props.todo.done ? 'Unsuccessful' : 'Success'}</button>
            <button className="btn2" onClick={(e) => this.removeTodo(this.props.value)}>Remove</button>
            </div>
        )
    }
}

export default Task;
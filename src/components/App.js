import React, { Component } from 'react';

import '../App.css';


import Form from './Form';

import List from './List';

import Task from './Task';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      todos: [
        { value: 'Wake up', done: false },
        { value: 'Sleep before 11:00 pm', done: true }
    ]
  }
    this.removeTodo = this.removeTodo.bind(this);
  }

removeTodo(value) {
  this.setState({
    todos: this.state.todos.filter((todo, index) => todo.value !== value)
  })
}
handleChange = (event) => {
  this.setState({ inputValue: event.target.value });
}
handleSubmit = (event) => {
  event.preventDefault();
  const newTodo = {
    value: this.state.inputValue,
    done: false
  };
  const todos = this.state.todos;
  todos.push(newTodo);
  this.setState({ todos, inputValue: '' })
}

handleClick = (index) => {
  const todos = this.state.todos;
  todos[index].done = !todos[index].done;
  this.setState({ todos });
}
  render() {
    return (
      <div className="App">
      <div>
      <h1 className="header1">TO DO LIST:</h1>
      <p className="para1">Add someting you wanna do today...</p>
      </div>
      <Form 
      handleChange={this.handleChange}
      inputValue={this.state.inputValue}
      handleSubmit={this.handleSubmit}
      />
      <List 
      handleClick={this.handleClick}
      todos={this.state.todos}
      removeTodo={this.removeTodo}
      />
      </div>
    );
  }
}

export default App;



import React, { Component } from 'react';
import '../App.css';

import Form from './Form';
import List from './List';

class App extends Component {

  state = {
    inputValue: "",
    todos: [
      { value: 'Wake up', done: false },
      { value: 'Run at 3:00 pm', done: true }
  ]
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
      <Form 
      handleChange={this.handleChange}
      inputValue={this.state.inputValue}
      handleSubmit={this.handleSubmit}
      />
      <List 
      handleClick={this.handleClick}
      todos={this.state.todos}
    
      />
      </div>
    );
  }
}

export default App;

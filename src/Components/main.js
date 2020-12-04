import React, { Component } from 'react';
import List from './list';
import Input from './input';

class main extends Component {
  state = {
    todos: [],
  };

  todoCreate = data => {
    const { todos } = this.state;
    this.setState({ todos: todos.concat({ content: data }) });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <List />
        <Input onCreate={this.todoCreate} />
      </div>
    );
  }
}

export default main;

import { Component } from 'react';
import List from './list';
import Input from './input';

class main extends Component {
  id = 0;
  state = {
    todos: [{ id: 0, content: '' }, { id: 0, content: '' }],
  };

  todoCreate = data => {
    const { todos } = this.state;
    // 새로 추가된 내용을, 원래 있던 목록 리스트에 넣기
    //  cookie에도 넣기
    this.setState({ todos: todos.concat({ id: this.id++, ...data }) });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <List data={todos} />
        <hr />
        <Input onCreate={this.todoCreate} />
      </div>
    );
  }
}

export default main;

import React, { Component } from 'react';
import TodoInfo from './todoInfo'


class todoList extends Component {
  render() {
    const { data, onRemove } = this.props;
    const list = data.map(info => <TodoInfo todo={info} onRemove={onRemove} onUpdate={this.todoUpdate} />);
    return <div>{list}</div>;
  }
}

export default todoList;

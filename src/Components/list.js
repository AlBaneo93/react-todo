import React, { Component } from 'react';
import TodoInfo from './todoInfo'


class todoList extends Component {
  render() {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(info => <TodoInfo todo={info} onRemove={onRemove} onUpdate={onUpdate} />);
    return <div>{list}</div>;
  }
}

export default todoList;

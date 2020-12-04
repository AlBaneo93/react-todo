import React, { Component } from 'react';
// import TodoInfo from './todoInfo';

class todoList extends Component {
  render() {
    const { data } = this.props;
    // const list = data.map(info => <TodoInfo info={info} />);
    const list = data;
    return <div>{list}</div>;
  }
}

export default todoList;

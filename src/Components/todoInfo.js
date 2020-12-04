import React, { Component } from 'react';

class Todo extends Component {
  state = {
    content: '',
    editting: false,
  };
  create = () => { };
  toggle = () => {
    const { editting } = this.state;
    this.setState({ editting: !editting });
  };
  cancle = () => {
    console.log('cancle');
  };

  render() {
    const todo_style = { border: '1px solid black', padding: '8px', margin: '8px' };
    const { content } = this.props.todo;
    return (
      <div style={todo_style}>
        {content}
        {/*
        이전 내용으로 돌리고, editing 값도 돌린다
        조건에 맞춰서 조건 출력
        */}
        <button onClick={this.cancle}>취소</button>
        <button onClick={this.toggle}>확인</button>

        <button onClick={this.toggle}>수정</button>
        <button onClick={this.complete}>완료</button>
      </div>
    );
  }
}

export default Todo;

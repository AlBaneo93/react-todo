import React, { Component } from 'react';

class Todo extends Component {
  state = {
    todo: {
      id: 0,
      content: '',
    },
    editing: false,
    readonly: true
  };
  toggle = () => {
    const { editing, readonly } = this.state;
    this.setState({ editing: !editing, readonly: !readonly });
  };
  // cancle = () => {
  //   const { editing, readonly } = this.state;
  //   this.setState({ editing: !editing, readonly: !readonly }) // this.toggle()을 부를 순 없나??
  // };

  handleRemove = () => {
    const { onRemove, todo } = this.props;
    onRemove({ id: todo.id, content: todo.content })
  }

  handleUpdate = () => {
    console.log("update")

    const { todo, onUpdate } = this.props
    onUpdate({
      id: todo.id, content: todo.content
    })
  }

  render() {
    // const todo_style = { border: '1px solid black', padding: '8px', margin: '8px' };
    const { content } = this.props.todo;
    if (this.state.editing) {
      return (
        <div >
          <input value={content} name='content' disabled={this.state.readonly} />
          <button onClick={this.toggle}>취소</button>
          <button onClick={this.handleUpdate}>확인</button>
        </div>
      );
    } else {

      return (
        <div>
          {/* <input value={content} name='content' disabled={this.state.readonly} /> */}
          <h3>{content}</h3>
          <button onClick={this.toggle}>수정</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      )
    }
  }
}

export default Todo;

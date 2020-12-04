import React, { Component } from 'react';

class Input extends Component {
  defaultState = {
    id: 0,
    content: '',
  };
  state = {
    id: 0,
    content: ''
  };
  handleSubmit = e => {
    e.preventDefault();
    // main에서 넘겨준 todoCreate함수
    this.props.onCreate(this.state);
    this.setState({ content: '' })
  };

  handleCancle = () => {
    // 내용 지우고 닫기
    this.setState({ content: '' });
  };

  handleChange = e => {
    // console.log('target name : ' + e.target.name + ", target.value : " + e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.content} name="content" placeholder="할 일" onChange={this.handleChange} />
          <button onClick={this.handleCancle}>취소</button>
          <button type="submit" onClick={this.handleCreate}>
            확인
          </button>
        </form>
      </div>
    );
  }
}

export default Input;

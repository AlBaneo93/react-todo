import React, { Component } from 'react';

class Input extends Component {
  defaultState = {
    content: '',
  };
  state = {
    content: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
  };

  handleCancle = () => {
    this.setState({ content: '' });
  };

  handleChange = e => {
    this.props.onCreate(this.state);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.content} name="content" placeholder="할일을 입력하세요" onChange={this.handleChange} />
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

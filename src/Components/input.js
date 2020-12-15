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
    const { onCreate, } = this.props
    // input에서 굳이 id를 만들어줄 필요는 없다
    // this.setState({ id: id, ...this.state })
    // console.log('input.js - validate input', this.state)
    onCreate(this.state.content);
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
          <button type="submit"> {/* form submit 이벤트를 가로막고 handleSubmit함수 실행 */}
            확인
          </button>
        </form>
      </div>
    );
  }
}

export default Input;

import { Component } from 'react';
import List from './list';
import Input from './input';
import Search from './search'

class main extends Component {
  id = 0;
  state = {
    todos: [],
  };

  // REVIEW 쿠키나 리스트 업데이트가 실시간으로 이루어지지 않는다.
  todoCreate = data => {

    // 입력값 검증
    if (data === '') {
      alert("Content can't be empty")
      console.warn("content is empty")
      return
    }
    const { todos } = this.state;
    // 새로 추가된 내용을, 원래 있던 목록 리스트에 넣기
    this.setState({ todos: todos.concat({ id: this.id++, content: data }) });
    // console.clear();
    // 쿠키에 현재 데이터를 삽입해 저장
    // document.cookie = "react-todo =" + JSON.stringify(todos)
  };

  //
  todoRemove = (data) => {
    const { todos } = this.state;
    console.log('delete: ' + data.id)

    // filter : 조건이 참인것만 모아서 새로운 배열을 만든다
    // 지우려는 데이터의 아이디와 다른 아이디를 가진 객체를 모아 리스트를 만든다
    this.setState({
      todos: todos.filter(obj => (obj.id !== data.id))
    })
  }

  todoUpdate = ({ todo }) => {
    console.log('main update fn: ')
    // list 돌면서 id가 일치하는 객체 찾아서 내용 업데이트
    // console.log(data.content)
    // const { todos } = this.state

  }

  todoSearch = (data) => {
    console.log('Search')
    // 원본 데이터 유지, 새로 찾으려는 데이터만 찾아서 보여줘야함
  }

  render() {
    const style = { border: '1px solid black', padding: '8px', margin: '8px' };
    const { todos } = this.state;
    if (todos.length <= 0) {
      return (
        <div style={style}>
          <Search onChange={this.todoSearch} />
          <hr />
          <h2>할 일 목록이 없습니다. 추가해보세요!</h2>
          <hr />
          <Input onCreate={this.todoCreate} />
        </div>
      );
    }
    // const counter = todos.length; TODO 카운터도 있으면 좋겠다
    return (
      <div style={style}>
        <Search onChange={this.todoSearch} />
        {/* <fragment>
          Count : {{ counter }}
        </fragment> */}
        <hr />
        <List data={todos} onRemove={this.todoRemove} onUpdate={this.todoUpdate} />
        <hr />
        <Input onCreate={this.todoCreate} />
      </div>
    );
  }
}

export default main;

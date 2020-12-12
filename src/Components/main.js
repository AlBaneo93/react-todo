import { Component } from 'react';
import List from './list';
import Input from './input';
import Search from './search'

class main extends Component {
  id = 0;
  state = {
    todos: [],
  };

  todoCreate = data => {
    // 입력값 검증
    if (data.content === '') {
      alert("Content can't be empty")
      console.warn("content is empty")
      return
    }

    const { todos } = this.state;
    // 새로 추가된 내용을, 원래 있던 목록 리스트에 넣기
    // TODO  cookie에도 넣기
    this.setState({ todos: todos.concat({ id: this.id++, ...data }) });
  };

  //
  todoRemove = (data) => {
    // const { todos } = this.state;
    console.log('delete: ' + data.id)

    // // id와 같은 id를 갖고있는 요소를 찾아서 삭제 후 리턴 filter 사용
    // this.setState({
    //   todos: todos.filter()
    // })
  }

  todoUpdate = ({ todo }) => {
    console.log('main update fn: ')
    // list 돌면서 id가 일치하는 객체 찾아서 내용 업데이트
    // console.log(data.content)

  }

  todoSearch = (data) => {
    console.log('Search')
  }

  render() {
    const style = { border: '1px solid black', padding: '8px', margin: '8px' };
    const { todos } = this.state;
    if (todos.length <= 0) {
      return (
        <div style={style}>
          <Search onChange={this.todo_style} />
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
        <Search onChange={this.todo_style} />
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

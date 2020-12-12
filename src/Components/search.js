// 리스트 중에서 검색한 내용과 일치하는 목록 찾기
import { Component } from 'react';

class searchTodo extends Component {
    state = {
        keyword: ''
    }

    handleChange = () => {
        const { onChange } = this.props
        onChange(this.state.keyword)
    }

    render() {
        // const { onChange } = this.props;
        return (
            <div>
                <input value={this.state.keyword} onChange={this.handleChange} placeholder='Todo' />
            </div>
        )
    }
}

export default searchTodo
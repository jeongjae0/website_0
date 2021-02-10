import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class Reset extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
        token: this.props.match.params.id,
        password: this.password,
        password_confirm: this.password_confirm,
    }

    axios.post('reset', data).then(
        res => {
            console.log(res)
            this.setState({
                reset:true
            })
        }

    ).catch(
        err => {
            console.log(err)
        }
    )
    
  };

  render() {
    if(this.state.reset) {
        return <Redirect to={'/login'} />
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>비밀번호 변경하기</h3>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="새로운 비밀번호를 입력하세요"
            required
            onChange={(e) => (this.password = e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="비밀번호를 한 번 더 입력하세요"
            required
            onChange={(e) => (this.password_confirm = e.target.value)}
          ></input>
        </div>

        <button className="primary" type="submit">
          제출하기
        </button>
      </form>
    );
  }
}

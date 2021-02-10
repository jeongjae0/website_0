import React, { Component } from "react";
import axios from "axios";

export class Forgot extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.email,
    };

    axios
      .post("forgot", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>비밀번호 찾기</h3>

        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            placeholder="이메일을 입력하세요"
            required
            onChange={(e) => (this.email = e.target.value)}
          ></input>
        </div>

        <button className="primary" type="submit">제출하기</button>
      </form>
    );
  }
}

import React, { Component } from "react";

class EventPractce extends Component {
  state = {
    message: "",
    username: "",
  };

  handleChange = (e) => {
    //state 변경 함수
    this.setState({ [e.target.name]: e.target.value }); // [e.target.name]현재 이벤트가 발생하고있는 name 추출
  };

  handleClick = () => {
    //state 변경 함수
    alert(this.state.message + ":" + this.state.username);
    this.setState({
      message: "",
      username: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="아무거나"
          value={this.state.username}
          onChange={
            this.handleChange
            //     (e) => {
            //     // console.log(e.target.value);
            //     //state 변경 함수
            //     this.setState({ message: e.target.value });
            //   }
          }
        ></input>

        <input
          type="text"
          name="message"
          placeholder="아무거나"
          value={this.state.message}
          onChange={
            this.handleChange
            //     (e) => {
            //     // console.log(e.target.value);
            //     //state 변경 함수
            //     this.setState({ message: e.target.value });
            //   }
          }
          onKeyPress={this.handleKeyPress}
        ></input>

        <button
          onClick={
            this.handleClick
            //     () => {
            //     alert(this.state.message);
            //     this.setState({
            //       message: "",
            //     });
            //   }
          }
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractce;

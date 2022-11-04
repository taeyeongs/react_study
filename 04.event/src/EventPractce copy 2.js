import React, { Component } from "react";

class EventPractce extends Component {
  state = {
    message: "",
  };

  handleChange = (e) => {
    //state 변경 함수
    this.setState({ message: e.target.value });
  };

  handleClick = () => {
    //state 변경 함수
    alert(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
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

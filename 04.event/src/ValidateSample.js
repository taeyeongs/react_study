import React, { Component } from "react";
import "./ValidateSample.css";
class ValidateSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handlechange = (e) => {
    this.setState({ password: e.target.value });
  };
  handlebuttonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
          type="password"
          value={this.state.password}
          onChange={this.handlechange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        ></input>
        <button onClick={this.handlebuttonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidateSample;

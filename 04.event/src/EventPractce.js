import React, { Component, useState } from "react";

const EventPractce = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  //username의 state값을 바꾼다
  const onChangeUsername = (e) => setUsername(e.target.value);
  //message의 state값을 바꾼다
  const onChangeMessage = (e) => setMessage(e.target.value);

  const onClick = (e) => {
    alert(username + " : " + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onclick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="아무거나"
        value={username}
        onChange={onChangeUsername}
      ></input>

      <input
        type="text"
        name="message"
        placeholder="아무거나"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      ></input>

      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractce;

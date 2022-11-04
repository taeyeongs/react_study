import React, { Component, useState } from "react";

const Login = () => {
  const [userid, setUserid] = useState("");
  const [userpass, setUserpass] = useState("");

  //username의 state값을 바꾼다
  const onChangeUserid = (e) => setUserid(e.target.value);
  //message의 state값을 바꾼다
  const onChangeUserpass = (e) => setUserpass(e.target.value);

  const onClick = (e) => {
    // alert(userid + " : " + userpass);
    //setUserid(userid.trim);
    if (!userid) {
      alert("아이디를 입력하세요");
      return;
    }
    console.log(userpass.trim);
    //setUserpass(userpass.trim);
    if (!userpass) {
      alert("비밀번호를 입력하세요");
      return;
    }
    // setUserid("");
    // setUserpass("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onclick();
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <input
        type="text"
        name="userid"
        placeholder="아이디"
        value={userid}
        onChange={onChangeUserid}
      ></input>

      <input
        type="text"
        name="userpass"
        placeholder="비밀번호"
        value={userpass}
        onChange={onChangeUserpass}
        onKeyPress={onKeyPress}
      ></input>

      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default Login;

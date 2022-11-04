import React from "react";
import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  //1. 컴포넌트가 랜더링이 될때마다 실행
  //   useEffect(() => {
  //     console.log("랜더링이 완료되었습니다.");
  //     console.log({ name, nickname });
  //   });

  //2. 맨 처음 랜더링이 될때만 실행되고, 업데이트 될때는 실행되지 않음
  //   useEffect(() => {
  //     console.log("랜더링이 완료되었습니다.");
  //     console.log({ name, nickname });
  //   }, []);

  //3. 특정 값이 변경될때만 호출
  //   useEffect(() => {
  //     console.log("랜더링이 완료되었습니다.");
  //     console.log({ name, nickname });
  //   }, [name]); // [] 안에 값이 변경될때 호출

  //4. 뒷정리 함수 : 컴포넌트가 업데이트 되기 전에 실행
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      // 이부분 먼저 실행하고 위에 부분 실행 cleanup -> effect
      console.log("cleanup");
      console.log(name);
    };
  }, [name]); // [] 안에 값이 변경될때 호출

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;

import React, { useRef } from "react";

//참고
const Mycomponent = () => {
  const id = useRef(1); // 로컬변수
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div>refsample</div>;
};

export default Mycomponent;

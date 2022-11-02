import React, { useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('디폴트');
    const onClickEnter = () => setMessage('안녕히하세요.')
    const onClickLeave = () => setMessage('안녕히 가세요.')

    // 1. useState 선언
    // const [초기값 변수, 업데이트 함수] = useState(초기값)
    // 2. useState 사용
    // 업데이트 함수 (업데이트 값)
    const [color, setColor] = useState('black')
    const onClickRed = (props) => {
        console.log(props)
        return setColor('red')
    }
    const onClickGreen = () => setColor('green')
    const onClickBlue = () => setColor('blue')
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}} onClick={onClickRed} name="red">빨간</button>
            <button style={{color:'green'}} onClick={onClickGreen}>초록</button>
            <button style={{color:'blue'}} onClick={onClickBlue}>파란</button>
        </div>
    );
}

export default Say;

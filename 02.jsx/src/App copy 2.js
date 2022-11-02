import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  
  //2. {} 중괄호를 이용시 자바 스크립트 표현시을 슬 수 있다 
  const name = '리액트';
  return (
    // 1. 반드시 부모 요소로 감싸야 한다 .(태그나 fragment이용)
    <>
    { name === '리액트' ? <h1>{name}리액트</h1> : <h2>리액트 안녕</h2>}
    </>
  );
}

export default App;

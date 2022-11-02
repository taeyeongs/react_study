import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  //부모 component 에 있는 render 함수를 가져다 쓴다
  render() {
    const name = 'react';
    return <div>{name}</div>
  }
}
export default App;

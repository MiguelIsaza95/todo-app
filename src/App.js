import React, { Component } from 'react';
import logo from './logo.svg';
import FirstComponent, {FirstComponentA} from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import Counter from './components/counter/Counter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter by={1}></Counter>
        <Counter by={5}></Counter>
        <Counter by={10}></Counter>
    </div>
    );
  }
}



class LearningComponents extends Component {
  render() {
    return(
      <div className="LearningComponent">
      <FirstComponent></FirstComponent>
      <FirstComponentA></FirstComponentA>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
    );
  }
}

export default App;
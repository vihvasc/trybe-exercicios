import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const cats = ['Jimmy', 'Pam', 'Maeve'];

class App extends Component {
  render() {
    return (
      <ul>{cats.map(catsNames => Task(catsNames))}</ul>
    );
  }
}

export default App;

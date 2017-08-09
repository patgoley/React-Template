// @flow
import React, { Component } from 'react';
import './App.css';
import Header from './common/Header';
import Main from './routes/Main';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './Header';
import Login from './Login';
import './_reset.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Login />
      </React.Fragment>
    );
  }
}

export default App;

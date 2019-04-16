import React, { Component } from 'react';
import './login.scss';
import Header from './Header';

class Data extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='body home'>
          <p>data screen here!</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Data;

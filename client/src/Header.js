import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='links'>
          <Link to='/login' className='link'>
            Login
          </Link>
          <Link to='/data' className='link'>
            Data
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;

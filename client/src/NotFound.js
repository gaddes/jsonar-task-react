import React, { Component } from 'react';
import './notFound.scss';

class NotFound extends Component {
  render() {
    return (
      <div className='body not-found'>
        <p className='message'>404 Not Found!</p>
        <p className='subtext'>
          The page you requested could not be located.
        </p>
        <p className='subtext'>Please check the URL.</p>
      </div>
    );
  }
}

export default NotFound;

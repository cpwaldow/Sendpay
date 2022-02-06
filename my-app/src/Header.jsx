import React, { Component } from 'react';

import logo from './logo.png';
import './style/header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt='logo' className='logo' />
        <h2 className='companyName'>Sendpay</h2>
        <nav>
          <ul className='menuBar'>
            <li key='send money'>send money</li>
            <li key='recive money'>recive money</li>
            <li key='language'>language</li>
            <li key='How it works'>How it works</li>
          </ul>
        </nav>

        <button className='signIn'>Sign in</button>
        <button className='register'>Register</button>
      </header>
    );
  }
}

export default Header;

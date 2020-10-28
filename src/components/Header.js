import React from 'react'

import logo from '../assets/images/newagemarketing.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>New Age Marketing</h1>
    <p>Your one stop shop for all your marketing</p>
  </header>
)

export default Header

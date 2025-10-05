import React from 'react'
import './Navbar.css'
import facebookLogo from '../../assets/facebook-logo.png'
import searchLogo from '../../assets/search-logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <img src={facebookLogo} alt="" />
        <img src={searchLogo} alt="" />
        <input type="text" placeholder='Search Facebook' />
      </div>
      <div className="mid">
        <p>Home</p>
        <p>Friends</p>
        <p>Video</p>
        <p>Marketplace</p>
      </div>
      <div className="right">
        <p>Menu</p>
        <p>Settings</p>
        <p>Notification</p>
        <p>Account</p>
      </div>
    </div>
  )
}

export default Navbar

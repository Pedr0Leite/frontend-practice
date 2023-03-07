import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <input className="checkbox" type="checkbox" name="" id="" />
        {/* <div className="vertical-navbar-grey"></div> */}
        <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
        <div className='navbar-title'>room</div>
    <ul className='navbar-ul'>
        <li className='navbar-li'>room</li>
        <li className='navbar-li'><a href="#">home</a></li>
        <li className='navbar-li'><a href="#">shop</a></li>
        <li className='navbar-li'><a href="#">about</a></li>
        <li className='navbar-li'><a href="#">contact</a></li>
    </ul>
    </nav>
  )
}

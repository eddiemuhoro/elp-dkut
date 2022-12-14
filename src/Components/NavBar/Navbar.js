import { Notifications } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './navbar.css'
import NotificationsAlert from './Notofications/Notifications'
const Navbar = () => {
    const [triggerPopup, setTrigger]= useState(false)
  return (
    <div className='nav-container'>
        <div className='logo'>
            <h2>Dekut ELP</h2>
        </div>
        <div className='nav'>
            <ul className='navList'>
                <li><Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                <li><Link to="gallery" spy={true} smooth={true} offset={50} duration={500}>Gallery</Link></li>
                <li onClick={()=> setTrigger(true)}><Notifications /></li>
            </ul>
        </div>
        <NotificationsAlert trigger={triggerPopup} setTrigger={setTrigger}  />

    </div>
  )
}

export default Navbar
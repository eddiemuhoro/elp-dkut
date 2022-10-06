import { Notifications } from '@material-ui/icons'
import React, { useState } from 'react'
import PopUp from '../PopUp/PopUp'
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
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li onClick={()=> setTrigger(true)}><Notifications /></li>
            </ul>
        </div>
        <NotificationsAlert trigger={triggerPopup} setTrigger={setTrigger}  />

    </div>
  )
}

export default Navbar
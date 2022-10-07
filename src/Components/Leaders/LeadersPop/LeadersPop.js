import { Close, CloseOutlined } from '@material-ui/icons'
import React from 'react'

const LeadersPop = ({setTrigger, trigger, post}) => {
  return (trigger) ? (

    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-button' onClick={()=>  setTrigger(false)}><CloseOutlined/></button>
        

         <p>Coming soon </p>
         <p>Update pending</p>
        </div>
        
    </div>
  ) : ""
}

export default LeadersPop
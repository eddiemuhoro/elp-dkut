import { Button, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import PopUp from '../PopUp/PopUp'
import './leaders.css'
import LeadersPop from './LeadersPop/LeadersPop'
const Leaders = () => {
    const [triggerPopup, setTrigger]= useState(false)

    const posts=[
        {
           id:1,
           step:'01',
           src: require('../../Arrays/stud1.jpg'),
           desc:'If you look at history, innovation doesn’t come just from giving people incentives; it comes .',
           reminder:true,
           title:`Mentorship Programs`,
           leader:'John Doe',
        },
        {
           id:2,
           step:'02',
           src: require('../../Arrays/stud2.jpg'),
           desc:'We participate in team games that promote the spirit of togetherness.',
           reminder:true,
           title:'Team Building',
           leader:"Jane Doe"
        },
        {
            id:3,
            step:'03',
            src: require('../../Arrays/stud3.avif'),
            desc:'Our club engages with other leaders outside the school to enhance our local leaders',
            reminder:true,
            title:'Leadership Development',
            leader:'Robin Hood'
         },
         {
            id:4,
            step:'04',
            src: require('../../Arrays/stud4.jpg'),
            desc:'From our weekly sessions in school auditorium. Activities done during this sessions help unite our group.',
            reminder:true,
            title:'Social benefits ',
            popTitle:'Testing head',
            Leader: 'Kevin Hart'
           
         }]
  return (
    <div>
       
        <div className='leader-container'>
        <h1 style={{color:'marron'}}>Leaders</h1>
        <Grid container alignItems='center' >

            {posts.map((post)=>(
                <Grid item md={3} sm={6} xs={12} className='leader-grid'> 

            <div className='inner-leader'>
                
                <div className='leader-content'>
                    <div className='leader-img'>
                        <img src={post.src} alt='leader' className='image-actual'/>
                    </div>
                    <div className='leader-title'>
                        <h1>{post.title}</h1>   
                        <h2>{post.leader}</h2>                  
                    </div>
                    <div className='leader-desc'>
                        <p>Our club engages with other leaders outside the school to enhance our local leaders</p>
                    </div>
                    <button className='leader-button' onClick={()=> setTrigger(true)}>MORE</button>
                </div>
                <LeadersPop trigger={triggerPopup} setTrigger={setTrigger}  />

            </div>
                </Grid>
            ))}
        </Grid>

        </div>
    </div>
  )
}

export default Leaders
import {  Grid } from '@material-ui/core'
import React, { useState } from 'react'
import './leaders.css'
import LeadersPop from './LeadersPop/LeadersPop'
const Leaders = () => {
    const [triggerPopup, setTrigger]= useState(false)

    const posts=[
        {
           id:1,
           step:'01',
           src: require('./photos/3.jpg'),
           desc:'A platform for members to network,build strong brands,a chance to better their social skills and a place to better our society through community give back activities.',
           reminder:true,
           title:`Mentorship Programs`,
           leader:'James Rukenya - Chapter President',
        },
        {
           id:2,
           step:'02',
           src: require('./photos/1.jpg'),
           desc:'An opportunity to mentor fellow members and high school students,we also have talks on various upcoming issues.',
           reminder:true,
           title:'Team Building',
           leader:"Kennedy Ngari - Chapter Vice President"
        },
        {
            id:3,
            step:'03',
            src: require('./photos/4.jpg'),
            desc:'We train our members on marketing skills,mentoship skills and professionalism.',
            reminder:true,
            title:'Leadership Development',
            leader:'Grace Nyambura - Chapter Secretary '
         },
         {
            id:4,
            step:'04',
            src: require('./photos/5.jpg'),
            desc:'We usually have our talks on various topics virtually or physically.Our meetings are held on Thursdays at room 10 in the School of business.We welcome all to join us.',
            reminder:true,
            title:'Social benefits ',
            popTitle:'Testing head',
            leader: 'Stella Muriithi - Events Coordinator'
           
         }]
  return (
    <div>
       
        <div className='leader-container'>
        <h1 style={{color:'white'}}>Leaders</h1>
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
                        {post.desc}
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
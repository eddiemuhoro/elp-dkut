import { Container, Grid, Paper } from '@material-ui/core'
import React from 'react'
import './style.css'
const AboutInner = () => {
    const roles=[
        {
            id:1,
            title: 'Who We Are',
            desc: 'This is a club which bring together students from all backgrounds. We engage participants of this wonderful club in team activities. This promote cohesion and oneness, what we like seeing✨',
            color:'#a32e2e'
        },
        {
            id: 2,
            title: 'What we do',
            desc: 'With support from the Equity Bank Foundation, we help to promote unity among the youths in this university. We also help participants realize their leadership skills',
            color:'navy'
        },
        {
            id: 2,
            title: 'Our Vision',
            desc: 'With support from the Equity Bank Foundation, we help to promote unity among the youths in this university. We also help participants realize their leadership skills',
            color: '#816430'
        }
    ]
  return (
    <div className='aboutelp'>
        <Container >
            <Grid container alignItems='flex-end'justifyContent='space-between' height='40vh' className='container-about'>
            {roles.map(role => (
             <Grid item  md={4} sm={6} xs={12}   className='content'>
                <Paper >

                <div style={{background:role.color}} className='absolute-content'>
                    <div style={{padding:'20px'}}>
                    <h1 key={role.id}>{role.title}</h1>
                    <p>
                        {role.desc}
                    </p>
                    </div>
                </div>
                </Paper>
             </Grid>

            ))}
            </Grid>
        </Container>
       
    </div>
  )
}

export default AboutInner
import { Container, Grid, Paper } from '@material-ui/core'
import React from 'react'
import './style.css'
const AboutInner = () => {
    const roles=[
        {
            id:1,
            title: 'Who We Are',
            desc: 'The DeKUT ELP chapter is one of the active clubs within Dedan Kimathi University of Technology.Regarding the mentorship program we have a platform where every member is assigned a high school student to assist them cope with challenges as they gear up to academic excelence.✨',
            color:'#a32e2e'
        },
        {
            id: 2,
            title: 'What we do',
            desc: 'We have open forums for mentoship open to everyone.We also have a platform where we train our members on maketing skills and other ways to make money while at the university. ',
            color:'navy'
        },
        {
            id: 2,
            title: 'Our Vision',
            desc: 'Bulding a community of young leaders who are ready to take on the world and make a difference in their communities.',
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
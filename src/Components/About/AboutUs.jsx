import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import PopUp from '../PopUp/PopUp'
import './about.css'
import AboutInner from './AboutInner/AboutInner'

const AboutUs = () => {

    const [triggerPopup, setTrigger]= useState(false)

    const posts=[
        {
           id:1,
           step:'01',
           src: require('./photos/57.jpeg'),
           desc:'We train all our members mentoship skills and everything you need to enable someone in their lowest go that extra mile. We are the DeKUT ELP chapter.',
           reminder:true,
           title:`Mentorship Programs`
        },
        {
           id:2,
           step:'02',
           src: require('./photos/elpabout.jpg'),
           desc:'Various outdoor such as hiking,bike riding,give back activities ,games and challenge activities increase our unity and our family bonds.',
           reminder:true,
           title:'Team Building'
        },
        {
            id:3,
            step:'03',
            src: require('./photos/56.jpeg'),
            desc:'Our meeting sessions are scheduled weekly on Thursdays in S.O.B room 10 from 4pm.Everyone is welcome.',
            reminder:true,
            title:'Our Sessions'
         },
         {
            id:4,
            step:'04',
            src: require('./photos/55.jpeg'),
            desc:'Building our members social life and impacting positively to the community is one of our goals.We organise various various give - back - to community activities which are freely open to everyone.',
            reminder:true,
            title:'Social benefits ',
            popTitle:'Testing head'
           
         }]
  return (
    <Container >
        <h1>About Us</h1>
        <AboutInner/>
        <h1>Activities</h1>
   <Grid container justifyContent='space-around' className='about-container'>
            {posts.map((post)=>(
                <Grid item  md={3} sm={6} xs={12} >
                    <Paper className='about-grid'>

                            <Card sx={{ maxWidth: 0 }}>
                        <CardActionArea>
                        <CardMedia
                                component="img"
                                height="140"
                                image={post.src}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" color='text.primary'>
                                {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {post.desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={()=> setTrigger(true)}>
                                Learn More
                            </Button>
                        </CardActions>
                        <PopUp trigger={triggerPopup} setTrigger={setTrigger} post={post} />
                        </Card>
                    </Paper>
                    
                </Grid>
            )) }
            </Grid>

    </Container>
  )
}

export default AboutUs
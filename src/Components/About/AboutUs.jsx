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
           src: require('../../Arrays/stud1.jpg'),
           desc:'If you look at history, innovation doesn’t come just from giving people incentives; it comes .',
           reminder:true,
           title:`Mentorship Programs`
        },
        {
           id:2,
           step:'02',
           src: require('../../Arrays/stud2.jpg'),
           desc:'We participate in team games that promote the spirit of togetherness.',
           reminder:true,
           title:'Team Building'
        },
        {
            id:3,
            step:'03',
            src: require('../../Arrays/stud3.avif'),
            desc:'Our club engages with other leaders outside the school to enhance our local leaders',
            reminder:true,
            title:'Leadership Development'
         },
         {
            id:4,
            step:'04',
            src: require('../../Arrays/stud4.jpg'),
            desc:'From our weekly sessions in school auditorium. Activities done during this sessions help unite our group.',
            reminder:true,
            title:'Social benefits ',
            popTitle:'Testing head'
           
         }]
  return (
    <Container>
        <h1>About Us</h1>
        <AboutInner/>
   <Grid container alignItems='flex-end'>
            {posts.map((post)=>(
                <Grid item  md={3} sm={6} xs={12} >
                    <Paper className='about-grid'>

                            <Card sx={{ maxWidth: 345 }}>
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
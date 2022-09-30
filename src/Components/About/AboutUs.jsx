import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import './about.css'

const AboutUs = () => {
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
            desc:'Martha does exceptionally well in her main secondary school exams with a vision in mind for her career.',
            reminder:true,
            title:'Social benefits '
         }]
  return (
    <Container>
        <h1>ABOUT US</h1>
        <Grid container alignItems='flex-end' >

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
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    
                        </Card>
                    </Paper>
            
                </Grid>
            )) }
        </Grid>

    </Container>
  )
}

export default AboutUs
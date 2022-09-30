
import React from 'react'
import useStyles from './styles'
import { CardMedia, Grid, Paper, Typography, Card, CardHeader, CardContent, Avatar, IconButton, CardActions  } from '@material-ui/core'
import Image from './img1.png'

import { red } from 'material-ui-colors';
import { AddIcCall, AddIcCallOutlined, DeleteOutline, Favorite, HearingTwoTone, Share } from '@material-ui/icons';


const Array = ({task}) => {
  const classes= useStyles()
  return (
      <>
      
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{bgcolor: red[500]}} arial-label="recipe">
                <HearingTwoTone />
              </Avatar>
            }
            action={
              <IconButton>
                
              </IconButton>
            }

            title={task.title}
            subheader=""
          />
          <CardMedia
            component='img'
            height='200'
            width='auto'
            image={task.src}
            alt='Martha'
          />
          <CardContent>
          
          <Typography variant='body2' >{task.desc}</Typography>
          </CardContent>

          <CardActions className={classes.buttons}>
            <IconButton aria-label="add to favorites">
              <Favorite  />
            </IconButton>
            <IconButton disableSpacing>
              <Share />
            </IconButton>
          </CardActions>
        </Card>

      {/* displaying image/ step/ desc */}
      
      
            {/* <div> <img style={{height:'150px', marginRight:'30px'}} src={task.src}/></div>
                <Typography variant='h5' color='primary'>{task.step}</Typography>
                <Typography variant='body2' color='secondary'>{task.desc}</Typography> */}
            
      
      </>
  )
}

export default Array
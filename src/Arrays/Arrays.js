import { CircularProgress, Container, Grid, Paper } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import Array from './Array'
import './arrays.css'


    const posts=[
        {
           id:1,
           step:'01',
           src: require('./52.jpeg'),
           desc:'If you look at history, innovation doesn’t come just from giving people incentives; it comes .',
           reminder:true,
           title:`Headed to meeting! ✨`
        },
        {
           id:2,
           step:'02',
           src: require('./elpgroup.jpg'),
           desc:'Outdoors activities that improve our emotional, intellectual, and behavioral development.',
           reminder:true,
           title:'Our precious bond ❤'
        },
        {
            id:3,
            step:'03',
            src: require('./elpgroup2.jpg'),
            desc:'The Wings to Fly stepped in with a scholarship',
            reminder:true,
            title:'enjoying a beautiful sunset 🌅'
         },
         {
            id:4,
            step:'04',
            src: require('./54.jpeg'),
            desc:'From our weekly sessions in school auditorium. Activities done during this sessions help unite our group.',
            reminder:true,
            title:'enjoying a beautiful sunset'
         }]
         
         const Arrays = () => {
            const classes= useStyles()
            // const [posts, setPosts] = useState([]);
            // useEffect(() => {
            //   axios.request("http://localhost:8000/post").then(function(responce){
            //       console.log(responce.data)
            //       setPosts(responce.data)
            //   }).catch(function(error){
            //       console.log(error)
            //   })
            // }, []);
        return (     
        !posts.length ? <CircularProgress /> :(
        <Container className='gallery-container'>
            <h1>POSTS</h1>
            <Grid container alignItems='flex-end' >
                
                    
                        {posts.map((post)=> (
                            // <h3 key={task.id}>{task.step}</h3>
                            
                            <Grid item md={3} sm={6} xs={12} className={classes.gridItem}>
                                <Paper>
                                    <Array key={post.id} task={post} />
                                </Paper>
                            </Grid>
                        ))}
            </Grid>
        </Container>
        )
    
    
  )
}

export default Arrays
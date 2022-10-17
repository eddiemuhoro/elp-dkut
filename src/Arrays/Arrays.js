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
           desc:'Unity and having fun with our fellow ELP family members is one of the key goal of the chapter .',
           reminder:true,
           title:`Hiking Zania Falls Nyeri! ✨`
        },
        {
           id:2,
           step:'02',
           src: require('./elpgroup.jpg'),
           desc:'It is through the psyche and urge of keeping the ELC family alive that keeps us pushing and trying our best daily.',
           reminder:true,
           title:'Annual Mentorship and Leadership Training sessions❤'
        },
        {
            id:3,
            step:'03',
            src: require('./elpgroup2.jpg'),
            desc:'A reunion of all alumni of the Equity Group Foundation and and new friends at Dedan Kmathi University of Technology.  ',
            reminder:true,
            title:'The beginning of learning mentorship skills🌅'
         },
         {
            id:4,
            step:'04',
            src: require('./54.jpeg'),
            desc:'From our weekly meetings on Thursdays in S.O.B room 10, all activies we plan must come to success.',
            reminder:true,
            title:'Our unity is always our strength'
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
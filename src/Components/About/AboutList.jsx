// import { CircularProgress, Container, Grid, Paper } from '@material-ui/core'
// import React from 'react'
// import AboutUs from './AboutUs'

// const AboutList = () => {
//     const posts=[
//         {
//            id:1,
//            step:'01',
//            src: require('../../Arrays/stud1.jpg'),
//            desc:'If you look at history, innovation doesn’t come just from giving people incentives; it comes .',
//            reminder:true,
//            title:`Headed to meeting! ✨`
//         },
//         {
//            id:2,
//            step:'02',
//            src: require('../../Arrays/stud2.jpg'),
//            desc:'Her parents can’t afford her high school tuition. She then applies for the Wings To Fly program.',
//            reminder:true,
//            title:'Our precious bond ❤'
//         },
//         {
//             id:3,
//             step:'03',
//             src: require('../../Arrays/stud3.avif'),
//             desc:'The Wings to Fly stepped in with a scholarship',
//             reminder:true,
//             title:'enjoying a beautiful sunset 🌅'
//          },
//          {
//             id:4,
//             step:'04',
//             src: require('../../Arrays/stud4.jpg'),
//             desc:'Martha does exceptionally well in her main secondary school exams with a vision in mind for her career.',
//             reminder:true,
//             title:'enjoying a beautiful sunset'
//          }]
//   return (
//     !posts.length ? <CircularProgress /> :(
//         <Container>
//             <Grid container alignItems='flex-end'>
                
                    
//                         {posts.map((post)=> (
//                             // <h3 key={task.id}>{task.step}</h3>
                            
//                             <Grid item md={3} sm={6} xs={12} >
//                                 <Paper>
//                                     <AboutUs key={post.id} post={post} />
//                                 </Paper>
//                             </Grid>
//                         ))}
//             </Grid>
//         </Container>
//   ))
// }

// export default AboutList
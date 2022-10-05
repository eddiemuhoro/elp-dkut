import React from 'react'
import AboutUs from '../../About/AboutUs'

const Lists = () => {
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
            title:'Social benefits ',
            popTitle:'Testing head'
           
         }]

  return (
    <div>
        {posts.map(post => <AboutUs key={post.id} post={post} />)}
    </div>
  )
}

export default Lists
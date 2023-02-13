import classes from './aboutme.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Aboutme2=()=>{
    useEffect(function(){
        Aos.init({duration:1000,
           })
           Aos.refresh()
        
    })
    return(<div className={classes.aboutme22}>
         <div  data-aos="flip-right"   className={classes.secabout}>
       <div>
        <h5>My goals</h5>
        <p>Due to the nature of my current job, I have learned to be a team player,and combine with different people!
        I want to work with as many people as possible on projects and improve my current knowledge!    
        
 </p></div>
        </div>
        <div  data-aos="flip-left" data-aos-delay="800"  className={classes.secabout}>
       <div>
        <h5>Another things..</h5>
        <p>   
        I am ready for new challenges,
         communicative, love animals, sport and I like to work on myself!
         The previous work experience is related to the maintenance of the rocket system in the army of Serbia.
          </p></div>
       
        </div></div>
    )
}
export default Aboutme2
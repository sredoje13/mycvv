import classes from './aboutme.module.css'
import Image from '../../pexels-nao-triponez-129208.jpg'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
const Aboutme=()=>{
  const selectscrollname=useSelector((state)=>state.scroll.item)
 
  const refabout=useRef(null)
  if(selectscrollname.id==="r0"){
    const executeScroll = () => refabout.current.scrollIntoView({ behavior: 'smooth', 
     } ) 
    executeScroll()
  }
    return(<div  className={classes.bgimage} style={{
      backgroundImage:`url(${Image})`,
      opacity:"0.9",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 'auto'
    }}>
        <h1 className={classes.me} ref={refabout}>ABOUT ME</h1><div className= {classes.aboutmee} >
   
    <div >
      <h5 >Something about me...</h5>
      <p>Hello,I'm Jelena! I' 25 years old, from Serbia and I live near capital city, Belgrade!</p>
    <p>I recently discovered a new hobby - web programming!</p>
    <p>I decided to combine beautiful and useful and start programming professionally!</p>
    </div>
  </div>
  <div className={classes.about2}>
  <div className= {classes.aboutmee2} >
   
    <div >
      <h5 >My skils</h5>
      <p>I started to study independently and by now I have mastered the Java Script programming language, HTML5,CSS,
        React.js with Redux and Router,and I have been practicing Nextjs for a while.I understand  Mongodb, which I started working in before React. I am currently working on projects related to React.js
         </p>
    </div>
  </div>
  <div className= {classes.aboutmee3} > 
    <div >
    <h5 >My career </h5>
      <p>I started my education in Medical High School 2012.
      after graduation,2016, I decided to enter the Military Academy!
      In 2020, I graduated from the Military Academy as a management engineer.
      Now, i have 3 years work expirience!
         </p>
    </div>
  </div></div>
  </div>)
}
export default Aboutme
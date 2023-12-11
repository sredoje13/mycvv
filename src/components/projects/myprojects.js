import {BsCardChecklist} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {GrGamepad} from 'react-icons/gr'
import { useSelector } from 'react-redux'
import {FiStar} from 'react-icons/fi'
import { useRef } from 'react'
import {BiMemoryCard} from 'react-icons/bi'
import classes from './myproject.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { scrolling } from '../redux.js/redux'
const Myproject=()=>{
    const selectscrollname=useSelector((state)=>state.scroll.item)
 
    const refabout1=useRef()
    if(selectscrollname.id==="r1"){
      const executeScroll = (ref) =>{ window.scrollTo({ behavior: 'smooth',top: ref.current.offsetTop } )
      
      console.log("scrolling")
    }
    
    executeScroll(refabout1) 
    }
/*  useEffect(()=>{
   
Aos.init()
Aos.refresh()
 },[]) */


return(
    <div ref={refabout1}  className={classes.myproject}><h1 className={classes.me}>
        MY PROJECTS
    </h1>
   <div  className={classes.btnicons}
    data-aos="fade-up"
   data-aos-easing="ease"
   data-aos-duration="700"
   ><BsCardChecklist className={classes.icons}/>
   <button className={classes.button}>
    <a className={classes.a}href="https://endearing-peony-a46013.netlify.app/">Planner 5D project</a></button></div>
   <div className={classes.btnicons}
   data-aos="fade-up"
   data-aos-easing="ease"
   data-aos-duration="700"
   data-aos-delay="400"
   ><BiMemoryCard className={classes.icons}/><button className={classes.button}><a className={classes.a} href="https://expo.dev//accounts/sredoje13/projects/WeddingApp/builds/fba08c5d-5b8b-4a2c-9b84-d01fd3545010"> React Native App(Download for android)</a></button></div>
     <div  className={classes.btnicons}
    data-aos="fade-up"
   data-aos-easing="ease"
   data-aos-duration="700"
   data-aos-delay="800"
   ><AiOutlineShoppingCart className={classes.icons}/>
   <button className={classes.button}>
    <a className={classes.a}href="https://stellular-hamster-fd58f0.netlify.app/">WEBSITE 1</a></button></div>
   
    <div>
    <div className={classes.btnicons}
   data-aos="fade-up"
   data-aos-easing="ease"
   data-aos-duration="700"
   data-aos-delay="1200"
   ><GrGamepad className={classes.icons}/><button className={classes.button}>
    <a className={classes.a} href="https://comfy-pothos-71e3f6.netlify.app/">WEBSITE 2</a></button></div>
    </div>
    <div className={classes.ifdiv}
    data-aos="zoom-in"
    data-aos-easing="ease"
    data-aos-duration="700"
    data-aos-delay="1600"
    ><FiStar className={classes.star}/>

    If you want to see some more of my projects, they are on my <a  className={classes.a2}href="https://github.com/sredoje13?tab=repositories">git hub</a> account!!!
    </div>
    </div>
)
}
export default Myproject

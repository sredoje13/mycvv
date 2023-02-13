import {BsCardChecklist} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {GrGamepad} from 'react-icons/gr'
import { useSelector } from 'react-redux'
import {FiStar} from 'react-icons/fi'
import { useRef } from 'react'
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
   ><BsCardChecklist className={classes.icons}/><button className={classes.button}><a className={classes.a}href="https://github.com/sredoje13/todolis">TO DO LIST</a></button></div>
   <div className={classes.btnicons}
   data-aos="fade-up"
   data-aos-easing="ease"
   data-aos-duration="700"
   data-aos-delay="500"
   ><AiOutlineShoppingCart className={classes.icons}/><button className={classes.button}><a className={classes.a} href="https://github.com/sredoje13/project1">SHOPPING SITE</a></button></div>
    <div>
    <div className={classes.btnicons}
   data-aos="fade-up"
   data-aos-easing="ease"
   data-aos-duration="700"
   data-aos-delay="1000"
   ><GrGamepad className={classes.icons}/><button className={classes.button}><a className={classes.a} href="https://github.com/sredoje13/website">WEBSITE</a></button></div>
    </div>
    <div className={classes.ifdiv}
    data-aos="zoom-in"
    data-aos-easing="ease"
    data-aos-duration="700"
    data-aos-delay="1500"
    ><FiStar className={classes.star}/>
    If you want to see some more of my projects, they are on my <a  className={classes.a2}href="https://github.com/sredoje13?tab=repositories">git hub</a> account!!!
    </div>
    </div>
)
}
export default Myproject
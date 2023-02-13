import classes from './contactme.module.css'
import{BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import{BsGithub}from 'react-icons/bs'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import Input from '../input/input'
const Contact  =()=>{

  const refabout=useRef(null)
    const selectscrollname=useSelector((state)=>state.scroll.item)
    if(selectscrollname.id==="r2"){
        const executeScroll = () => refabout.current.scrollIntoView({ behavior: 'smooth', 
         } ) 
        executeScroll()
      }
return (
   
    <div ref={refabout} className={classes.contact}>
      <Input/>
        <div className={classes.mobmail}>
        <p className={classes.p}>If you want to stay in touch with me, you can find me on other platforms.</p>

            <p>
            Mob. phone: +381607420567
            <br></br>
            E-mail: popovicccjelena997@gmail.com
            </p>

        </div>
   <div><a href="https://www.instagram.com/sredoje13/" className={classes.a }><BsInstagram className={classes.icon}/></a>
   <a href="https://www.linkedin.com/in/jelena-popovic-0851171ba/" className={classes.a}> <BsLinkedin className={classes.icon}/></a>
   <a href="https://github.com/sredoje13" className={classes.a}> <BsGithub className={classes.icon}/></a>

   </div>
   <div>   </div>


    </div>
)
}
export default Contact
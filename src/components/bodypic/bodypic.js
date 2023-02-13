import  './bodypic.css'
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import {TransitionGroup} from 'react-transition-group'
import Dot from './dot'
import Image5 from '../slika5.jpg'
import Image2 from '../slika2.jpg'
import Image3 from '../slika3.jpg'
import Image4 from '../slika4.jpg'
import Image1 from '../slika1.jpg'
import {TfiAngleRight} from 'react-icons/tfi'
import {TfiAngleLeft} from 'react-icons/tfi'
import { slider } from '../redux.js/redux'
import { useDispatch,useSelector } from 'react-redux'
const Bodypic=()=>{
   
    const dispatch=useDispatch()
    const selectdot=useSelector((state=>state.sliderimage.item))
    const selectclick=useSelector((state=>state.sliderimage.click))
    console.log(selectdot,selectclick)
   
    const indexi=[Image1,Image2,Image3,Image4,Image5]
    const [index,setindex]=useState(0);
    const[useclassname,setuseclassname]=useState("")
    const goleft=()=>{
        dispatch(slider.unclick())
        let nextindex=index-1
     if(nextindex<0){
        setindex(indexi.length-1)
        setuseclassname("goleft")
        console.log(index)
     }
     else {
        setindex(index-1)
        console.log(index)
     }

    }
    const goright=()=>{
      dispatch(slider.unclick())
      setindex((index+1)%indexi.length)
      setuseclassname("goright")
        }
    
    const childfactory=(useclassname)=>(child)=>{
        React.cloneElement(child,{classNames:useclassname})
    }
   
    const clickdot=()=>{
      setindex(0)
      console.log(index)
    }
    const clickdot1=()=>{
      setindex(1)
      console.log(index)
    }
    const clickdot2=()=>{
      setindex(2)
      console.log(index)
    }
    const clickdot3=()=>{
      setindex(3)
      console.log(index)
    }
    const clickdot4=()=>{
      setindex(4)
      console.log(index)
    }
  
  
  
  
    console.log(index)
    
   
   const dot=(
   <div className="dotdiv">
   <Dot key={0} id={0} onclickdot={clickdot} />
   <Dot key={1} id={1}  onclickdot={clickdot1}/>
   <Dot key={2} id={2} onclickdot={clickdot2}/>
   <Dot key={3} id={3} onclickdot={clickdot3}/>
   <Dot key={4} id={4} onclickdot={clickdot4} />
   </div>
   )

    return(<div>
   <div className="transitions">
     <button onClick={goleft} className="button"><TfiAngleLeft/></button>
     <div className="imgslider">
     <TransitionGroup  >
     <CSSTransition
    classNames={useclassname}
    timeout={2000}
    key={indexi[index]
    
    
    }

    ><img className="img" id={indexi[index]} src={indexi[selectclick?selectdot.id:index]}  alt="sl12345"/></CSSTransition>
   </TransitionGroup>
    </div>
   <button onClick={goright} className="button"><TfiAngleRight/></button>

   </div>
   {dot}
   </div>
    )
}
export default Bodypic
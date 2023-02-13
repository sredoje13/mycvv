import { useState,useRef} from "react"
import classes from './input.module.css'
import emailjs from 'emailjs-com';
import {RxArrowBottomRight} from 'react-icons/rx'
import {RxArrowBottomLeft} from 'react-icons/rx'

const Input=()=>{

const[mailvalue,setmailvalue]=useState("")
const[namevalue,setnamevalue]=useState("")
const[areavalue,setareavalue]=useState("")
const [istouchname,setistouchname]=useState(false)
const [istouchmail,setistouchmail]=useState(false)
const[iserrorname,setiserrorname]=useState(false)
const[iserrormail,setiserrormail]=useState(false)
const [istoucharea,setistoucharea]=useState(false)
const[iserrorarea,setiserrorarea]=useState(false)
 let validateform=false
    const touchname=()=>{
setistouchname(true)
    }
    const touchmail=()=>{
setistouchmail(true)
    }
    const toucharea=()=>{
        setistoucharea(true)
            }
    const changename=(event)=>{
       setnamevalue(event.target.value)
        setistouchname(true)
      if(event.target.value.trim()===""&&istouchname){
        setiserrorname(true)
      }
      else setiserrorname(false)
    }
    const changenarea=(event)=>{
        setareavalue(event.target.value)
         setistoucharea(true)
       if(event.target.value.trim()===""&&istoucharea){
         setiserrorarea(true)
       }
       else setiserrorarea(false)
     }
    const changemail=(event)=>{
        setmailvalue(event.target.value)
        setistouchmail(true)
        if(event.target.value.trim()===""&&istouchmail){
            setiserrormail(true)
          }
          else setiserrormail(false)
    }
    if(!iserrormail&&!iserrorname&&!iserrorarea){
   validateform=true
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        if(validateform){
          emailjs.sendForm('service_zpqksyo', 'template_1qzj10m', e.target, 'DMF8J-AVRLhD4fXQy')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
          e.target.reset()
     
       setnamevalue("")
       setmailvalue("")
       setistouchmail(false)
       setistouchname(false)
       setareavalue("")
       setistoucharea(false) }
       else return
    
    }
   


    
console.log(iserrorname,iserrorname)
 const nameclass=iserrorname?classes.error:classes.normalinput
 const mailclass=iserrormail?classes.error:classes.normalinput
 const areaclass=iserrorarea?classes.areaerror:classes.areainput

    return(
        <div className={classes.divform}><p className={classes.formp}><b>
          <RxArrowBottomRight/>You can send me an e-mail directly!<RxArrowBottomLeft/></b></p>
        <form  className={classes.form} onSubmit={submitHandler}>
            <input name="name"placeholder="Name" value={namevalue} onChange={changename} onBlur={touchname} className={nameclass}/>  
            <input name="e-mail" placeholder="E-mail" value={mailvalue} onChange={changemail} onBlur={touchmail} className={mailclass}/>
            <input name="message" placeholder="Message" value={areavalue} onChange={changenarea} onBlur={toucharea} className={areaclass} type="text"></input>
            <button className={classes.btn}>
                Send
            </button>
        </form>
        </div>
    )
}
export default Input
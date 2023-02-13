import './bodypic.css'
import { slider } from '../redux.js/redux'
import { useDispatch } from 'react-redux'
const Dot=(props)=>{
    const{id}=props
    const dispatch=useDispatch()
    const imgabsolute0=()=>{
        dispatch(slider.clickondot({
            id
        }))
        props.onclickdot()
        }
return (
<span id={props.id} className="dot"
onClick={imgabsolute0}></span>
)
}
export default Dot
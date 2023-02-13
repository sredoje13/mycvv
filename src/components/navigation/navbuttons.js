import classes from './navigation.module.css'
import { useDispatch } from 'react-redux'
import { scrolling } from '../redux.js/redux'
import { shownavigate } from '../redux.js/redux'
const Navbuttons=(props)=>{
    const {child,id}=props
    const dispatch=useDispatch()
    const scrolltoaboutme=()=>{
        dispatch(scrolling.scrollto({child,id}))
        dispatch(shownavigate.shownavig())
        }
        
    return(
<div className={classes.ul}  onClick={scrolltoaboutme}>
             {props.child}
            </div>
            

    )
}
export default Navbuttons
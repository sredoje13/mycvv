import classes from './navigation.module.css'
import {HiMenu} from 'react-icons/hi'
import Navbuttons from './navbuttons'
import { useDispatch,useSelector } from 'react-redux'
import { shownavigate } from '../redux.js/redux'
const Navigation =()=>{
  const showm=useSelector((state)=> state.shownavigation.navshow)
  console.log(showm)
    const dispatch=useDispatch()
    const butonitems=[
    {child:"About me",
     id:"r0",
     },
    {child:"My projects",
     id:"r1",},
    {child:"  Contact",
     id:"r2",}
    ]
  
    
    const showmenu=()=>{
        dispatch( shownavigate.shownavig())

    }
 
  const itemss=butonitems.map((item)=>(<Navbuttons id={item.id} 
    child={item.child} key={item.id}
 
  />))
  

    return (
        <div className={classes.navbar}>
            <button className={classes.btn} onClick={showmenu}>
            <HiMenu/>
            </button>
           {showm&& <div>
           {itemss}
            </div>}
        </div>
    )
}
export default Navigation
import '../../App.css'
import Aboutme from "./aboutme";
import Bodypic from "./bodypic";
import Aboutme2 from "./aboutme2";
import classes from '../navigation/navigation.module.css'
import Navbuttons from '../navigation/navbuttons';
const Body=()=>{
    const butonitems=[
        {child:"About me",
         id:"r0",
         },
        {child:"My projects",
         id:"r1",},
        {child:"  Contact",
         id:"r2",}
        ]
        const itemss=butonitems.map((item)=>(<Navbuttons id={item.id} 
            child={item.child} key={item.id}
         
          />))
    return(<div >
            <div className={classes.navbar}>
           
           {itemss}
           
        </div>
        <Aboutme/>
        <div className="body">
        <Bodypic/>
        <Aboutme2/></div>
       
    </div>)
}
export default Body
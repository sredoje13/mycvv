
import './App.css';
import Navigation from './components/navigation/navigation';
import Body from './components/bodypic/body';
import Myproject from './components/projects/myprojects';
import Contact from './components/contactme/contactme';
function App() {
  return (
    <div className="App">
   
     <Body/>
     <Myproject/>
     <Contact/>
    </div>
  );
}

export default App;

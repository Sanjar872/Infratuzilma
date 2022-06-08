import './App.css';
import AOS from "aos";
import "aos/dist/aos.css"
import Home from './Components/Infratuzilma/Home';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
    });
    AOS.refresh();
    
  
   
  }, [])
  
  return (
    <div className='ContainerApp'>
     <Home/>
    </div>
  );
}

export default App;

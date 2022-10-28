import Home from "./pages/Home";
import "./components/Dark.css"
import { useEffect,useState } from "react";
import {CgDarkMode}  from "react-icons/cg"

function App() {

  const [theme, setTheme] = useState('light');
     
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    
          };
       useEffect(() => {
    document.body.className = theme;
   
  }, [theme]);
 

  return ( 
  <div className={`App ${theme}`}>
  <Home />
  <div className ="text-center">  <button className ="btn btn-danger" onClick={toggleTheme}> <CgDarkMode/>  Mode </button></div>
   
  </div>
  )
}


export default App;

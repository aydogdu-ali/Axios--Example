import Home from "./pages/Home";
import "./components/Dark.css";
import { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Home />
      <div className="text-center">
      
        
          <CgDarkMode
          size={30}
          type="button"
           onClick={toggleTheme}/> 
       
      </div>
    </div>
  );
}

export default App;

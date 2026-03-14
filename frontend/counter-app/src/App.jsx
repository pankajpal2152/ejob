import { useState } from "react";
import Counter from "./components/Counter";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (

    <div className={darkMode ? "app dark" : "app"}>

      <h1>Advanced React Counter</h1>

      <button className="themeBtn" onClick={toggleTheme}>
        Toggle Dark Mode
      </button>

      <Counter darkMode={darkMode}/>

    </div>

  );
}

export default App;
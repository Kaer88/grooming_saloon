import Header from './Header/Header';
import './App.css';

import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { useState } from 'react';
import { darkModeContext } from './DarkMode/DarkModeContext';



function App() {

  const [darkModeToggled, setDarkModeToggled] = useState(false)


  return (
    <div className="App" style = {darkModeToggled ? { backgroundColor : "rgb(22,22,23)", color : "white" } : { backgroundColor : "white", color : "black" }}>
      <darkModeContext.Provider value={{ darkModeToggled, setDarkModeToggled }}>
        <Header />
        <Outlet />
        <Footer  />
      </darkModeContext.Provider>
    </div>
  );
}

export default App;

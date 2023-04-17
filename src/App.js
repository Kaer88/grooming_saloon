import Header from './Header/Header';
import './App.css';

import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { useState } from 'react';
import { darkModeContext } from './DarkMode/DarkModeContext';




function App() {

  const [darkModeToggled, setDarkModeToggled] = useState(false)


  return (
    <div id="bg">
      <div className="App">
        <darkModeContext.Provider value={{ darkModeToggled, setDarkModeToggled }}>

          <Header />

          <Outlet />

          <Footer />

        </darkModeContext.Provider>
      </div>
    </div>

  );
}

export default App;

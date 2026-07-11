import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import { ThemeDataContext } from './context/ThemeContext';

const App = () => {


  const data=useContext(ThemeDataContext)

  

  return (
    <div >
      <Navbar/>
      <button style={{color:'black'}}
      onClick={()=>{
       data.setTheme(data.theme=='light'?'dark':'light')
      }} >Change theme</button>
    </div>
  );
}

export default App

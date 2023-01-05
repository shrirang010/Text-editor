import './App.css';
import Navbar from './components/Navbar.js';
import Textbox from './components/Textbox';
import { useState } from 'react';
import { HashRouter ,Routes,Route } from 'react-router-dom';
import About from './components/About';
import Projectinfo from './components/Projectinfo';

function App() {
  document.head.title ="Text Editor"
  const[mode,setmode] = useState("light")
  const[headingcolor,setheadingcolor] =useState("black")

  function toggledarkmode(){
    if(mode === "light"){ 
        console.log("Enabling dark mode")
        setmode("dark")
        setheadingcolor("info")
        document.body.style.backgroundColor="black"
      }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      setheadingcolor("dark")
    }  
  }
  return (
   <>
   
    <HashRouter>
    <Navbar navtitle="Text Editor" mode={mode} toggle={toggledarkmode}/>
      <Routes>    
          <Route exact path='/' element ={<Textbox mode={mode} headingcolor={headingcolor}/>}/>
          <Route exact path='/about' element={<About title ={document.head.title}/>}/>
          <Route exact path='/projectinfo' element={<Projectinfo/>}/>
      </Routes>

    </HashRouter>

    </>
  );
}

export default App;

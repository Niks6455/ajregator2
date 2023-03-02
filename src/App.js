import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./component/pages/home/Home";
import Main from "./component/pages/main/Main";
import Register from './component/pages/register/Register';
import About from "./component/pages/about/About";
function App() {
  return (
  
    <BrowserRouter>
     
        <div className="Container">
         
            <Routes> 
              <Route path='/' element={<Home />}/>
              <Route path='/Main' element={<Main />}/>
              <Route path='/Register' element={<Register />}/>
              <Route path='/About' element={<About />}/>
            </Routes> 
         
        </div>
     
   </BrowserRouter>
  );
}

export default App;

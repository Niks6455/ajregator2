import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./component/pages/home/Home";
import Main from "./component/pages/main/Main";


function App() {
  return (
  
    <BrowserRouter>
     
        <div className="Container">
         
            <Routes> 
              <Route path='/' element={<Home />}/>
              <Route path='/Main' element={<Main />}/>
            </Routes> 
         
        </div>
     
   </BrowserRouter>
  );
}

export default App;

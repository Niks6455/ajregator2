import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./component/pages/home/Home";
import Main from "./component/pages/main/Main";
import Register from './component/pages/register/Register';
import About from "./component/pages/about/About";
import Authorization from "./component/pages/authorization/authorization";
import HomePage from "./component/pages/HomePage/HomePage";
import WashPage from "./component/pages/washPage/WashPage";
import MyPage from "./Appoint/js/MyPage";
import StartAppoint from "./Appoint/StartAppoint";


function App() {
  const [dataActiveInTitle, setDataActiveInTitle] = useState(0)
  return (
  
    <BrowserRouter>
     
        <div className="Container">
         
            <Routes> 
              <Route path='/' element={<Home />}/>
              <Route path='/Main' element={<Main />}/>
              <Route path='/Register' element={<Register />}/>
              <Route path='/Authorization' element={<Authorization />}/>
              <Route path='/About' element={<About />}/>
              <Route path='/HomePage' element={<HomePage />}/>
              <Route path='/WashPage' element={<WashPage/>}/>
              <Route path="/MyPage" element={<MyPage/>}/>
              <Route path="/StartAppoint/*" element={<StartAppoint/>}> 
                    {/* <Route path="*" element={<NewCalendar  dataActiveInTitle={dataActiveInTitle} setDataActiveInTitle={setDataActiveInTitle}/>} /> 
                    <Route path="SelectTime" element={<SelectTime/>}/>
                    <Route path="SelectBox" element={<SelectBox/>}/>
                    <Route path="ConfirmAppointment" element={<ConfirmAppointment/>}/> */}
              </Route>
            
            </Routes> 
           
         
        </div>
     
   </BrowserRouter>
  );
}

export default App;

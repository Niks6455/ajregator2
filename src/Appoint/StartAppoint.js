import React from "react"
import App from './js/App'
import './scss/index.scss'
import './scss/calendar.scss'
import './scss/select__time.scss'
import './scss/select__box.scss'
import './scss/confirm__appointment.scss'
// import './scss/my__page.scss'
import './scss/new__my__page.scss'
import './scss/parameters.scss'


import { useLocation } from "react-router-dom";

export default function StartAppoint() {
  const location = useLocation();

  // console.log("funMarshrut", location.state?.data)
  const propsData = location.state?.data;

    return(
      <App propsData={propsData}/>
    ) 
   
   
}
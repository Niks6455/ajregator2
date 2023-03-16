import React from "react"
import iconHome from "./../img/icon_home.png"
import iconLK from "./../img/icon_LK.png"
import iconBack from "./../img/back.png"
import { Link } from "react-router-dom"
function Header(props){
    return(
        <div className="title">

            {/* <div className="manu">
                
            </div> */}

            <div className="title__inner">

                <div className="manu">
                    <div className="manu__inner">
                      <img type="button" onClick={props.funcSetFlagConfirm} className="manu__inner__img__home" src = {iconHome}></img>
                        <img type="button" onClick={props.funcSetFlagMyPage} className="manu__inner__img__lk" src = {iconLK}></img>
                        
                    </div>  
                     <Link to="/HomePage"> <img type="button" onClick={props.funcButtonBack} className="manu__inner__img__back" src = {iconBack}></img></Link>
                </div>
                

                {
                    props.flagCalendar === true ? <h3>Выберите дату</h3> : <h3>Выберите время</h3>
                }
                
                <h1>Запись на мойку</h1>
            </div>        
        </div>
    )
}

export default Header
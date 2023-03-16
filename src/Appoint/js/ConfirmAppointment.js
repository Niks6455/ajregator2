import React from "react";
import iconCC from "./../img/icon_CC.png"
import iconHome from "./../img/icon_home.png"
import iconLK from "./../img/icon_LK.png"
import iconBack from "./../img/back.png"
import bg1 from './../img/bg1.png'
import iconTime from './../img/icon_time.png'
import iconCalendar from './../img/icon_calendar.png'
import iconbox from './../img/icon_big_box.png'
import { Link } from "react-router-dom";

function ConfirmAppointment(props){


    var monthNmae = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ]


    // console.log(props.timeActiveInTitle)




    return(
        <div>


            <div className="title__confirm">
                <div className="title__inner__confirm">
                        
                    <img type="button" onClick={props.funcButtonBack} className="title__inner__confirm__img__back" src = {iconBack}></img>
                    <div className="title__inner__confirm__logo">
                        <img className="title__inner__confirm__img" src = {iconCC}></img>
                        <h1>CLEANCAR</h1>
                    </div>
                    
                    <img type="button" onClick={props.funcSetFlagConfirm} className="title__inner__confirm__img__home" src = {iconHome}></img>
                    <img type="button" onClick={props.funcSetFlagMyPage} className="title__inner__confirm__img__lk" src = {iconLK}></img>


                    
                 </div>  

                 
                    
            </div>


            <div className="container__confirm">
                <div className="container__inner__confirm">


                <div className="container__title__confirm">   
                        <img src={bg1} alt=""/>
                        <h2 className="text1">Спасибо за</h2>
                        <h2 className="text2">запись!</h2>
                </div>
                <h3>Ваша запись:</h3>

                <div className="container__title__confirm__inner">
                    <div className="block__name">
                        Мойка юг
                    </div>

                    <div className="block__time">
                        <img className="block__time__icon" src={iconTime} alt=""/>
                        <h3>{props.timeActiveInTitle}</h3>
                    </div>


                    <div className="block__calendar">
                        <img className="block__calendar__icon" src={iconCalendar} alt=""/>
                        <h3>{props.dataActiveInTitle[0]}</h3>
                        <h6>{monthNmae[props.dataActiveInTitle[2]-1]}</h6>
                    </div>


                    <div className="block__box">
                        <img className="block__calendar__icon" src={iconbox } alt=""/>
                        <h3>{props.boxActiveInTitle}</h3>
                        <h6>бокс</h6>
                    </div>



                </div>
                
                <div className="container__inner__confirm__button__outer">
                   <Link to="/HomePage"><div type="button" onClick={props.funcSetFlagConfirmAppointment} className="container__inner__confirm__button">Подтвердить</div>  </Link>  
                    {/* <div type="button" onClick={props.funcSetFlagConfirm} className="container__inner__confirm__button">Главная</div> */}
                </div>
                
                


                </div>
            </div>
            <div className="container__inner__confirm__box"></div>

        </div>
        
    )
}

export default ConfirmAppointment
import React from "react";
import iconFace from "./../img/my_page_face.png"
import icon1b from './../img/icon1b.png'
import icon2b from './../img/icon2b.png'
import icon3b from './../img/icon3b.png'
import iconDelete from './../img/icon_delete.png'
import iconHome from "./../img/icon_home.png"
import { Link } from "react-router-dom";

import iconCar1 from "./../img/my_page_car1.png"
import { useEffect, useState } from "react";

import { url_MyPage } from "../../getDataBD";
// -----------------------------------------------------


function MyPage(props){

// ---------------------------------------------------
 // Запросим от бэка 
 const [dataGet, setDataGet] = useState([]);

 useEffect(() => {
   async function fetchData() {
     const response = await fetch(url_MyPage);
     const jsonData = await response.json();
     setDataGet(jsonData);
   }
   fetchData();
 }, []);


 console.log("data",dataGet)
if(dataGet.length!== 0){ // если данные нашлись 
 var name = dataGet[0].MyPageInfo.name;
 var car = dataGet[0].MyPageInfo.car;

 
}
else{   // если данные не загрузились

    var name = "Роман Вочках";
    var car = "Lada Niva";
}

// ---------------------------------------


    return(
        <main>
            <div className="my__page__head">
<<<<<<< HEAD
              {/* <Link to="/HomePage"><img type="button" onClick={props.funcSetFlagConfirm} className="my__page__inner__img__home" src = {iconHome}></img></Link>   */}
              <Link to="/NewMyPage"><img type="button" onClick={props.funcSetFlagConfirm} className="my__page__inner__img__home" src = {iconHome}></img></Link>  

=======
                <div className="header__MyPage">
                  <button className="button__exit" type="button" >Выйти</button>
                    <Link to="/HomePage"><img type="button" onClick={props.funcSetFlagConfirm} className="my__page__inner__img__home" src = {iconHome}></img></Link>  
                </div>
                
>>>>>>> main

                <div className="my__page__head__inner">
                 
                    <div className="img__box">
                      
                        <img  src={iconFace}></img>
                    </div>
                    
                    <div className="text">
                        <h2>{name}</h2>
                        <b>{car}</b>
                    </div>

                    

                </div>


                <div className="edit">
                    <b>Редактировать</b>
                </div>
                 
            </div>

            <div className="my__page__appointment">


                <div className="title">
                    <b>Мои записи</b>
                </div>

                <div className="appointment__container">
                    <div className="appointment__container__inner">

                        <div className="appointment__container__inner__box">

                            <div className="slab__car__wash__name  marg">
                                <b>мойка юг авто</b>
                            </div>

                            <div className="slab__time marg">
                                <div className="slab__time__inner">
                                    <img src={icon2b} alt=""/>
                                    <b>9:30</b>
                                </div>
                                
                            </div>

                            <div className="slab__calendar marg">
                                <div className="slab__calendar__inner">
                                    <img src={icon1b} alt=""/>
                                    <h3>4</h3>
                                    <b>ноября</b>
                                </div>
                                
                            </div>

                            <div className="slab__box marg">
                                <div className="slab__box__inner">
                                    <img src={icon3b} alt=""/>
                                    <h3>6</h3>
                                    <b>бокс</b>
                                </div>
                                
                            </div>
                            
                           

                        </div>

                            <div className="appointment__container__instrument">
                                <img src={iconDelete} />
                            </div>

                    </div>
                </div>
                

            </div>



            <div className="my__page__history">


                <div className="title">
                    <b>История</b>
                </div>

                <div className="container">
                    <div className="box">
                        <div className="box__car__foto">
                            <img src={iconCar1}/>

                        </div>
                        <div className="box__info">
                            <div className="box__info__title">
                                <b>moi cam</b>
                            </div>
                            <b className="box__info__data">12.03.2023</b>
                            <div className="box__info__price">
                                <div className="price">Цена</div>
                                <div className="many__many">
                                    <b className="many">174р</b>
                                </div>
                            </div>
                            
                            <div className="box__info__time">
                                <div className="time">Время</div>
                                <div className="time__time">
                                    <b className="time__time__inner">12 мин</b>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="box">
                        <div className="box__car__foto">
                            <img src={iconCar1}/>

                        </div>
                        <div className="box__info">
                            <div className="box__info__title">
                                <b>moi cam</b>
                            </div>
                            <b className="box__info__data">12.03.2023</b>
                            <div className="box__info__price">
                                <div className="price">Цена</div>
                                <div className="many__many">
                                    <b className="many">174р</b>
                                </div>
                            </div>
                            
                            <div className="box__info__time">
                                <div className="time">Время</div>
                                <div className="time__time">
                                    <b className="time__time__inner">12 мин</b>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <main className="button__show__more"  type="button">Показать еще</main>
                

            </div>
            
        </main>
    )
}

export default MyPage
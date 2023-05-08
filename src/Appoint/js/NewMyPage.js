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


function NewMyPage(props){
    
// ---------------------------------------------------
// Запросим от бэка имя фамилия и марку машины
const [data, setData] = useState([]);

useEffect(() => {
  async function fetchData() {
    const response = await fetch(url_MyPage);
    const jsonData = await response.json();
    setData(jsonData);
  }
  fetchData();
}, []);


console.log("data",data)
if(data.length!== 0){ // если данные нашлись 
var name=data[0].name, car=data[0].car;

}
else{   // если данные не загрузились
var name="Роман Вочках", car="Лада Приора";
}

// ---------------------------------------




    return(
        <main>
            <div className="my__page__head">
              <Link to="/HomePage"><img type="button" onClick={props.funcSetFlagConfirm} className="my__page__inner__img__home" src = {iconHome}></img></Link>  


                <div className="my__page__head__inner">
                    <div className="img__box">
                        <img  src={iconFace}></img>
                    </div>
                    
                    <div className="text">
                        <h2>{name}</h2>
                        <b>{car}</b>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NewMyPage
import React from "react";
import iconFace from "./../img/my_page_face.png"
import icon1b from './../img/icon1b.png'
import icon2b from './../img/icon2b.png'
import icon3b from './../img/icon3b.png'
// import iconDelete from './../img/icon_delete.png'
// import iconHome from "./../img/icon_home.png"
import { Link } from "react-router-dom";

// import iconCar1 from "./../img/my_page_car1.png"
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

// console.log("data",data)
if(data.length!== 0){ // если данные нашлись 
var name=data[0].name, car=data[0].car;

}
else{   // если данные не загрузились
var name="Роман", car="Лада Приора";
}

// ---------------------------------------


// блоки в моих записях
var boxAppointList = []
var [boxAppoint, setBoxAppoint] = useState(boxAppointList)
// строки в таблице истории
var rowHistory = []

// var name = "Роман"



// функицяи удаления записи
var num = 0;
const [count, setCount] = useState(10)
useEffect(() => {
  console.log("Component has been updated");
}, [boxAppoint]);

function delAppoint(event){
  setCount(prevCount => prevCount + 1)
  console.log("count", count)
  console.log(event.target.id)
  boxAppointList.splice(event.target.id - num, 1);
  console.log("nox ",boxAppointList)
  setBoxAppoint(boxAppointList)
  num = num+1;

 

}

for(var l = 0; l < 6; l++){
  boxAppointList.push( {
    key: l,
    value:
    <div className="blog1__mypage" >
                        <div className="blog1__title__mypage">
                          Мойка ЮГ
                        </div>
                        <div id={l} onClick={delAppoint} className="gg__close"></div>

                        <div className="blog1__body__mypage">
                          <div className="blog1__body__left">
                              <div className="blog1__body__left__img">
                                <img src={icon1b} alt="х"></img>
                              </div>
                              <div className="blog1__body__left__img">
                                <img src={icon3b} alt="х"></img>
                              </div>
                              <div className="blog1__body__left__img">
                                <img src={icon2b} alt="х"></img>
                              </div>
                          </div>

                          <div className="blog1__body__right">
                              <div className="blog1__body__right__text">
                                  09.05.23
                              </div>
                              <div className="blog1__body__right__text">
                                  бокс {l}
                              </div>
                              <div className="blog1__body__right__text">
                                  9 : 30
                              </div>
                          </div>

                        </div>

                    </div>
  }

  )

}



for(var r = 0; r < 10; r++){
  rowHistory.push({
    key: r,
    value:  
    <tr>
    <td>МойкаЮг</td>
    <td>06.05.23</td>
    <td>09:30</td>
    <td>1</td>
    </tr>

  })
}





 // обработчик события при клике на div

const [burgerClick, setBurgerClick] = useState(false)

 const handleClick = () => {
  if(burgerClick){
    setBurgerClick(false);
  } 
  else{
    setBurgerClick(true)
  }
  // console.log(burgerClick)
};


if(boxAppoint.length === 0){
  // console.log("Данных нет")
  setCount(0) //чтбы вывести сообщение что записей нет 
  setBoxAppoint(0) // без этого бесконечный рендер и страницанакрывается
}



    return(
      
        <main>
           <div className="container__mypage">

                <div className="title__mypage">
                    <div className="title__inner__mypage">
                        <div className="panel1__mypage">

                          <div className="panel1__mypage__img">
                            <img src={iconFace} alt="avatar"></img>

                          </div>
                          <Link to="../Parameters">
                          <div className="panel1__mypage__text">
                            <div className="panel1__name">{name}</div>
                            <div className="panel1__car">{car}</div>
                          </div>
                          </Link>
                          <div className="arrow"></div>


                        </div>
                        <div className="panel2__mypage">
                            <div className="panel2__inner__mypage" onClick={handleClick}>
                                <div className="panel2__inner__inner__mypage"></div>
                            </div>
                        </div>

                        { burgerClick?
                        <div className="panel3__burger__mypage">
                          <Link to="/HomePage"><div className="panel3__burger__text__mypage">
                            Главная
                          </div></Link>
                          <Link to="../Parameters"><div className="panel3__burger__text__mypage">
                            Настройки
                          </div></Link> 
                          <Link to="/Register"><div className="panel3__burger__text__mypage">
                            Выход
                          </div></Link> 
                        </div>
                        :
                        <div></div>
                        }
                    </div>
                </div>

                {/* мои записи */}
              <div className="container__appointments__mypage">

                <div className="appointments__title__mypage">
                  <div className="appointments__title__mypag__text">
                    Мои записи
                  </div>
                </div>

                <div className="appointments__blog__mypage">

                  <div className="scroll__bar__mypage" style={boxAppoint.length < 3? {justifyContent: 'center'} : {}}>
                    {count !== 0 ?
                     boxAppoint.map((el)=>(
                      <div key={el.key}> 
                        {el.value }

                      </div>
                     ))
                     :
                     <div className="not__appoint__mypage">
                        <div className="not__appoint__inner__mypage">
                            У вас еще нет записей
                        </div>
                      </div>
                    }
                  </div>
                 
                </div>
              </div>
              
            <div className="history__mypage">

                <div className="history__title__mypage">
                  <div className="history__title__mypag__text">
                    История
                  </div>
                </div>
                
                <div className="history__container__mypage">
                    <div className="history__blog2__mypage">
                        <table className="history__table__mypage">
                          <tr>
                            <td>Название</td>
                            <td>Дата</td>
                            <td>Время</td>
                            <td>Бокс</td>
                          </tr>

                          {
                            rowHistory.map((el)=>(
                            el.value
                          ))
                          }
                        </table>

                    </div>
                </div>
                
            </div>



           </div>
        </main>
    )
}

export default NewMyPage
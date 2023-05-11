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


console.log("data",data)
if(data.length!== 0){ // если данные нашлись 
var name=data[0].name, car=data[0].car;

}
else{   // если данные не загрузились
var name="Роман Вочках", car="Лада Приора";
}

// ---------------------------------------



var boxAppoint = []

for(var l = 0; l < 6; l++){
  boxAppoint.push( {
    key: l,
    value:
    <div className="blog1__mypage">
                        <div className="blog1__title__mypage">
                          Мойка ЮГ
                        </div>

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
                                  бокс 1
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


    return(
        <main>
           <div className="container__mypage">

                <div className="title__mypage">
                    <div className="title__inner__mypage">
                        <div className="panel1__mypage">

                          <div className="panel1__mypage__img">
                            <img src={iconFace} alt="avatar"></img>

                          </div>
                          <div className="panel1__mypage__text">
                            <div className="panel1__name">Роман Вочках</div>
                            <div className="panel1__car">Лада Niva Traval</div>
                          </div>
                          <div className="arrow"></div>


                        </div>
                        <div className="panel2__mypage">
                            {/* бурегр */}
                        </div>
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

                  <div className="scroll__bar__mypage">
                    {
                     boxAppoint.map((el)=>(
                        el.value
                     ))
                    }
                    {/* <div className="blog1__mypage">
                        <div className="blog1__title__mypage">
                          Мойка ЮГ
                        </div>

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
                                  бокс 1
                              </div>
                              <div className="blog1__body__right__text">
                                  9 : 30
                              </div>
                          </div>

                        </div> */}

                    {/* </div> */}
                  </div>

                 
                </div>
              </div>
              
            <div className="history__mypage">
                <div className="history__title__mypage">
                  <div className="history__title__mypag__text">
                    История
                  </div>
                </div>
            </div>



           </div>
        </main>
    )
}

export default NewMyPage
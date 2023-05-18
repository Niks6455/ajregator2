import React from "react";
import Header from "../../component/common/header/Header";

function Parameters(){
    
    return(
        <main>
            <div className="container__param">
                <Header/>
                <div className="container__head__param">
                    Информация на личной странице
                </div>

                <div className="container__myinfo__param">
                    
                    <div className="myinfo__name__param">
                       
                        <form action="#" method="post">
                            <div>
                                <label className="myinfo__name__title1__param" for="name">Имя</label>
                                <input className="myinfo__name__title2__param" type="text" name="name" id="name" placeholder="Рома"/>
                            </div>
                            <div>
                                <label className="myinfo__name__title1__param" for="surname">Фамилия</label>
                                <input className="myinfo__name__title2__param" type="text" name="surname" id="surname" placeholder="Вочках"/>
                            </div>
                            <div>
                                <label className="myinfo__name__title1__param" for="tel">Телефон</label>
                                <input className="myinfo__name__title2__param" type="tel" name="tel" id="tel" placeholder="+79515234564"/>
                            </div>

                            <div className="carinfo__param">
                                Транспортное средство
                            </div>

                            <div>
                                <label className="myinfo__name__title1__param" for="marka">Марка</label>
                                <input className="myinfo__name__title2__param" type="text" name="marka" id="marka" placeholder="Лада Приора"/>
                            </div>
                            <div>
                                <label className="myinfo__name__title1__param" for="type">Тип</label>
                                <input className="myinfo__name__title2__param" type="text" name="type" id="type" placeholder="Седан"/>
                            </div>
                            <div className="myinfo__btn__param">
                                <button className="myinfo__btn__inner__param" type="submit">Сохранить</button>
                            </div>
                        </form>


                    </div>

                </div>
                
            </div>
        </main>
    )
}

export default Parameters
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
                        <div className="myinfo__name__title1__param">
                            Имя
                        </div>
                        <div className="myinfo__name__title2__param">
                            Роман
                        </div>
                    </div>

                </div>
                
            </div>
        </main>
    )
}

export default Parameters
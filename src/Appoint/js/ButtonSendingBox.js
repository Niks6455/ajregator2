import React from "react"

// Создаем кнопку отправки данных в базу данных

function ButtonSendingBox(props) {
    return(
        <div className="button__send__data__box">
            {
                props.boxActiveInTitle !== 0 ? 
                    <main className="button__send__data" onClick={props.funcSelectBox} type="button">Выбрать бокс</main>
                :
                    <main className="button__send__data" onClick={()=>alert("Выберите бокс")} type="button">Выбрать бокс</main>
            }
            
        </div>
    )

}

export default ButtonSendingBox
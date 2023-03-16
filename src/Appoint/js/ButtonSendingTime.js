import React from "react"

// Создаем кнопку отправки данных в базу данных

function ButtonSendingTime(props) {
    return(
        <div className="button__send__data__box">
            {
                props.timeActiveInTitle !== 0 ? 
                    <main className="button__send__data" onClick={props.funcSelectTimeActive} type="button">Выбрать время</main>
                :
                    <main className="button__send__data" onClick={()=>alert("Выберите время")} type="button">Выбрать время</main>
            }
            
        </div>
    )

}

export default ButtonSendingTime


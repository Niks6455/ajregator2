import React from "react"
// import Calendar from "./Calendar"

// Создаем кнопку отправки данных в базу данных

function ButtonSendingData(props) {
    return(
        <div className="button__send__data__box">
            {
                props.dataActiveInTitle !== 0 ? 
                    <main className="button__send__data" onClick={props.flagCalendarActivate} type="button">Выбрать дату</main>
                :
                    <main className="button__send__data" onClick={()=>alert("Выберите дату")} type="button">Выбрать дату</main>
            }
            
        </div>
    )

}

export default ButtonSendingData


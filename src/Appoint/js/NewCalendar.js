import React, { useState } from "react"
// import CalendarDay from "./CalendarDay"

let i = 0
let flag = 0;
var dataActive = []


function NewCalendar(props){

    var busyData = ["05.03.2023","28.02.2023", "17.03.2023", "08.04.2023", "26.05.2023"]
    var busyDataNormal = []
    for(var y = 0; y < busyData.length; y++){
        var busyDataDay = `${busyData[y][0]}${busyData[y][1]}`
        busyDataDay = Number(busyDataDay)
        // console.log(busyDataDay)
    
        var busyDataMonth = `${busyData[y][3]}${busyData[y][4]}`
        busyDataMonth = Number(busyDataMonth)
        // console.log(busyDataMonth)

        busyDataNormal.push({day: busyDataDay, month:busyDataMonth })
        
    }
    console.log(busyDataNormal)


    var monthNmae = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ]

    var week = [ {day: "Пн", id: 1},{day: "Вт", id: 2},{day: "Ср", id: 3},
    {day: "Чт", id: 4},{day: "Пт", id: 5},{day: "Сб", id: 6},{day: "Вс", id: 0}]

    var data = new Date();
    // console.log(data)
    // console.log("Год",data.getFullYear()); // Год
    // console.log("Мес",data.getMonth()); // Месяц
    // console.log("число",data.getDate()); // число
    // console.log(days[data.getDay()]); // день недели
    // data.setSeconds(21); // установить значение вручную
    var firstDayWeekInState
    if(new Date(data.getFullYear(), data.getMonth(), 1).getDay() === 0){
        firstDayWeekInState = 7
    }
    else {
        firstDayWeekInState = new Date(data.getFullYear(), data.getMonth(), 1).getDay()
    }

    const [step, setStep]  = useState(data.getMonth())

    if(flag === 0){
        i = step;
        flag = 1;
    }
        
    const [firstDay, setFirstDay]  = useState(firstDayWeekInState) // с какого дня начинать отчет 5 пт 6 сб 7 вс
    
    const [lastDayWeek, setlastDayWeek]  = useState(new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate()) //колличество дней в колендаре 
    
    const [ MonthName, setMonthName]  = useState(monthNmae[step])

    const [year, setYear] = useState(data.getFullYear())

    data.setMonth(0);
    var firstDayWeek = new Date(data.getFullYear(), data.getMonth(), 1).getDay(); //день недели первого дня месяца
    var lastDayMonth = new Date(data.getFullYear(), data.getMonth() + 1, 0).getMonth();
    // lastDayWeek = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();

    // console.log("имя дня недели", firstDayWeek); 
    // console.log("Мес", lastDayMonth ); 
    // console.log("последний день месяца", lastDayWeek ); 


    function nextMonthName(){  //    следующий месяц
        i = i+1
        // console.log(i)
        if(i === 12){
            setYear(year+1)
        }
        if(i === 0){
            setYear(2023)
        }

        // setStep(i)
        data.setMonth(i);
        firstDayWeek = new Date(data.getFullYear(), data.getMonth(), 1).getDay(); //день недели первого дня месяца
        lastDayMonth = new Date(data.getFullYear(), data.getMonth() + 1, 0).getMonth();
        // lastDayWeek = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();
        setlastDayWeek(new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate())
        

        if(new Date(data.getFullYear(), data.getMonth(), 1).getDay() === 0){
            firstDayWeekInState = 7
        }
        else {
            firstDayWeekInState = new Date(data.getFullYear(), data.getMonth(), 1).getDay()
        }
        // console.log("-----------",firstDayWeekInState)
        setFirstDay(firstDayWeekInState)
        setMonthName(monthNmae[data.getMonth()])

        // CreatCalendarRow(i)

    }

    function previousMonthName(){ //    предыдущий месяц
        i = i-1
        // console.log(i)
        if(i === -1){
            setYear(year-1)
        }

        // setStep(i)
        data.setMonth(i);
        firstDayWeek = new Date(data.getFullYear(), data.getMonth(), 1).getDay(); //день недели первого дня месяца
        lastDayMonth = new Date(data.getFullYear(), data.getMonth() + 1, 0).getMonth();
        // lastDayWeek = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();
        setlastDayWeek(new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate())
        

        if(new Date(data.getFullYear(), data.getMonth(), 1).getDay() === 0){
            firstDayWeekInState = 7
        }
        else {
            firstDayWeekInState = new Date(data.getFullYear(), data.getMonth(), 1).getDay()
        }
        console.log("-----------",firstDayWeekInState)
        setFirstDay(firstDayWeekInState)
        setMonthName(monthNmae[data.getMonth()])

        // CreatCalendarRow(i)
    }

   
    // const [ CCR, setCCR]  = useState(()=>CreatCalendarRow)
    const [flagActive, setFlagActive] = useState(false)


    const ClicNumber=(el,i)=>{
       
       
        console.log(el)
        console.log(el.target.innerHTML)
        console.log(i)

        
        // listNumbers1[]
        
        CreatCalendarRow(i, el.target.innerHTML)
        
        
        if(flagActive === false){
            // dataActive = []
            // el.target.className = "calendar__day__inner active"
            dataActive.push({day: el.target.innerHTML, month: i})
            setFlagActive(true)
        }
        else{
            if( el.target.className === "calendar__day__inner active")
            {
                dataActive = [] 
                el.target.className = "calendar__day__inner"
                setFlagActive(false)
            }
            
        }
        console.log(dataActive)





        var massDataTitle = []
        if(dataActive.length > 0){
            massDataTitle.push(dataActive[0].day,".", dataActive[0].month+1)
            props.setDataActiveInTitle(massDataTitle)
        }else{
            props.setDataActiveInTitle(0)
        }
        

    }
    
    
   
   


   

 
    var listNumbers1 = [] 
    var listNumbers2 = [] 
    var listNumbers3 = [] 
    var listNumbers4 = [] 
    var listNumbers5 = [] 
    var listNumbers6 = [] 

   

    const CreatCalendarRow = (i)=>{
        // var listNumbers1 = []                //------------------заполняем числа
        listNumbers1 = [] 
        listNumbers2 = [] 
        listNumbers3 = [] 
        listNumbers4 = [] 
        listNumbers5 = [] 
        listNumbers6 = [] 



        console.log("CreatCalendarRow")

        var first = 0
        var end = 7
        var id = 0
    
        for(var il = first; il < end; il++){
            if(il < firstDay -1)    //------------------заполняем пустые числа
            {
                listNumbers1.push({value: <div key={id} className="calendar__day__inner"></div>, id: id})
            }
            else{
                listNumbers1.push({value: <div key={id}  type="button" onClick={(key)=>ClicNumber(key, i)} className= "calendar__day__inner">{il - firstDay +2}</div >, id: id})

            }
            id++
        }
        first = first + 7
        end = end + 7 
        // var listNumbers2 = []                //------------------заполняем числа
        for(il = first; il < end; il++){
            listNumbers2.push({value: <div key={id} type="button" onClick={(key)=>ClicNumber(key, i)} className="calendar__day__inner">{il - firstDay +2}</div >, id: id})
            id++
        }
        first = first + 7
        end = end + 7
        // var listNumbers3 = []                //------------------заполняем числа
        for(il = first; il < end; il++){
            listNumbers3.push({value: <div key={id} type="button" onClick={(key)=>ClicNumber(key, i)} className="calendar__day__inner">{il - firstDay +2}</div >, id: id})
            id++
        }
        first = first + 7
        end = end + 7
        // var listNumbers4 = []                //------------------заполняем числа
        for(il = first; il < end; il++){
            listNumbers4.push({value: <div key={id} type="button" onClick={(key)=>ClicNumber(key, i)} className="calendar__day__inner">{il - firstDay +2}</div >, id: id})
            id++
        }
        first = first + 7
        end = end + 7
        // var listNumbers5 = []                //------------------заполняем числа
        for(il = first; il < end; il++){
            if(il > lastDayWeek + firstDay - 2)    //------------------заполняем пустые числа
            {
                listNumbers5.push({value: <div key={id} type="button" className="calendar__day__inner"></div >, id: id})
                id++
            }
            else
            listNumbers5.push({value: <div key={id} type="button" onClick={(key)=>ClicNumber(key, i)} className="calendar__day__inner">{il - firstDay +2}</div >, id: id})
            id++
        }
        first = first + 7
        end = end + 7
        // var listNumbers6 = []                //------------------заполняем числа
        for(il = first; il < end; il++){
            if(il > lastDayWeek + firstDay - 2)    //------------------заполняем пустые числа
            {
                listNumbers6.push({value: <div key={id} className="calendar__day__inner"></div >, id: id})
                id++
            }
            else {
                listNumbers6.push({value: <div key={id} type="button" className="calendar__day__inner">{il - firstDay +2}</div >, id: id})
                id++
            }
            
        }




        // console.log( busyDataNormal)

        var newBusyDataNormal = [];                                                  // достаем все дни у которых месяц равен i
        for(var lll = 0; lll< busyDataNormal.length; lll++){
            if(busyDataNormal[lll].month === i + 1){
                newBusyDataNormal.push(busyDataNormal[lll].day)
            }
        }

        // console.log(newBusyDataNormal)

        // console.log(listNumbers2[0].value.props.className)
        // console.log(listNumbers2[0].value.props)
        


        

        // внесем занятые даты
        for(var g = 0; g < listNumbers1.length; g++){
            // // console.log(listNumbers2[g].month)
            // // if(listNumbers2[g].value.props.children === )
            // console.log("------",busyDataNormal.find(el => {return el.day === listNumbers1[g].value.props.children}))

            if(newBusyDataNormal.find(el => {return el === listNumbers1[g].value.props.children})){
                    listNumbers1[g].value = <div key={listNumbers1[g].id} type="button" className="calendar__day__inner occupied">{listNumbers1[g].value.props.children}</div >
                
            }
               
            if(dataActive.length>0){
                // console.clear()
                // console.log("listNumber ", listNumbers1[g].value.props.children)
                // console.log("DataActive ", dataActive)

                if(Number(dataActive[0].day) === Number(listNumbers1[g].value.props.children) && Number(dataActive[0].month) === Number(i)){ 
                    listNumbers1[g].value = <div key={listNumbers1[g].id}  type="button" onClick={(key)=>ClicNumber(key, i)} className="calendar__day__inner active">{listNumbers1[g].value.props.children}</div >
            
                } 
            }
           
        }



        for(var g = 0; g < listNumbers2.length; g++){

            if(newBusyDataNormal.find(el => {return el === listNumbers2[g].value.props.children})){
                    listNumbers2[g].value = <div key={listNumbers2[g].id} type="button" className="calendar__day__inner occupied">{listNumbers2[g].value.props.children}</div >
                
            }

            if(dataActive.length>0){
                // console.clear()
                // console.log("=== ", listNumbers2[g].value.props.children)
                // console.log("=== ", dataActive)

                if(Number(dataActive[0].day) === Number(listNumbers2[g].value.props.children) && Number(dataActive[0].month) === Number(i)){
                    listNumbers2[g].value = <div key={listNumbers2[g].id} type="button" onClick={(key)=>ClicNumber(key, i)} className="calendar__day__inner active">{listNumbers2[g].value.props.children}</div >
            
                } 
            }
        }



        for(var g = 0; g < listNumbers3.length; g++){

            if(newBusyDataNormal.find(el => {return el === listNumbers3[g].value.props.children})){
                    listNumbers3[g].value = <div key={listNumbers3[g].id} type="button" className="calendar__day__inner occupied">{listNumbers3[g].value.props.children}</div >
                
            }



            if(dataActive.length>0){
                // console.clear()
                // console.log("=== ", listNumbers3[g].value.props.children)
                // console.log("=== ", dataActive)

                if(Number(dataActive[0].day) === Number(listNumbers3[g].value.props.children) && Number(dataActive[0].month) === Number(i)){
                    listNumbers3[g].value = <div key={listNumbers3[g].id} type="button" onClick={(key)=>ClicNumber(key, i)} className="calendar__day__inner active">{listNumbers3[g].value.props.children}</div >
            
                } 
            }
        }



        for(var g = 0; g < listNumbers4.length; g++){

            if(newBusyDataNormal.find(el => {return el === listNumbers4[g].value.props.children})){
                    listNumbers4[g].value = <div key={listNumbers4[g].id} type="button" className="calendar__day__inner occupied">{listNumbers4[g].value.props.children}</div >
                
            }


            if(dataActive.length>0){
                // console.clear()
                // console.log("=== ", listNumbers4[g].value.props.children)
                // console.log("=== ", dataActive)

                if(Number(dataActive[0].day) === Number(listNumbers4[g].value.props.children) && Number(dataActive[0].month) === Number(i)){
                    listNumbers4[g].value = <div key={listNumbers4[g].id} type="button" onClick={(key)=>ClicNumber(key, i)} className="calendar__day__inner active">{listNumbers4[g].value.props.children}</div >
            
                } 
            }
        }





        for(var g = 0; g < listNumbers5.length; g++){

            if(newBusyDataNormal.find(el => {return el === listNumbers5[g].value.props.children})){
                    listNumbers5[g].value = <div key={listNumbers5[g].id} type="button" className="calendar__day__inner occupied">{listNumbers5[g].value.props.children}</div >
                
            }


            if(dataActive.length>0){
                // console.clear()
                // console.log("=== ", listNumbers5[g].value.props.children)
                // console.log("=== ", dataActive)

                if(Number(dataActive[0].day) === Number(listNumbers5[g].value.props.children) && Number(dataActive[0].month) === Number(i)){
                    listNumbers5[g].value = <div key={listNumbers5[g].id} type="button" onClick={(key)=>ClicNumber(key, i)} className="calendar__day__inner active">{listNumbers5[g].value.props.children}</div >
            
                } 
            }
        }





        for(var g = 0; g < listNumbers6.length; g++){
            if(newBusyDataNormal.find(el => {return el === listNumbers6[g].value.props.children})){
                    listNumbers6[g].value = <div key={listNumbers6[g].id} type="button" className="calendar__day__inner occupied">{listNumbers6[g].value.props.children}</div >
                
            }



            if(dataActive.length>0){
                // console.clear()
                // console.log("=== ", listNumbers6[g].value.props.children)
                // console.log("=== ", dataActive)

                if(Number(dataActive[0].day) === Number(listNumbers6[g].value.props.children) && Number(dataActive[0].month) === Number(i)){
                    listNumbers6[g].value = <div key={listNumbers6[g].id} type="button" onClick={(key)=>ClicNumber(key, i)} className="calendar__day__inner active">{listNumbers6[g].value.props.children}</div >
            
                } 
            }
        }



        
    }

   CreatCalendarRow(i);





    
    
    return(
        <div>
            <div className="calendar__month">
                <div type="button" className="month__previous" onClick={previousMonthName}> <b>{'<'} </b></div>
                <b className="month__name">{MonthName} {year}</b>

                <div type="button" className="month__next" onClick={nextMonthName}> <b>{'>'}</b></div> 
            </div>

            <div className="calendar__week">
                {
                week.map((el) =>(
                <div key={el.day} className="calendar__week__inner">{el.day}</div>) 
                )
                }
            </div>
            <div className="calendar__day__box">
                <div  key="l1" className="calendar__day">
                    {listNumbers1.map(el=> el.value)}
                </div >
                <div  key="l2" className="calendar__day">
                    {listNumbers2.map(el=> el.value)}
                </div >
                <div  key="l3" className="calendar__day">
                    {listNumbers3.map(el=> el.value)}
                </div >
                <div  key="l4" className="calendar__day">
                    {listNumbers4.map(el=> el.value)}
                </div >
                <div  key="l5" className="calendar__day">
                    {listNumbers5.map(el=> el.value)}
                </div >
                <div  key="l6" className="calendar__day">
                    {listNumbers6.map(el=> el.value)}
                </div >
            </div>
            {/* <CalendarDay defCount={firstDay}  countLastDay={countDay} step={step}/> */}
            
        </div>

        
    )
}

export default NewCalendar
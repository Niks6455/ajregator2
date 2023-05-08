//выбор времени

import React, {useState, useEffect}from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import ContainerTitle from "./ContainerTitle";

import { url_SelectTime } from "../../getDataBD";


var id =0

var activeFlag = false
    var activeMass = [] 

function SelectTime(props){


    // Запросим от бэка окупированное время
    const [dataGet, setDataGet] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(url_SelectTime);
        const jsonData = await response.json();
        setDataGet(jsonData);
      }
      fetchData();
    }, []);
  
 
    console.log("data",dataGet)
if(dataGet.length!== 0){ // если данные нашлись 
    var occupiedElement = dataGet[0].occupiedElement;
    
}
else{   // если данные не загрузились
    var occupiedElement = [[8,15] , [9,0], [11,45], [13,0], [14,15] , [22,30]]


}






    // props.setFlagTimeActive(true)

    // var occupiedElement = [{h: 8,m: 15},{h: 9,m: 30} ,{h: 11,m: 0} ,{h: 12,m: 45}]
    // var occupiedElement = [[8,15] , [9,0], [11,45], [13,0], [14,15] , [22,30]]


    var timeStart = [8,15]  // время начала работы автомойки, задает владелец мойки
    var timeEnd = [22,45]   // время конца работы автомойки, задает владелец мойки
    var timeInterval = 15   // интервал, время на обслуживание одного водителя в минутах

    var step = 60/timeInterval

    var hor1 = timeStart[0]

    var hor2 = timeEnd[0]
    var min2 = timeEnd[1]

    var tempHor = timeStart[0] //текущее время в массиве 
    var tempMin = timeStart[1] //текущее время в массиве 

    var massTimer = []

    massTimer.push({hours:tempHor ,minuts: tempMin, id:id})
    id++


    

    //функция клика на ячейку
    const ClicNumber=(el)=>{
        

        // console.log(activeFlag)
        // console.log(el)
        // console.log(el.target.innerHTML)

        if ( el.target.className === "time__block" && activeFlag === false){

            activeMass.push(el.target.innerHTML)
            activeFlag = true
            props.setTimeActiveInTitle(activeMass)
        } 
        else if(  el.target.className === "time__block active"){

            activeFlag = false
            activeMass = [] 
            props.setTimeActiveInTitle(0)

        }
            
        console.log(activeMass)
        
       
        
    }



    // цикл заполнения времени в ячейках
    for(var q = hor1; q < hor2 * step+1; q++){
        if(tempHor < hor2){
            tempMin = tempMin + timeInterval
            if(tempMin >= 60){
                tempMin = Number(tempMin)
                tempMin = tempMin - 60
                tempHor = tempHor + 1

                if(tempMin < 10){
                    tempMin = `0${tempMin}`
                }

                massTimer.push({hours:tempHor ,minuts: tempMin, id:id})
                id++
            } else {
                tempMin = Number(tempMin)
                if(tempMin < 10){
                    tempMin = `0${tempMin}`
                }
                massTimer.push({hours:tempHor ,minuts: tempMin, id:id})
                id++
            }
        } else{
            while(tempMin < min2 - timeInterval){
                tempMin = Number(tempMin)
                tempMin = tempMin + timeInterval
                if(tempMin < 10){
                    tempMin = `0${tempMin}`
                }
                massTimer.push({hours:tempHor ,minuts: tempMin, id:id})
                id++
            }
        }
        
    }
    // console.log(massTimer)



    var flag = false
    var allMassTimer = [];


    for(var i = 0; i <massTimer.length  ; i++  ){
        // console.log("---------- ")
        

        var x = `${massTimer[i].hours}:${massTimer[i].minuts}`
        x = String(x) + " "
        var y =  `${activeMass[0]}`
        y = String(y)

        if(x === y){
            // console.log(" if -------- ",xy)
            allMassTimer.push({value: (<div key={massTimer[i].id} onClick={(key)=>ClicNumber(key)} className="time__block active">{massTimer[i].hours}:{massTimer[i].minuts} </div>) })

        }else{
             for(var f = 0; f < occupiedElement.length; f++ ){
            // console.log("++++++++++++++++")
            // console.log("занятые ",occupiedElement[f][0])
            // console.log("массив ",Number(massTimer[i].hours))

            // console.log("занятые мин ",occupiedElement[f][1])
            // console.log("масс мин ",Number(massTimer[i].minuts))

            if(occupiedElement[f][0] === Number(massTimer[i].hours) && occupiedElement[f][1] === Number(massTimer[i].minuts)){
                allMassTimer.push({value: (<div key={massTimer[i].id} onClick={(key)=>ClicNumber(key)} className="time__block occupied">{massTimer[i].hours}:{massTimer[i].minuts} </div>) })
                flag = false
                
                break  
            } 
            else{
                flag = true
            }   
        }

        if(flag === true){
            allMassTimer.push({value: (<div key={massTimer[i].id} onClick={(key)=>ClicNumber(key)} className="time__block">{massTimer[i].hours}:{massTimer[i].minuts} </div>) })
            flag = false
        }        
        }

    }

    return(
        <main>
             <Header flagTime={true}/>
            <div className="container">
                    <div className="container__inner">
                        <ContainerTitle  dataActiveInTitle={props.dataActiveInTitle} timeActiveInTitle={props.timeActiveInTitle} boxActiveInTitle={props.boxActiveInTitle} flagTimeActive={props.flagTimeActive} />
                        </div>

                            <div className="time__box"> 
                                <div className="time__box__inner"> 
                                    <div className="time__block__box" >
                                            {allMassTimer.map(el=> el.value)}
                                    </div>
                                </div>
                                {
                                activeMass.length !== 0 ?
                                <Link to="./../SelectBox">
                                    <div className="button__send__data__box">
                                        <main className="button__send__data"  type="button">Выбрать время</main>       
                                    </div>
                                </Link>:
                                    <div className="button__send__data__box">
                                        <main className="button__send__data" style={ {background: `rgb(128 128 128)`}} type="button">Выбрать время</main>       
                                    </div>
                                }
                            </div>

                        </div>
        </main>

                

        
    )
}

export default SelectTime
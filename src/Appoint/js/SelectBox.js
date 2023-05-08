//выбор времени

import React,{useState, useEffect} from "react";
import Header from "./Header";
import ContainerTitle from "./ContainerTitle";
import iconBox from "./../img/icon_box.png"

import { url_SelectBox } from "../../getDataBD";

import { Link } from "react-router-dom";

var massActiveBox = 0

function SelectBox(props){

 // Запросим от бэка окупированные даты
 const [dataGet, setDataGet] = useState([]);

 useEffect(() => {
   async function fetchData() {
     const response = await fetch(url_SelectBox);
     const jsonData = await response.json();
     setDataGet(jsonData);
   }
   fetchData();
 }, []);


 console.log("data",dataGet)
if(dataGet.length!== 0){ // если данные нашлись 
 var occupiedElement = dataGet[0].occupiedElementBox;  
 
}
else{   // если данные не загрузились
    var occupiedElement = [1,3,5,12]    //даты которые заняты
}

// ---------------------------------------


    // props.setFlagBoxActive(true)
    // props.setFlagTimeActive(true)

    // var occupiedElement = [1,3,5,12]    //даты которые заняты

    var numberBox = 12  //колличество боксов


    var massBox = []

    

    var flagActive = false



    //функция клика на ячейку
    const ClicNumber=(el)=>{
        

        // console.log(el)
        // console.log(el.target.innerText)
        
        

        if(flagActive === false && el.target.className === "box__block"){
            el.target.className = "box__block active"
            flagActive = true
            massActiveBox = Number(el.target.innerText)
        }else if(el.target.className === "box__block active"){
            el.target.className = "box__block"
            flagActive = false
            massActiveBox = 0
        }
        // console.log( massActiveBox )

        props.setBoxActiveInTitle(massActiveBox)
        
    }







    // цикл заполнения времени в ячейках
    for(var q = 1; q < numberBox+1; q++){
        // console.log(q, " === ", massActiveBox)

        if(occupiedElement.find(el=>{return el === q})){
            massBox.push({value: (<div key={q} className="box__block occupied">
                <b className="box__block__text">{q}</b>
                <img className="box__block__img" src={iconBox}></img>
            
             </div>), id: q})
        }else{
                if(q ===  massActiveBox ){
                    massBox.push({value: (<div key={q} onClick={(key)=>ClicNumber(key)} className="box__block active">
                    <b className="box__block__text">{q}</b>
                    <img className="box__block__img" src={iconBox}></img>
                
                </div>), id: q})
            }else{
                massBox.push({value: (<div key={q} onClick={(key)=>ClicNumber(key)} className="box__block">
                <b className="box__block__text">{q}</b>
                <img className="box__block__img" src={iconBox}></img>
            
                </div>), id: q})
            }
        }
        
        

       
    }



    return(
        <main>
            <Header/>
            <div className="container">
                    <div className="container__inner">
                        <ContainerTitle dataActiveInTitle={props.dataActiveInTitle}  timeActiveInTitle={props.timeActiveInTitle} boxActiveInTitle={props.boxActiveInTitle} flagTimeActive={props.flagTimeActive} flagBoxActive={props.flagBoxActive}/>
                        </div>

                        <div className="box__box">
                            <div className="box__box__inner"> 
                                <div className="box__block__box" >
                                        {massBox.map(el=> el.value)}
                                </div>
                            </div>
                            {
                                massActiveBox !==0?
                                <Link to="./../ConfirmAppointment"> 
                                    <div className="button__send__data__box">
                                        <main className="button__send__data"  type="button">Выбрать бокс</main>
                                    </div>
                                </Link>:
                                <div className="button__send__data__box">
                                    <main className="button__send__data" style={ {background: `rgb(128 128 128)`}} type="button">Выбрать бокс</main>
                                </div>
                            }

                        </div>
            </div>
        </main>


                    

        
    )
}

export default SelectBox
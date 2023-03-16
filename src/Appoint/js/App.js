import React, { useState } from "react"
import ContainerTitle from "./ContainerTitle"
import ButtonSendingData from "./ButtonSendingData"
import Header from "./Header"
import NewCalendar from "./NewCalendar"
import SelectTime from "./SelectTime"
import ButtonSendingTime from "./ButtonSendingTime"
import SelectBox from "./SelectBox"
import ButtonSendingBox from "./ButtonSendingBox"
import ConfirmAppointment from "./ConfirmAppointment"
import MyPage from "./MyPage"

function App() {
    const [flagCalendar, setFlagCalendar] = useState(true)

    const [flagTime, setFlagTime] = useState(false)

    const [dataActiveInTitle, setDataActiveInTitle] = useState(0)

    const [timeActiveInTitle, setTimeActiveInTitle] = useState(0)

    const [flagButton, setFlagButton] = useState(0)

    const [boxActiveInTitle, setBoxActiveInTitle] = useState(0)

    const [flagSelectBoxActive, setFlagSelectBoxActive] = useState(true)

    const [flagConfirm, setFlagConfirm] = useState(false)

    const [flagMyPage, setFlagMyPage] = useState(false)



    const flagCalendarActivate = () =>{
        setFlagCalendar(false)
        setFlagButton(1)
        // setFlagSelectTimeActive(true)
        // alert("Вова где БД")
    }

    const funcSelectTimeActive = () =>{
        setFlagTime(true)
    }


    const funcSelectBox = () =>{
        setFlagSelectBoxActive(false)
    }   

    const funcSetFlagConfirm=()=>{ 
        setFlagConfirm(true)
        setFlagMyPage(false)
    }

    const funcSetFlagMyPage=()=>{
        setFlagMyPage(true)
        setFlagConfirm(true)
    }



    const funcButtonBack=()=>{  //функция кнопки назад (стрелочка в левом углу)
        if(flagButton===1 && flagTime === false){   
            setFlagCalendar(true)
            setFlagTime(false)
        }
        if(flagCalendar===false && flagTime === true){
            setFlagCalendar(false)
            setFlagTime(false)
        }
        if(flagSelectBoxActive === false){
            setFlagSelectBoxActive(true)
            setFlagCalendar(false)
            setFlagTime(true)
            
        }

    }
    var data = {name: 'Artur'}
    var formData = new FormData();
    formData.append('x', 'hello');

    const funcSetFlagConfirmAppointment = async () => {

        // сделаем запрос и получим данне с файла php
        const response = await fetch("http://ajrejator/data.php", { 
            method: 'POST',
            // corslib: "yarn add cors" ,
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // },
            body: formData,
        })
        .then(response => response.text())
        .then(response => {
            console.log(response);
        });
        // if(!response.ok){
        //     throw new Error(`Ошибка по адресу "http://ajrejator/data.php", статус ошибки ${response}`)
        // }
        // console.log(response.text());
        console.log(JSON.stringify(data))
        // return await response.JSON();
    }

    console.log("====================",flagMyPage)







    if(flagConfirm === false){


        return(
            <main>
                {/* false заменить на true */}
            {flagSelectBoxActive === true?
            <main>
                    <Header flagCalendar={flagCalendar} funcSetFlagConfirm={funcSetFlagConfirm} funcSetFlagMyPage={funcSetFlagMyPage} funcButtonBack={funcButtonBack}/>
                <div className="container">
                    <div className="container__inner">
                        <ContainerTitle flagCalendar={flagCalendar} dataActiveInTitle={dataActiveInTitle}  timeActiveInTitle={timeActiveInTitle} flagTime={flagTime} boxActiveInTitle={boxActiveInTitle}/>
                    </div>


                    {/* <div className="calendar__box">  */}

                        {/* false заменить на true */}
                        {flagCalendar === true? 
                            <div>
                                <div className="calendar__box"> 
                                    <div className="calendar__box__inner"> 
                                        <NewCalendar  setDataActiveInTitle={setDataActiveInTitle}/>
                                </div> 
                                    <div>
                                        <ButtonSendingData flagCalendarActivate={flagCalendarActivate} dataActiveInTitle={dataActiveInTitle} />
                                    </div>  
                            </div> 

                                </div> :  <div></div>}
                        

                            {/* true заменить на false */}
                        {flagTime === false && flagCalendar === false?
                            <div>
                                <div className="time__box"> 
                                    <div className="time__box__inner">                  
                                        <SelectTime setTimeActiveInTitle={setTimeActiveInTitle} />
                                    </div>
                                    <div>
                                        {flagButton === 0? 
                                        <ButtonSendingData flagCalendarActivate={flagCalendarActivate} dataActiveInTitle={dataActiveInTitle}/> 
                                        :
                                        <ButtonSendingTime flagButton={flagButton} timeActiveInTitle={timeActiveInTitle} funcSelectTimeActive={funcSelectTimeActive} />
                                        }
                                        
                                    </div>
                                </div>
                                    
                            </div>
                            : 
                        <div></div>
                        }
                            {flagTime === true && flagCalendar === false?
                            <div className="box__box">
                                <div className="box__box__inner"> 
                                        <SelectBox setBoxActiveInTitle={setBoxActiveInTitle}/>
                                </div>
                                <div>
                                    <ButtonSendingBox funcSelectBox={funcSelectBox} boxActiveInTitle={boxActiveInTitle} dataActiveInTitle={dataActiveInTitle}  />
                                </div> 
                            </div> : <div></div>}
                        
                                    
                                
                                
                            
                        
                    {/* </div> */}


                </div>
            </main>
                :

                <main>
                    <ConfirmAppointment dataActiveInTitle={dataActiveInTitle} boxActiveInTitle={boxActiveInTitle} timeActiveInTitle={timeActiveInTitle} funcSetFlagConfirmAppointment={funcSetFlagConfirmAppointment} funcSetFlagMyPage={funcSetFlagMyPage} funcButtonBack={funcButtonBack}/>
                </main>
        }
        </main>
        )
    }




    else if(flagConfirm === true){

        return(
            <main>
                {flagMyPage === false? <div>Главная, там где карта.</div>
                :
                 <MyPage funcSetFlagConfirm={funcSetFlagConfirm}/>
                }
                
            </main>
        )
    }

    // else if(flagMyPage === true) {
    //     return(
    //         <main>
    //             Личная страница
    //         </main>
    //     )
    // }

}
export default App
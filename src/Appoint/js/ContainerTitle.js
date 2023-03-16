import React from "react"
import bg1 from './../img/bg1.png'
import icon1f from './../img/icon1f.png'
import icon2f from './../img/icon2f.png'
import icon3f from './../img/icon3f.png'



import icon1b from './../img/icon1b.png'
import icon2b from './../img/icon2b.png'



function ContainerTitle(props){
    // console.log("title ",props.dataActiveInTitle)

    return(
        <div>


            <div className="container__title">   
                        <img src={bg1} alt=""/>
                        <h2>Мойка юг</h2>
                    </div>


                <div className="box_stove">
                    {
                        props.flagCalendar === true ? 
                        <div  type="button" className="stove">
                            <img src={icon1f} alt=""/>
                            <div className="stove__text__number">{props.dataActiveInTitle}</div>
                            {/* <div className="stove__text active">Дата</div> */}
                            <div className="stove__text">Дата</div>
                        </div>
                        :
                        <div  type="button" className="stove active">
                            <img src={icon1b} alt=""/>
                            <div className="stove__text__number active">{props.dataActiveInTitle}</div>
                            <div className="stove__text active">Дата</div>
                        </div>

                    }
                    {
                        props.flagTime === true?
                            <div  type="button" className="stove active ">
                                <img src={icon2b} alt=""/>
                                <div className="stove__text__number active">{props.timeActiveInTitle}</div>
                                <div className="stove__text active ">время</div>
                            </div>
                            :
                            <div  type="button" className="stove ">
                                <img src={icon2f} alt=""/>
                                <div className="stove__text__number">{props.timeActiveInTitle}</div>
                                <div className="stove__text ">время</div>
                            </div>

                    }

                    

                    <div  type="button" className= "stove ">
                        <img src={icon3f} alt=""/>
                        <div className="stove__text__number">{props.boxActiveInTitle}</div>
                        <div className="stove__text ">бокс</div>
                    </div>
                </div>
        </div>
       
    )
}


export  default ContainerTitle
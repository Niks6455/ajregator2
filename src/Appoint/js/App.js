import React, { useState } from "react"
import ContainerTitle from "./ContainerTitle"
import Header from "./Header"
import NewCalendar from "./NewCalendar"
import SelectTime from "./SelectTime"
import SelectBox from "./SelectBox"
import ConfirmAppointment from "./ConfirmAppointment"
import MyPage from "./MyPage"
import NewMyPage from "./NewMyPage"
import Parameters from "./Parameters"



import {Route, Routes} from "react-router-dom"




function App(props){
        
const [dataActiveInTitle, setDataActiveInTitle] = useState(0)
const [timeActiveInTitle, setTimeActiveInTitle] = useState(0)
const [boxActiveInTitle, setBoxActiveInTitle] = useState(0)
const [flagTimeActive, setFlagTimeActive] = useState(false)
const [flagBoxActive, setFlagBoxActive] = useState(false)


console.log(props.propsData)
// для календаря
var name = "Автомойка"
if(props.propsData !== undefined){
    name = props.propsData.content
}

// ---------




    return(
        <main>
            {/* <Outlet />         */}
            <Routes>
                <Route path="*" element={<NewCalendar name={name} dataActiveInTitle={dataActiveInTitle} setDataActiveInTitle={setDataActiveInTitle}  timeActiveInTitle={timeActiveInTitle} boxActiveInTitle={boxActiveInTitle}/>} /> 
                <Route path="SelectTime"  element={<SelectTime name={name} dataActiveInTitle={dataActiveInTitle} setTimeActiveInTitle={setTimeActiveInTitle} timeActiveInTitle={timeActiveInTitle} boxActiveInTitle={boxActiveInTitle} flagTimeActive={flagTimeActive} setFlagTimeActive={setFlagTimeActive}/>}/>
                <Route path="SelectBox" element={<SelectBox dataActiveInTitle={dataActiveInTitle}  timeActiveInTitle={timeActiveInTitle} boxActiveInTitle={boxActiveInTitle} setBoxActiveInTitle={setBoxActiveInTitle} flagTimeActive={flagTimeActive} flagBoxActive={flagBoxActive} setFlagTimeActive={setFlagTimeActive} setFlagBoxActive={setFlagBoxActive}/>}/>
                <Route path="ConfirmAppointment" element={<ConfirmAppointment dataActiveInTitle={dataActiveInTitle} timeActiveInTitle={timeActiveInTitle} boxActiveInTitle={boxActiveInTitle} />}/>
                <Route path="MyPage" element={<NewMyPage/>}/>
                <Route path="Parameters" element={<Parameters/>}/>
            </Routes>
        </main>
    )
}
export default App
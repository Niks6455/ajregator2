import React, { useState } from "react"
import ContainerTitle from "./ContainerTitle"
import Header from "./Header"
import NewCalendar from "./NewCalendar"
import SelectTime from "./SelectTime"
import SelectBox from "./SelectBox"
import ConfirmAppointment from "./ConfirmAppointment"
import MyPage from "./MyPage"
import NewMyPage from "./NewMyPage"



import {Route, Routes} from "react-router-dom"




function App(){
        
const [dataActiveInTitle, setDataActiveInTitle] = useState(0)
const [timeActiveInTitle, setTimeActiveInTitle] = useState(0)
const [boxActiveInTitle, setBoxActiveInTitle] = useState(0)
const [flagTimeActive, setFlagTimeActive] = useState(false)
const [flagBoxActive, setFlagBoxActive] = useState(false)






    return(
        <main>
            {/* <Outlet />         */}
            <Routes>
                <Route path="*" element={<NewCalendar dataActiveInTitle={dataActiveInTitle} setDataActiveInTitle={setDataActiveInTitle}  timeActiveInTitle={timeActiveInTitle} boxActiveInTitle={boxActiveInTitle}/>} /> 
                <Route path="SelectTime" element={<SelectTime dataActiveInTitle={dataActiveInTitle} setTimeActiveInTitle={setTimeActiveInTitle} timeActiveInTitle={timeActiveInTitle} boxActiveInTitle={boxActiveInTitle} flagTimeActive={flagTimeActive} setFlagTimeActive={setFlagTimeActive}/>}/>
                <Route path="SelectBox" element={<SelectBox dataActiveInTitle={dataActiveInTitle}  timeActiveInTitle={timeActiveInTitle} boxActiveInTitle={boxActiveInTitle} setBoxActiveInTitle={setBoxActiveInTitle} flagTimeActive={flagTimeActive} flagBoxActive={flagBoxActive} setFlagTimeActive={setFlagTimeActive} setFlagBoxActive={setFlagBoxActive}/>}/>
                <Route path="ConfirmAppointment" element={<ConfirmAppointment dataActiveInTitle={dataActiveInTitle} timeActiveInTitle={timeActiveInTitle} boxActiveInTitle={boxActiveInTitle} />}/>
                <Route path="MyPage" element={<NewMyPage/>}/>
            </Routes>
        </main>
    )
}
export default App
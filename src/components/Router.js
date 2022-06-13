import React from "react"
import { Route, Routes } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Upload from "../routes/Upload";


const AppRouter = () => {
    return(
        <>
        
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="/upload" element={<Upload/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
            </Routes>
        
        </>
    )
}

export default AppRouter;
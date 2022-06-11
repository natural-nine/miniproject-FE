import React from "react"
import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";


const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </>
    )
}

export default AppRouter;
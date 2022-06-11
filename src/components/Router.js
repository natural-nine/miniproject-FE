import React from "react"
import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Join from "../routes/Join";
import Login from "../routes/Login";


const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="/join" element={<Join/>}/>
            </Routes>
        </>
    )
}

export default AppRouter;
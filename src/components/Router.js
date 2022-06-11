import React from "react"
import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Signup from "../routes/Signup";


const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="user/login" element={<Login/>}/>
                <Route path="user/signup" element={<Signup/>}/>
            </Routes>
        </>
    )
}

export default AppRouter;
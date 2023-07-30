import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../container/Home"
import LogIn from "../components/login/Login"


const mainRoutes = () =>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="login" element={<LogIn/>} />

                    
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default mainRoutes;
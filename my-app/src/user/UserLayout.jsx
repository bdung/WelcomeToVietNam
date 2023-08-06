import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/NavBar'


export default function UserLayout() {
    return (
        <div>
            <Header/>
            <Outlet/>            
            <Footer/>
        </div>
    )
}

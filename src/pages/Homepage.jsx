import React from 'react'
import '../styles/Homepage.css'
import Login from '../components/Login'

export default function Homepage() {
    return (
        <div className='div-container-home' >
            <div className='div-container-img' >
            </div>


            <div className='div-container-form' >
               <p className='title-form' >Bienvenido a Living Trade Blog-Admin</p>
               <Login/>
            </div>

        </div>
    )
}

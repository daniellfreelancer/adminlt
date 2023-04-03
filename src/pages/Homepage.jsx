import React from 'react'
import '../styles/Homepage.css'
import Login from '../components/Login'
import imgLivingTrade from '../assets/imgLivingTrade.png'

export default function Homepage() {
    return (
        <div className='div-container-home' >

            <div className='div-container-form' >
                <img src={imgLivingTrade} alt='img-living-trade' className='img-livingtrade' />
                <p className='title-form' >Bienvenido a Living Trade Blog-Admin</p>
                <Login />
            </div>

        </div>
    )
}

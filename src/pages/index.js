import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from '../components/AppBar/Bar'
import FooterCustom from '../components/FooterCustom/FooterCustom'

const MainPage = () => {
  return (
    <div className='main-page'>
        <ResponsiveAppBar/>
        <div className='page'>
            <Outlet/>
        </div>
        <FooterCustom/>
    </div>
  )
}

export default MainPage
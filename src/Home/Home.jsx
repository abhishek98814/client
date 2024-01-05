import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import HomeHeader from './HomeHeader'
import LoginPage from '../pages/LoginPage'

const Home = () => {
    return (
        <>
            <HomeHeader />
            <Outlet />
            {/* <LoginPage /> */}
        </>
    )
}

export default Home
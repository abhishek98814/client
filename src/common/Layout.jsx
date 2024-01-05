import React from 'react'
import Headers from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
// import Dashboard from '../dashBoard/Dashboard'

const Layout = () => {
    return (
        <div >

            {/* Headers and Sidebar */}
            <div className='flex flex-col' style={{ width: '100%' }}>
                <Headers />
            </div>
            <div className='flex'>
                <Sidebar />
                <div className='px-16' >
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default Layout
import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../common/Header'

const Account = () => {
    const [redirect, setRedirect] = useState(null)
    const { ready, User, setUser } = useContext(UserContext)
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile'
    }

    async function logout() {
        await axios.post('http://localhost:8080/logout')
        setRedirect('/')
        setUser(null)
    }

    if (!ready) {
        return 'Loading...'
    }

    if (ready && !User && !redirect) {
        return <Navigate to={'/login'} />
    }

    function linkClasses(type = null) {
        let classes = 'py-2 px-6';
        if (type === subpage) {
            classes += ' bg-primary text-white rounded-full';
        }
        return classes
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div>
            <Header />
            <nav className='w-full flex justify-center mt-8 gap-4 mb-8'>
                <Link className={linkClasses('profile')} to={'/account'}>My Profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My booking</Link>
                <Link className={linkClasses('places')} to={'/account/places'}>My accomodation</Link>
            </nav>
            {subpage === 'profile' && (
                <div className='text-center max-w-lg mx-auto'>
                    Logged in as {User.name} ({User.email})
                    <button onClick={logout} className='primary max-w-sm mt-2'>Logout</button>
                </div>
            )}
        </div>
    )
}

export default Account
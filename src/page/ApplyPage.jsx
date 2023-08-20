import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Applyform from '../components/Applyform'
import { useLocation } from 'react-router-dom';

const ApplyPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/apply') {
            window.scrollTo(0, 0)
        }
    }, [location.pathname])
    return (
        <>
            <Banner

                heading="Apply"
                firstName="Home"
                middleName="Pages"
                lastName="Apply"
            />
            <Applyform />
        </>
    )
}

export default ApplyPage
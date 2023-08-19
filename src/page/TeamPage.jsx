import React, { useEffect } from 'react'
import Team from '../components/Team'
import Banner from '../components/Banner'
import { useLocation } from 'react-router-dom';

const TeamPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/team') {
            window.scrollTo(0, 0)
        }
    }, [location.pathname])
    return (
        <>
            <Banner

                heading="Team"
                firstName="Home"
                middleName="Pages"
                lastName="Team"
            />
            <Team />
        </>
    )
}

export default TeamPage
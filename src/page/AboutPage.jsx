import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Feature from '../components/Feature'
import About from '../components/About'
import Reach from '../components/Reach'
import Team from '../components/Team'
import Banner from '../components/Banner'

const AboutPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/about') {
            window.scrollTo(0, 0)
        }
    }, [location.pathname])
    return (
        <>
            <Banner

                heading="About Us"
                firstName="Home"
                middleName="Pages"
                lastName="About"
            />
            <Feature />
            <About />
            <Reach />
            <Team />
        </>
    )
}

export default AboutPage
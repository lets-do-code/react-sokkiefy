import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Career from '../components/Career'
import Feature from '../components/Feature'
import Reach from '../components/Reach'
import Testimonial from '../components/Testimonial'
import { useLocation } from 'react-router-dom'

const CareerPage = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/career') {
            window.scrollTo(0, 0)
        }
    }, [location.pathname])
    return (
        <>
            <Banner

                heading="Careeer"
                firstName="Home"
                middleName="Pages"
                lastName="Career"
            />
            <Feature />
            <Reach />
            <Career />
            <Testimonial />

        </>
    )
}

export default CareerPage
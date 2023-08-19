import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Service from '../components/Service'
import Newsletter from '../components/Newsletter'
import Testimonial from '../components/Testimonial'
import { useLocation } from 'react-router-dom'
const ServicePage = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/service') {
            window.scrollTo(0, 0)
        }
    }, [location.pathname])
    return (
        <>
            <Banner

                heading="Service"
                firstName="Home"
                middleName="Pages"
                lastName="Service"
            />
            <Service />
            <Newsletter />
            <Testimonial />
        </>
    )
}

export default ServicePage
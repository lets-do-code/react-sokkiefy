import React, { useEffect } from 'react'
import Testimonial from '../components/Testimonial'
import Banner from '../components/Banner'
import { useLocation } from 'react-router-dom'
const TestimonialPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/testimonial') {
            window.scrollTo(0, 0)
        }
    }, [location.pathname])
    return (
        <>
            <Banner

                heading="Testimonial"
                firstName="Home"
                middleName="Pages"
                lastName="Testimonial"
            />
            <Testimonial />
        </>
    )
}

export default TestimonialPage
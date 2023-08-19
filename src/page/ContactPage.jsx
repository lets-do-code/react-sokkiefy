import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import ContactForm from '../components/ContactForm'
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/contact') {
            window.scrollTo(0, 0)
        }
    }, [location.pathname])
    return (
        <>
            <Banner

                heading="Contact Us"
                firstName="Home"
                middleName="Pages"
                lastName="Contact"
            />
            <ContactForm />
        </>
    )
}

export default ContactPage
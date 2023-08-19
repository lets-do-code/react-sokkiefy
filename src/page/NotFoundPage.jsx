import React, { useEffect } from 'react'
import NotFound from '../components/NotFound'
import Banner from '../components/Banner'
import { useLocation } from 'react-router-dom';

const NotFoundPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/notfound') {
            window.scrollTo(0, 0)
        }
    }, [location.pathname])
    return (
        <>
            <Banner
                heading="Not Found"
                firstName="Home"
                middleName="Pages"
                lastName="404"
            />
            <NotFound />
        </>
    )
}

export default NotFoundPage
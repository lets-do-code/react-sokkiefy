import React, { useEffect } from 'react'
import Feature from '../components/Feature'
import About from '../components/About'
import Reach from '../components/Reach'
import Service from '../components/Service'
import Newsletter from '../components/Newsletter'
import Project from '../components/Project'
import Testimonial from '../components/Testimonial'
import Team from '../components/Team'
import BannerHome from '../components/BannerHome'
import { useLocation } from 'react-router-dom'


const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            window.scrollTo(0, 0)
        }
    }, [location.pathname])
    return (
        <div>
            <BannerHome />
            <Feature />
            <About />
            <Reach />
            <Service />
            <Newsletter />
            <Project />
            {/* <Testimonial /> */}
            {/* <Team /> */}
        </div>
    )
}

export default Home
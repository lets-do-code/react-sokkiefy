import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Project from '../components/Project'
import { useLocation } from 'react-router-dom';
const ProjectPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/project') {
            window.scrollTo(0, 0)
        }
    }, [location.pathname])
    return (
        <>
            <Banner

                heading="Project"
                firstName="Home"
                middleName="Pages"
                lastName="Project"
            />
            <Project />
        </>
    )
}

export default ProjectPage
import React from 'react'
import EarthImage from "../assets/about.png"

const About = () => {

    return (
        <div className="about container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary">
                            About Us
                            <span />
                        </p>
                        <h1 className="mb-5">#1 Digital solution with 5 years of experience</h1>
                        <p className="mb-4">
                            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                            labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit
                            clita duo justo eirmod magna dolore erat amet
                        </p>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Mobile App Development</p>
                                <p className="mb-2">95%</p>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    aria-valuenow={95}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Web Development</p>
                                <p className="mb-2">90%</p>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-secondary"
                                    role="progressbar"
                                    aria-valuenow={90}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">UI Design &amp; Development</p>
                                <p className="mb-2">85%</p>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-dark"
                                    role="progressbar"
                                    aria-valuenow={85}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                        </div>
                        <a
                            href=""
                            className="read btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3"
                        >
                            Read More
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <img
                            className="img-fluid wow zoomIn"
                            data-wow-delay="0.5s"
                            src={EarthImage}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
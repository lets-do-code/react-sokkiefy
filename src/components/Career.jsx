import React from 'react'
import { Link } from 'react-router-dom'

const Career = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />
                        Internship Offer
                        <span />
                    </p>
                    <h1 className="text-center mb-5">What Internship We Provide</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-search fa-2x" />
                            </div>
                            <h5 className="mb-3">Web Developer</h5>
                            <p className="m-0">
                                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
                                diam stet diam sed stet lorem.
                            </p>
                            <Link className="btn btn-square" to="/apply">
                                <i className="fa fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-laptop-code fa-2x" />
                            </div>
                            <h5 className="mb-3">Html/Css/Js Developer</h5>
                            <p className="m-0">
                                Join our internship to master HTML, CSS, JS for proficient front-end
                                web development Learn modern web in our program.
                            </p>
                            <Link className="btn btn-square" to="/apply">
                                <i className="fa fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fab fa-facebook-f fa-2x" />
                            </div>
                            <h5 className="mb-3">UI Design &amp; Development</h5>
                            <p className="m-0">
                                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
                                diam stet diam sed stet lorem.
                            </p>
                            <Link className="btn btn-square" to="/apply">
                                <i className="fa fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-mail-bulk fa-2x" />
                            </div>
                            <h5 className="mb-3">React Developer</h5>
                            <p className="m-0">
                                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
                                diam stet diam sed stet lorem.
                            </p>
                            <Link className="btn btn-square" to="/apply">
                                <i className="fa fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-thumbs-up fa-2x" />
                            </div>
                            <h5 className="mb-3">Node js Developer</h5>
                            <p className="m-0">
                                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
                                diam stet diam sed stet lorem.
                            </p>
                            <Link className="btn btn-square" to="/apply">
                                <i className="fa fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fab fa-android fa-2x" />
                            </div>
                            <h5 className="mb-3">Django Developer</h5>
                            <p className="m-0">
                                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
                                diam stet diam sed stet lorem.
                            </p>
                            <Link className="btn btn-square" to="/apply">
                                <i className="fa fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Career
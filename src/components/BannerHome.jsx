import React from 'react'
import Hero from "../assets/hero.png"
import { Link } from 'react-router-dom'
const BannerHome = () => {
    return (
        <div className="container-xxl bg-primary hero-header">
            <div className="container px-lg-5">
                <div className="row g-5 align-items-end">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="text-white mb-4 animated slideInDown">
                            Digital Sphere: Expertise in Mobile and Web Solutions.
                        </h1>
                        <p className="text-white pb-3 animated slideInDown">
                            Transforming businesses through cutting-edge mobile applications and
                            dynamic web solutions. Join us to redefine digital experiences and
                            achieve unparalleled success in the virtual realm
                        </p>
                        <Link
                            to="/about"
                            className="read btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
                        >
                            Read More
                        </Link>
                        <Link
                            to="/contact"
                            className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className="col-lg-6 text-center text-lg-start">
                        <img
                            className="img-fluid animated zoomIn"
                            src={Hero}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerHome
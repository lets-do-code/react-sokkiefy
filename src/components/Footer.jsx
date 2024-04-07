import React from 'react'
import Portfolio1 from "../assets/portfolio-1.jpg"
import Portfolio2 from "../assets/portfolio-2.jpg"
import Portfolio3 from "../assets/portfolio-3.jpg"
import Portfolio4 from "../assets/portfolio-4.jpg"
import Portfolio5 from "../assets/portfolio-5.jpg"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div
            className="container-fluid text-light footer wow fadeIn"
            data-wow-delay="0.1s"
        >
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">
                            Address
                            <span />
                        </p>
                        <p>
                            <i className="fa fa-map-marker-alt me-3" />
                            Sultanpur Uttar Pradesh, India
                        </p>
                        {/* <p className='text-white' href='tel:+919528295631'>
                            <i className="fa fa-phone-alt me-3" />
                            +919 5282 95631
                        </p> */}
                        <p className='text-white'>
                            <Link className='text-white' to='mailto:appiq@gmail.com'>
                                <i className="fa fa-envelope me-3" />
                                appiq@gmail.com
                            </Link>
                        </p>
                        <div className="d-flex pt-2">
                            <a
                                className="btn btn-outline-light btn-social"
                                href="https://www.linkedin.com/company/sokkiefy"
                                target="_blank"
                            >
                                <i className="fab fa-twitter" />
                            </a>
                            <a
                                className="btn btn-outline-light btn-social"
                                href="https://www.linkedin.com/company/sokkiefy"
                                target="_blank"
                            >
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a
                                className="btn btn-outline-light btn-social"
                                href="https://www.instagram.com/sokkiefy"
                                target="_blank"
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            <a
                                className="btn btn-outline-light btn-social"
                                href="https://www.linkedin.com/company/sokkiefy"
                                target="_blank"
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="quick section-title text-white h5 mb-4">
                            Quick Link
                            <span />
                        </p>
                        <a className="btn btn-link" href="/about">
                            About Us
                        </a>
                        <a className="btn btn-link" href="/contact">
                            Contact Us
                        </a>
                        <a className="btn btn-link" href="">
                            Privacy Policy
                        </a>
                        <a className="btn btn-link" href="">
                            Terms &amp; Condition
                        </a>
                        <a className="btn btn-link" href="/career">
                            Career
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">
                            Gallery
                            <span />
                        </p>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid" src={Portfolio1} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={Portfolio2} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={Portfolio3} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={Portfolio4} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={Portfolio5} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={Portfolio2} alt="Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">
                            Newsletter
                            <span />
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur
                            facilisis ornare velit non vulpu
                        </p>
                        <div className="position-relative w-100 mt-3">
                            <input
                                className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                                type="text"
                                placeholder="Your Email"
                                style={{ height: 48 }}
                            />
                            <button
                                type="button"
                                className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                            >
                                <i className="fa fa-paper-plane text-primary fs-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            ©{" "}
                            <a className="" href="/">
                                AppIQ
                            </a>
                            , All Right Reserved.
                            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                            Designed By{" "}
                            <a className="" href="/">
                                AppIQ
                            </a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="/">Home</a>
                                <a href="">Cookies</a>
                                <a
                                    href="https://api.whatsapp.com/send?phone=9528295631"
                                    target="_blank"
                                >
                                    Help
                                </a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer

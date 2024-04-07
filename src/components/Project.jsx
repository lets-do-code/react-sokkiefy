import React from 'react'
import Portfolio1 from "../assets/portfolio-1.jpg"
import Portfolio2 from "../assets/portfolio-2.jpg"
import Portfolio3 from "../assets/portfolio-3.jpg"
import Portfolio4 from "../assets/portfolio-4.jpg"
import Portfolio5 from "../assets/portfolio-5.jpg"
const Project = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />
                        Our Projects
                        <span />
                    </p>
                    <h1 className="text-center text-white mb-5">Recently Completed Projects</h1>
                </div>
                <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="col-12 text-center">
                        <ul className="list-inline mb-5 text-white" id="portfolio-flters">
                            <li className="mx-2 active text-white" data-filter="*">
                                All
                            </li>
                            <li className="mx-2 text-white" data-filter=".first">
                                Web Design
                            </li>
                            <li className="mx-2 text-white" data-filter=".second">
                                Graphic Design
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row g-4 portfolio-container">
                    <div
                        className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={Portfolio1} alt="" />
                                <div className="portfolio-overlay">
                                    <a
                                        className="btn btn-square btn-outline-light mx-1"
                                        href="img/portfolio-1.jpg"
                                        data-lightbox="portfolio"
                                    >
                                        <i className="fa fa-eye" />
                                    </a>
                                    <a className="btn btn-square btn-outline-light mx-1" href="">
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-secondary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">
                                    Digital Agency Website Design And Development
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={Portfolio2} alt="" />
                                <div className="portfolio-overlay">
                                    <a
                                        className="btn btn-square btn-outline-light mx-1"
                                        href="img/portfolio-2.jpg"
                                        data-lightbox="portfolio"
                                    >
                                        <i className="fa fa-eye" />
                                    </a>
                                    <a className="btn btn-square btn-outline-light mx-1" href="">
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-secondary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">
                                    Digital Agency Website Design And Development
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={Portfolio3} alt="" />
                                <div className="portfolio-overlay">
                                    <a
                                        className="btn btn-square btn-outline-light mx-1"
                                        href="img/portfolio-3.jpg"
                                        data-lightbox="portfolio"
                                    >
                                        <i className="fa fa-eye" />
                                    </a>
                                    <a className="btn btn-square btn-outline-light mx-1" href="">
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-secondary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">
                                    Digital Agency Website Design And Development
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={Portfolio4} alt="" />
                                <div className="portfolio-overlay">
                                    <a
                                        className="btn btn-square btn-outline-light mx-1"
                                        href="img/portfolio-4.jpg"
                                        data-lightbox="portfolio"
                                    >
                                        <i className="fa fa-eye" />
                                    </a>
                                    <a className="btn btn-square btn-outline-light mx-1" href="">
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-secondary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">
                                    Digital Agency Website Design And Development
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={Portfolio5} alt="" />
                                <div className="portfolio-overlay">
                                    <a
                                        className="btn btn-square btn-outline-light mx-1"
                                        href="img/portfolio-5.jpg"
                                        data-lightbox="portfolio"
                                    >
                                        <i className="fa fa-eye" />
                                    </a>
                                    <a className="btn btn-square btn-outline-light mx-1" href="">
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-secondary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">
                                    Digital Agency Website Design And Development
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={Portfolio3} alt="" />
                                <div className="portfolio-overlay">
                                    <a
                                        className="btn btn-square btn-outline-light mx-1"
                                        href="img/portfolio-6.jpg"
                                        data-lightbox="portfolio"
                                    >
                                        <i className="fa fa-eye" />
                                    </a>
                                    <a className="btn btn-square btn-outline-light mx-1" href="">
                                        <i className="fa fa-link" />
                                    </a>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-secondary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">
                                    Digital Agency Website Design And Development
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Project
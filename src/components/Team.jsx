import React from 'react'
import Founder from "../assets/Founder - Copy.jpg"
import CTO from "../assets/team-1.jpg"
import CFO from "../assets/team-3.jpg"
const Team = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />
                        Our Team
                        <span />
                    </p>
                    <h1 className="text-center text-white mb-5">Our Team Members</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item bg-light rounded">
                            <div className="text-center border-bottom p-4">
                                <img
                                    className="img-fluid rounded-circle mb-4"
                                    src={Founder}
                                    alt="founder"
                                />
                                <h5>Abhijeet Singh</h5>
                                <span>CEO &amp; Founder</span>
                            </div>
                            <div className="d-flex justify-content-center p-4">
                                <a className="btn btn-square mx-1" href="/">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="btn btn-square mx-1" href="/">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="btn btn-square mx-1" href="/">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a
                                    className="btn btn-square mx-1"
                                    href="https://www.linkedin.com/in/abhijeetsde"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item bg-light rounded">
                            <div className="text-center border-bottom p-4">
                                <img
                                    className="img-fluid rounded-circle mb-4"
                                    src={CTO}
                                    alt="cto"
                                />
                                {/* <img class="img-fluid rounded-circle mb-4" src="img/team-3.jpg" alt=""> */}
                                <h5>Divyanshu Sharma</h5>
                                <span>CTO at AppIQ</span>
                            </div>
                            <div className="d-flex justify-content-center p-4">
                                <a className="btn btn-square mx-1" href="/">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="btn btn-square mx-1" href="/">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="btn btn-square mx-1" href="/">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a className="btn btn-square mx-1" href="/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                                {/* https://www.linkedin.com/in/divyanshu-sharma-683856204/ */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item bg-light rounded">
                            <div className="text-center border-bottom p-4">
                                <img
                                    className="img-fluid rounded-circle mb-4"
                                    src={CFO}
                                    alt="cfo"
                                />
                                {/* <img class="img-fluid rounded-circle mb-4" src="img/team-3.jpg" alt=""> */}
                                <h5>Abhay Pratap</h5>
                                <span>CFO at AppIQ</span>
                            </div>
                            <div className="d-flex justify-content-center p-4">
                                <a className="btn btn-square mx-1" href="/">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="btn btn-square mx-1" href="/">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="btn btn-square mx-1" href="/">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a className="btn btn-square mx-1" href="/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                                {/* https://www.linkedin.com/in/saurabh-sharma-335263207/ */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Team
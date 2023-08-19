import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'jquery.counterup'; // Import the jQuery Counter Up plugin

const Feature = () => {
    // useEffect(() => {
    //     // Facts counter logic here
    //     $('.counter').counterUp({
    //         delay: 10,
    //         time: 2000
    //     });
    // }, []);
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fab fa-3x fa-android  text-primary mb-4" />
                            {/* <i class="fa fa-3x fa-mail-bulk text-primary mb-4"></i> */}
                            <h5 className="mb-3">Mobile App Development</h5>
                            <p className="m-0">
                                Innovating user experiences, delivering convenience and value
                                through dynamic mobile app development solutions.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-laptop-code text-primary mb-4" />
                            <h5 className="mb-3">Web Development</h5>
                            <p className="m-0">
                                Revolutionize online presence through tailored designs,
                                functionality, and user-centric web development solutions.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-code text-primary mb-4" />
                            <h5 className="mb-3">UI Design &amp; Development</h5>
                            <p className="m-0">
                                Crafting Intuitive Experiences: Expert UI Design and Development for
                                Seamless User Interaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Feature
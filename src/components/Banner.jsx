import React from 'react'

const Banner = (props) => {
    return (
        <div className="container-xxl py-5 bg-primary hero-header">
            <div className="container my-5 py-5 px-lg-5">
                <div className="row g-5 py-5">
                    <div className="col-12 text-center">
                        <h1 className="text-white animated slideInDown">{props.heading}</h1>
                        <hr className="bg-white mx-auto mt-0" style={{ width: 90 }} />
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item">
                                    <a className="text-white" href="/">
                                        {props.firstName}
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a className="text-white" href="">
                                        {props.middleName}
                                    </a>
                                </li>
                                <li
                                    className="breadcrumb-item text-white active"
                                    aria-current="page"
                                >
                                    {props.lastName}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner
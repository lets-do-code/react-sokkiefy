import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';


const Applyform = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [college, setCollege] = useState("");
    const [branch, setBranch] = useState("");
    const [year, setYear] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    const form = useRef()

    const handleOnSubmit = async (e) => {
        e.preventDefault();


        const data = {
            Firstname: firstname,
            Lastname: lastname,
            Email: email,
            MobileNumber: mobileNumber,
            Linkedin: linkedin,
            Github: github,
            College: college,
            Branch: branch,
            Year: year,

        }
        console.log(data)


        emailjs
            .sendForm(
                'service_6nhuzef',
                'template_lswzl64',
                form.current,
                'fRc5r3wy5YjcLuUQW'
            )
            .then((result) => {
                console.log(result.text)
                toast.success("Applied successfully!");
                setFirstname("")
                setLastname("")
                setMobileNumber("")
                setEmail("")
                setLinkedin("")
                setGithub("")
                setBranch("")
                setCollege("")
                setYear("")

                console.log("message send")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="container-xxl py-5">
            <ToastContainer />
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />
                        Apply
                        <span />
                    </p>
                    <h1 className="text-center mb-5">Apply For Any Domain</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            {/* <p className="text-center mb-4">
                                    The contact form is currently inactive. Get a functional and working
                                    contact form with Ajax &amp; PHP in a few minutes. Just copy and
                                    paste the files, add a little code and you're done.{" "}
                                    <a href="https://htmlcodex.com/contact-form">Download Now</a>.
                                </p> */}
                            <form ref={form} onSubmit={handleOnSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="First Name"
                                                name="firstname"
                                                value={firstname}
                                                onChange={(e) => { setFirstname(e.target.value) }}
                                            />
                                            <label htmlFor="name">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Last Name"
                                                name="lastname"
                                                value={lastname}
                                                onChange={(e) => { setLastname(e.target.value) }}
                                            />
                                            <label htmlFor="name">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Your Email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => { setEmail(e.target.value) }}
                                            />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="mobile number"
                                                placeholder="Mobile Name"
                                                name="mobileNumber"
                                                value={mobileNumber}
                                                onChange={(e) => { setMobileNumber(e.target.value) }}
                                            />
                                            <label htmlFor="mobile name">Mobile Number</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="Linkedin Profile"
                                                name='linkedin'
                                                value={linkedin}
                                                onChange={(e) => { setLinkedin(e.target.value) }}
                                            />
                                            <label htmlFor="linkedin">Linkedin Profile</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="Github Profile"
                                                name="github"
                                                value={github}
                                                onChange={(e) => { setGithub(e.target.value) }}
                                            />
                                            <label htmlFor="github">Github Profile</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="college"
                                                placeholder="College"
                                                name="college"
                                                value={college}
                                                onChange={(e) => { setCollege(e.target.value) }}
                                            />
                                            <label htmlFor="college">College</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="branch"
                                                placeholder="Branch"
                                                name="branch"
                                                value={branch}
                                                onChange={(e) => { setBranch(e.target.value) }}
                                            />
                                            <label htmlFor="branch">Branch</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="year"
                                                placeholder="Year"
                                                name="year"
                                                value={year}
                                                onChange={(e) => { setYear(e.target.value) }}
                                            />
                                            <label htmlFor="year">Year</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="">
                                            <input
                                                type="file"
                                                className="form-control pb-3 pt-3"
                                                id="resume"
                                                onChange={handleFileChange}
                                            />

                                        </div>
                                        {/* {selectedFile && (
                                                <p>Selected file: {selectedFile.name}</p>
                                            )} */}
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit" style={{ background: " #6222CC" }}>
                                            Submit
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Applyform
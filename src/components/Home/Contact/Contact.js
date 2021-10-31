import React from "react";
import "./Contact.css";



// navbar contact section
const Contact = () => {
    return (
        <div>

            {/* contact header text */}
            <div className="pt-4  contact__bg">
                <h2 className="display-4 fw-bold pt-5 ps-5 mt-5">Contact Us</h2>
            </div>

            {/* context part */}
            <div className="container">
                <div className="row">

                    {/* contact first part */}
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="d-flex align-items-center contact__card py-3 shadow-sm m-5">
                            <div className="ps-2 pe-2">
                                <i className="fas fa-phone-volume"></i>
                            </div>
                            <div>
                                <small className="d-block fw-bold fs-5">+00 569 846 358</small>
                                <small className="fw-bold fs-5">+00 896 387 439</small>
                            </div>
                        </div>
                    </div>

                    {/* contact second part */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="d-flex align-items-center contact__card py-3 shadow-sm m-5">
                            <div className="ps-2 pe-2">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <small className="d-block fw-bold fs-5">
                                    +1569 Place
                                </small>
                                <small className="fw-bold fs-5">Filkon, USA</small>
                            </div>
                        </div>
                    </div>

                    {/* contact third part */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="d-flex align-items-center contact__card py-3 shadow-sm m-5">
                            <div className="ps-2 pe-2">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <small className="d-block fw-bold fs-5">
                                    skin@gmail.com
                                </small>
                                <small className="fw-bold fs-5">mcs@gmail.com</small>
                            </div>
                        </div>
                    </div>

                    {/* form part */}
                    <div className="card p-5 mb-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                                <input type="text" className="form-control" id="exampleInputtext2" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="exampleInputtext3" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <label className="form-check-label" htmlFor="exampleCheck1">Message Here</label>
                                <textarea name="textearea" className="form-control" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
};



export default Contact;
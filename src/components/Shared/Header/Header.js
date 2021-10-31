import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';



// navbar section
const Header = () => {
    const { logOut, user } = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar__bg navbar-dark  py-3">
                <div className="container">

                    {/* header logo */}
                    <Link className="navbar-brand text-white" to="/home">
                        <h2><i>Tour</i></h2>
                    </Link>


                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* header link */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            {/* home link */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link fs-5 text-white"
                                    to="/home">
                                    Home
                                </Link>
                            </li>

                            {/* services link */}
                            {/* <li className="nav-item">
                                <Link className="nav-link fs-5" to="/services">
                                    Services
                                </Link>
                            </li> */}

                            {/* gallery part */}
                            <li className="nav-item">
                                <Link className="text-white nav-link fs-5" to="/service/gallery">
                                    Gallery
                                </Link>
                            </li>

                            {/* contact part */}
                            {/* <li className="nav-item">
                                <Link
                                    className="nav-link fs-5"
                                    to="/contact">
                                    Contact
                                </Link>
                            </li> */}

                            {/* doctor part */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white fs-5"
                                    to="/founder">
                                    Founder
                                </Link>
                            </li>


                            {user?.email ?
                                <div className="d-md-flex">



                                    <li className="nav-item">
                                        <Link className="nav-link text-white fs-5" to="/myorders">
                                            My Orders
                                        </Link>
                                    </li>


                                    <li className="nav-item">
                                        <Link className="nav-link text-white fs-5" to="/manageorders">
                                            Manage All Orders
                                        </Link>
                                    </li>


                                    <li className="nav-item">
                                        <Link className="nav-link text-white fs-5" to="/addservices">
                                            Add Services
                                        </Link>
                                    </li>

                                    <div className="flex-column">
                                        {/* log out button */}
                                        <div>
                                            <button className="text-white btn btn-outline-secondary btn-md mt-2" onClick={logOut}>Log Out</button>
                                        </div>
                                    {/*sign in user name */}
                                    <div>
                                    <span className="pt-2 text-white"> Signed: {user?.displayName}</span>
                                    </div>

                                        
                                    </div>
                                    
                                </div>
                                :
                                <div className="d-md-inline-flex">

                                    

                                    {/* registration link */}
                                    <li className="nav-item text-white">
                                        <Link className="nav-link fs-5 text-white" to="/register">
                                            Register
                                        </Link>
                                    </li>

                                    {/* login link */}
                                    <li className="nav-item">
                                        <Link className="nav-link fs-5 text-white" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                </div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};





export default Header;
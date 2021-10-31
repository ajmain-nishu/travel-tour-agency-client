import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




// navbar registration section
const Registration = () => {
    const {handleEmail, handlePassword, handleRegistration, handleName, error, signInUsingGoogle} = useAuth()
    return (
        <div className="login__bg">
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-4 col-12 pt-5 mt-5">
                        <div className="bg-light shadow rounded px-4 py-2 text-center form-color">
                        <form
                            onSubmit={handleRegistration}>
                            <h3 className="pt-3">Please Registration</h3>
                            
                            {/* registration name part */}
                            <div className="my-3">
                                <input 
                                    onBlur={handleName}
                                    className="form-control form-control-lg"
                                    type="text"
                                    name=""
                                    id="registration_name"
                                    placeholder="Username" 
                                    required
                                />
                            </div>

                            {/* registration email part */}
                            <div className="my-3">
                                <input 
                                    onBlur={handleEmail}
                                    className="form-control form-control-lg"
                                    type="email"
                                    name=""
                                    id="registration_email"
                                    placeholder="Email" 
                                    required
                                />
                            </div>

                            {/* registration password part */}
                            <div className="my-3">
                                <input
                                    onBlur={handlePassword}
                                    className="form-control form-control-lg"
                                    type="password"
                                    name=""
                                    id="registration_password"
                                    placeholder="Password" 
                                    required
                                />
                            </div>

                            {/* registration error part */}
                            <div className="text-danger">{error}</div>

                            {/* registration button part */}
                            <div className="my-3">
                                    <input className="btn btn-outline-secondary btn-lg" type="submit" value="Sign Up" />
                            </div>
                        </form>


                        <p className="pb-1"></p>
                        <hr />

                        {/* registration google sign in part */}
                        <div className="mb-3 mt-4">
                        <button className="btn btn-outline-secondary btn-md" onClick={signInUsingGoogle}>Sign Up With Google</button>

                        {/* registration login part */}
                        </div>
                            <Link to="/login"><button className="btn btn-secondary btn-md mb-3 mt-1">Already Registered</button></Link>
                        </div>
                        
                    </div>

                    {/* gap part */}
                    <div className="col-md-8 col-12"></div>
                </div>
            </div>
        </div>
    );
};





export default Registration;
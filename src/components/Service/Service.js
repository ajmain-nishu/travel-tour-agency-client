import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




// navbar services section
const Service = () => {
    const [singleService, setSingleService] = useState([])

    // local data fetch
    useEffect(() => {
        fetch("./homeServicesData.json")
            .then((res) => res.json())
            .then((data) => setSingleService(data));
    }, []);
    return (
        <div className="py-5">
            <h2 className="text-center display-4 fw-bold pb-4 mt-5">Services We Offer</h2>
            <p className="text-center text-muted fs-6 pb-5">This is our services. You can find any service what you want</p>
            <div className="container">
                <div className="col-12">
                    <div className="row pb-3">

                        {/* local data mapping */}
                        {
                            singleService.map(single => (

                                <div className="col-lg-4 col-sm-6 col-12 gy-4 gx-5">
                                    <div className="card h-100 shadow-sm homeservice__border">

                                        {/* image part */}
                                        <div className="text-center my-3">
                                            <img className="homeservice__img" src={single.img} alt="" />
                                        </div>

                                        {/* text part */}
                                        <div className="text-center px-4">
                                            <h2 className="fs-3">{single.name}</h2>
                                            <p className="text-muted">{single.description.slice(0, 70)}....</p>

                                            {/* button part */}
                                            <Link to={`/service/${single.id}`}>
                                                <button className="btn homeservice__btn mb-4">Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};





export default Service;
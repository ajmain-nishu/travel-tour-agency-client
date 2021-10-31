import React from 'react';
import { Link } from 'react-router-dom';
import './HomeService.css';



// home service card section
const HomeService = (props) => {
    //destructuring
    const { _id, name, img, description, price, rating } = props.homeservice;
    return (
        <div className="col-lg-4 col-sm-6 col-12 gy-4 gx-5">
            <div className="card h-100 shadow-sm ">

                {/* image part */}
                <div className="text-center mb-3">
                    <img className="homeservice__img w-100" src={img} alt="" />
                </div>

                {/* text part */}
                <div className="text-center px-4">
                    <h2 className="fs-3">{name}</h2>
                    <h5 className="text-muted">Price: ${price}</h5>
                    <h6>Rating: {rating}</h6>
                    <p className="text-muted">{description.slice(0, 70)}....</p>

                    {/* button */}
                    <Link to={`/orderplace/${_id}`}>
                        <button className="btn homeservice__btn mb-4">Purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};




export default HomeService;
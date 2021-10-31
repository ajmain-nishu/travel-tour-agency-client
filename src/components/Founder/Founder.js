import React from 'react';
import founderOne from '../../Images/founder-1.png';
import founderTwo from '../../Images/founder-2.png';
import founderThree from '../../Images/founder-3.png';



// navbar founder section
const Founder = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">

                        {/* text part */}
                        <h2 className="text-center pt-5">Meet Our Agency Founders</h2>
                        <p className="text-center pb-5 text-muted">This is our Agency Founders. This gentleman are very good with highly Profession</p>
                    </div>

                    <div className="col-md-8 col-12">
                        <div className="row">

                            {/* image one */}
                            <div className="col-md-4 col-12 py-2">
                                <img className="w-100" src={founderOne} alt="" />
                            </div>

                            {/* image two */}
                            <div className="col-md-4 col-12 py-2">
                                <img className="w-100" src={founderTwo} alt="" />
                            </div>

                            {/* image three */}
                            <div className="col-md-4 col-12 py-2">
                                <img className="w-100" src={founderThree} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default Founder;